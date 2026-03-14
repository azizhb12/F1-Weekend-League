/* ═══════════════════════════════════════════
   CORE APP LOGIC
═══════════════════════════════════════════ */

let DB = JSON.parse(localStorage.getItem('f1wl26') || '{}');
let canvasDirty = true;
const persist = () => { localStorage.setItem('f1wl26', JSON.stringify(DB)); canvasDirty = true; };

function gatherData() {
  const entries = [];
  DRIVERS.forEach(d => {
    const qpos = parseInt(document.getElementById(`q-${d.s}`).value) || null;
    const qt = document.getElementById(`qt-${d.s}`).value || '';
    const grid = parseInt(document.getElementById(`gd-${d.s}`).value) || null;
    const finish = parseInt(document.getElementById(`fn-${d.s}`).value) || null;
    const fl = parseFloat(document.getElementById(`fl-${d.s}`).value) || null;
    const qhata = document.getElementById(`qh-${d.s}`).checked;
    const qmech = document.getElementById(`qm-${d.s}`).checked;
    const dnfP = document.getElementById(`dnc-${d.s}`).checked;
    const dnfNC = document.getElementById(`dnn-${d.s}`).checked;
    const penaltyFlag = document.getElementById(`pen-${d.s}`).checked;
    const dnsNC = document.getElementById(`dnsnc-${d.s}`).checked;
    const dnsP = document.getElementById(`dnsp-${d.s}`).checked;
    const spGrid = parseInt(document.getElementById(`sg-${d.s}`).value) || null;
    const spFinish = parseInt(document.getElementById(`sf-${d.s}`).value) || null;
    const spQHata = document.getElementById(`spqh-${d.s}`).checked;
    const spQMech = document.getElementById(`spqm-${d.s}`).checked;
    const spDnfP = document.getElementById(`spdnfp-${d.s}`).checked;
    const spDnfNC = document.getElementById(`spdnfnc-${d.s}`).checked;
    const spPenalty = document.getElementById(`sppen-${d.s}`).checked;
    if (qpos || qt || grid || finish || fl || qhata || qmech || dnfP || dnfNC || penaltyFlag || dnsNC || dnsP || spGrid || spFinish || spQHata || spQMech || spDnfP || spDnfNC || spPenalty) {
      entries.push({ s: d.s, team: d.team, qpos, qt, grid, finish, fl, qhata, qmech, dnfP, dnfNC, penaltyFlag, dnsNC, dnsP, spGrid, spFinish, spQHata, spQMech, spDnfP, spDnfNC, spPenalty });
    }
  });
  return entries;
}

function livePreview() {
  window.currentPaceMap = gatherTeamPace();
  const entries = gatherData();
  const scores = entries.length >= 3 ? computeRace(entries, window.currentPaceMap) : {};

  DRIVERS.forEach(d => {
    const el = document.getElementById(`pv-${d.s}`);
    if (!el) return;
    const dnsnc = document.getElementById(`dnsnc-${d.s}`).checked;
    const dnsp = document.getElementById(`dnsp-${d.s}`).checked;
    if (dnsnc) { el.textContent = 'DNS·NC'; el.className = 'sc-preview lo'; return; }
    if (dnsp) { el.textContent = 'DNS·P'; el.className = 'sc-preview bad'; return; }

    const v = scores[d.s];
    if (v) { el.textContent = fmtPts(v.total); colorPv(el, v.total); }
    else {
      const hasAny = ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].some(k => document.getElementById(`${k}-${d.s}`).value)
        || ['qh', 'qm', 'dnc', 'dnn', 'pen', 'spqh', 'spqm', 'spdnfp', 'spdnfnc', 'sppen'].some(k => document.getElementById(`${k}-${d.s}`).checked);
      el.textContent = hasAny ? '...' : '—';
      el.className = hasAny ? 'sc-preview mid' : 'sc-preview';
    }
  });
}

