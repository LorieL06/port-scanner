const express = require('express');
const cors = require('cors');
const net = require('net');
const dgram = require('dgram');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// TCP Port Scanner (Optimized)
async function scanTCPPort(host, port, timeout = 2000) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        let status = 'closed';
        let resolved = false;
        
        const timer = setTimeout(() => {
            if (!resolved) {
                resolved = true;
                status = 'timeout';
                socket.destroy();
            }
        }, timeout);
        
        socket.on('connect', () => {
            if (!resolved) {
                resolved = true;
                clearTimeout(timer);
                status = 'open';
                socket.destroy();
            }
        });
        
        socket.on('error', (err) => {
            if (!resolved) {
                resolved = true;
                clearTimeout(timer);
                status = 'closed';
            }
        });
        
        socket.on('close', () => {
            if (!resolved) {
                resolved = true;
                clearTimeout(timer);
            }
            resolve({ port, status });
        });
        
        socket.connect(port, host);
    });
}

// UDP Port Scanner
async function scanUDPPort(host, port, timeout = 5000) {
    return new Promise((resolve) => {
        const socket = dgram.createSocket('udp4');
        let status = 'closed';
        
        const timer = setTimeout(() => {
            status = 'timeout';
            socket.close();
        }, timeout);
        
        socket.on('error', (err) => {
            status = 'closed';
            clearTimeout(timer);
            socket.close();
        });
        
        socket.on('close', () => {
            clearTimeout(timer);
            resolve({ port, status });
        });
        
        // Send a dummy packet to test if port is open
        const message = Buffer.from('test');
        socket.send(message, 0, message.length, port, host, (err) => {
            if (err) {
                status = 'closed';
                clearTimeout(timer);
                socket.close();
            }
        });
    });
}

// API Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/scan', async (req, res) => {
    try {
        const { host, startPort, endPort, protocol, timeout } = req.body;
        
        if (!host || !startPort || !endPort || !protocol) {
            return res.status(400).json({ 
                error: 'Host, startPort, endPort ve protocol gerekli' 
            });
        }
        
        const ports = [];
        const results = [];
        
        for (let port = parseInt(startPort); port <= parseInt(endPort); port++) {
            ports.push(port);
        }
        
        // Optimized concurrent scanning
        const concurrency = 200; // Increased concurrency
        const chunks = [];
        
        for (let i = 0; i < ports.length; i += concurrency) {
            chunks.push(ports.slice(i, i + concurrency));
        }
        
        console.log(`🔍 Tarama başlatılıyor: ${ports.length} port, ${chunks.length} chunk`);
        
        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            console.log(` İlerleme: ${i + 1}/${chunks.length} chunk (${Math.round(((i + 1) / chunks.length) * 100)}%)`);
            
            const promises = chunk.map(port => {
                if (protocol === 'tcp') {
                    return scanTCPPort(host, port, timeout || 2000); // Reduced timeout
                } else if (protocol === 'udp') {
                    return scanUDPPort(host, port, timeout || 2000); // Reduced timeout
                }
            });
            
            const chunkResults = await Promise.all(promises);
            results.push(...chunkResults);
        }
        
        const openPorts = results.filter(result => result.status === 'open');
        const closedPorts = results.filter(result => result.status === 'closed');
        const timeoutPorts = results.filter(result => result.status === 'timeout');
        
        res.json({
            host,
            protocol,
            totalScanned: results.length,
            openPorts: openPorts.length,
            closedPorts: closedPorts.length,
            timeoutPorts: timeoutPorts.length,
            results: results.sort((a, b) => a.port - b.port),
            scanTime: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('Scan error:', error);
        res.status(500).json({ error: 'Port tarama hatası' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Sunucu hatası' });
});

app.listen(PORT, () => {
    console.log(`🚀 Port Scanner sunucusu http://localhost:${PORT} adresinde çalışıyor`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/scan`);
}); 