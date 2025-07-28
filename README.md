# Port Scanner

> **Modern, fast, and user-friendly TCP/UDP port scanner**

A port scanning tool developed with Node.js and Express, focused on education. Offers a modern web-based interface as an alternative to the complexity of Nmap.

## Key Features

| **Fast Scanning** | Optimized performance with 200 concurrent connections |
|---|---|
| **Web-Based** | Accessible from the browser, no installation required |
| **Responsive** | Modern design compatible with mobile and desktop |
| **Real-Time** | Progress bar and detailed statistics |
| **Download Results** | Automatic result download in CSV format |
| **Education-Focused** | Ideal for learning port scanning concepts |

## Detailed Features

- **TCP and UDP Port Scanning**: Supports both protocols
- **Modern Web Interface**: Gradient background and responsive design
- **Real-Time Results**: Progress display during scanning
- **Port Service Detection**: Service names for common ports (HTTP, SSH, FTP, etc.)
- **Download Results**: Download results in CSV format
- **Concurrent Scanning**: Fast scanning with 200 concurrent connections
- **Timeout Settings**: Customizable timeout values (500ms-10s)
- **English Interface**: Full English user interface
- **Statistics**: Number of open/closed/timeout ports
- **Security Warnings**: Warnings for responsible use

## Installation

### Requirements
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the project:**
```bash
git clone <repository-url>
cd port-scanner
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the application:**
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

4. **Open in browser:**
```
http://localhost:3000
```

## Usage

### Web Interface

1. Enter **Target Host/IP** (e.g., `192.168.1.1` or `google.com`)
2. Set **Port range** (start and end ports)
3. Select **Protocol** (TCP or UDP)
4. Adjust **Timeout** value (optional)
5. Click the **"Start Scan"** button

### API Usage

```bash
curl -X POST http://localhost:3000/api/scan \
  -H "Content-Type: application/json" \
  -d '{
    "host": "192.168.1.1",
    "startPort": 1,
    "endPort": 100,
    "protocol": "tcp",
    "timeout": 5000
  }'
```

### API Response Format

```json
{
  "host": "192.168.1.1",
  "protocol": "tcp",
  "totalScanned": 100,
  "openPorts": 5,
  "closedPorts": 90,
  "timeoutPorts": 5,
  "results": [
    {
      "port": 22,
      "status": "open"
    },
    {
      "port": 80,
      "status": "closed"
    }
  ],
  "scanTime": "2024-01-01T12:00:00.000Z"
}
```

## Technical Details

### Backend (Node.js + Express)

- **Port Scanning**: Native Node.js `net` and `dgram` modules
- **Concurrent Operations**: Optimized scanning with 200 concurrent connections
- **Error Handling**: Comprehensive error management and timeout control
- **CORS**: Support for cross-origin requests
- **Real-time Logging**: Real-time progress display in the console

### Frontend (Vanilla JavaScript)

- **Modern UI**: Responsive design with CSS Grid and Flexbox
- **Real-time Updates**: Real-time updates with AJAX
- **Export Functionality**: Download results in CSV format
- **Service Detection**: Service detection for common ports
- **User-friendly**: English interface and user-friendly design

## Nmap vs Port Scanner Comparison

| Feature | Nmap | Port Scanner (This Project) |
|---------|------|------------------------------|
| **Speed** | Very fast (C/C++) | Fast (Node.js + Optimization) |
| **Installation** | System-level installation | Easy installation with `npm install` |
| **Platform** | Cross-platform | All platforms supported by Node.js |
| **Web Interface** | None (CLI) | Modern and responsive web UI |
| **Real-Time** | None | Progress bar and statistics |
| **Download Results** | Manual | Automatic download in CSV format |
| **Port Service Detection** | Advanced | Basic service detection |
| **Educational Value** | Complex | Understandable and instructive |
| **Customization** | Advanced | Easy customization |
| **License** | GPL | MIT (Open source) |

## Why This Project?

### Advantages

1. **Education-Focused**: Ideal for learning port scanning concepts
2. **Web-Based**: Accessible from the browser, no installation required
3. **Responsive**: Compatible with mobile and desktop
4. **Rapid Development**: Fast development with the Node.js ecosystem
5. **Easy Customization**: Easy modification with JavaScript
6. **Visual Results**: Understandable results with tables and charts
7. **English Support**: Full English interface and documentation
8. **Result Storage**: Download results in CSV format

### Target Audience

- **Students**: Those who want to learn network security
- **Developers**: Those looking for a port scanning API
- **System Administrators**: Those who want to quickly check ports
- **Instructors**: Those who want to use it in network security courses

### Project Features

- **Performance**: Optimized with 200 concurrent connections
- **Modern UI**: Gradient background and modern design
- **Statistics**: Number of open/closed/timeout ports
- **Smart Scanning**: Port range validation and warnings
- **User-Friendly**: Tips and help texts
- **Security**: Warnings for responsible use

## Project Structure

```
port-scanner/
├── server.js          # Express server and API
├── package.json       # Project dependencies
├── README.md         # This file
└── public/           # Frontend files
    ├── index.html    # Main HTML page
    ├── style.css     # CSS styles
    └── script.js     # Frontend JavaScript