function onDnfNc(s) {
  if (document.getElementById(`dnn-${s}`).checked) {
    document.getElementById(`dnc-${s}`).checked = false;
    document.getElementById(`fn-${s}`).value = '';
  }
  livePreview();
}
function onDnfP(s) {
  if (document.getElementById(`dnc-${s}`).checked) {
    document.getElementById(`dnn-${s}`).checked = false;
    document.getElementById(`fn-${s}`).value = '';
  }
  livePreview();
}
function onDnsNc(s) {
  if (document.getElementById(`dnsnc-${s}`).checked) {
    document.getElementById(`dnsp-${s}`).checked = false;
    document.getElementById(`qh-${s}`).checked = false;
    document.getElementById(`qm-${s}`).checked = false;
    document.getElementById(`dnc-${s}`).checked = false;
    document.getElementById(`dnn-${s}`).checked = false;
    document.getElementById(`pen-${s}`).checked = false;
    ['spqh', 'spqm', 'spdnfp', 'spdnfnc', 'sppen'].forEach(k => document.getElementById(`${k}-${s}`).checked = false);
    ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].forEach(k => document.getElementById(`${k}-${s}`).value = '');
  }
  livePreview();
}
function onDnsP(s) {
  if (document.getElementById(`dnsp-${s}`).checked) {
    document.getElementById(`dnsnc-${s}`).checked = false;
    document.getElementById(`qh-${s}`).checked = false;
    document.getElementById(`qm-${s}`).checked = false;
    document.getElementById(`dnc-${s}`).checked = false;
    document.getElementById(`dnn-${s}`).checked = false;
    document.getElementById(`pen-${s}`).checked = false;
    ['spqh', 'spqm', 'spdnfp', 'spdnfnc', 'sppen'].forEach(k => document.getElementById(`${k}-${s}`).checked = false);
    ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].forEach(k => document.getElementById(`${k}-${s}`).value = '');
  }
  livePreview();
}
function onSpDnfP(s) {
  if (document.getElementById(`spdnfp-${s}`).checked) {
    document.getElementById(`spdnfnc-${s}`).checked = false;
    document.getElementById(`sf-${s}`).value = '';
  }
  livePreview();
}
function onSpDnfNc(s) {
  if (document.getElementById(`spdnfnc-${s}`).checked) {
    document.getElementById(`spdnfp-${s}`).checked = false;
    document.getElementById(`sf-${s}`).value = '';
  }
  livePreview();
}

function formatFL(input) {
  let val = input.value;
  if (!val) return;
  val = val.trim().replace(/,/g, '.').replace(/:/g, '.');
  let dots = val.split('.');
  if (dots.length >= 3) {
    let m = parseInt(dots[0]) || 0;
    let s = parseInt(dots[1]) || 0;
    let ms = dots.slice(2).join('');
    let total = (m * 60) + s + parseFloat("0." + ms);
    input.value = total.toFixed(3);
    livePreview();
  }
}

