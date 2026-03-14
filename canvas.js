/* ═══════════════════════════════════════════
   CANVAS SHARE IMAGE
═══════════════════════════════════════════ */
// LOGOS and TC are loaded from logos.js

function renderCanvas() {
  const teams = Object.keys(LOGOS);
  const imgCache = {};
  let loaded = 0;
  const total = teams.length;

  function doRender() {
    const cv = document.getElementById('share-cv');
    if (!cv) return;
    const ctx = cv.getContext('2d');

    // 1. Puanları Hesapla ve Pilotları Sırala
    const totals = {}, races = {};
    DRIVERS.forEach(d => { totals[d.s] = 0; races[d.s] = 0; });
    Object.values(DB).forEach(rd => {
      Object.entries(rd).forEach(([s, v]) => {
        if (s === '_PACE_') return;
        if (v.dnsNC) return;
        totals[s] = (totals[s] || 0) + v.total;
        races[s] = (races[s] || 0) + 1;
      });
    });

    const sorted = DRIVERS.map(d => ({
      ...d,
      avg: races[d.s] ? r2(totals[d.s] / races[d.s]) : 0,
      rc: races[d.s] || 0
    })).sort((a, b) => b.avg - a.avg);

    // 2. ÇÖZÜNÜRLÜK VE YENİ BOŞLUK AYARLARI
    const W = 1920;
    const headerH = 460; 
    const rowH = 100;
    const footerH = 120;

    const H = headerH + (sorted.length * rowH) + footerH;

    cv.width = W;
    cv.height = H;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // 3. Arka Plan ve Grid (Neon Yeşil Tema)
    ctx.fillStyle = '#060810';
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.strokeStyle = 'rgba(184, 255, 0, 0.03)';
    ctx.lineWidth = 2;
    for (let i = 0; i < W; i += 60) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let j = 0; j < H; j += 60) { ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(W, j); ctx.stroke(); }
    ctx.restore();

    // --- ÜST ŞERİT VE KESİN SINIRLI ARKA PLAN FONU ---
    ctx.fillStyle = '#b8ff00';
    ctx.fillRect(0, 0, W, 10);

    ctx.fillStyle = 'rgba(184, 255, 0, 0.05)';
    ctx.fillRect(0, 10, W, 340);

    // Başlıklar
    ctx.fillStyle = '#b8ff00';
    ctx.font = "bold 55px 'Barlow Condensed', sans-serif";
    ctx.fillText(t('canvas-eyebrow') || 'F1 2026', 100, 95);

    ctx.fillStyle = '#ffffff';
    ctx.font = "bold 110px 'Barlow Condensed', sans-serif";
    ctx.fillText(t('canvas-league') || 'HAFTA SONU LİGİ', 100, 205);

    const done = Object.keys(DB).length;
    ctx.fillStyle = '#888888';
    ctx.font = "bold 35px 'JetBrains Mono', monospace";
    ctx.fillText(t('canvas-stat', done), 100, 280);

    // ŞIK AYRAÇ ÇİZGİSİ 
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(100, 350, W - 200, 2);

    const maxAvg = sorted[0]?.avg || 10;

    // 4. Pilotları Çizme
    sorted.forEach((d, i) => {
      const y = headerH + (i * rowH);

      if (i % 2 === 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.fillRect(50, y - 70, W - 100, rowH);
      }

      // Sıra Numarası
      const rc = ['#ffd060', '#9eb8d0', '#c07840'];
      ctx.fillStyle = rc[i] || '#ffffff';
      ctx.font = "bold 50px 'JetBrains Mono', monospace";
      ctx.fillText((i + 1).toString().padStart(2, '0'), 100, y);

      // Takım Logosu
      const logoImg = imgCache[d.tk];
      if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
        ctx.drawImage(logoImg, 220, y - 55, 70, 70);
      } else {
        ctx.fillStyle = '#555';
        ctx.beginPath(); ctx.arc(255, y - 20, 30, 0, Math.PI * 2); ctx.fill();
      }

      // Sürücü İsmi
      ctx.fillStyle = '#ffffff';
      ctx.font = "bold 55px 'JetBrains Mono', monospace";
      ctx.fillText(d.s, 340, y);

      // İlerleme Çubuğu
      const barX = 850;
      const maxBarW = 700;
      const bW = Math.max(5, (d.avg / maxAvg) * maxBarW);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(barX, y - 35, maxBarW, 24);

      ctx.fillStyle = '#b8ff00';
      ctx.fillRect(barX, y - 35, bW, 24);

      // Puan 
      ctx.fillStyle = '#b8ff00';
      ctx.font = "bold 55px 'JetBrains Mono', monospace";
      ctx.fillText(fmtPts(d.avg), barX + maxBarW + 40, y);

      // Yarış Sayısı
      ctx.fillStyle = '#888888';
      ctx.font = "40px 'JetBrains Mono', monospace";
      ctx.fillText(`(${d.rc}R)`, W - 180, y);
    });

    // 5. Alt Bilgi (Footer)
    const footerY = H - footerH;
    ctx.fillStyle = 'rgba(184, 255, 0, 0.05)';
    ctx.fillRect(0, footerY, W, footerH);

    ctx.fillStyle = '#888888';
    ctx.font = "40px 'JetBrains Mono', monospace";
    ctx.fillText('@AzizTheTech', 100, H - 45);

    ctx.fillStyle = '#b8ff00';
    ctx.font = "bold 50px 'Barlow Condensed', sans-serif";
    const footerText = t('canvas-footer-league');
    ctx.fillText(footerText, W - ctx.measureText(footerText).width - 100, H - 45);
  }

  // Logoları Yükle
  teams.forEach(tk => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    imgCache[tk] = img;
    img.onload = () => { loaded++; if (loaded === total) doRender(); };
    img.onerror = () => { loaded++; if (loaded === total) doRender(); };
    img.src = LOGOS[tk];
  });
}

function dlCanvas() {
  renderCanvas();
  const a = document.createElement('a');
  a.download = `f1-${LANG === 'tr' ? 'haftasonu' : 'weekend'}-league-2026.png`;
  a.href = document.getElementById('share-cv').toDataURL('image/png');
  a.click();
}