```

## Configuration

### Environment Variables

```bash
PORT=3000              # Server port (default: 3000)
```

### Timeout Settings

- **Default**: 5000ms (5 seconds)
- **Minimum**: 1000ms (1 second)
- **Maximum**: 30000ms (30 seconds)

## Security Notes

**Important**: This tool should only be used on your own network or systems you have permission to scan.

- Only scan your own systems
- Do not use on third-party systems without permission
- Be aware of legal responsibilities

## Test Examples

### Local Test
```bash
# Scan your own computer
host: localhost
ports: 1-100
protocol: tcp
```

### Router Test
```bash
# Scan your local network router
host: 192.168.1.1
ports: 80-443
protocol: tcp
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT license.

## Troubleshooting

### Common Issues

1. **Port 3000 in use**
   ```bash
   # Use a different port
   PORT=3001 npm start
   ```

2. **Permission denied**
   ```bash
   # Windows: Run as administrator
   # Linux/Mac: Use sudo
   ```

3. **Slow scanning**
   - Lower the timeout value
   - Reduce the port range
   - Check your network connection

## Contact

You can open an issue or contact for questions.

## Success Story

This project was developed to **learn port scanning concepts** and **apply modern web technologies**.

### Development Process

1. **Start**: Port scanning with basic socket programming
2. **Optimization**: Speed increase with 200 concurrent connections
3. **UI/UX**: Modern and responsive web interface
4. **Statistics**: Real-time progress and result analysis
5. **Localization**: Full English support

### Project Goals

- **Education**: Teach port scanning concepts
- **Performance**: Fast and efficient scanning
- **Usability**: Easy to use and understandable interface
- **Modernity**: Up-to-date web technologies
- **Open Source**: Open to community contributions

### Contributors

This project is designed for anyone who wants to learn about network security and web development. Contributions are welcome!

---

**Important Note**: This tool is developed **for educational purposes**. Make sure you have the necessary permissions for responsible use. Only use it on your own systems or systems you are authorized to scan.

**Don't forget to star the project!**

--------------------------------------------------

# Port Tarayıcı (Port Scanner)

> **Modern, hızlı ve kullanıcı dostu TCP/UDP port tarayıcısı**

Node.js ve Express kullanılarak geliştirilmiş, eğitim odaklı port tarama aracı. Nmap'in karmaşıklığına alternatif olarak, web tabanlı modern bir arayüz sunar.

## Öne Çıkan Özellikler

| **Hızlı Tarama** | 200 concurrent bağlantı ile optimize edilmiş performans |
|---|---|
| **Web Tabanlı** | Tarayıcıdan erişilebilir, kurulum gerektirmez |
| **Responsive** | Mobil ve masaüstü uyumlu modern tasarım |
| **Gerçek Zamanlı** | İlerleme çubuğu ve detaylı istatistikler |
| **Sonuç İndirme** | CSV formatında otomatik sonuç indirme |
| **Eğitim Odaklı** | Port tarama kavramlarını öğrenmek için ideal |

## Detaylı Özellikler