async function fetchAPIData() {
  const round = parseInt(document.getElementById('race-sel').value);
  if (!round) { alert(t('alert-no-race')); return; }
  const btn = document.querySelector('button[onclick="fetchAPIData()"]');
  const oldTxt = btn.textContent;
  btn.textContent = "⏳..."; btn.disabled = true;
  try {
    const YEAR = 2026;
    const [resQ, resR] = await Promise.all([
      fetch(`https://api.jolpi.ca/ergast/f1/${YEAR}/${round}/qualifying.json`).then(r => { if (!r.ok) throw new Error(`Q HTTP ${r.status}`); return r.json(); }).catch(e => { console.warn('Q fetch error:', e); return null; }),
      fetch(`https://api.jolpi.ca/ergast/f1/${YEAR}/${round}/results.json`).then(r => { if (!r.ok) throw new Error(`R HTTP ${r.status}`); return r.json(); }).catch(e => { console.warn('R fetch error:', e); return null; })
    ]);
    if (!resQ && !resR) {
      alert(LANG === 'tr' ? `API bağlantı hatası. Konsolu kontrol edin (F12).` : `API connection error. Check console (F12).`);
      return;
    }
    const qualiData = resQ?.MRData?.RaceTable?.Races[0]?.QualifyingResults || [];
    const raceData = resR?.MRData?.RaceTable?.Races[0]?.Results || [];
    if (!qualiData.length && !raceData.length) {
      alert(LANG === 'tr' ? `R${round} için veri bulunamadı. Yarış henüz olmamış olabilir.` : `No data found for R${round}. Race may not have happened yet.`);
      return;
    }
    const qMap = {}; const qTimeMap = {};
    qualiData.forEach(q => { if (q.Driver?.code) { qMap[q.Driver.code] = q.position; qTimeMap[q.Driver.code] = q.Q3 || q.Q2 || q.Q1 || ''; } });
    const rMap = {}; const gridMap = {}; const flMap = {};
    raceData.forEach(r => { if (r.Driver?.code) { rMap[r.Driver.code] = r.position; gridMap[r.Driver.code] = r.grid; if (r.FastestLap?.Time?.time) flMap[r.Driver.code] = r.FastestLap.Time.time; } });
    DRIVERS.forEach(d => {
      const qEl = document.getElementById(`q-${d.s}`);
      const qtEl = document.getElementById(`qt-${d.s}`);
      const gdEl = document.getElementById(`gd-${d.s}`);
      const fnEl = document.getElementById(`fn-${d.s}`);
      const flEl = document.getElementById(`fl-${d.s}`);
      if (qEl && qMap[d.s]) qEl.value = qMap[d.s];
      if (qtEl && qTimeMap[d.s]) { qtEl.value = qTimeMap[d.s]; formatFL(qtEl); }
      if (gdEl && gridMap[d.s]) gdEl.value = gridMap[d.s];
      if (fnEl && rMap[d.s]) fnEl.value = rMap[d.s];
      if (flEl && flMap[d.s]) { flEl.value = flMap[d.s]; formatFL(flEl); }
    });
    livePreview();
    alert(LANG === 'tr' ? `R${round} verileri çekildi!` : `R${round} data fetched!`);
  } catch (err) { console.error('fetchAPIData hatası:', err); alert(`API Hatası: ${err.message || err}`); } finally { btn.textContent = oldTxt; btn.disabled = false; }
}

function updateSprintCols(isSprint) {
  const tbl = document.getElementById('inp-table');
  if (tbl) tbl.classList.toggle('sprint-hidden', !isSprint);
}

