/* ═══════════════════════════════════════════
   i18n STRINGS
═══════════════════════════════════════════ */
const I18N = {
  tr: {
    eyebrow: "Formula 1 · 2026 Sezonu · Sanal Lig",
    "title-main": "HAFTA SONU",
    "title-accent": "LİGİ",
    subtitle: "Sıralama · Yarış · Hız · Takım Savaşı · 10/10 Sistem",
    "season-badge": "SEZON 2026",
    "tab-input": "📥 Veri Giriş",
    "tab-scoring": "📐 Puan Sistemi",
    "tab-standings": "🏆 Sıralama",
    "tab-form": "🔥 Form",
    "tab-history": "📋 Geçmiş",
    "tab-share": "𝕏 Paylaşım",
    "band-pos-cat": "Pozisyon",
    "band-of10": "/ 10 puan",
    "band-of10b": "/ 10 puan",
    "band-pos-desc": "Sıralama (Q) + yarış bitiş pozisyonu",
    "band-perf-cat": "Performans",
    "band-perf-desc": "xP araç potansiyeli seyri + en hızlı tur hızı",
    "band-tm-cat": "Takım Savaşı",
    "band-tm-max": "/ 10 puan",
    "band-tm-desc": "Q + yarış + FL takım arkadaşı karşılaştırması",
    "band-bp-cat": "Bonus / Ceza",
    "band-bp-max": "maks",
    "band-bp-desc": "Podyum · FL · Sprint / Kaza · DNF · Ceza",
    "sec-race-select": "Yarış Seç",
    "sec-car-perf": "Araç Potansiyeli (Takım Hızı 1-11)",
    "car-perf-desc": "Bu yarışta takımların genel saf hız dizilişini (1=En Hızlı, 11=En Yavaş) belirleyin. Pilotlara araçlarının potansiyellerine (xP) göre puan verilecektir (Eksi puan verilmez).",
    "btn-save": "💾 Kaydet",
    "btn-clear": "✕ Temizle",
    "alert-default": "Yarış seçin. F1 resmi sonuçlarından verileri girin.",
    "col-legend": `<strong style="color:var(--lime)">Q</strong> = sıralama poz. &nbsp;|&nbsp; <strong>Grid</strong> = kalkış sırası &nbsp;|&nbsp; <strong style="color:var(--blue)">Bitiş</strong> = yarış sonucu &nbsp;|&nbsp; <strong style="color:var(--red)">FL</strong> = en hızlı tur (sn) &nbsp;|&nbsp; <strong>Sp.G / Sp.F</strong> = sprint grid / bitiş`,
    "sec-driver-data": "Pilot Verileri",
    "th-driver": "Pilot", "th-team": "Takım", "th-qpos": "Q", "th-grid": "Grid",
    "th-finish": "Bitiş", "th-fl": "FL (s)", "th-qhata": "Q Hata 💥", "th-qmech": "Q Arıza ⚙️",
    "th-dnfp": "DNF·P 🚫", "th-dnfnc": "DNF·NC 🚧", "th-penalty": "Ceza ⚠️",
    "th-spgrid": "Sp.G", "th-spfinish": "Sp.F",
    "th-spqhata": "Sp.Q💥", "th-spqmech": "Sp.Q⚙️", "th-spdnfp": "Sp.DNF·P", "th-spdnfnc": "Sp.DNF·NC", "th-sppen": "Sp.Ceza",
    "th-score": "Puan",
    "input-note": "* En az 3 pilot verisi girilmelidir. FL = en hızlı tur toplam saniye (ör: 1:32.456 → 92.456). Sprint alanları sadece sprint hafta sonlarında doldurulur.",
    "sec-logic": "Genel Mantık",
    "logic-p1": "Her hafta sonu <strong>10 tam puan</strong> üzerinden değerlendirilir. Sezon sonu <strong class='hl'>yarış başına ortalama puan</strong> şampiyonu belirler.",
    "logic-p2": "5 bileşen: <span class='hl'>Pozisyon (4.5)</span> + <span class='hl-b'>Performans (3.5)</span> + <span class='hl-a'>Takım Savaşı (2.0)</span> + Bonus (maks +3.0) + <span class='hl-r'>Ceza (maks −4.0)</span>",
    "logic-p3": "Pozisyon = sıralama + yarış bitişi. Performans = beklenen sıra (xP) vs yarış bitişi + en hızlı tur. Takım savaşı = aracı eşitleyerek saf pilotaj farkını ölçer.",
    "logic-max": "→ Teorik maks: 13.0 puan (sezon ortalamasında ulaşılamaz)",
    "sec-position": "Pozisyon Puanı — 4.5 / 10",
    "sd-qual-cat": "🏁 Sıralama Araç Potansiyeli vs Bitiş (xP)", "sd-qual-desc": "Takım hızına göre xP hesaplanır. Beklenti aşıldıkça puan artar. Maks 2.0, min 0.",
    "sd-finish-cat": "🏆 Yarış Bitişi", "sd-finish-desc": "Yarış galibi → 2.5 pt. Her sıra geriye: −0.15 pt. Min 0.",
    "sec-perf": "Performans Puanı — 3.5 / 10",
    "perf-explain": "Takım hızı baz alınarak beklenen pozisyon (xP) ile <strong>yarış bitiş pozisyonu</strong> karşılaştırılır. Ek olarak en hızlı tur süresi ham hız göstergesi olarak değerlendirilir.",
    "sd-craft-cat": "📊 Araç Potansiyeli vs Bitiş (xP)", "sd-craft-desc": "Takım hızına göre xP (Beklenen Pozisyon) bulunur. Pilotun yarışı nerede bitirdiğine bakılır. Bekleneni aştıkça puan artar (Maks 2.0). Eksi puan verilmez.",
    "sd-pace-cat": "⏱️ En Hızlı Tur", "sd-pace-desc": "Yarışın en hızlısı → 1.5 pt. Her +0.3s fark: −0.15 pt. Min 0.",
    "sd-tm-cat": "🤝 Takım Arkadaşı Savaşı",
    "sd-tm-desc": "Karşılaştırma: Q (+0.7), Yarış (+1.0), En Hızlı Tur (+0.3). (Takım arkadaşı DNF ise veya yoksa oranlar değişir).",
    "sec-teammate": "Takım Arkadaşı Savaşı — 2.0 / 10",
    "tm-explain": "Aynı araçtaki iki pilotu karşılaştırarak <strong>aracı eşitler</strong>, saf pilotaj farkını ölçer.",
    "sd-tmq-cat": "🏁 Q Karşılaştırma", "sd-tmq-desc": "Sıralamada takım arkadaşını yendiyse. Arkadaş DNS ise yarım puan.",
    "sd-tmr-cat": "🏆 Yarış Karşılaştırma", "sd-tmr-desc": "Yarışta takım arkadaşını yendiyse. Arkadaş DNF ise yarım puan.",
    "sd-tmfl-cat": "⏱️ FL Karşılaştırma", "sd-tmfl-desc": "En hızlı turda takım arkadaşından hızlıysa.",
    "sec-bonus": "Bonus / Ceza Limitleri",
    "bonus-explain": "Sezonluk sıralamada <strong>10.0 ortalamayı geçmek imkansızdır</strong>. Alınan bonus ve cezalar haftalık performansa etki ederek 10 limitini aşmayı (geçici olarak) sağlayabilir.",
    "sd-bonus-cat": "⭐ Bonuslar (Maks +3.0)",
    "sd-bonus-desc": "• Yarış galibiyeti: +1.0<br>• Podyum (2. ve 3.): +0.5<br>• Haftanın en hızlı turu: +0.5<br>• Mekanik Arıza (Q Mech) Tesellisi: +1.2<br>• Q Arıza yaşayıp yarışta 5 sıra yükselme: +0.5<br>• Sprint Formatı (Sıralama / Yarış gelişimi): maks +1.0",
    "sd-pen-cat": "⚠️ Cezalar (Maks −4.0)",
    "sd-pen-desc": "• Q'da kendi hatasıyla kaza: −1.0<br>• Pilot kaynaklı DNF: −1.5<br>• Pist üstü ceza (Time/Grid penalty): −0.5",
    "sd-winner-cat": "🥇 Yarış Galibi", "sd-winner-desc": "Yarışı kazanan pilota ek bonus.",
    "sd-podium-cat": "🥈 Podyum", "sd-podium-desc": "P2 veya P3 bitiren pilota bonus.",
    "sd-rfl-cat": "⏱️ Yarışın En Hızlı Turu", "sd-rfl-desc": "Yarışın en hızlı turunu atan pilota bonus.",
    "sd-spgain-cat": "🏎️ Sprint Kazanım", "sd-spgain-desc": "Sprint'te net 3+ pozisyon kazanan pilota.",
    "sd-sptm-cat": "🏎️ Sprint Takım Savaşı", "sd-sptm-desc": "Sprint'te takım arkadaşının önünde bitiren pilota.",
    "sd-qmech-cat": "⚙️ Mekanik Telafi Bonusu", "sd-qmech-desc": "Q Arıza yaşayıp yarışta 5+ sıra kazanan pilota +0.5 pt.",
    "sd-spqmech-cat": "⚙️ Sprint Q Arıza Tesellisi", "sd-spqmech-desc": "Sprint sıralamasında mekanik arıza yaşayan pilota +0.3 pt teselli.",
    "sec-sprint-pen": "Sprint Cezaları",
    "sd-spqhata-cat": "💥 Sprint Q Hata", "sd-spqhata-desc": "Sprint sıralama turunda kendi hatasıyla kaza. −0.5 pt.",
    "sd-spdnfp-cat": "🚫 Sprint DNF·P", "sd-spdnfp-desc": "Sprint'te kendi hatası ile yarış dışı kalma. −0.5 pt.",
    "sd-sppen-cat": "⚠️ Sprint Ceza", "sd-sppen-desc": "Sprint sırasında alınan zaman/sıra cezası. −0.25 pt.",
    "sd-spdnfnc-cat": "🚧 Sprint DNF·NC", "sd-spdnfnc-desc": "Sprint'te mekanik arıza ile yarış dışı. Ceza yok, sprint bonusları iptal.",
    "sec-penalty": "Ceza Puanlar",
    "sd-qhata-cat": "💥 Q Hata (Pilot Hatası)", "sd-qhata-desc": "Sıralama kazası veya grid cezası. Anında −1.0 pt kesilir. Yarış seyri maks 1.0 pt ile kısıtlanır.",
    "sd-dnfp-cat": "🚫 DNF · P (Kendi Hatası)", "sd-dnfp-desc": "Kendi hatası nedeniyle yarış dışı. DNF·NC (mekanik arıza vb.) ise ceza yok.",
    "sd-pen-cat": "⚠️ Yarış Cezası", "sd-pen-desc": "Yarış sırasında alınan zaman/sıra cezası.",
    "sec-dnf": "DNF — Yarış Dışı Kalma",
    "dnf-explain": "Yarışı bitiremeyen pilotlar iki şekilde işlenir. <strong class='hl-a'>DNF·NC</strong>: mekanik arıza gibi kendi hatası dışı — ceza yok, Q ve FL verileri sayılır. <strong class='hl-r'>DNF·P</strong>: kendi hatası — −1.5 ceza.",
    "sec-dns": "DNS — Başlayamama",
    "dns-explain": "Pilotun hafta sonuna hiç katılamaması iki farklı şekilde işlenir. Kendi dışındaki bir sebeple başlayamadıysa o hafta sonu <strong class='hl-a'>sezon ortalamasına hiç dahil edilmez</strong>. Kendi hatası veya ceza sonucu başlayamadıysa <strong class='hl-r'>0 puan alır ve ortalamayı etkiler.</strong>",
    "sd-dnsnc-pts": "Hariç",
    "sd-dnsnc-desc": "Araç arızası, takım hatası, başkasının kazası. Ortalamaya dahil edilmez.",
    "sd-dnsp-cat": "🚫 DNS · P (Ceza / Kendi Hatası)",
    "sd-dnsp-desc": "Ceza, diskalifikasyon, kendi hatası. 0 puan sayılır, ortalamayı etkiler.",
    "th-dns-nc": "DNS·NC", "th-dns-p": "DNS·P",
    "th-dnsnc-stand": "DNS·NC",
    "sec-champion": "Sezon Şampiyonu",
    "champ-p1": "Şampiyon = <strong class='hl'>yarış başına ortalama puan</strong> en yüksek pilot.",
    "champ-p2": "Eşitlik kırma: (1) En fazla 10+ yarış → (2) En yüksek tek puan → (3) En az DNF·P",
    "champ-p3": "Sprint verileri aynı hafta sonu içinde bonus olarak değerlendirilir.",
    "sec-standings": "Genel Sıralama",
    "races-done": "yarış",
    "th-rank": "Sıra", "th-driver2": "Pilot", "th-team2": "Takım",
    "th-avg": "Ort. Puan", "th-total": "Top. Puan", "th-races": "Yarış", "th-best": "En İyi", "th-graph": "Grafik",
    "sec-history": "Yarış Geçmişi",
    "empty-log": "Henüz yarış verisi yok.",
    "sec-share": "𝕏 Paylaşım Görseli",
    "btn-generate": "🎨 Oluştur",
    "btn-download": "⬇ İndir PNG",
    "share-suggested": "Önerilen:",
    "share-template": "🏁 F1 2026 Hafta Sonu Ligi — R[X] [GP] | [Pilot] [Puan]/10",
    "share-hashtags": "Hashtag'ler:",
    "confirm-delete": (r) => `R${r} verisi silinsin mi?`,
    "alert-saved": (r, race, n) => `✅ R${r} ${race.f} ${race.name} GP kaydedildi. ${n} pilot verisi.`,
    "alert-loaded": (r, race) => `✅ R${r} ${race.f} ${race.name} GP — kayıtlı veri yüklendi.`,
    "alert-new": (r, race) => `📝 R${r} ${race.f} ${race.name} GP — yeni veri girişi.`,
    "alert-cleared": "Temizlendi.",
    "sec-backup": "Yedekleme",
    "btn-export": "⬇ Export JSON",
    "btn-import": "⬆ Import JSON",
    "btn-fetch": "🌐 API Çek",
    "th-qtime": "Q Süresi",
    "filter-all": "Tüm Pistler",
    "filter-trad": "Geleneksel Pistler",
    "filter-street": "Sokak Pistleri",
    "filter-fast": "Hızlı Pistler",
    "alert-min": "En az 3 pilot için veri girin!",
    "alert-no-race": "Önce yarış seçin!",
    "canvas-league": "HAFTA SONU LİGİ",
    "canvas-eyebrow": "FORMULA 1 · 2026 · SANAL LİG",
    "canvas-stat": (n) => `${n}/24 YARIŞ  ·  ORTALAMA PUAN (10/10)`,
    "canvas-footer-league": "F1 HAFTA SONU LİGİ 2026",
    "canvas-footer-tags": "#F1HaftaSonuLigi  #F1  #Formula1  #F12026",
    "pod-avg": "ort",
    "avg-label": "avg",
    "sec-team-stand": "Takım Sıralaması",
    "th-t-rank": "Sıra", "th-t-team": "Takım", "th-t-avg": "Ort. Puan", "th-t-total": "Top. Puan", "th-t-best": "En İyi",
    "sec-h2h": "Kafa Kafaya Karşılaştırma",
    "sec-form": "Güç Sıralaması (Son 3 Yarış)",
    "form-explain": "Sadece son 3 yarış temel alınarak <strong class=\"hl\">form durumu</strong> hesaplanır. Ağırlıklar: Son yarış %50, Önceki %30, Daha Önceki %20.",
    "th-form-rating": "Form Puanı",
    "th-trend": "Trend",
    "trend-up": "Yükselişte",
    "trend-down": "Düşüşte",
    "trend-flat": "Sabit",
    "footer-league": "F1 HAFTA SONU LİGİ",
  },
  en: {
    eyebrow: "Formula 1 · 2026 Season · Virtual League",
    "title-main": "WEEKEND",
    "title-accent": "LEAGUE",
    subtitle: "Qualifying · Race · Pace · Teammate Battle · 10/10 System",
    "season-badge": "SEASON 2026",
    "tab-input": "📥 Data Entry",
    "tab-scoring": "📐 Scoring",
    "tab-standings": "🏆 Standings",
    "tab-form": "🔥 Form Guide",
    "tab-history": "📋 History",
    "tab-share": "𝕏 Share",
    "band-pos-cat": "Position",
    "band-of10": "/ 10 pts",
    "band-of10b": "/ 10 pts",
    "band-pos-desc": "Qualifying + race finish position",
    "band-perf-cat": "Performance",
    "band-perf-desc": "xP car potential vs actual finish + FL",
    "band-tm-cat": "Teammate Battle",
    "band-tm-max": "/ 10 pts",
    "band-tm-desc": "Q + race + FL teammate comparison",
    "band-bp-cat": "Bonus / Pen",
    "band-bp-max": "max",
    "band-bp-desc": "Podium · FL · Sprint / Crash · DNF",
    "sec-race-select": "Select Race",
    "sec-car-perf": "Car Potential (Team Pace 1-11)",
    "car-perf-desc": "Set the raw pace rank of teams for this race (1=Fastest, 11=Slowest). Drivers are scored based on their car's Expected Position (xP). Negative points are not given.",
    "btn-save": "💾 Save",
    "btn-clear": "✕ Clear",
    "alert-default": "Select a race. Enter data from official F1 results.",
    "col-legend": `<strong style="color:var(--lime)">Q</strong> = quali pos &nbsp;|&nbsp; <strong>Grid</strong> = starting pos &nbsp;|&nbsp; <strong style="color:var(--blue)">Finish</strong> = race result &nbsp;|&nbsp; <strong style="color:var(--red)">FL</strong> = fastest lap (s) &nbsp;|&nbsp; <strong>Sp.G / Sp.F</strong> = sprint grid / finish`,
    "sec-driver-data": "Driver Data",
    "th-driver": "Driver", "th-team": "Team", "th-qpos": "Q", "th-grid": "Grid",
    "th-finish": "Finish", "th-fl": "FL (s)", "th-qhata": "Q Crash 💥", "th-qmech": "Q Mech ⚙️",
    "th-dnfp": "DNF·P 🚫", "th-dnfnc": "DNF·NC 🚧", "th-penalty": "Pen ⚠️",
    "th-spgrid": "Sp.G", "th-spfinish": "Sp.F",
    "th-spqhata": "Sp.Q💥", "th-spqmech": "Sp.Q⚙️", "th-spdnfp": "Sp.DNF·P", "th-spdnfnc": "Sp.DNF·NC", "th-sppen": "Sp.Pen",
    "th-score": "Score",
    "input-note": "* At least 3 driver entries required. FL = total seconds (e.g. 1:32.456 → 92.456). Sprint fields are for sprint weekends only.",
    "sec-logic": "General Logic",
    "logic-p1": "Every weekend is scored out of <strong>10 total points</strong>. The <strong class='hl'>average score per race</strong> determines the champion.",
    "logic-p2": "5 elements: <span class='hl'>Position (4.5)</span> + <span class='hl-b'>Performance (3.5)</span> + <span class='hl-a'>Teammate Battle (2.0)</span> + Bonus (max +3.0) + <span class='hl-r'>Penalty (max −4.0)</span>",
    "logic-p3": "Position = quali + race finish. Performance = expected pos(xP) vs actual finish + fastest lap. Teammate = equalizes car performance to measure pure driving.",
    "logic-max": "→ Theoretical max: 13.0 pts (unachievable over a season)",
    "sec-position": "Position Score — 4.5 / 10",
    "sd-qual-cat": "🏁 Qualifying Car Potential (xP)", "sd-qual-desc": "xP calculated from team pace. Overperforming yields score. Max 2.0, min 0.",
    "sd-finish-cat": "🏆 Race Finish", "sd-finish-desc": "Race win → 2.5 pt. Each pos back: −0.15 pt. Min 0.",
    "sec-perf": "Performance Score — 3.5 / 10",
    "perf-explain": "Compares Expected Position (xP) based on team pace vs <strong>actual race finish</strong>. Fastest lap measures raw speed.",
    "sd-craft-cat": "📊 Car Potential vs Finish (xP)", "sd-craft-desc": "xP is calculated from team pace. Actual finish is compared. Overperforming yields score (Max 2.0). Negative points are not given.",
    "sd-pace-cat": "⏱️ Fastest Lap", "sd-pace-desc": "Race's fastest → 1.5 pts. Each +0.3s gap: −0.15 pts. Min 0.",
    "sec-teammate": "Teammate Battle — 2.0 / 10",
    "tm-explain": "Compares two drivers in the same car, <strong>normalizing car performance</strong> to measure pure driver skill.",
    "sd-tmq-cat": "🏁 Q Comparison", "sd-tmq-desc": "Beat teammate in qualifying. Half points if teammate DNS.",
    "sd-tmr-cat": "🏆 Race Comparison", "sd-tmr-desc": "Beat teammate in race finish. Half points if teammate DNF.",
    "sd-tmfl-cat": "⏱️ FL Comparison", "sd-tmfl-desc": "Faster lap time than teammate.",
    "sec-bonus": "Bonus Points",
    "sd-winner-cat": "🥇 Race Winner", "sd-winner-desc": "Extra bonus for race winner.",
    "sd-podium-cat": "🥈 Podium", "sd-podium-desc": "Bonus for P2 or P3 finish.",
    "sd-rfl-cat": "⏱️ Race Fastest Lap", "sd-rfl-desc": "Bonus for setting the race's fastest lap.",
    "sd-spgain-cat": "🏎️ Sprint Gain", "sd-spgain-desc": "Net 3+ positions gained in sprint.",
    "sd-sptm-cat": "🏎️ Sprint Teammate", "sd-sptm-desc": "Finished ahead of teammate in sprint.",
    "sd-spqmech-cat": "⚙️ Sprint Q Mech Comp.", "sd-spqmech-desc": "Consolation bonus for mechanical failure in sprint qualifying (+0.3 pt).",
    "sec-sprint-pen": "Sprint Penalties",
    "sd-spqhata-cat": "💥 Sprint Q Error", "sd-spqhata-desc": "Driver fault crash in sprint qualifying. −0.5 pt.",
    "sd-spdnfp-cat": "🚫 Sprint DNF·P", "sd-spdnfp-desc": "Retirement caused by driver's own fault in sprint. −0.5 pt.",
    "sd-sppen-cat": "⚠️ Sprint Penalty", "sd-sppen-desc": "Time or position penalty during sprint. −0.25 pt.",
    "sd-spdnfnc-cat": "🚧 Sprint DNF·NC", "sd-spdnfnc-desc": "Mechanical retirement in sprint. No penalty, sprint bonuses voided.",
    "sd-qmech-cat": "⚙️ Mechanical Comp.", "sd-qmech-desc": "Gained 5+ places in race after a Q Mech failure (+0.5 pt).",
    "sec-penalty": "Penalty Points",
    "sd-qhata-cat": "💥 Q Error (Driver Fault)", "sd-qhata-desc": "Qualifying crash or grid penalty. Instant −1.0 pt. Race craft capped at 1.0 pt.",
    "sd-dnfp-cat": "🚫 DNF · P (Own Fault)", "sd-dnfp-desc": "Retirement caused by own fault. DNF·NC (mechanical) = no penalty.",
    "sd-pen-cat": "⚠️ Race Penalty", "sd-pen-desc": "Time or position penalty received during race.",
    "sec-dnf": "DNF — Did Not Finish",
    "dnf-explain": "Retirements are handled two ways. <strong class='hl-a'>DNF·NC</strong>: mechanical failure, not driver's fault — no penalty, Q and FL data still counts. <strong class='hl-r'>DNF·P</strong>: own fault — −1.5 penalty applied.",
    "sec-dns": "DNS — Did Not Start",
    "dns-explain": "A driver missing the weekend entirely is handled in two ways. If not their fault, the weekend is <strong class='hl-a'>excluded from their season average entirely</strong>. If their own fault or penalty, they <strong class='hl-r'>score 0 pts and it counts against their average.</strong>",
    "sd-dnsnc-pts": "Excl.",
    "sd-dnsnc-cat": "🚧 DNS · NC (Not Culpable)",
    "sd-dnsnc-desc": "Car failure, team error, another driver's crash. Excluded from average entirely.",
    "sd-dnsp-cat": "🚫 DNS · P (Penalty / Own Fault)",
    "sd-dnsp-desc": "Penalty, disqualification, driver's own fault. Counts as 0 pts, affects average.",
    "th-dns-nc": "DNS·NC", "th-dns-p": "DNS·P",
    "th-dnsnc-stand": "DNS·NC",
    "input-note": "* Minimum 3 drivers required. FL = fastest lap in total seconds (e.g. 1:32.456 → 92.456). Sprint fields only for sprint weekends.",
    "sec-champion": "Season Champion",
    "champ-p1": "Champion = driver with highest <strong class='hl'>average score per race</strong>.",
    "champ-p2": "Tiebreaker: (1) Most 10+ scored races → (2) Highest single race score → (3) Fewest DNF·Ps",
    "champ-p3": "Sprint data is integrated as bonus within the same weekend.",
    "sec-standings": "Standings",
    "races-done": "races",
    "th-rank": "Pos", "th-driver2": "Driver", "th-team2": "Team",
    "th-avg": "Avg Score", "th-total": "Total", "th-races": "Races", "th-best": "Best", "th-graph": "Chart",
    "sec-history": "Race History",
    "empty-log": "No race data yet.",
    "sec-share": "𝕏 Share Image",
    "btn-generate": "🎨 Generate",
    "btn-download": "⬇ Download PNG",
    "share-suggested": "Suggested caption:",
    "share-template": "🏁 F1 2026 Weekend League — R[X] [GP] | [Driver] [Score]/10",
    "share-hashtags": "Hashtags:",
    "confirm-delete": (r) => `Delete R${r} data?`,
    "alert-saved": (r, race, n) => `✅ R${r} ${race.f} ${race.name} GP saved. ${n} driver entries.`,
    "alert-loaded": (r, race) => `✅ R${r} ${race.f} ${race.name} GP — saved data loaded.`,
    "alert-new": (r, race) => `📝 R${r} ${race.f} ${race.name} GP — new entry.`,
    "alert-cleared": "Cleared.",
    "sec-backup": "Backup",
    "btn-export": "⬇ Export JSON",
    "btn-import": "⬆ Import JSON",
    "btn-fetch": "🌐 Fetch API",
    "th-qtime": "Q Time",
    "filter-all": "All Tracks",
    "filter-trad": "Traditional Tracks",
    "filter-street": "Street Circuits",
    "filter-fast": "High-Speed Tracks",
    "alert-min": "Enter data for at least 3 drivers!",
    "alert-no-race": "Please select a race first!",
    "canvas-league": "WEEKEND LEAGUE",
    "canvas-eyebrow": "FORMULA 1 · 2026 · VIRTUAL LEAGUE",
    "canvas-stat": (n) => `${n}/24 RACES  ·  AVERAGE SCORE (10/10)`,
    "canvas-footer-league": "F1 WEEKEND LEAGUE 2026",
    "canvas-footer-tags": "#F1WeekendLeague  #F1  #Formula1  #F12026",
    "pod-avg": "avg",
    "avg-label": "avg",
    "sec-team-stand": "Team Standings",
    "th-t-rank": "Pos", "th-t-team": "Team", "th-t-avg": "Avg Score", "th-t-total": "Total", "th-t-best": "Best",
    "sec-h2h": "Head-to-Head Comparison",
    "sec-form": "Power Rankings (Last 3 Races)",
    "form-explain": "<strong class=\"hl\">Form rating</strong> is calculated using only the last 3 races. Weights: Latest 50%, Previous 30%, Oldest 20%.",
    "th-form-rating": "Form Rating",
    "th-trend": "Trend",
    "trend-up": "Rising",
    "trend-down": "Falling",
    "trend-flat": "Flat",
    "footer-league": "F1 WEEKEND LEAGUE",
  }
};

