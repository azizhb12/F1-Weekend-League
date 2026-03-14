# Changelog — F1 2026 Hafta Sonu Ligi

Versiyonlama standardı: [SemVer](https://semver.org/) — `MAJOR.MINOR.PATCH`

- **PATCH** `1.0.x` → Küçük hata düzeltmeleri, stil ince ayarları
- **MINOR** `1.x.0` → Yeni özellik / bileşen ekleme (mevcut yapı korunur)
- **MAJOR** `x.0.0` → Büyük yeniden tasarım / mimari değişiklik

---

## [v1.2.1] — 2026-03-14

### ✨ Yeni
- **Sticky Pilot Sütunları**: Veri giriş tablosunda yatay kaydırmada numara, isim ve takım sütunları solda sabit kalıyor; kimin verisini girdiğini kaybetmemek için.
- **Sticky Puan Önizlemesi**: Canlı puan sütunu sağda sabit kalıyor — isim solda, puan sağda her zaman görünür.
- **Sprint Sütunları Dinamik**: Normal yarışlarda sprint sütunları (Sp.G / Sp.F / Sp.Q / Sp.DNF vb.) otomatik gizleniyor; sadece sprint hafta sonlarında görünüyor.
- **Pace Map Hafızası**: Yeni bir yarış seçildiğinde araç potansiyeli sıralaması önceki yarıştan otomatik yükleniyor, sadece değişen takımları güncellemek yeterli.

### ⚖️ Denge Değişikliği
- **racePts**: Maksimum `2.5 → 3.5` pt, decay `−0.15 → −0.175` pozisyon başı. Mutlak yarış pozisyonu daha belirleyici.
- **qualPts**: Maksimum `2.0 → 1.5` pt (Q hata tavanı `1.0 → 0.75`). xP göreceli avantajı azaltıldı.
- **craftPts**: Maksimum `2.0 → 1.5` pt (Q hata tavanı `1.0 → 0.75`). xP göreceli avantajı azaltıldı.
- Gerekçe: Backmarker'ların xP bonusunun frontrunner'ların mutlak pozisyon puanını geçmesini önlemek. Toplam 10 pt değişmedi.

### 🔧 Düzeltme
- Araç potansiyeli tablosunun bozulması düzeltildi: `.dteam` sticky stilleri `#inp-table` kapsamına alındı, diğer tablolar etkilenmiyordu.

---

## [v1.2.0] — 2026-03-14

### ✨ Yeni
- **Modüler Mimari**: `app.js` 5 farklı modüle bölündü (`data.js`, `i18n.js`, `scoring.js`, `ui.js`, `canvas.js`, `stats.js`).
- **Detaylı İstatistikler**: Pilotların sezon genelindeki özel başarılarını (Q King, Podyum Ustası, Hız İblisi vb.) gösteren yeni tab eklendi.
- **Dinamik Puan Renkleri**: Sıralama ve Form tablolarındaki puanlar artık başarı seviyesine göre (Yeşil → Kırmızı) renklendiriliyor.
- **Geliştirilmiş UI**: "Araç Potansiyeli" bölümü artık daha az yer kaplayan açılır-kapanır (accordion) yapıda.
- **Grafik İkonu**: Sürücü grafiği butonu, ilerleme çubuğunun yanına daha şık bir şekilde taşındı.

---

## [v1.0.0] — 2026-03-14

### 🎉 İlk Sürüm
- 10/10 puanlama motoru (xP · Araç Potansiyeli vs Bitiş)
- Pozisyon (5.0), Performans (3.0), Takım Savaşı (2.0) bileşenleri — v1.2.1'de güncellendi
- Qualifying xP sistemi (sıralama performansı artık araç potansiyeline göre ölçülüyor)
- Sprint hafta sonu desteği (SQ hata/arıza, Sprint gain/TM bonusları)
- DNF·P / DNF·NC / DNS·P / DNS·NC ayrımı
- Jolpi F1 API entegrasyonu (API Çek butonu)
- Çift dil desteği (TR / EN)
- Sezonluk sıralama, form listesi, kafa kafaya karşılaştırma
- 𝕏 (Twitter) paylaşım canvas görseli
- JSON Export / Import yedekleme
- Takım sıralaması
- Header altı neon yeşili çizgi sabitlendi (animasyon kaldırıldı)
- Tabs scrollbar gizlendi (gri dikey çizgi düzeltmesi)
- Footer versiyonlama sistemi eklendi

---

<!-- Yeni sürüm eklerken buraya kopyala:

## [vX.X.X] — YYYY-MM-DD

### ✨ Yeni
-

### 🔧 Düzeltme
-

### 🗑️ Kaldırıldı
-

-->
