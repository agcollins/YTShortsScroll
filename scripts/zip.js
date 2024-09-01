const AdmZip = require('adm-zip')
const tsconfig = require('../tsconfig.json')
const fs = require('fs')
const path = require('path')

const manifest = require('../build/manifest.json')

const zip = new AdmZip()
const outputDir = 'output'
const outputFile = `${outputDir}.zip`

try {
    if (fs.existsSync(outputFile)) {
        fs.rmSync(outputFile)
        console.log('Removed existing output file.')
    }
    zip.addLocalFile(path.join(tsconfig.compilerOptions.outDir, 'manifest.json'))
    zip.addLocalFile(manifest.action ? manifest.action.default_icon : manifest.browser_action.default_icon)
    zip.addLocalFile(manifest.action ? manifest.action.default_popup : manifest.browser_action.default_popup)
    zip.addLocalFolder(tsconfig.compilerOptions.outDir)
    zip.extractAllTo(outputDir, true)
    zip.writeZip(outputFile)
    console.log(`Created ${outputFile}`)
} catch (e) {
    console.log('Could not create archive. Cause:')
    console.error(e)
}

