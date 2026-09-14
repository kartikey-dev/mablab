const fs = require('fs');
const path = require('path');

const publicDir = 'C:\\Users\\Kumar Kartikey\\.gemini\\antigravity-ide\\scratch\\mablab\\public';

const logoSvg = path.join(publicDir, 'images', 'logo.svg');
const logoPng = path.join(publicDir, 'images', 'logo.png');

// Copy favicon SVG
fs.copyFileSync(logoSvg, path.join(publicDir, 'favicon.svg'));

// Copy PNG favicons
fs.copyFileSync(logoPng, path.join(publicDir, 'favicon-96x96.png'));
fs.copyFileSync(logoPng, path.join(publicDir, 'apple-touch-icon.png'));
fs.copyFileSync(logoPng, path.join(publicDir, 'favicon.ico'));

// Create site.webmanifest
const manifest = {
  name: "Mablab - Marketing and Branding Lab",
  short_name: "Mablab",
  icons: [
    {
      src: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  ],
  theme_color: "#5B21B6",
  background_color: "#FFFFFF",
  display: "standalone"
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

console.log('Successfully created all favicon assets and webmanifest in public/');