let LANG = localStorage.getItem('f1ll_lang') || 'tr';

function t(key, ...args) {
  const v = I18N[LANG][key];
  if (typeof v === 'function') return v(...args);
  return v || key;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('f1ll_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === lang.toUpperCase()));
  document.documentElement.lang = lang;
  // Title main + accent
  document.querySelector('[data-i="title-main"]').textContent = t('title-main');
  document.querySelector('.h-title .y').textContent = t('title-accent');
  // Update all data-i elements
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.getAttribute('data-i');
    const val = I18N[LANG][key];
    if (val && typeof val === 'string') {
      // check for html tags
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    }
  });
  // Rebuild race select options
  rebuildRaceSelect();
  // Re-render dynamic UI
  refreshStandings();
  refreshLog();
  renderCanvas();
  canvasDirty = false;
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const DRIVERS = [
  { n: 44, s: "HAM", name: "L. Hamilton", full: "Lewis Hamilton", team: "Ferrari", tk: "Ferrari" },
  { n: 16, s: "LEC", name: "C. Leclerc", full: "Charles Leclerc", team: "Ferrari", tk: "Ferrari" },
  { n: 63, s: "RUS", name: "G. Russell", full: "George Russell", team: "Mercedes", tk: "Mercedes" },
  { n: 12, s: "ANT", name: "K. Antonelli", full: "Kimi Antonelli", team: "Mercedes", tk: "Mercedes" },
  { n: 1, s: "NOR", name: "L. Norris", full: "Lando Norris", team: "McLaren", tk: "McLaren" },
  { n: 81, s: "PIA", name: "O. Piastri", full: "Oscar Piastri", team: "McLaren", tk: "McLaren" },
  { n: 3, s: "VER", name: "M. Verstappen", full: "Max Verstappen", team: "Red Bull", tk: "RedBull" },
  { n: 6, s: "HAD", name: "I. Hadjar", full: "Isack Hadjar", team: "Red Bull", tk: "RedBull" },
  { n: 14, s: "ALO", name: "F. Alonso", full: "Fernando Alonso", team: "Aston Martin", tk: "Aston" },
  { n: 18, s: "STR", name: "L. Stroll", full: "Lance Stroll", team: "Aston Martin", tk: "Aston" },
  { n: 23, s: "ALB", name: "A. Albon", full: "Alex Albon", team: "Williams", tk: "Williams" },
  { n: 55, s: "SAI", name: "C. Sainz", full: "Carlos Sainz", team: "Williams", tk: "Williams" },
  { n: 10, s: "GAS", name: "P. Gasly", full: "Pierre Gasly", team: "Alpine", tk: "Alpine" },
  { n: 43, s: "COL", name: "F. Colapinto", full: "Franco Colapinto", team: "Alpine", tk: "Alpine" },
  { n: 30, s: "LAW", name: "L. Lawson", full: "Liam Lawson", team: "Racing Bulls", tk: "RacingBulls" },
  { n: 7, s: "LIN", name: "A. Lindblad", full: "Arvid Lindblad", team: "Racing Bulls", tk: "RacingBulls" },
  { n: 87, s: "BEA", name: "O. Bearman", full: "Oliver Bearman", team: "Haas", tk: "Haas" },
  { n: 31, s: "OCO", name: "E. Ocon", full: "Esteban Ocon", team: "Haas", tk: "Haas" },
  { n: 27, s: "HUL", name: "N. Hülkenberg", full: "Nico Hülkenberg", team: "Audi", tk: "Audi" },
  { n: 5, s: "BOR", name: "G. Bortoleto", full: "Gabriel Bortoleto", team: "Audi", tk: "Audi" },
  { n: 77, s: "BOT", name: "V. Bottas", full: "Valtteri Bottas", team: "Cadillac", tk: "Cadillac" },
  { n: 11, s: "PER", name: "S. Pérez", full: "Sergio Pérez", team: "Cadillac", tk: "Cadillac" },
];

