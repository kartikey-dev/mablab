const fs = require('fs');
const path = require('path');

const publicDir = 'C:\\Users\\Kumar Kartikey\\.gemini\\antigravity-ide\\scratch\\mablab\\public';
const imagesDir = path.join(publicDir, 'images');

const logoSvg = path.join(imagesDir, 'logo.svg');
const logoPng = path.join(imagesDir, 'logo.png');

// Copy into imagesDir
fs.copyFileSync(logoSvg, path.join(imagesDir, 'favicon.svg'));
fs.copyFileSync(logoPng, path.join(imagesDir, 'favicon-96x96.png'));
fs.copyFileSync(logoPng, path.join(imagesDir, 'apple-touch-icon.png'));
fs.copyFileSync(logoPng, path.join(imagesDir, 'favicon.ico'));

// Create site.webmanifest inside images/
const manifest = {
  name: "Mablab - Marketing and Branding Lab",
  short_name: "Mablab",
  icons: [
    {
      src: "/images/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "/images/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  ],
  theme_color: "#5B21B6",
  background_color: "#FFFFFF",
  display: "standalone"
};

fs.writeFileSync(path.join(imagesDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

console.log('Successfully created all favicon assets inside public/images/');
