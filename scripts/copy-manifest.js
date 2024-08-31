const fs = require('fs');
const path = require('path');

const browser = process.argv[2];
const sourceManifest = browser === 'firefox' ? 'manifest.firefox.json' : 'manifest.json';
const targetDir = path.join(__dirname, '..', 'build');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(
    path.join(__dirname, '..', sourceManifest),
    path.join(targetDir, 'manifest.json')
);

console.log(`Copied ${sourceManifest} to build/manifest.json`);