const RACES = [
  { r: 1, name: "Australia", nameTR: "Avustralya", f: "🇦🇺", d: "08 Mar", type: "street" },
  { r: 2, name: "China", nameTR: "Çin", f: "🇨🇳", d: "15 Mar", sp: true, type: "traditional" },
  { r: 3, name: "Japan", nameTR: "Japonya", f: "🇯🇵", d: "29 Mar", type: "fast" },
  { r: 4, name: "Bahrain", nameTR: "Bahreyn", f: "🇧🇭", d: "12 Apr", type: "traditional" },
  { r: 5, name: "Saudi Arabia", nameTR: "Suudi Arabistan", f: "🇸🇦", d: "19 Apr", type: "street" },
  { r: 6, name: "Miami", nameTR: "Miami", f: "🇺🇸", d: "03 May", sp: true, type: "street" },
  { r: 7, name: "Canada", nameTR: "Kanada", f: "🇨🇦", d: "24 May", type: "street" },
  { r: 8, name: "Monaco", nameTR: "Monako", f: "🇲🇨", d: "07 Jun", type: "street" },
  { r: 9, name: "Barcelona", nameTR: "Barselona", f: "🇪🇸", d: "14 Jun", type: "traditional" },
  { r: 10, name: "Austria", nameTR: "Avusturya", f: "🇦🇹", d: "28 Jun", sp: true, type: "fast" },
  { r: 11, name: "Great Britain", nameTR: "İngiltere", f: "🇬🇧", d: "05 Jul", type: "fast" },
  { r: 12, name: "Belgium", nameTR: "Belçika", f: "🇧🇪", d: "19 Jul", type: "fast" },
  { r: 13, name: "Hungary", nameTR: "Macaristan", f: "🇭🇺", d: "26 Jul", type: "traditional" },
  { r: 14, name: "Netherlands", nameTR: "Hollanda", f: "🇳🇱", d: "23 Aug", type: "traditional" },
  { r: 15, name: "Italy", nameTR: "İtalya", f: "🇮🇹", d: "06 Sep", type: "fast" },
  { r: 16, name: "Madrid", nameTR: "Madrid", f: "🇪🇸", d: "13 Sep", type: "street" },
  { r: 17, name: "Azerbaijan", nameTR: "Azerbaycan", f: "🇦🇿", d: "26 Sep", type: "street" },
  { r: 18, name: "Singapore", nameTR: "Singapur", f: "🇸🇬", d: "11 Oct", type: "street" },
  { r: 19, name: "United States", nameTR: "ABD", f: "🇺🇸", d: "25 Oct", sp: true, type: "traditional" },
  { r: 20, name: "Mexico City", nameTR: "Meksika", f: "🇲🇽", d: "01 Nov", type: "traditional" },
  { r: 21, name: "São Paulo", nameTR: "Brezilya", f: "🇧🇷", d: "08 Nov", sp: true, type: "traditional" },
  { r: 22, name: "Las Vegas", nameTR: "Las Vegas", f: "🇺🇸", d: "21 Nov", type: "street" },
  { r: 23, name: "Qatar", nameTR: "Katar", f: "🇶🇦", d: "29 Nov", sp: true, type: "fast" },
  { r: 24, name: "Abu Dhabi", nameTR: "Abu Dhabi", f: "🇦🇪", d: "06 Dec", type: "traditional" },
];

