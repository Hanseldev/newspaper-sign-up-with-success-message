// sync-theme.mjs
import fs from "fs";

// Path to your main CSS file that includes @theme
const cssFile = "./src/style.css"; // change if needed
const configFile = "./tailwind.config.js";

const css = fs.readFileSync(cssFile, "utf-8");

// Simple regex to capture --color-<name>: <value>;
const colorMatches = [...css.matchAll(/--color-([\w-]+):\s*([^;]+);/g)];
const fontMatches = [...css.matchAll(/--font-([\w-]+):\s*([^;]+);/g)];

const colors = Object.fromEntries(colorMatches.map(([_, k, v]) => [k, v.trim()]));
const fonts = Object.fromEntries(fontMatches.map(([_, k, v]) => [k, v.trim()]));

const config = `
// ⚠️ Auto-generated for IntelliSense only. Do not edit manually.
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 2)},
      fontFamily: ${JSON.stringify(fonts, null, 2)},
    },
  },
  plugins: [],
};
`;

fs.writeFileSync(configFile, config);
console.log("✅ Tailwind IntelliSense config updated!");