function loadRace() {
  const v = document.getElementById('race-sel').value;
  const round = parseInt(v);
  if (!v) { clearInputs(); return; }
  const race = RACES.find(x => x.r === round);
  const rd = DB[round] || {};

  // Pace map: kayıtlı veri yoksa önceki yarıştan varsayılan
  let paceMap = rd._PACE_;
  if (!paceMap || Object.keys(paceMap).length === 0) {
    const prevRound = Object.keys(DB)
      .map(Number)
      .filter(r => r < round && DB[r] && DB[r]._PACE_ && Object.keys(DB[r]._PACE_).length > 0)
      .sort((a, b) => b - a)[0];
    if (prevRound !== undefined) paceMap = DB[prevRound]._PACE_;
  }
  window.currentPaceMap = paceMap || {};
  buildTeamPaceUI(window.currentPaceMap);

  updateSprintCols(!!race?.sp);
  DRIVERS.forEach(d => {
    const dv = rd[d.s] || {};
    const ids = ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'];
    ids.forEach(k => { const el = document.getElementById(`${k}-${d.s}`); if (el) el.value = dv[k] || dv[k === 'q' ? 'qpos' : (k === 'gd' ? 'grid' : (k === 'fn' ? 'finish' : (k === 'sg' ? 'spGrid' : (k === 'sf' ? 'spFinish' : k))))] || ''; });
    document.getElementById(`qh-${d.s}`).checked = !!(dv.qhata || dv.crash);
    document.getElementById(`qm-${d.s}`).checked = !!dv.qmech;
    document.getElementById(`dnc-${d.s}`).checked = !!dv.dnfP;
    document.getElementById(`dnn-${d.s}`).checked = !!dv.dnfNC;
    document.getElementById(`pen-${d.s}`).checked = !!dv.penaltyFlag;
    document.getElementById(`dnsnc-${d.s}`).checked = !!dv.dnsNC;
    document.getElementById(`dnsp-${d.s}`).checked = !!dv.dnsP;
    document.getElementById(`spqh-${d.s}`).checked = !!dv.spQHata;
    document.getElementById(`spqm-${d.s}`).checked = !!dv.spQMech;
    document.getElementById(`spdnfp-${d.s}`).checked = !!dv.spDnfP;
    document.getElementById(`spdnfnc-${d.s}`).checked = !!dv.spDnfNC;
    document.getElementById(`sppen-${d.s}`).checked = !!dv.spPenalty;
    onDnfNc(d.s); onDnfP(d.s); onDnsNc(d.s); onDnsP(d.s);
  });
  livePreview();
  setAlert(rd ? t('alert-loaded', round, race) : t('alert-new', round, race));
}

function saveRace() {
  const v = document.getElementById('race-sel').value;
  const round = parseInt(v);
  if (!v) { alert(t('alert-no-race')); return; }
  const pMap = gatherTeamPace();
  const entries = gatherData();
  if (entries.length < 3) { alert(t('alert-min')); return; }
  const raw = computeRace(entries, pMap);
  const toSave = { _PACE_: pMap };
  Object.keys(raw).forEach(s => { toSave[s] = { qt: entries.find(x => x.s === s)?.qt, ...raw[s] }; });
  DB[round] = toSave;
  persist();
  const race = RACES.find(x => x.r === round);
  setAlert(t('alert-saved', round, race, Object.keys(raw).length));
  refreshStandings(); refreshLog();
}

function clearInputs() {
  const round = parseInt(document.getElementById('race-sel').value);
  if (round && DB[round] && confirm(t('confirm-delete', round))) { delete DB[round]; persist(); refreshStandings(); refreshLog(); }
  DRIVERS.forEach(d => {
    ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].forEach(k => document.getElementById(`${k}-${d.s}`).value = '');
    ['qh', 'qm', 'dnc', 'dnn', 'pen', 'dnsnc', 'dnsp', 'spqh', 'spqm', 'spdnfp', 'spdnfnc', 'sppen'].forEach(k => document.getElementById(`${k}-${d.s}`).checked = false);
    const pv = document.getElementById(`pv-${d.s}`); pv.textContent = '—'; pv.className = 'sc-preview';
  });
  window.currentPaceMap = {}; buildTeamPaceUI({}); updateSprintCols(false); setAlert(t('alert-cleared')); livePreview();
}

function delRace(round) {
  if (!confirm(t('confirm-delete', round))) return;
  delete DB[round]; persist(); refreshStandings(); refreshLog();
}

function exportData() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = `f1-weekend-league-2026-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.href = URL.createObjectURL(blob); a.click(); URL.revokeObjectURL(a.href);
}

function importData(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    try {
      const data = JSON.parse(ev.target.result);
      DB = data; persist(); refreshStandings(); refreshLog();
      setAlert(t('alert-imported'));
    } catch (err) { alert('Invalid JSON'); }
  };
  reader.readAsText(file); e.target.value = '';
}

function init() {
  rebuildRaceSelect();
  buildTable();
  updateSprintCols(false);
  setLang(LANG);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('bd-overlay').classList.contains('show')) closeBD();
      if (document.getElementById('chart-overlay').classList.contains('show')) closeChart();
    }
  });
}
init();
