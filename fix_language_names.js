const fs = require('fs');

let content = fs.readFileSync('lib/i18n.ts', 'utf8');

// Fix language names in getLanguageName function
const replacements = [
  // Chinese
  [/zh:\s*"[^"]*"(?=,\s*\/\/.*Chinese|,\s*$|,\s*ja:)/m, 'zh: "中文"'],
  // Japanese  
  [/ja:\s*"[^"]*"(?=,\s*\/\/.*Japanese|,\s*$|,\s*pt:)/m, 'ja: "日本語"'],
  // Portuguese
  [/pt:\s*"Portugu[^"]*"(?=,\s*\/\/.*Portuguese|,\s*$|,\s*ru:)/m, 'pt: "Português"'],
  // Russian
  [/ru:\s*"[^"]*"(?=,\s*\/\/.*Russian|,\s*$|,\s*vi:)/m, 'ru: "Русский"'],
  // Vietnamese
  [/vi:\s*"Ti[^"]*"(?=,\s*\/\/|,?\s*})/m, 'vi: "Tiếng Việt"'],
];

for (const [pattern, replacement] of replacements) {
  content = content.replace(pattern, replacement);
}

fs.writeFileSync('lib/i18n.ts', content, 'utf8');
console.log('Successfully fixed all language names!');
