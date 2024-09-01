const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

function generateManifest(browser) {
    const manifest = {
        manifest_version: browser === 'chrome' ? 3 : 2,
        name: 'YTShortsScroll',
        description: packageJson.description,
        version: packageJson.version,
        content_scripts: [
            {
                js: ['content.js'],
                matches: ['*://*.youtube.com/*'],
                run_at: 'document_idle'
            }
        ],
        permissions: []
    };

    const action = {
        default_popup: 'popup.html',
        default_icon: 'app_icon.png'
    }

    if (browser === 'firefox') {
        manifest.browser_action = action 
    } else {
        manifest.action = action 
    }

    return manifest
}

const browser = process.env.BROWSER || 'chrome';
console.log(`Generating manifest for ${browser}`);
const manifest = generateManifest(browser);

fs.writeFileSync(path.join(__dirname, '..', 'build', 'manifest.json'), JSON.stringify(manifest, null, 2));