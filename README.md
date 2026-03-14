# F1 Weekend League 2026 🏎️

![F1 Weekend League Logo](images/logo.png)

![F1 Weekend League](https://img.shields.io/badge/F1-2026-red.svg)
![Version](https://img.shields.io/badge/version-1.2.1-blue.svg)
![Vanilla JS](https://img.shields.io/badge/tech-Vanilla_JS-yellow.svg)

F1 Weekend League is a frontend web application for tracking and evaluating Formula 1 driver performances throughout the 2026 season. It features a custom, highly detail-oriented 10-point scoring system that takes into account absolute positions, car potentials (Expected Position - xP), teammate battles, and sprint weekends.

[Türkçe README için tıklayın (Turkish README)](README.tr.md)

![F1 WEEKEND LEAGUE](images/main-page.png)

## 📖 About The Project
The purpose of this project is to eliminate the inequalities arising from car performance differences in Formula 1. By establishing an "Expected Position (xP)" based on the inherent pace of each car, drivers are scored on how well they perform relative to their machinery, alongside direct teammate comparisons and absolute finishing positions. 

![App Screenshot](images/standing-page.png)

## ✨ Key Features
- **10-Point Scoring Engine:** A fair evaluation algorithm based on:
  - **Position (5.0 pts):** Qualifying performance against car potential & Race finish position.
  - **Performance (3.0 pts):** Race progression against expected position & Fastest lap pace.
  - **Teammate Battle (2.0 pts):** Direct face-off in Quali, Race, and fastest lap to neutralize car advantages.
  - **Bonuses (+3.0 max) & Penalties (-4.0 max):** DNF faults, mechanical failures, and sprint format calculations.
- **Jolpi F1 API Integration:** Pull race results directly via API instead of manual entry.
- **Bilingual UI:** Native support for English and Turkish.
- **Interactive Dashboards:** Season standings, Form (Power Rankings), rule breakdowns, and comprehensive head-to-head statistics.
- **Data Export/Import:** Save your season progression locally as a reusable JSON file.
- **Social Media Ready:** Generate and download customized 𝕏 (Twitter) share cards directly from an HTML Canvas object.

## 🔄 Version History & Changelog

### [v1.2.1] — 2026-03-14
**New Features:**
- **Sticky Pilot Columns:** Number, name, and team columns stay fixed on the left during horizontal scrolling in the data entry table.
- **Sticky Score Preview:** Live score column stays fixed on the right so you always see the points while scrolling.
- **Dynamic Sprint Columns:** Sprint columns auto-hide on normal race weekends and only appear during sprint weekends.
- **Pace Map Memory:** Car potential rankings auto-load from the previous race when a new race is selected.

**Balance Changes:**
- Adjusted maximum values and decay rates for `racePts`, `qualPts`, and `craftPts`. This ensures that backmarkers' xP bonus does not surpass frontrunners' absolute position points. The total 10 pt limit remains unchanged.

**Fixes:**
- Fixed a layout issue where the car potential table's sticky styles were affecting other tables.

### [v1.2.0] — 2026-03-14
**New Features:**
- **Modular Architecture:** Split the monolithic `app.js` into 5 distinct modules (`data.js`, `i18n.js`, `scoring.js`, `ui.js`, `canvas.js`, `stats.js`) for better maintainability.
- **Detailed Stats:** Added a new tab showing drivers' special season achievements (e.g., Q King, Podium Master, Speed Demon).
- **Dynamic Score Colors:** Points in Standings and Form tables now change colors progressively from Green to Red based on performance levels.
- **Improved UI:** Car Potential section is now a space-saving interactive accordion.

### [v1.0.0] — Initial Release — 2026-03-14
- Core 10/10 scoring engine implemented (Position, Performance, Teammate Battle).
- Qualifying xP system to measure qualifying performance against car potential.
- Full Sprint weekend support (including Sprint Quali errors and mechanic failures).
- DNF·P / DNF·NC / DNS·P / DNS·NC differentiations.
- Jolpi F1 API integration (Fetch API button).
- Bilingual support (TR / EN).
- Season standings, form list, head-to-head comparisons.
- HTML Canvas 𝕏 (Twitter) image generation.
- JSON Export / Import local backup system.

## 🚀 Live Demo
*(You can add your GitHub Pages link here once deployed: `https://<your-username>.github.io/f1-league`)*

## 🛠️ Technologies
- **HTML5 & CSS3** (Custom UI, vanilla styling)
- **Vanilla JavaScript (ES6)** (Modular structure)
- **Chart.js** (For driver performance trend line graphs)

## 📦 Setup & Usage
Since this is a client-side vanilla JavaScript application with no complex build steps or backend servers required, running it is instant:
1. Clone this repository: `git clone https://github.com/your-username/f1-league.git`
2. Open the directory on your machine.
3. Simply launch `index.html` in any modern web browser or serve it using tools like VS Code Live Server.
