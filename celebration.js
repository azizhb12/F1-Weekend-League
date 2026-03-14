/* ═══════════════════════════════════════════
   SEASON FINALE CELEBRATION
═══════════════════════════════════════════ */

function checkChampion() {
  const rounds = Object.keys(DB).map(Number);
  if (!rounds.includes(24)) return; // Only trigger after Abu Dhabi

  const totals = {}, races = {};
  DRIVERS.forEach(d => { totals[d.s] = 0; races[d.s] = 0; });
  Object.values(DB).forEach(rd => {
    Object.entries(rd).forEach(([s, v]) => {
      if (s === '_PACE_' || v.dnsNC) return;
      totals[s] += (v.total || 0);
      races[s]++;
    });
  });

  const sorted = DRIVERS.map(d => ({
    ...d,
    avg: races[d.s] ? r2(totals[d.s] / races[d.s]) : 0
  })).sort((a, b) => b.avg - a.avg);

  if (sorted[0].avg > 0) {
    showChamp(sorted[0], sorted[1], sorted[2]);
  }
}

function showChamp(p1, p2, p3) {
  const wrap = document.getElementById('champ-podium');
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="champ-podium">
      <div class="cpod cp2">
        <div class="cpod-name">${p2.s}</div>
        <div class="cpod-avg">${fmtPts(p2.avg)}</div>
        <div class="cpod-rank">2</div>
      </div>
      <div class="cpod cp1">
        <div class="cpod-name">${p1.s}</div>
        <div class="cpod-avg">${fmtPts(p1.avg)}</div>
        <div class="cpod-rank">1</div>
      </div>
      <div class="cpod cp3">
        <div class="cpod-name">${p3.s}</div>
        <div class="cpod-avg">${fmtPts(p3.avg)}</div>
        <div class="cpod-rank">3</div>
      </div>
    </div>
    <div class="champ-driver-full">${p1.full.toUpperCase()}</div>
    <div class="champ-team-full">${p1.team.toUpperCase()}</div>
  `;

  document.getElementById('champ-overlay').classList.add('show');
  startConfetti();
}

function closeChamp() {
  document.getElementById('champ-overlay').classList.remove('show');
  stopConfetti();
}

let confettiInterval = null;
function startConfetti() {
  const container = document.getElementById('champ-overlay');
  if (!container) return;
  
  if (confettiInterval) clearInterval(confettiInterval);
  
  confettiInterval = setInterval(() => {
    for(let i=0; i<5; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#b8ff00', '#ffffff', '#22d3ee', '#fbbf24', '#f87171'][Math.floor(Math.random() * 5)];
        c.style.width = Math.random() * 10 + 5 + 'px';
        c.style.height = Math.random() * 5 + 5 + 'px';
        c.style.animationDuration = Math.random() * 3 + 2 + 's';
        c.style.opacity = Math.random();
        container.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
  }, 200);
}

function stopConfetti() {
  if (confettiInterval) clearInterval(confettiInterval);
  confettiInterval = null;
  document.querySelectorAll('.confetti').forEach(c => c.remove());
}

// Hook into saveRace and refreshStandings
const originalRefreshStandings = window.refreshStandings;
window.refreshStandings = function(filter) {
  if (typeof originalRefreshStandings === 'function') originalRefreshStandings(filter);
  if (filter === 'all' || !filter) checkChampion();
};