- **TCP ve UDP Port Tarama**: Her iki protokolü de destekler
- **Modern Web Arayüzü**: Gradient arka plan ve responsive tasarım
- **Gerçek Zamanlı Sonuçlar**: Tarama sırasında ilerleme gösterimi
- **Port Servis Tanıma**: Yaygın portlar için servis isimleri (HTTP, SSH, FTP vb.)
- **Sonuç İndirme**: CSV formatında sonuçları indirme
- **Concurrent Tarama**: 200 eşzamanlı bağlantı ile hızlı tarama
- **Timeout Ayarları**: Özelleştirilebilir timeout değerleri (500ms-10s)
- **Türkçe Arayüz**: Tam Türkçe kullanıcı arayüzü
- **İstatistikler**: Açık/kapalı/timeout port sayıları
- **Güvenlik Uyarıları**: Sorumlu kullanım için uyarılar

## Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/LorieL06/port-scanner 
cd port-scanner
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Uygulamayı başlatın:**
```bash
# Geliştirme modu (nodemon ile)
npm run dev

# Üretim modu
npm start
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## Kullanım

### Web Arayüzü

1. **Hedef Host/IP** girin (örn: `192.168.1.1` veya `google.com`)
2. **Port aralığı** belirleyin (başlangıç ve bitiş portları)
3. **Protokol** seçin (TCP veya UDP)
4. **Timeout** değerini ayarlayın (isteğe bağlı)
5. **"Taramayı Başlat"** butonuna tıklayın

### API Kullanımı

```bash
curl -X POST http://localhost:3000/api/scan \
  -H "Content-Type: application/json" \
  -d '{
    "host": "192.168.1.1",
    "startPort": 1,
    "endPort": 100,
    "protocol": "tcp",
    "timeout": 5000
  }'
```

### API Yanıt Formatı

```json
{
  "host": "192.168.1.1",
  "protocol": "tcp",
  "totalScanned": 100,
  "openPorts": 5,
  "closedPorts": 90,
  "timeoutPorts": 5,
  "results": [
    {
      "port": 22,
      "status": "open"
    },
    {
      "port": 80,
      "status": "closed"
    }
  ],
  "scanTime": "2024-01-01T12:00:00.000Z"
}
```

## Teknik Detaylar

### Backend (Node.js + Express)

- **Port Tarama**: Native Node.js `net` ve `dgram` modülleri
- **Concurrent İşlemler**: 200 eşzamanlı bağlantı ile optimize edilmiş tarama
- **Error Handling**: Kapsamlı hata yönetimi ve timeout kontrolü
- **CORS**: Cross-origin istekleri için destek
- **Real-time Logging**: Console'da gerçek zamanlı ilerleme gösterimi

### Frontend (Vanilla JavaScript)

- **Modern UI**: CSS Grid ve Flexbox ile responsive tasarım
- **Real-time Updates**: AJAX ile gerçek zamanlı güncellemeler
- **Export Functionality**: CSV formatında sonuç indirme
- **Service Detection**: Yaygın portlar için servis tanıma
- **User-friendly**: Türkçe arayüz ve kullanıcı dostu tasarım

## Nmap vs Port Tarayıcı Karşılaştırması

| Özellik | Nmap | Port Tarayıcı (Bu Proje) |
|---------|------|------------------------------|
| **Hız** | Çok hızlı (C/C++) | Hızlı (Node.js + Optimizasyon) |
| **Kurulum** | Sistem seviyesi kurulum | `npm install` ile kolay kurulum |
| **Platform** | Cross-platform | Node.js destekli tüm platformlar |
| **Web Arayüzü** | Yok (Komut satırı) | Modern ve responsive web UI |
| **Gerçek Zamanlı** | Yok | İlerleme çubuğu ve istatistikler |
| **Sonuç İndirme** | Manuel | CSV formatında otomatik indirme |
| **Port Servis Tanıma** | Gelişmiş | Temel servis tanıma |
| **Eğitim Değeri** | Karmaşık | Anlaşılır ve öğretici |
| **Özelleştirme** | İleri seviye | Kolay özelleştirme |
| **Lisans** | GPL | MIT (Açık kaynak) |

## Neden Bu Proje?

### Avantajları

1. **Eğitim Odaklı**: Port tarama kavramlarını öğrenmek için ideal
2. **Web Tabanlı**: Tarayıcıdan erişilebilir, kurulum gerektirmez
3. **Responsive**: Mobil ve masaüstü uyumlu
4. **Hızlı Geliştirme**: Node.js ekosistemi ile hızlı geliştirme
5. **Kolay Özelleştirme**: JavaScript ile kolay modifikasyon
6. **Görsel Sonuçlar**: Tablo ve grafiklerle anlaşılır sonuçlar
7. **Türkçe Destek**: Tam Türkçe arayüz ve dokümantasyon
8. **Sonuç Saklama**: CSV formatında sonuçları indirme

### Hedef Kitle

- **Öğrenciler**: Ağ güvenliği öğrenmek isteyenler
- **Geliştiriciler**: Port tarama API'si arayanlar
- **Sistem Yöneticileri**: Hızlı port kontrolü yapmak isteyenler
- **Eğitmenler**: Ağ güvenliği derslerinde kullanmak isteyenler

### Proje Özellikleri

- **Performans**: 200 concurrent bağlantı ile optimize edilmiş
- **Modern UI**: Gradient arka plan ve modern tasarım
- **İstatistikler**: Açık/kapalı/timeout port sayıları
- **Akıllı Tarama**: Port aralığı validasyonu ve uyarılar
- **Kullanıcı Dostu**: İpuçları ve yardım metinleri
- **Güvenlik**: Sorumlu kullanım için uyarılar

## Proje Yapısı

```
port-scanner/
├── server.js          # Express sunucusu ve API
├── package.json       # Proje bağımlılıkları
├── README.md         # Bu dosya
└── public/           # Frontend dosyaları
    ├── index.html    # Ana HTML sayfası
    ├── style.css     # CSS stilleri
    └── script.js     # Frontend JavaScript