function raceName(race) { return LANG === 'tr' ? race.nameTR : race.name; }

let DB = JSON.parse(localStorage.getItem('f1wl26') || '{}');
let canvasDirty = true;
const persist = () => { localStorage.setItem('f1wl26', JSON.stringify(DB)); canvasDirty = true; };

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

    // 1. CAR POTENTIAL / xP vs Quali Position (2.0 pt)
    if (e.qpos) {
      let teamPaceMap = paceMap || {};
      let trRank = teamPaceMap[e.team] || 6;
      let xP = (trRank * 2) - 0.5;
      let delta = xP - e.qpos; // Positive means beat the car potential.

      if (e.qhata || e.crash) {
        qualPts = Math.max(0, Math.min(1.0, r2(1.0 + delta * 0.1)));
      } else {
        qualPts = Math.max(0, Math.min(2.0, r2(1.0 + delta * 0.1)));
      }
    }
    br.qualPts = r2(qualPts);

    // 2. RACE FINISH (2.5 pt)
    if (hasFinish) { racePts = Math.max(0, r2(2.5 - (e.finish - 1) * 0.15)); }
    br.racePts = r2(racePts);

    // 3. CAR POTENTIAL / xP vs Finish (2.0 pt)
    if (hasFinish) {
      // Team Pace Rank is tracked implicitly or passed from inputs. For DB compatibility, we'll store and read the pace list for the round
      // Expected Position (xP) = TeamRank * 2 - 0.5.
      // If the team pace isn't saved yet, it defaults to grid position just to avoid NaN.
      let teamPaceMap = paceMap || {};
      let trRank = teamPaceMap[e.team] || 6; // Default middle
      let xP = (trRank * 2) - 0.5;
      let delta = xP - e.finish; // Positive means beat the car potential.

      if (e.qhata || e.crash) {
        craftPts = Math.max(0, Math.min(1.0, r2(1.0 + delta * 0.1)));
      } else {
        craftPts = Math.max(0, Math.min(2.0, r2(1.0 + delta * 0.1)));
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
          br.qDelta = t1 - t2; // negative means 'e' was faster
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
        bonus += 0.25; br.sprintTM = true; // half credit if mate DNF in sprint
      }
    }

    // Sprint Q Mechanical — consolation bonus (no penalty, sprint bonuses voided)
    if (e.spQMech) {
      bonus += 0.3; br.spQMechBonus = true;
    }

    // Sprint DNF·NC — no penalty, sprint gain/TM bonuses already blocked by spHasFinish
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

