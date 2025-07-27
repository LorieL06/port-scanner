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
git clone <repository-url>
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