const fs = require('fs');
const path = require('path');

const browser = process.argv[2] ?? 'chrome';
const sourceManifest = `manifest.${browser}.json`
const targetDir = path.join(__dirname, '..', 'build');

if (!fs.existsSync(sourceManifest)) {
    console.error(`Source manifest ${sourceManifest} does not exist`);
    process.exit(1);
}

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(
    path.join(__dirname, '..', sourceManifest),
    path.join(targetDir, 'manifest.json')
);

console.log(`Copied ${sourceManifest} to build/manifest.json`);
