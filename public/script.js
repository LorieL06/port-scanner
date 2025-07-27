// Port service mappings
const PORT_SERVICES = {
    20: 'FTP-DATA',
    21: 'FTP',
    22: 'SSH',
    23: 'TELNET',
    25: 'SMTP',
    53: 'DNS',
    80: 'HTTP',
    110: 'POP3',
    143: 'IMAP',
    443: 'HTTPS',
    993: 'IMAPS',
    995: 'POP3S',
    3306: 'MySQL',
    5432: 'PostgreSQL',
    27017: 'MongoDB',
    6379: 'Redis',
    8080: 'HTTP-Alt',
    8443: 'HTTPS-Alt',
    9000: 'Web Alternative'
};

// Global variables
let scanResults = [];
let isScanning = false;

// DOM elements
const scanForm = document.getElementById('scanForm');
const scanBtn = document.getElementById('scanBtn');
const stopBtn = document.getElementById('stopBtn');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resultsTable = document.getElementById('resultsTable');

// Event listeners
scanForm.addEventListener('submit', handleScan);
stopBtn.addEventListener('click', stopScan);

// Handle scan form submission
async function handleScan(e) {
    e.preventDefault();
    
    if (isScanning) return;
    
    const formData = new FormData(scanForm);
    const scanData = {
        host: formData.get('host'),
        startPort: parseInt(formData.get('startPort')),
        endPort: parseInt(formData.get('endPort')),
        protocol: formData.get('protocol'),
        timeout: parseInt(formData.get('timeout')) || 5000
    };
    
    // Validation
    if (scanData.startPort > scanData.endPort) {
        alert('Başlangıç portu bitiş portundan büyük olamaz!');
        return;
    }
    
    if (scanData.endPort - scanData.startPort > 1000) {
        const confirm = window.confirm(
            `${scanData.endPort - scanData.startPort + 1} port taranacak. Bu işlem uzun sürebilir. Devam etmek istiyor musunuz?`
        );
        if (!confirm) return;
    }
    
    startScan(scanData);
}

// Start port scanning
async function startScan(scanData) {
    isScanning = true;
    scanResults = [];
    
    // Update UI
    scanBtn.style.display = 'none';
    stopBtn.style.display = 'flex';
    loading.style.display = 'flex';
    resultsSection.style.display = 'none';
    
    try {
        const response = await fetch('/api/scan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scanData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.error) {
            throw new Error(result.error);
        }
        
        // Process results
        scanResults = result.results;
        displayResults(result);
        
    } catch (error) {
        console.error('Scan error:', error);
        alert(`Tarama hatası: ${error.message}`);
    } finally {
        stopScan();
    }
}

// Stop scanning
function stopScan() {
    isScanning = false;
    scanBtn.style.display = 'flex';
    stopBtn.style.display = 'none';
    loading.style.display = 'none';
}

// Display scan results
function displayResults(result) {
    // Update statistics
    document.getElementById('totalPorts').textContent = result.totalScanned;
    document.getElementById('openPorts').textContent = result.openPorts;
    document.getElementById('closedPorts').textContent = result.closedPorts;
    document.getElementById('timeoutPorts').textContent = result.timeoutPorts;
    
    // Update progress
    progressFill.style.width = '100%';
    progressText.textContent = '100%';
    
    // Populate results table
    resultsTable.innerHTML = '';
    
    scanResults.forEach(item => {
        const row = document.createElement('tr');
        const service = PORT_SERVICES[item.port] || 'Unknown';
        
        row.innerHTML = `
            <td><strong>${item.port}</strong></td>
            <td class="status-${item.status}">${getStatusText(item.status)}</td>
            <td>${service}</td>
        `;
        
        resultsTable.appendChild(row);
    });
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Get status text in Turkish
function getStatusText(status) {
    switch (status) {
        case 'open':
            return 'Açık';
        case 'closed':
            return 'Kapalı';
        case 'timeout':
            return 'Timeout';
        default:
            return status;
    }
}

// Export results to CSV
function exportResults() {
    if (scanResults.length === 0) {
        alert('İndirilecek sonuç bulunamadı!');
        return;
    }
    
    const csvContent = [
        'Port,Durum,Servis',
        ...scanResults.map(item => {
            const service = PORT_SERVICES[item.port] || 'Unknown';
            return `${item.port},${getStatusText(item.status)},${service}`;
        })
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `port_scan_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Add some helpful presets
function addPresets() {
    const presets = [
        { name: 'Web Servisleri', start: 80, end: 443 },
        { name: 'Mail Servisleri', start: 25, end: 995 },
        { name: 'Veritabanı', start: 3306, end: 5432 },
        { name: 'SSH & FTP', start: 20, end: 23 }
    ];
    
    // You can add preset buttons to the UI if needed
    console.log('Available presets:', presets);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    addPresets();
    
    // Add some helpful tips
    console.log('💡 İpucu: Yerel ağınızda test etmek için 192.168.1.1 gibi IP adresleri kullanın');
    console.log('💡 İpucu: Genel portlar: 80 (HTTP), 443 (HTTPS), 22 (SSH), 21 (FTP)');
}); 