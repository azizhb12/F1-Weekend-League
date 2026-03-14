/* ═══════════════════════════════════════════
   DATA CONSTANTS
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

const TEAMS = ["Ferrari", "Red Bull", "McLaren", "Mercedes", "Aston Martin", "Williams", "Alpine", "Racing Bulls", "Haas", "Audi", "Cadillac"];

function raceName(race) { 
  if (!race) return '';
  return LANG === 'tr' ? race.nameTR : race.name; 
}
