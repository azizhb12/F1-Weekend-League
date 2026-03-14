/* ═══════════════════════════════════════════
   SCORING ENGINE
═══════════════════════════════════════════ */
function r2(n) { return Math.round(n * 100) / 100; }

function computeRace(entries, paceMap) {
  if (!entries.length) return {};

  const active = entries.filter(e => !e.dnsNC && !e.dnsP);
  const withFL = active.filter(e => e.fl);
  const bestFL = withFL.length ? Math.min(...withFL.map(e => e.fl)) : null;

  // Teammate map
  const tmMap = {};
  DRIVERS.forEach(d => {
    const mate = DRIVERS.find(x => x.team === d.team && x.s !== d.s);
    if (mate) tmMap[d.s] = mate.s;
  });

  const out = {};
  entries.forEach(e => {
    if (e.dnsNC) { out[e.s] = { dnsNC: true, total: null, br: {} }; return; }
    if (e.dnsP) { out[e.s] = { dnsP: true, total: 0, br: {} }; return; }

    const br = {};
    let qualPts = 0, racePts = 0, craftPts = 0, pacePts = 0, teammatePts = 0;
    let bonus = 0, penalty = 0;
    const hasFinish = e.finish && !e.dnfNC && !e.dnfP;

    // 1. CAR POTENTIAL / xP vs Quali Position (1.5 pt)
    if (e.qpos) {
      let teamPaceMap = paceMap || {};
      let trRank = teamPaceMap[e.team] || 6;
      let xP = (trRank * 2) - 0.5;
      let delta = xP - e.qpos;

      if (e.qhata || e.crash) {
        qualPts = Math.max(0, Math.min(0.75, r2(1.0 + delta * 0.1)));
      } else {
        qualPts = Math.max(0, Math.min(1.5, r2(1.0 + delta * 0.1)));
      }
    }
    br.qualPts = r2(qualPts);

    // 2. RACE FINISH (3.5 pt)
    if (hasFinish) { racePts = Math.max(0, r2(3.5 - (e.finish - 1) * 0.175)); }
    br.racePts = r2(racePts);

    // 3. CAR POTENTIAL / xP vs Finish (1.5 pt)
    if (hasFinish) {
      let teamPaceMap = paceMap || {};
      let trRank = teamPaceMap[e.team] || 6;
      let xP = (trRank * 2) - 0.5;
      let delta = xP - e.finish;

      if (e.qhata || e.crash) {
        craftPts = Math.max(0, Math.min(0.75, r2(1.0 + delta * 0.1)));
      } else {
        craftPts = Math.max(0, Math.min(1.5, r2(1.0 + delta * 0.1)));
      }

      // Mechanic recovery bonus
      const rawDelta = e.grid - e.finish;
      if (e.qmech && rawDelta >= 5) {
        bonus += 0.5;
        br.qmechBonus = true;
      }
    }
    br.craftPts = r2(craftPts);

    // 4. PACE — Fastest Lap (1.5 pt)
    if (e.fl && bestFL !== null) {
      pacePts = Math.max(0, r2(1.5 - ((e.fl - bestFL) / 0.3) * 0.15));
    }
    br.pacePts = r2(pacePts);

    // 5. TEAMMATE BATTLE (2.0 pt)
    const mateCode = tmMap[e.s];
    const mate = mateCode ? entries.find(x => x.s === mateCode && !x.dnsNC && !x.dnsP) : null;
    if (mate) {
      if (e.qt && mate.qt) {
        const t1 = parseFloat(e.qt);
        const t2 = parseFloat(mate.qt);
        if (!isNaN(t1) && !isNaN(t2)) {
          br.qDelta = t1 - t2; 
        }
      }
      if (e.qpos && mate.qpos) { if (e.qpos < mate.qpos) { teammatePts += 0.7; br.tmQ = true; } }
      else if (e.qpos && !mate.qpos) { teammatePts += 0.35; }
      const mateFinish = mate.finish && !mate.dnfNC && !mate.dnfP;
      if (hasFinish && mateFinish) { if (e.finish < mate.finish) { teammatePts += 1.0; br.tmR = true; } }
      else if (hasFinish && !mateFinish) { teammatePts += 0.5; }
      if (e.fl && mate.fl) { if (e.fl < mate.fl) { teammatePts += 0.3; br.tmFL = true; } }
      else if (e.fl && !mate.fl) { teammatePts += 0.15; }
    } else { teammatePts = 1.0; br.tmNeutral = true; }
    br.teammatePts = r2(teammatePts);

    // BONUS
    if (hasFinish && e.finish === 1) { bonus += 1.0; br.winner = true; }
    else if (hasFinish && e.finish <= 3) { bonus += 0.5; br.podium = true; }
    if (e.fl && bestFL !== null && e.fl === bestFL && hasFinish) { bonus += 0.5; br.raceFastestLap = true; }

    // Mechanical DNF Compensation Bonus
    if (e.dnfNC) {
      bonus += 1.2;
      br.mechRescue = true;
    }

    // SPRINT EVENTS
    const spHasFinish = e.spFinish && !e.spDnfNC && !e.spDnfP;

    if (e.spGrid && spHasFinish) {
      if ((e.spGrid - e.spFinish) >= 3) { bonus += 0.5; br.sprintGain = true; }
      const spMate = mateCode ? entries.find(x => x.s === mateCode) : null;
      if (spMate && spMate.spFinish && !spMate.spDnfP && !spMate.spDnfNC && e.spFinish < spMate.spFinish) {
        bonus += 0.5; br.sprintTM = true;
      } else if (spMate && (spMate.spDnfP || spMate.spDnfNC) && spHasFinish) {
        bonus += 0.25; br.sprintTM = true; 
      }
    }

    // Sprint Q Mechanical — consolation bonus
    if (e.spQMech) {
      bonus += 0.3; br.spQMechBonus = true;
    }

    // Sprint DNF·NC
    if (e.spDnfNC) {
      br.spDnfNC = true;
    }

    bonus = Math.min(3.0, bonus);
    br.bonus = r2(bonus);

    // PENALTY
    if (e.qhata || e.crash) { penalty -= 1.0; br.hasQHata = true; }
    if (e.dnfP) { penalty -= 1.5; br.hasDNFP = true; }
    if (e.penaltyFlag) { penalty -= 0.5; br.hasPenalty = true; }

    // Sprint penalties
    if (e.spQHata) { penalty -= 0.5; br.hasSpQHata = true; }
    if (e.spDnfP) { penalty -= 0.5; br.hasSpDnfP = true; }
    if (e.spPenalty) { penalty -= 0.25; br.hasSpPenalty = true; }

    penalty = Math.max(-4.0, penalty);
    br.penalty = r2(penalty);

    const total = r2(qualPts + racePts + craftPts + pacePts + teammatePts + bonus + penalty);
    out[e.s] = {
      qpos: e.qpos, qt: e.qt, grid: e.grid, finish: e.finish, fl: e.fl,
      spGrid: e.spGrid, spFinish: e.spFinish,
      qhata: e.qhata, qmech: e.qmech, dnfP: e.dnfP, dnfNC: e.dnfNC, crash: e.crash, penaltyFlag: e.penaltyFlag,
      spQHata: e.spQHata, spQMech: e.spQMech, spDnfP: e.spDnfP, spDnfNC: e.spDnfNC, spPenalty: e.spPenalty,
      qualPts, racePts, craftPts, pacePts, teammatePts, bonus, penalty, total, br
    };
  });

  // DOTD Calculation
  let maxGain = -999;
  let maxScore = -999;
  let dotdCandidate = null;
  Object.keys(out).forEach(s => {
    const e = entries.find(x => x.s === s);
    if (e && e.grid && e.finish && !e.dnfP && !e.dnfNC) {
      const score = out[s].total;
      const gain = e.grid - e.finish;
      if (gain > maxGain || (gain === maxGain && score > maxScore)) {
        maxGain = gain;
        maxScore = score;
        dotdCandidate = s;
      }
    }
  });
  if (dotdCandidate) {
    out[dotdCandidate].br.dotd = true;
  }

  return out;
}