```

## Konfigürasyon

### Environment Variables

```bash
PORT=3000              # Sunucu portu (varsayılan: 3000)
```

### Timeout Ayarları

- **Varsayılan**: 5000ms (5 saniye)
- **Minimum**: 1000ms (1 saniye)
- **Maksimum**: 30000ms (30 saniye)

## Güvenlik Notları

**Önemli**: Bu araç sadece kendi ağınızda veya izin verilen sistemlerde kullanılmalıdır.

- Yalnızca kendi sistemlerinizi tarayın
- Üçüncü taraf sistemlerde izinsiz kullanmayın
- Yasal sorumlulukları göz önünde bulundurun

## Test Örnekleri

### Yerel Test
```bash
# Kendi bilgisayarınızı tarayın
host: localhost
ports: 1-100
protocol: tcp
```

### Router Test
```bash
# Yerel ağ router'ınızı tarayın
host: 192.168.1.1
ports: 80-443
protocol: tcp
```

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Sorun Giderme

### Yaygın Sorunlar

1. **Port 3000 kullanımda**
   ```bash
   # Farklı port kullanın
   PORT=3001 npm start
   ```

2. **Permission denied**
   ```bash
   # Windows: Yönetici olarak çalıştırın
   # Linux/Mac: sudo kullanın
   ```

3. **Slow scanning**
   - Timeout değerini düşürün
   - Port aralığını küçültün
   - Ağ bağlantınızı kontrol edin

## İletişim

Sorularınız için issue açabilir veya iletişime geçebilirsiniz.

## Başarı Hikayesi

Bu proje, **port tarama kavramlarını öğrenmek** ve **modern web teknolojilerini uygulamak** amacıyla geliştirilmiştir. 

### Gelişim Süreci

1. **Başlangıç**: Basit socket programlama ile port tarama
2. **Optimizasyon**: 200 concurrent bağlantı ile hız artışı
3. **UI/UX**: Modern ve responsive web arayüzü
4. **İstatistikler**: Gerçek zamanlı ilerleme ve sonuç analizi
5. **Lokalizasyon**: Tam Türkçe destek

### Proje Hedefleri

- **Eğitim**: Port tarama kavramlarını öğretmek
- **Performans**: Hızlı ve verimli tarama
- **Kullanılabilirlik**: Kolay kullanım ve anlaşılır arayüz
- **Modernlik**: Güncel web teknolojileri
- **Açık Kaynak**: Topluluk katkısına açık

### Katkıda Bulunanlar

Bu proje, ağ güvenliği ve web geliştirme alanlarında öğrenmek isteyen herkes için tasarlanmıştır. Katkılarınızı bekliyoruz!

---

**Önemli Not**: Bu araç **eğitim amaçlı** geliştirilmiştir. Sorumlu kullanım için gerekli izinleri aldığınızdan emin olun. Yalnızca kendi sistemlerinizde veya izin verilen sistemlerde kullanın.

**Star vermeyi unutmayın!** 
