/* ═══════════════════════════════════════════
   UI REFRESH & HELPERS
═══════════════════════════════════════════ */

function refreshStandings(filter = 'all') {
  const totals = {}, races = {}, bests = {}, dnfs = {}, dnsncs = {}, tens = {};
  DRIVERS.forEach(d => { totals[d.s] = 0; races[d.s] = 0; bests[d.s] = 0; dnfs[d.s] = 0; dnsncs[d.s] = 0; tens[d.s] = 0; });

  let doneCount = 0;
  Object.entries(DB).forEach(([roundKey, rd]) => {
    const round = Number(roundKey);
    const raceInfo = RACES.find(r => r.r === round);
    if (filter !== 'all' && raceInfo?.type !== filter) return;
    doneCount++;
    Object.entries(rd).forEach(([s, v]) => {
      if (s === '_PACE_') return; 
      if (v.dnsNC) { dnsncs[s] = (dnsncs[s] || 0) + 1; return; } 
      totals[s] = (totals[s] || 0) + (v.total || 0);
      races[s] = (races[s] || 0) + 1;
      if ((v.total || 0) > (bests[s] || 0)) bests[s] = v.total || 0;
      if ((v.total || 0) >= 10) tens[s] = (tens[s] || 0) + 1;
      if (v.dnfP) dnfs[s] = (dnfs[s] || 0) + 1;
    });
  });

  const sorted = DRIVERS.map(d => ({
    ...d, total: totals[d.s] || 0,
    avg: races[d.s] ? r2(totals[d.s] / races[d.s]) : 0,
    rc: races[d.s] || 0, best: bests[d.s] || 0, dnf: dnfs[d.s] || 0, dnsnc: dnsncs[d.s] || 0, tens: tens[d.s] || 0
  })).sort((a, b) => {
    if (b.avg !== a.avg) return b.avg - a.avg;       
    if (b.tens !== a.tens) return b.tens - a.tens;    
    if (b.best !== a.best) return b.best - a.best;    
    return a.dnf - b.dnf;                           
  });

  const maxAvg = sorted[0]?.avg || 1;
  const doneLbl = document.getElementById('done-lbl');
  if (doneLbl) doneLbl.textContent = `${doneCount} / 24`;

  // Podium
  const pw = document.getElementById('podium-wrap');
  if (pw) {
    if (sorted.slice(0, 3).some(x => x.rc > 0)) {
      const [p1, p2, p3] = sorted;
      pw.innerHTML = `<div class="podium">
        <div class="pod p2"><div class="pod-rank">2</div><div class="pod-name">${p2.s}</div><div class="pod-pts">${fmtPts(p2.avg)} ${t('pod-avg')}</div></div>
        <div class="pod p1"><div class="pod-rank">1</div><div class="pod-name">${p1.s}</div><div class="pod-pts">${fmtPts(p1.avg)} ${t('pod-avg')}</div></div>
        <div class="pod p3"><div class="pod-rank">3</div><div class="pod-name">${p3.s}</div><div class="pod-pts">${fmtPts(p3.avg)} ${t('pod-avg')}</div></div>
      </div>`;
    } else pw.innerHTML = '';
  }

  const tb = document.getElementById('stand-tbody');
  if (tb) {
    tb.innerHTML = '';
    sorted.forEach((d, i) => {
      const rCls = i === 0 ? 'g' : i === 1 ? 's' : i === 2 ? 'b' : '';
      const pct = maxAvg > 0 ? (d.avg / maxAvg * 100) : 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="rank-n ${rCls}">${i + 1}</span></td>
        <td class="dname">${d.name}</td>
        <td class="dteam"><img src="${LOGOS[d.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">${d.team}</td>
        <td class="tot-pts" style="color:${scoreColor(d.avg)};text-shadow:none">${fmtPts(d.avg)}</td>
        <td class="stat-cell">${fmtPts(d.total)}</td>
        <td class="stat-cell">${d.rc}</td>
        <td class="best-cell">${fmtPts(d.best)}</td>
        <td class="stat-cell" style="color:${d.dnf ? 'var(--red)' : 'var(--muted)'}">${d.dnf || '—'}</td>
        <td class="stat-cell" style="color:${d.dnsnc ? 'var(--amber)' : 'var(--muted)'}" title="${LANG === 'tr' ? 'Ortalamaya dahil edilmedi' : 'Excluded from average'}">${d.dnsnc || '—'}</td>
        <td><div style="display:flex;align-items:center;gap:6px"><div class="bar-bg"><div class="bar-fg" style="width:${pct}%"></div></div> ${sparklineSVG(d.s)} <button class="chart-btn" onclick="showChart('${d.s}')" title="${LANG === 'tr' ? 'Sezonu Görüntüle' : 'View Season'}"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><polyline points="1,11 4,6 7,8 10,3 12,5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" fill="none"/></svg></button></div></td>
      `;
      tb.appendChild(tr);
    });
  }
  refreshTeamStandings();
  populateH2H();
  refreshForm();
}

function refreshLog() {
  const wrap = document.getElementById('log-wrap');
  if (!wrap) return;
  const rounds = Object.keys(DB).map(Number).sort((a, b) => b - a);
  if (!rounds.length) {
    wrap.innerHTML = `<div class="empty"><div class="empty-icon">📋</div><p>${t('empty-log')}</p></div>`;
    return;
  }
  wrap.innerHTML = '';
  rounds.forEach(round => {
    const race = RACES.find(x => x.r === round);
    const rd = DB[round];
    const sorted = Object.entries(rd).filter(([s]) => s !== '_PACE_').sort((a, b) => (b[1].total ?? -Infinity) - (a[1].total ?? -Infinity));
    const chips = sorted.map(([s, v]) => {
      const d = DRIVERS.find(x => x.s === s);
      if (v.dnsNC) {
        return `<div class="chip" style="border-color:var(--amber);opacity:.7">
          <img src="${LOGOS[d?.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">
          <strong>${s}</strong>
          <span style="color:var(--amber);font-size:9px;font-weight:700">DNS·NC</span>
          <span class="chip-pts" style="color:var(--amber);font-size:10px">${LANG === 'tr' ? 'hariç' : 'excl.'}</span>
        </div>`;
      }
      if (v.dnsP) {
        return `<div class="chip" style="border-color:var(--red);opacity:.8">
          <img src="${LOGOS[d?.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">
          <strong>${s}</strong>
          <span style="color:var(--red);font-size:9px;font-weight:700">DNS·P</span>
          <span class="chip-pts bad">0.00</span>
        </div>`;
      }
      const flags = [
        v.br?.winner ? '🥇' : '', v.br?.podium ? '🥈' : '',
        v.br?.raceFastestLap ? '⏱️' : '',
        v.dnfP ? '🚫' : '', v.dnfNC ? '🚧' : '', v.qhata || v.crash ? '💥' : '', v.qmech ? '⚙️' : '', v.penaltyFlag ? '⚠️' : '',
        v.br?.tmQ && v.br?.tmR ? '👊' : '',
        v.br?.sprintGain ? '🏎️' : '', v.br?.qmechBonus ? '🚀' : '',
        v.br?.hasSpQHata ? '💥Sp' : '', v.br?.hasSpDnfP ? '🚫Sp' : '', v.br?.spDnfNC ? '🚧Sp' : '', v.br?.hasSpPenalty ? '⚠️Sp' : '', v.br?.spQMechBonus ? '⚙️Sp' : '',
        v.br?.dotd ? '🌟 DOTD' : ''
      ].filter(Boolean).join('');
      const cls = v.total >= 7 ? 'hi' : v.total < 2 ? 'lo' : '';
      const qb = v.qpos ? qBadgeHTML(v.qpos) : '';
      const pd = (v.grid && v.finish && !v.dnfNC && !v.dnfP) ? posDeltaHTML(v.grid, v.finish) : '';
      return `<div class="chip">
        <img src="${LOGOS[d?.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">
        <strong>${s}</strong>
        ${v.qpos ? `<span style="color:var(--lime);font-size:9px">Q${v.qpos}</span>${qb}` : ''}
        ${v.grid && v.finish ? `<span style="color:var(--blue);font-size:9px">P${v.grid}→P${v.finish}</span>${pd}` : ''}
        ${flags ? `<span style="font-size:9px">${flags}</span>` : ''}
        <span class="chip-pts ${cls} clickable" onclick="showBD(${round},'${s}')">${fmtPts(v.total)}</span>
      </div>`;
    }).join('');
    const div = document.createElement('div');
    div.className = 'rlog';
    div.innerHTML = `
      <div class="rlog-hd">
        <div>
          <div class="rlog-name">${race.f} ${raceName(race)} Grand Prix${race.sp ? '<span class="sprint-badge">⚡ SPRINT</span>' : ''}</div>
          <div class="rlog-sub">Round ${round} · ${race.d} 2026</div>
        </div>
        <button class="btn red" style="font-size:9px;padding:7px 12px" onclick="delRace(${round})">${LANG === 'tr' ? 'Sil' : 'Delete'}</button>
      </div>
      <div class="chips">${chips}</div>
    `;
    wrap.appendChild(div);
  });
}

function refreshForm() {
  const rounds = Object.keys(DB).map(Number).sort((a, b) => b - a);
  const formTbody = document.getElementById('form-tbody');
  if (!formTbody) return;
  if (rounds.length === 0) {
    formTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted)">${LANG === 'tr' ? 'Yeterli veri yok.' : 'Not enough data.'}</td></tr>`;
    return;
  }

  const weights = [0.5, 0.3, 0.2]; 
  const last3 = rounds.slice(0, 3);
  const prev3 = rounds.slice(1, 4); 

  const calcForm = (raceList) => {
    const scores = {};
    DRIVERS.forEach(d => scores[d.s] = { total: 0, weight: 0 });
    raceList.forEach((r, idx) => {
      const w = weights[idx] || 0;
      const rd = DB[r];
      Object.entries(rd).forEach(([s, v]) => {
        if (s === '_PACE_') return;
        if (!v.dnsNC && v.total !== null) {
          scores[s].total += v.total * w;
          scores[s].weight += w;
        }
      });
    });
    const res = {};
    DRIVERS.forEach(d => {
      res[d.s] = scores[d.s].weight > 0 ? (scores[d.s].total / scores[d.s].weight) : 0;
    });
    return res;
  };

  const currentForm = calcForm(last3);
  const prevForm = calcForm(prev3);

  const sorted = DRIVERS.map(d => ({
    ...d,
    form: currentForm[d.s] || 0,
    prevForm: prevForm[d.s] || 0
  })).filter(d => d.form > 0).sort((a, b) => b.form - a.form);

  formTbody.innerHTML = '';
  sorted.forEach((d, i) => {
    const trendDelta = d.form - d.prevForm;
    let trendHtml = `<span style="color:var(--muted)">—</span>`; 
    if (trendDelta > 0.1) trendHtml = `<span style="color:var(--lime)">▲ ${LANG === 'tr' ? 'Yükseliş' : 'Up'}</span>`;
    else if (trendDelta < -0.1) trendHtml = `<span style="color:var(--red)">▼ ${LANG === 'tr' ? 'Düşüş' : 'Down'}</span>`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td><span class="rank-n">${i + 1}</span></td>
          <td class="dname">${d.name}</td>
          <td class="dteam"><img src="${LOGOS[d.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">${d.team}</td>
          <td class="tot-pts" style="color:${scoreColor(d.form)};text-shadow:none">${fmtPts(d.form)}</td>
          <td>${trendHtml}</td>
        `;
    formTbody.appendChild(tr);
  });
}

function qRound(qpos) {
  if (!qpos) return '';
  if (qpos <= 10) return 'Q3';
  if (qpos <= 15) return 'Q2';
  return 'Q1';
}

function qBadgeHTML(qpos) {
  const qr = qRound(qpos);
  if (!qr) return '';
  const cls = qr === 'Q3' ? 'q3' : qr === 'Q2' ? 'q2' : 'q1';
  return `<span class="q-badge ${cls}">${qr}</span>`;
}

function scoreColor(avg) {
  if (avg >= 8) return 'var(--lime)';
  if (avg >= 6) return '#78e080';   
  if (avg >= 4) return 'var(--amber)';
  if (avg >= 2) return '#ff7840';   
  return 'var(--red)';
}

function posDeltaHTML(grid, finish) {
  if (!grid || !finish) return '';
  const delta = grid - finish;
  if (delta > 0) return `<span class="pos-delta gain">▲${delta}</span>`;
  if (delta < 0) return `<span class="pos-delta loss">▼${Math.abs(delta)}</span>`;
  return `<span class="pos-delta neutral">●</span>`;
}

function showBD(round, code) {
  const rd = DB[round];
  if (!rd || !rd[code]) return;
  const v = rd[code];
  const d = DRIVERS.find(x => x.s === code);
  const race = RACES.find(x => x.r === round);
  const titleEl = document.getElementById('bd-title');
  if (titleEl) titleEl.textContent = `${d?.name || code} — R${round} ${race?.f || ''} ${raceName(race) || ''}`;
  const br = v.br || {};
  const rows = [
    { cat: LANG === 'tr' ? '🏁 Sıralama (Q)' : '🏁 Qualifying', val: v.qualPts },
    { cat: LANG === 'tr' ? '🏆 Yarış Bitişi' : '🏆 Race Finish', val: v.racePts },
    { cat: LANG === 'tr' ? '📊 Yarış Seyri' : '📊 Race Craft', val: v.craftPts },
    { cat: LANG === 'tr' ? '⏱️ En Hızlı Tur' : '⏱️ Fastest Lap', val: v.pacePts },
    { cat: LANG === 'tr' ? '👊 Takım Savaşı' : '👊 Teammate', val: v.teammatePts },
    { cat: LANG === 'tr' ? '🎁 Bonus' : '🎁 Bonus', val: v.bonus },
    { cat: LANG === 'tr' ? '⛔ Ceza' : '⛔ Penalty', val: v.penalty },
  ];
  let html = '';
  rows.forEach(r => {
    const cls = r.val > 0 ? 'plus' : r.val < 0 ? 'minus' : 'zero';
    html += `<div class="bd-row"><span class="bd-cat">${r.cat}</span><span class="bd-val ${cls}">${r.val > 0 ? '+' : ''}${fmtPts(r.val)}</span></div>`;
  });
  html += `<div class="bd-total"><span>${LANG === 'tr' ? 'Toplam' : 'Total'}</span><span>${fmtPts(v.total)}</span></div>`;
  const flags = [];
  if (v.qpos) flags.push(`Q: P${v.qpos} ${qBadgeHTML(v.qpos)}`);
  if (v.grid && v.finish) flags.push(`${LANG === 'tr' ? 'Grid→Bitiş' : 'Grid→Finish'}: P${v.grid}→P${v.finish} ${posDeltaHTML(v.grid, v.finish)}`);
  if (v.fl) flags.push(`FL: ${v.fl}s`);
  if (br.winner) flags.push('🥇 ' + (LANG === 'tr' ? 'Yarış Galibi' : 'Race Winner'));
  if (br.podium) flags.push('🥈 ' + (LANG === 'tr' ? 'Podyum' : 'Podium'));
  if (br.raceFastestLap) flags.push('⏱️ ' + (LANG === 'tr' ? 'En Hızlı Tur' : 'Fastest Lap'));
  if (br.tmQ) flags.push('✅ ' + (LANG === 'tr' ? 'Q Takım Arkadaşını Yendi' : 'Beat TM in Q'));
  if (br.tmR) flags.push('✅ ' + (LANG === 'tr' ? 'Yarış TM Yendi' : 'Beat TM in Race'));
  if (br.tmFL) flags.push('✅ ' + (LANG === 'tr' ? 'FL TM Yendi' : 'Beat TM FL'));
  if (br.hasQHata || br.hasCrash) flags.push('💥 ' + (LANG === 'tr' ? 'Q Hata' : 'Q Error'));
  if (v.qmech) flags.push('⚙️ ' + (LANG === 'tr' ? 'Q Arıza' : 'Q Mech'));
  if (br.qmechBonus) flags.push('🚀 ' + (LANG === 'tr' ? 'Mekanik Telafi' : 'Mech Bonus'));
  if (br.hasDNFP) flags.push('🚫 DNF·P');
  if (v.dnfNC) flags.push('🚧 DNF·NC');
  if (br.hasPenalty) flags.push('⚠️ ' + (LANG === 'tr' ? 'Ceza' : 'Penalty'));
  if (br.sprintGain) flags.push('🏎️ Sprint +3');
  if (br.sprintTM) flags.push('🏎️ Sprint TM');
  if (v.spGrid && v.spFinish) flags.push(`Sprint: P${v.spGrid}→P${v.spFinish}`);
  if (br.hasSpQHata) flags.push('💥 ' + (LANG === 'tr' ? 'Sprint Q Hata (−0.5)' : 'Sprint Q Error (−0.5)'));
  if (br.spQMechBonus) flags.push('⚙️ ' + (LANG === 'tr' ? 'Sprint Q Arıza (+0.3)' : 'Sprint Q Mech (+0.3)'));
  if (br.hasSpDnfP) flags.push('🚫 ' + (LANG === 'tr' ? 'Sprint DNF·P (−0.5)' : 'Sprint DNF·P (−0.5)'));
  if (br.spDnfNC) flags.push('🚧 Sprint DNF·NC');
  if (br.hasSpPenalty) flags.push('⚠️ ' + (LANG === 'tr' ? 'Sprint Ceza (−0.25)' : 'Sprint Pen (−0.25)'));
  if (br.dotd) flags.push('🌟 Driver of the Day');
  if (flags.length) {
    html += `<div class="bd-flags">${flags.map(f => `<span class="bd-flag">${f}</span>`).join('')}</div>`;
  }
  const bodyEl = document.getElementById('bd-body');
  if (bodyEl) bodyEl.innerHTML = html;
  const overlayEl = document.getElementById('bd-overlay');
  if (overlayEl) overlayEl.classList.add('show');
}

function closeBD() {
  const overlayEl = document.getElementById('bd-overlay');
  if (overlayEl) overlayEl.classList.remove('show');
}

let seasonChartInstance = null;
function showChart(code) {
  const d = DRIVERS.find(x => x.s === code);
  const titleEl = document.getElementById('chart-title');
  if (titleEl) titleEl.textContent = `${d?.name || code} — ${LANG === 'tr' ? 'Sezon Grafiği' : 'Season Chart'}`;

  const rounds = Object.keys(DB).map(Number).sort((a, b) => a - b);
  const labels = [];
  const data = [];
  rounds.forEach(r => {
    const v = DB[r]?.[code];
    if (v && !v.dnsNC && v.total !== null && v.total !== undefined) {
      labels.push(`R${r}`);
      data.push(v.total);
    }
  });

  const overlayEl = document.getElementById('chart-overlay');
  if (overlayEl) overlayEl.classList.add('show');
  const canvasEl = document.getElementById('seasonChart');
  if (!canvasEl) return;
  const ctx = canvasEl.getContext('2d');
  if (seasonChartInstance) seasonChartInstance.destroy();

  const col = data.length && data[data.length - 1] >= 7 ? '#b8ff00' : (data.length && data[data.length - 1] >= 4 ? '#ffb020' : '#ff3030');

  seasonChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: LANG === 'tr' ? 'Puan' : 'Pts',
        data,
        borderColor: col,
        backgroundColor: col + '33',
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 13, ticks: { color: '#8892b0' }, grid: { color: '#23304c' } },
        x: { ticks: { color: '#8892b0' }, grid: { color: '#23304c' } }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function closeChart() {
  const overlayEl = document.getElementById('chart-overlay');
  if (overlayEl) overlayEl.classList.remove('show');
}

function sparklineSVG(code) {
  const rounds = Object.keys(DB).map(Number).sort((a, b) => a - b);
  const pts = [];
  rounds.forEach(r => {
    const v = DB[r]?.[code];
    if (v && !v.dnsNC && v.total !== null && v.total !== undefined) pts.push(v.total);
  });
  if (pts.length < 2) return '';
  const w = 80, h = 20, pad = 2;
  const max = Math.max(...pts, 10);
  const min = Math.min(...pts, 0);
  const range = max - min || 1;
  const step = (w - pad * 2) / (pts.length - 1);
  const points = pts.map((p, i) => `${pad + i * step},${pad + (1 - (p - min) / range) * (h - pad * 2)}`).join(' ');
  const last = pts[pts.length - 1];
  const col = last >= 7 ? 'var(--lime)' : last >= 4 ? 'var(--amber)' : 'var(--red)';
  return `<span class="sparkline"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><polyline points="${points}" fill="none" stroke="${col}" stroke-width="1.5" stroke-linejoin="round"/></svg></span>`;
}

function buildTable() {
  const tb = document.getElementById('inp-tbody');
  if (!tb) return;
  tb.innerHTML = '';
  DRIVERS.forEach(d => {
    const tr = document.createElement('tr');
    tr.id = `row-${d.s}`;
    tr.innerHTML = `
      <td class="dn">${d.n}</td>
      <td class="dname">${d.name}</td>
      <td class="dteam"><img src="${LOGOS[d.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d.tk] || ''}" onerror="this.style.display='none'">${d.team}</td>
      <td><input type="number" id="q-${d.s}"   min="1" max="22" step="1"     placeholder="Q"  oninput="livePreview()"></td>
      <td><input type="text" id="qt-${d.s}"  placeholder="1.23.456" oninput="livePreview()" onblur="formatFL(this)"></td>
      <td><input type="number" id="gd-${d.s}"  min="1" max="22" step="1"     placeholder="G"  oninput="livePreview()"></td>
      <td><input type="number" id="fn-${d.s}"  min="1" max="22" step="1"     placeholder="P"  oninput="livePreview()"></td>
      <td><input type="text" id="fl-${d.s}"  placeholder="1.23.456 veya 83.456" oninput="livePreview()" onblur="formatFL(this)"></td>
      <td class="cbcell"><input type="checkbox" id="qh-${d.s}" onchange="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="qm-${d.s}" onchange="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="dnc-${d.s}"  onchange="onDnfP('${d.s}')"></td>
      <td class="cbcell"><input type="checkbox" id="dnn-${d.s}" onchange="onDnfNc('${d.s}')"></td>
      <td class="cbcell"><input type="checkbox" id="pen-${d.s}"   onchange="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="dnsnc-${d.s}" onchange="onDnsNc('${d.s}')"></td>
      <td class="cbcell"><input type="checkbox" id="dnsp-${d.s}"  onchange="onDnsP('${d.s}')"></td>
      <td><input type="number" id="sg-${d.s}"  min="1" max="22" step="1"     placeholder="—"  oninput="livePreview()"></td>
      <td><input type="number" id="sf-${d.s}"  min="1" max="22" step="1"     placeholder="—"  oninput="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="spqh-${d.s}" onchange="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="spqm-${d.s}" onchange="livePreview()"></td>
      <td class="cbcell"><input type="checkbox" id="spdnfp-${d.s}" onchange="onSpDnfP('${d.s}')"></td>
      <td class="cbcell"><input type="checkbox" id="spdnfnc-${d.s}" onchange="onSpDnfNc('${d.s}')"></td>
      <td class="cbcell"><input type="checkbox" id="sppen-${d.s}" onchange="livePreview()"></td>
      <td class="sc-preview" id="pv-${d.s}">—</td>
    `;
    tb.appendChild(tr);
  });
}

function rebuildRaceSelect() {
  const sel = document.getElementById('race-sel');
  if (!sel) return;
  const cur = sel.value;
  sel.innerHTML = `<option value="">— ${LANG === 'tr' ? 'Yarış seç' : 'Select race'} —</option>`;
  RACES.forEach(r => {
    const spLabel = r.sp ? ' ⚡Sprint' : '';
    sel.add(new Option(`R${r.r} — ${r.f} ${raceName(r)} GP  (${r.d})${spLabel}`, r.r));
  });
  if (cur) sel.value = cur;
}

function togglePace() {
  const acc = document.getElementById('pace-accordion');
  const body = document.getElementById('pace-body');
  if (acc && body) {
    const isOpen = acc.classList.toggle('open');
    body.style.display = isOpen ? 'block' : 'none';
  }
}

function fmtPts(n) { if (n === null || n === undefined) return '—'; return Number(n).toFixed(2); }

function colorPv(el, total) {
  el.className = 'sc-preview';
  if (total === null || total === undefined) return;
  if (total >= 7) el.classList.add('hi');
  else if (total >= 4) el.classList.add('mid');
  else if (total >= 2) el.classList.add('lo');
  else el.classList.add('bad');
}

function setAlert(msg, type = '') {
  const box = document.getElementById('alert-box');
  const txt = document.getElementById('alert-txt');
  if (box && txt) {
    box.className = 'alert' + (type ? ' ' + type : '');
    txt.textContent = msg;
  }
}

function go(id) {
  const IDS = ['giris', 'puan', 'siralama', 'form', 'log', 'stats', 'share'];
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('on', IDS[i] === id));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('on');
  if (id === 'siralama') { refreshStandings(); }
  if (id === 'log') { refreshLog(); }
  if (id === 'share' && canvasDirty) { renderCanvas(); canvasDirty = false; }
}

function buildTeamPaceUI() {
  const tb = document.getElementById('team-pace-tbody');
  if (!tb) return;
  tb.innerHTML = '';
  
  // Get teams and their logos/classes
  const teams = [...new Set(DRIVERS.map(d => d.team))];
  
  // Get current pace from window.currentPaceMap (which is loaded in loadRace)
  const paceMap = window.currentPaceMap || {};
  
  teams.forEach(t => {
    const d = DRIVERS.find(x => x.team === t);
    const val = paceMap[t] || 6;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="dteam"><img src="${LOGOS[d.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d.tk] || ''}" onerror="this.style.display='none'">${t}</td>
      <td>
        <select id="pace-${t.replace(/\s/g, '-')}" class="pace-sel" onchange="livePreview()">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => `<option value="${n}" ${val == n ? 'selected' : ''}>${n}</option>`).join('')}
        </select>
      </td>
    `;
    tb.appendChild(tr);
  });
}

function gatherTeamPace() {
  const map = {};
  const teams = [...new Set(DRIVERS.map(d => d.team))];
  teams.forEach(t => {
    const sel = document.getElementById(`pace-${t.replace(/\s/g, '-')}`);
    if (sel) map[t] = parseInt(sel.value) || 6;
  });
  return map;
}

function refreshTeamStandings() {
  const teams = {};
  DRIVERS.forEach(d => {
    if (!teams[d.team]) teams[d.team] = { team: d.team, tk: d.tk, drivers: [], total: 0, races: 0, best: 0 };
    teams[d.team].drivers.push(d.s);
  });
  Object.values(DB).forEach(rd => {
    Object.entries(rd).forEach(([s, v]) => {
      if (s === '_PACE_') return;
      const d = DRIVERS.find(x => x.s === s);
      if (!d) return;
      const tm = teams[d.team];
      if (v.dnsNC) return;
      tm.total += (v.total || 0);
      tm.races += 1;
      if ((v.total || 0) > tm.best) tm.best = v.total || 0;
    });
  });
  const sorted = Object.values(teams).map(t => ({
    ...t, avg: t.races ? r2(t.total / t.races) : 0
  })).sort((a, b) => b.avg - a.avg);

  const tb = document.getElementById('team-stand-tbody');
  if (!tb) return;
  tb.innerHTML = '';
  sorted.forEach((tm, i) => {
    const tr = document.createElement('tr');
    const rCls = i === 0 ? 'g' : i === 1 ? 's' : i === 2 ? 'b' : '';
    tr.innerHTML = `
      <td><span class="rank-n ${rCls}">${i + 1}</span></td>
      <td class="dteam"><img src="${LOGOS[tm.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[tm.tk] || ''}" onerror="this.style.display='none'">${tm.team}</td>
      <td class="tot-pts">${fmtPts(tm.avg)}</td>
      <td class="stat-cell">${fmtPts(tm.total)}</td>
      <td class="best-cell">${fmtPts(tm.best)}</td>
    `;
    tb.appendChild(tr);
  });
}

function populateH2H() {
  const selA = document.getElementById('h2h-a');
  const selB = document.getElementById('h2h-b');
  if (!selA || !selB) return;
  const curA = selA.value, curB = selB.value;
  selA.innerHTML = '<option value="">—</option>';
  selB.innerHTML = '<option value="">—</option>';
  DRIVERS.forEach(d => {
    selA.add(new Option(`${d.name} (${d.s})`, d.s));
    selB.add(new Option(`${d.name} (${d.s})`, d.s));
  });
  if (curA) selA.value = curA;
  if (curB) selB.value = curB;
  renderH2H();
}

function renderH2H() {
  const codeA = document.getElementById('h2h-a')?.value;
  const codeB = document.getElementById('h2h-b')?.value;
  const wrap = document.getElementById('h2h-result');
  if (!wrap) return;
  if (!codeA || !codeB || codeA === codeB) {
    wrap.innerHTML = `<div class="h2h-empty">${LANG === 'tr' ? 'İki farklı pilot seçin' : 'Select two different drivers'}</div>`;
    return;
  }
  const dA = DRIVERS.find(x => x.s === codeA);
  const dB = DRIVERS.find(x => x.s === codeB);
  let qWinsA = 0, qWinsB = 0, rWinsA = 0, rWinsB = 0, flWinsA = 0, flWinsB = 0;
  let qDeltaTotal = 0, qDeltaCount = 0;
  let totalA = 0, totalB = 0, countA = 0, countB = 0;
  Object.values(DB).forEach(rd => {
    const a = rd[codeA], b = rd[codeB];
    if (a && !a.dnsNC && a.total !== null) { totalA += a.total; countA++; }
    if (b && !b.dnsNC && b.total !== null) { totalB += b.total; countB++; }
    if (a && b && !a.dnsNC && !a.dnsP && !b.dnsNC && !b.dnsP) {
      if (a.qpos && b.qpos) { if (a.qpos < b.qpos) qWinsA++; else if (b.qpos < a.qpos) qWinsB++; }
      if (a.qt && b.qt) {
        const tA = parseFloat(a.qt), tB = parseFloat(b.qt);
        if (!isNaN(tA) && !isNaN(tB)) { qDeltaTotal += (tA - tB); qDeltaCount++; }
      }
      const aFin = a.finish && !a.dnfNC && !a.dnfP;
      const bFin = b.finish && !b.dnfNC && !b.dnfP;
      if (aFin && bFin) { if (a.finish < b.finish) rWinsA++; else if (b.finish < a.finish) rWinsB++; }
      if (a.fl && b.fl) { if (a.fl < b.fl) flWinsA++; else if (b.fl < a.fl) flWinsB++; }
    }
  });
  const avgA = countA ? r2(totalA / countA) : 0;
  const avgB = countB ? r2(totalB / countB) : 0;

  const avgDelta = qDeltaCount ? (qDeltaTotal / qDeltaCount) : 0;
  let deltaStrA = '-', deltaStrB = '-';
  if (qDeltaCount) {
    if (avgDelta < 0) { deltaStrA = `-${Math.abs(avgDelta).toFixed(3)}s`; deltaStrB = `+${Math.abs(avgDelta).toFixed(3)}s`; }
    else if (avgDelta > 0) { deltaStrA = `+${Math.abs(avgDelta).toFixed(3)}s`; deltaStrB = `-${Math.abs(avgDelta).toFixed(3)}s`; }
    else { deltaStrA = '0.000s'; deltaStrB = '0.000s'; }
  }

  const rows = [
    { cat: LANG === 'tr' ? 'Q Galibiyeti' : 'Q Wins', a: qWinsA, b: qWinsB, str: false },
    { cat: LANG === 'tr' ? 'Q Hız Farkı' : 'Q Delta', a: deltaStrA, b: deltaStrB, str: true },
    { cat: LANG === 'tr' ? 'Yarış Galibiyeti' : 'Race Wins', a: rWinsA, b: rWinsB, str: false },
    { cat: LANG === 'tr' ? 'FL Galibiyeti' : 'FL Wins', a: flWinsA, b: flWinsB, str: false },
    { cat: LANG === 'tr' ? 'Ort. Puan' : 'Avg Score', a: avgA, b: avgB, str: false, pts: true },
    { cat: LANG === 'tr' ? 'Top. Puan' : 'Total Score', a: r2(totalA), b: r2(totalB), str: false, pts: true },
  ];
  let html = '<div class="h2h-grid">';
  html += `<div class="h2h-label"><strong>${dA?.s || codeA}</strong></div><div class="h2h-cat"></div><div class="h2h-label"><strong>${dB?.s || codeB}</strong></div>`;
  rows.forEach(r => {
    let clsA = '', clsB = '';
    if (r.str) {
      if (r.a !== '-' && r.a.startsWith('-')) clsA = 'h2h-win';
      else if (r.b !== '-' && r.b.startsWith('-')) clsB = 'h2h-win';
    } else {
      clsA = r.a > r.b ? 'h2h-win' : r.a < r.b ? 'h2h-lose' : '';
      clsB = r.b > r.a ? 'h2h-win' : r.b < r.a ? 'h2h-lose' : '';
    }
    const fmt = v => r.str ? v : (r.pts ? fmtPts(v) : v);
    html += `<div class="h2h-val ${clsA}">${fmt(r.a)}</div>`;
    html += `<div class="h2h-cat">${r.cat}</div>`;
    html += `<div class="h2h-val ${clsB}">${fmt(r.b)}</div>`;
  });
  html += '</div>';
  wrap.innerHTML = html;
}

function toggleH2H() {
  const acc = document.getElementById('h2h-accordion');
  const body = document.getElementById('h2h-body');
  if (acc && body) {
    const isOpen = acc.classList.toggle('open');
    body.style.display = isOpen ? 'block' : 'none';
  }
}