/* ═══════════════════════════════════════════
   UI — RACE SELECT
═══════════════════════════════════════════ */
function rebuildRaceSelect() {
  const sel = document.getElementById('race-sel');
  const cur = sel.value;
  sel.innerHTML = `<option value="">— ${LANG === 'tr' ? 'Yarış seç' : 'Select race'} —</option>`;
  RACES.forEach(r => {
    const spLabel = r.sp ? ' ⚡Sprint' : '';
    sel.add(new Option(`R${r.r} — ${r.f} ${raceName(r)} GP  (${r.d})${spLabel}`, r.r));
  });
  if (cur) sel.value = cur;
}

/* ═══════════════════════════════════════════
   UI — INPUT TABLE
═══════════════════════════════════════════ */
function buildTable() {
  const tb = document.getElementById('inp-tbody');
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

// FL zaman dönüştürme fonksiyonu (Örn: 1.23.454 -> 83.454)
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

// Bu fonksiyonu script bölümünde bul ve şununla değiştir:
function livePreview() {
  window.currentPaceMap = gatherTeamPace();
  const entries = gatherData();

  const scores = entries.length >= 3 ? computeRace(entries, window.currentPaceMap) : {};

  DRIVERS.forEach(d => {
    const el = document.getElementById(`pv-${d.s}`);
    const dnsnc = document.getElementById(`dnsnc-${d.s}`).checked;
    const dnsp = document.getElementById(`dnsp-${d.s}`).checked;
    if (dnsnc) { el.textContent = 'DNS·NC'; el.className = 'sc-preview lo'; return; }
    if (dnsp) { el.textContent = 'DNS·P'; el.className = 'sc-preview bad'; return; }

    const v = scores[d.s];
    if (v) { el.textContent = fmtPts(v.total); colorPv(el, v.total); }
    else {
      const hasAny = ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].some(k => document.getElementById(`${k}-${d.s}`).value)
        || document.getElementById(`qh-${d.s}`).checked
        || document.getElementById(`qm-${d.s}`).checked
        || document.getElementById(`dnc-${d.s}`).checked
        || document.getElementById(`dnn-${d.s}`).checked
        || document.getElementById(`pen-${d.s}`).checked
        || document.getElementById(`spqh-${d.s}`).checked
        || document.getElementById(`spqm-${d.s}`).checked
        || document.getElementById(`spdnfp-${d.s}`).checked
        || document.getElementById(`spdnfnc-${d.s}`).checked
        || document.getElementById(`sppen-${d.s}`).checked;
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

async function fetchAPIData() {
  const round = parseInt(document.getElementById('race-sel').value);
  if (!round) { alert(t('alert-no-race')); return; }

  const btn = document.querySelector('button[onclick="fetchAPIData()"]');
  const oldTxt = btn.textContent;
  btn.textContent = "⏳...";
  btn.disabled = true;

  try {
    const YEAR = 2026; // Varsayılan 2026
    const resQ = await fetch(`https://api.jolpi.ca/ergast/f1/${YEAR}/${round}/qualifying.json`).then(r => r.json()).catch(() => null);
    const resR = await fetch(`https://api.jolpi.ca/ergast/f1/${YEAR}/${round}/results.json`).then(r => r.json()).catch(() => null);

    const qualiData = resQ?.MRData?.RaceTable?.Races[0]?.QualifyingResults || [];
    const raceData = resR?.MRData?.RaceTable?.Races[0]?.Results || [];

    if (!qualiData.length && !raceData.length) {
      alert(LANG === 'tr' ? `Veri bulunamadı. ${YEAR} Sezonu, R${round} henüz tamamlanmamış olabilir.` : `No data found. ${YEAR} R${round} may not have happened yet.`);
      return;
    }

    const qMap = {}; const qTimeMap = {};
    qualiData.forEach(q => {
      if (q.Driver?.code) {
        qMap[q.Driver.code] = q.position;
        qTimeMap[q.Driver.code] = q.Q3 || q.Q2 || q.Q1 || '';
      }
    });

    const rMap = {}; const gridMap = {}; const flMap = {};
    raceData.forEach(r => {
      if (r.Driver?.code) {
        rMap[r.Driver.code] = r.position;
        gridMap[r.Driver.code] = r.grid;
        if (r.FastestLap?.Time?.time) flMap[r.Driver.code] = r.FastestLap.Time.time;
      }
    });

    DRIVERS.forEach(d => {
      if (qMap[d.s]) document.getElementById(`q-${d.s}`).value = qMap[d.s];
      if (qTimeMap[d.s]) {
        const qtInp = document.getElementById(`qt-${d.s}`);
        qtInp.value = qTimeMap[d.s];
        formatFL(qtInp);
      }
      if (gridMap[d.s]) document.getElementById(`gd-${d.s}`).value = gridMap[d.s];
      if (rMap[d.s]) document.getElementById(`fn-${d.s}`).value = rMap[d.s];
      if (flMap[d.s]) {
        const flInp = document.getElementById(`fl-${d.s}`);
        flInp.value = flMap[d.s];
        formatFL(flInp);
      }
    });

    livePreview();
    alert(LANG === 'tr' ? `R${round} verileri API'den başarıyla çekildi!` : `R${round} data fetched successfully from API!`);

  } catch (err) {
    console.error(err);
    alert(LANG === 'tr' ? "API'ye bağlanırken hata oluştu." : "Error connecting to the API.");
  } finally {
    btn.textContent = oldTxt;
    btn.disabled = false;
  }
}

const TEAMS = ["Ferrari", "Red Bull", "McLaren", "Mercedes", "Aston Martin", "Williams", "Alpine", "Racing Bulls", "Haas", "Audi", "Cadillac"];

function buildTeamPaceUI(roundPaceMap) {
  const tb = document.getElementById('team-pace-tbody');
  if (!tb) return;
  tb.innerHTML = '';

  // Default array if no saved pace map
  let paceArray = [];
  if (roundPaceMap && Object.keys(roundPaceMap).length > 0) {
    Object.keys(roundPaceMap).forEach(k => paceArray.push({ team: k, rank: roundPaceMap[k] }));
    paceArray.sort((a, b) => a.rank - b.rank);
  } else {
    TEAMS.forEach((t, i) => paceArray.push({ team: t, rank: i + 1 }));
  }

  TEAMS.forEach(team => {
    const rowVal = paceArray.find(x => x.team === team)?.rank || 6;
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>${team}</td>
          <td>
            <select id="pace-${team.replace(/\s/g, '-')}" class="pace-sel">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => `<option value="${n}" ${rowVal === n ? 'selected' : ''}>${n}</option>`).join('')}
            </select>
          </td>
        `;
    tb.appendChild(tr);
  });
}

function gatherTeamPace() {
  const map = {};
  TEAMS.forEach(team => {
    const sel = document.getElementById(`pace-${team.replace(/\s/g, '-')}`);
    if (sel) map[team] = parseInt(sel.value) || 6;
  });
  return map;
}

function loadRace() {
  const v = document.getElementById('race-sel').value;
  const round = parseInt(v);
  if (!v) { clearInputs(); return; }
  const race = RACES.find(x => x.r === round);
  const rd = DB[round] || {};

  // Identify pace mapping (saved in DB on round root - wait, DB structure is DB[r][driverCode].
  // We can store pace under a special key `paceMap` in DB[r] alongside driver codes.
  window.currentPaceMap = rd._PACE_ || {};
  buildTeamPaceUI(window.currentPaceMap);

  DRIVERS.forEach(d => {
    const dv = rd[d.s] || {};
    const qpos = document.getElementById(`q-${d.s}`); if (qpos) qpos.value = dv.qpos || '';
    const qt = document.getElementById(`qt-${d.s}`); if (qt) qt.value = dv.qt || '';
    const grid = document.getElementById(`gd-${d.s}`); if (grid) grid.value = dv.grid || '';
    const fin = document.getElementById(`fn-${d.s}`); if (fin) fin.value = dv.finish || '';
    const fl = document.getElementById(`fl-${d.s}`); if (fl) fl.value = dv.fl || '';

    const qh = document.getElementById(`qh-${d.s}`); if (qh) qh.checked = !!(dv.qhata || dv.crash);
    const qm = document.getElementById(`qm-${d.s}`); if (qm) qm.checked = !!dv.qmech;
    const dnfp = document.getElementById(`dnc-${d.s}`); if (dnfp) dnfp.checked = !!dv.dnfP;
    const dnfnc = document.getElementById(`dnn-${d.s}`); if (dnfnc) dnfnc.checked = !!dv.dnfNC;
    const pen = document.getElementById(`pen-${d.s}`); if (pen) pen.checked = !!dv.penaltyFlag;

    const dnsnc = document.getElementById(`dnsnc-${d.s}`); if (dnsnc) dnsnc.checked = !!dv.dnsNC;
    const dnsp = document.getElementById(`dnsp-${d.s}`); if (dnsp) dnsp.checked = !!dv.dnsP;

    const spg = document.getElementById(`sg-${d.s}`); if (spg) spg.value = dv.spGrid || '';
    const spf = document.getElementById(`sf-${d.s}`); if (spf) spf.value = dv.spFinish || '';

    const spqh = document.getElementById(`spqh-${d.s}`); if (spqh) spqh.checked = !!dv.spQHata;
    const spqm = document.getElementById(`spqm-${d.s}`); if (spqm) spqm.checked = !!dv.spQMech;
    const spdnfp = document.getElementById(`spdnfp-${d.s}`); if (spdnfp) spdnfp.checked = !!dv.spDnfP;
    const spdnfnc = document.getElementById(`spdnfnc-${d.s}`); if (spdnfnc) spdnfnc.checked = !!dv.spDnfNC;
    const sppen = document.getElementById(`sppen-${d.s}`); if (sppen) sppen.checked = !!dv.spPenalty;

    onDnfNc(d.s); onDnfP(d.s);
    onDnsNc(d.s); onDnsP(d.s);
  });
  livePreview();
  setAlert(rd ? t('alert-loaded', round, race) : t('alert-new', round, race));
}

function saveRace() {
  const v = document.getElementById('race-sel').value;
  const round = parseInt(v);
  if (!v) { alert(t('alert-no-race')); return; }

  const pMap = gatherTeamPace();
  window.currentPaceMap = pMap;

  // Duplicate team pace validation
  const paceValues = Object.values(pMap);
  const dupPace = paceValues.filter((v, i) => paceValues.indexOf(v) !== i);
  if (dupPace.length) {
    const dupTeams = Object.entries(pMap).filter(([, v]) => dupPace.includes(v)).map(([k]) => k);
    if (!confirm((LANG === 'tr' ? 'Aynı hız sırası kullanan takımlar var: ' : 'Teams with duplicate pace rank: ') + dupTeams.join(', ') + '\n' + (LANG === 'tr' ? 'xP hesabı etkilenebilir. Devam edilsin mi?' : 'xP calculation may be affected. Continue?'))) return;
  }

  const entries = gatherData();
  if (entries.length < 3) { alert(t('alert-min')); return; }

  // Duplicate position validation
  const activeEntries = entries.filter(e => !e.dnsNC && !e.dnsP);
  const qPositions = activeEntries.map(e => e.qpos).filter(Boolean);
  const fPositions = activeEntries.filter(e => !e.dnfP && !e.dnfNC).map(e => e.finish).filter(Boolean);
  const dupQ = qPositions.filter((v, i) => qPositions.indexOf(v) !== i);
  const dupF = fPositions.filter((v, i) => fPositions.indexOf(v) !== i);
  if (dupQ.length || dupF.length) {
    const msgs = [];
    if (dupQ.length) msgs.push((LANG === 'tr' ? 'Aynı Q pozisyonu: ' : 'Duplicate Q position: ') + [...new Set(dupQ)].join(', '));
    if (dupF.length) msgs.push((LANG === 'tr' ? 'Aynı bitiş pozisyonu: ' : 'Duplicate finish position: ') + [...new Set(dupF)].join(', '));
    if (!confirm(msgs.join('\n') + '\n' + (LANG === 'tr' ? 'Yine de kaydetmek istiyor musunuz?' : 'Save anyway?'))) return;
  }

  const raw = computeRace(entries, pMap);
  const toSave = { _PACE_: pMap };
  Object.keys(raw).forEach(s => {
    toSave[s] = {
      qt: entries.find(x => x.s === s)?.qt,
      ...raw[s]
    };
  });

  const isNew = !DB[round];
  DB[round] = toSave;
  persist();
  DRIVERS.forEach(d => {
    const v = toSave[d.s];
    if (!v) return;
    const pv = document.getElementById(`pv-${d.s}`);
    if (v.dnsNC) { pv.textContent = 'DNS·NC'; pv.className = 'sc-preview lo'; }
    else if (v.dnsP) { pv.textContent = 'DNS·P'; pv.className = 'sc-preview bad'; }
    else { pv.textContent = fmtPts(v.total); colorPv(pv, v.total); }
  });
  const race = RACES.find(x => x.r === round);
  setAlert(t('alert-saved', round, race, Object.keys(raw).length));
  refreshStandings();
  refreshLog();
}

function clearInputs() {
  const round = parseInt(document.getElementById('race-sel').value);

  // Eğer bir yarış seçiliyse ve o yarışın kaydı varsa kullanıcıya silmek isteyip istemediğini sor
  if (round && DB[round]) {
    if (confirm(t('confirm-delete', round))) {
      delete DB[round]; // Kaydı veritabanından sil
      persist();        // Hafızayı güncelle
      refreshStandings(); // Sıralamayı yenile
      refreshLog();       // Geçmişi yenile
    }
  }

  // Ekrandaki kutucukları ve önizlemeleri her durumda temizle
  DRIVERS.forEach(d => {
    ['q', 'qt', 'gd', 'fn', 'fl', 'sg', 'sf'].forEach(k => document.getElementById(`${k}-${d.s}`).value = '');
    ['qh', 'qm', 'dnc', 'dnn', 'pen', 'dnsnc', 'dnsp', 'spqh', 'spqm', 'spdnfp', 'spdnfnc', 'sppen'].forEach(k => document.getElementById(`${k}-${d.s}`).checked = false);
    const pv = document.getElementById(`pv-${d.s}`);
    pv.textContent = '—'; pv.className = 'sc-preview';
  });
  window.currentPaceMap = {};
  buildTeamPaceUI({});
  setAlert(t('alert-cleared'));
  livePreview();
}

/* ═══════════════════════════════════════════
   STANDINGS
═══════════════════════════════════════════ */
function refreshStandings() {
  const filter = document.getElementById('track-filter').value || 'all';
  const totals = {}, races = {}, bests = {}, dnfs = {}, dnsncs = {}, tens = {};
  DRIVERS.forEach(d => { totals[d.s] = 0; races[d.s] = 0; bests[d.s] = 0; dnfs[d.s] = 0; dnsncs[d.s] = 0; tens[d.s] = 0; });
  let doneCount = 0;
  Object.entries(DB).forEach(([roundStr, rd]) => {
    const round = Number(roundStr);
    const raceInfo = RACES.find(r => r.r === round);
    if (filter !== 'all' && raceInfo?.type !== filter) return;
    doneCount++;
    Object.entries(rd).forEach(([s, v]) => {
      if (s === '_PACE_') return; // Skip pace map entry
      if (v.dnsNC) { dnsncs[s] = (dnsncs[s] || 0) + 1; return; } // excluded from average
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
    if (b.avg !== a.avg) return b.avg - a.avg;       // 1. ortalama puan
    if (b.tens !== a.tens) return b.tens - a.tens;    // 2. en fazla 10+ puan yarışı
    if (b.best !== a.best) return b.best - a.best;    // 3. en yüksek tek yarış puanı
    return a.dnf - b.dnf;                           // 4. en az DNF
  });

  const maxAvg = sorted[0]?.avg || 1;
  document.getElementById('done-lbl').textContent = `${doneCount} / 24`;

  // Podium
  const pw = document.getElementById('podium-wrap');
  if (sorted.slice(0, 3).some(x => x.rc > 0)) {
    const [p1, p2, p3] = sorted;
    pw.innerHTML = `<div class="podium">
      <div class="pod p2"><div class="pod-rank">2</div><div class="pod-name">${p2.s}</div><div class="pod-pts">${fmtPts(p2.avg)} ${t('pod-avg')}</div></div>
      <div class="pod p1"><div class="pod-rank">1</div><div class="pod-name">${p1.s}</div><div class="pod-pts">${fmtPts(p1.avg)} ${t('pod-avg')}</div></div>
      <div class="pod p3"><div class="pod-rank">3</div><div class="pod-name">${p3.s}</div><div class="pod-pts">${fmtPts(p3.avg)} ${t('pod-avg')}</div></div>
    </div>`;
  } else pw.innerHTML = '';

  const tb = document.getElementById('stand-tbody');
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
  refreshTeamStandings();
  populateH2H();
  refreshForm();
}

/* ═══════════════════════════════════════════
   RACE LOG
═══════════════════════════════════════════ */
function refreshLog() {
  const wrap = document.getElementById('log-wrap');
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
      // DNS·NC special chip
      if (v.dnsNC) {
        return `<div class="chip" style="border-color:var(--amber);opacity:.7">
          <img src="${LOGOS[d?.tk] || ''}" class="team-logo ${{ Aston: 'logo-bg-green', Williams: 'logo-bg-white', Ferrari: 'logo-bg-red', Mercedes: 'logo-bg-white', Haas: 'logo-bg-white', Alpine: 'logo-bg-white' }[d?.tk] || ''}" onerror="this.style.display='none'">
          <strong>${s}</strong>
          <span style="color:var(--amber);font-size:9px;font-weight:700">DNS·NC</span>
          <span class="chip-pts" style="color:var(--amber);font-size:10px">${LANG === 'tr' ? 'hariç' : 'excl.'}</span>
        </div>`;
      }
      // DNS·P chip
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

/* ═══════════════════════════════════════════
   HELPER — Q ROUND BADGE
═══════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════
   HELPER — SCORE COLOR
═══════════════════════════════════════════ */
function scoreColor(avg) {
  if (avg >= 8) return 'var(--lime)';
  if (avg >= 6) return '#78e080';   // soft green
  if (avg >= 4) return 'var(--amber)';
  if (avg >= 2) return '#ff7840';   // orange-red
  return 'var(--red)';
}

/* ═══════════════════════════════════════════
   HELPER — POSITION DELTA ARROWS
═══════════════════════════════════════════ */
function posDeltaHTML(grid, finish) {

  if (!grid || !finish) return '';
  const delta = grid - finish;
  if (delta > 0) return `<span class="pos-delta gain">▲${delta}</span>`;
  if (delta < 0) return `<span class="pos-delta loss">▼${Math.abs(delta)}</span>`;
  return `<span class="pos-delta neutral">●</span>`;
}

/* ═══════════════════════════════════════════
   HELPER — BREAKDOWN POPUP
═══════════════════════════════════════════ */
function showBD(round, code) {
  const rd = DB[round];
  if (!rd || !rd[code]) return;
  const v = rd[code];
  const d = DRIVERS.find(x => x.s === code);
  const race = RACES.find(x => x.r === round);
  document.getElementById('bd-title').textContent = `${d?.name || code} — R${round} ${race?.f || ''} ${raceName(race) || ''}`;
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
  // Flags
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
  document.getElementById('bd-body').innerHTML = html;
  document.getElementById('bd-overlay').classList.add('show');
}
function closeBD() {
  document.getElementById('bd-overlay').classList.remove('show');
}

let seasonChartInstance = null;
function showChart(code) {
  const d = DRIVERS.find(x => x.s === code);
  document.getElementById('chart-title').textContent = `${d?.name || code} — ${LANG === 'tr' ? 'Sezon Grafiği' : 'Season Chart'}`;

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

  document.getElementById('chart-overlay').classList.add('show');
  const ctx = document.getElementById('seasonChart').getContext('2d');
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
  document.getElementById('chart-overlay').classList.remove('show');
}

/* ═══════════════════════════════════════════
   HELPER — SPARKLINE SVG
═══════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════
   TEAM STANDINGS
═══════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════
   HEAD-TO-HEAD COMPARISON
═══════════════════════════════════════════ */
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
      if (r.a.startsWith('-')) clsA = 'h2h-win'; else if (r.b.startsWith('-')) clsB = 'h2h-win';
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

/* ═══════════════════════════════════════════
   POWER RANKINGS (FORM GUIDE)
═══════════════════════════════════════════ */
function refreshForm() {
  const rounds = Object.keys(DB).map(Number).sort((a, b) => b - a);
  const formTbody = document.getElementById('form-tbody');
  if (!formTbody) return;
  if (rounds.length === 0) {
    formTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted)">${LANG === 'tr' ? 'Yeterli veri yok.' : 'Not enough data.'}</td></tr>`;
    return;
  }

  const weights = [0.5, 0.3, 0.2]; // newest to oldest
  const last3 = rounds.slice(0, 3);
  const prev3 = rounds.slice(1, 4); // to calculate trend

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
    let trendHtml = `<span style="color:var(--muted)">—</span>`; // flat
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

function delRace(round) {
  if (!confirm(t('confirm-delete', round))) return;
  delete DB[round]; persist();
  refreshStandings(); refreshLog();
}

function exportData() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = `f1-weekend-league-2026-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(a.href);
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (typeof data !== 'object' || data === null || Array.isArray(data)) throw new Error('Invalid');
      // Validate structure: keys should be round numbers, values should be objects
      const validCodes = new Set(DRIVERS.map(d => d.s));
      for (const [roundKey, rd] of Object.entries(data)) {
        if (isNaN(Number(roundKey))) throw new Error('Invalid round key: ' + roundKey);
        if (typeof rd !== 'object' || rd === null) throw new Error('Invalid round data');
        for (const [s, v] of Object.entries(rd)) {
          if (s === '_PACE_') continue;
          if (!validCodes.has(s)) throw new Error((LANG === 'tr' ? 'Bilinmeyen pilot kodu: ' : 'Unknown driver code: ') + s);
          if (typeof v !== 'object' || v === null) throw new Error('Invalid driver data');
        }
      }
      const oldDB = JSON.stringify(DB);
      DB = data;
      persist();
      refreshStandings();
      refreshLog();
      setAlert(LANG === 'tr' ? `✅ Veri başarıyla içe aktarıldı. ${Object.keys(data).length} yarış.` : `✅ Data imported. ${Object.keys(data).length} races.`);
    } catch (err) {
      alert((LANG === 'tr' ? 'Geçersiz JSON dosyası!\n' : 'Invalid JSON file!\n') + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

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
    const headerH = 460; // Pilotların başlama noktasını daha aşağıya aldık
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
    // Yeşil alan tam olarak 340 pikselde bıçak gibi kesilecek (pilotlara taşmayacak)
    ctx.fillRect(0, 10, W, 340);

    // Başlıklar
    ctx.fillStyle = '#b8ff00';
    ctx.font = "bold 55px 'Barlow Condensed', sans-serif";
    ctx.fillText(t('canvas-eyebrow') || 'F1 2026', 100, 95);

    ctx.fillStyle = '#ffffff';
    ctx.font = "bold 110px 'Barlow Condensed', sans-serif";
    ctx.fillText(t('canvas-league') || 'KALKIŞ LİGİ', 100, 205);

    const done = Object.keys(DB).length;
    ctx.fillStyle = '#888888';
    ctx.font = "bold 35px 'JetBrains Mono', monospace";
    ctx.fillText(t('canvas-stat', done), 100, 280);

    // ŞIK AYRAÇ ÇİZGİSİ (Yeşil fonun bittiği sınır)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(100, 350, W - 200, 2);

    const maxAvg = sorted[0]?.avg || 10;

    // 4. Pilotları Çizme
    sorted.forEach((d, i) => {
      const y = headerH + (i * rowH);

      // Çift satırlarda hafif vurgu
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

      // İlerleme Çubuğu - Altlık 
      const barX = 850;
      const maxBarW = 700;
      const bW = Math.max(5, (d.avg / maxAvg) * maxBarW);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(barX, y - 35, maxBarW, 24);

      // İlerleme Çubuğu - Neon Yeşil Dolgu
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

/* ═══════════════════════════════════════════
   HELPERS / TABS
═══════════════════════════════════════════ */
function togglePace() {
  const acc = document.getElementById('pace-accordion');
  const body = document.getElementById('pace-body');
  const isOpen = acc.classList.toggle('open');
  body.style.display = isOpen ? 'block' : 'none';
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
  document.getElementById('alert-box').className = 'alert' + (type ? ' ' + type : '');
  document.getElementById('alert-txt').textContent = msg;
}
function go(id) {
  const IDS = ['giris', 'puan', 'siralama', 'form', 'log', 'share'];
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('on', IDS[i] === id));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  document.getElementById('panel-' + id).classList.add('on');
  if (id === 'siralama') { refreshStandings(); }
  if (id === 'log') { refreshLog(); }
  if (id === 'share' && canvasDirty) { renderCanvas(); canvasDirty = false; }
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
function init() {
  rebuildRaceSelect();
  buildTable();
  // Apply initial language — setLang already calls refreshStandings, refreshLog, renderCanvas
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === LANG.toUpperCase()));
  setLang(LANG);

  // ESC key closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('bd-overlay').classList.contains('show')) closeBD();
      if (document.getElementById('chart-overlay').classList.contains('show')) closeChart();
    }
  });
}
init();
