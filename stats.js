/* ═══════════════════════════════════════════
   DETAILED STATISTICS LOGIC
═══════════════════════════════════════════ */

function refreshStats() {
  const wrap = document.getElementById('stats-wrap');
  if (!wrap) return;

  if (Object.keys(DB).length === 0) {
    wrap.innerHTML = `<div class="empty"><div class="empty-icon">📊</div><p>${t('empty-stats') || 'Henüz istatistik için yeterli veri yok.'}</p></div>`;
    return;
  }

  const s = {};
  DRIVERS.forEach(d => {
    s[d.s] = {
      code: d.s, name: d.name, tk: d.tk, team: d.team,
      pts: 0, races: 0,
      podiums: 0, wins: 0, fls: 0,
      qPosSum: 0, qCount: 0,
      gainSum: 0, gainCount: 0,
      dnfP: 0, dnfNC: 0,
      bestScore: 0,
      top10s: 0
    };
  });

  Object.values(DB).forEach(rd => {
    Object.entries(rd).forEach(([code, v]) => {
      if (code === '_PACE_') return;
      const d = s[code];
      if (!d) return;

      if (!v.dnsNC) {
        d.pts += (v.total || 0);
        d.races++;
        if (v.total > d.bestScore) d.bestScore = v.total;
        if (v.total >= 7) d.top10s++;
        if (v.br?.winner) d.wins++;
        if (v.br?.podium || v.br?.winner) d.podiums++;
        if (v.br?.raceFastestLap) d.fls++;
        if (v.qpos) { d.qPosSum += v.qpos; d.qCount++; }
        if (v.dnfP) d.dnfP++;
        if (v.dnfNC) d.dnfNC++;
        if (v.grid && v.finish && !v.dnfP && !v.dnfNC) {
          d.gainSum += (v.grid - v.finish);
          d.gainCount++;
        }
      }
    });
  });

  const cards = [];

  // 1. Q King
  const qSorted = DRIVERS.map(d => ({ ...s[d.s], avgQ: s[d.s].qCount ? r2(s[d.s].qPosSum / s[d.s].qCount) : 99 }))
    .filter(x => x.qCount > 0)
    .sort((a, b) => a.avgQ - b.avgQ);
  if (qSorted.length) cards.push({ title: (LANG === 'tr' ? '👑 Q Kralı' : '👑 Q King'), val: `P${qSorted[0].avgQ}`, driver: qSorted[0].code, desc: (LANG === 'tr' ? 'En iyi ortalama sıralama pozisyonu' : 'Best average qualifying position') });

  // 2. Podium Master
  const podSorted = DRIVERS.map(d => s[d.s]).sort((a, b) => b.podiums - a.podiums);
  if (podSorted[0].podiums > 0) cards.push({ title: (LANG === 'tr' ? '🏆 Podyum Ustası' : '🏆 Podium Master'), val: `${podSorted[0].podiums} ${LANG === 'tr' ? 'Podyum' : 'Podiums'}`, driver: podSorted[0].code, desc: (LANG === 'tr' ? 'Sezonun en çok podyum göreni' : 'Most podiums this season') });

  // 3. Hard Charger
  const gainSorted = DRIVERS.map(d => ({ ...s[d.s], avgGain: s[d.s].gainCount ? r2(s[d.s].gainSum / s[d.s].gainCount) : -99 }))
    .filter(x => x.gainCount > 0)
    .sort((a, b) => b.avgGain - a.avgGain);
  if (gainSorted.length) cards.push({ title: (LANG === 'tr' ? '🏎️ Atak Canavarı' : '🏎️ Hard Charger'), val: `+${gainSorted[0].avgGain}`, driver: gainSorted[0].code, desc: (LANG === 'tr' ? 'Yarışlarda kazanılan ortalama sıra' : 'Average positions gained per race') });

  // 4. Speed Demon (FLs)
  const flSorted = DRIVERS.map(d => s[d.s]).sort((a, b) => b.fls - a.fls);
  if (flSorted[0].fls > 0) cards.push({ title: (LANG === 'tr' ? '⏱️ Hız İblisi' : '⏱️ Speed Demon'), val: `${flSorted[0].fls} FL`, driver: flSorted[0].code, desc: (LANG === 'tr' ? 'En çok en hızlı tura sahip pilot' : 'Most fastest laps') });

  // 5. One Lap Hero (Best Score)
  const scoreSorted = DRIVERS.map(d => s[d.s]).sort((a, b) => b.bestScore - a.bestScore);
  if (scoreSorted[0].bestScore > 0) cards.push({ title: (LANG === 'tr' ? '🌟 Hafta Sonu Yıldızı' : '🌟 Weekend Star'), val: `${fmtPts(scoreSorted[0].bestScore)} Pts`, driver: scoreSorted[0].code, desc: (LANG === 'tr' ? 'Tek bir yarıştaki en yüksek puan' : 'Highest single race score') });

  // 6. The Unlucky One
  const luckSorted = DRIVERS.map(d => s[d.s]).sort((a, b) => b.dnfNC - a.dnfNC);
  if (luckSorted[0].dnfNC > 0) cards.push({ title: (LANG === 'tr' ? '🛠️ Şanssızlık Abidesi' : '🛠️ The Unlucky One'), val: `${luckSorted[0].dnfNC} DNF·NC`, driver: luckSorted[0].code, desc: (LANG === 'tr' ? 'En çok mekanik arıza yaşayan' : 'Most mechanical retirements') });

  // 7. Consitency king (Top 10s)
  const consSorted = DRIVERS.map(d => s[d.s]).sort((a, b) => b.top10s - a.top10s);
  if (consSorted[0].top10s > 0) cards.push({ title: (LANG === 'tr' ? '💎 İstikrar Abidesi' : '💎 Consistency King'), val: `${consSorted[0].top10s} (7+)`, driver: consSorted[0].code, desc: (LANG === 'tr' ? '7 puan ve üstü alınan yarış sayısı' : 'Races with 7+ points') });

  wrap.innerHTML = `<div class="stats-grid">${cards.map(c => `
    <div class="stats-card">
      <div class="stats-card-top">
        <span class="stats-card-title">${c.title}</span>
        <span class="stats-card-val">${c.val}</span>
      </div>
      <div class="stats-card-driver">
        <img src="${LOGOS[s[c.driver].tk]}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[s[c.driver].tk] || ''}">
        <strong>${c.driver}</strong> — ${s[c.driver].name}
      </div>
      <div class="stats-card-desc">${c.desc}</div>
    </div>
  `).join('')}</div>`;
}

// Update the global 'go' function to call refreshStats
const originalGo = window.go;
window.go = function(id) {
  if (typeof originalGo === 'function') originalGo(id);
  if (id === 'stats') refreshStats();
};
