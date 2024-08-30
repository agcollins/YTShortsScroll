const AdmZip = require('adm-zip')
const manifest = require('../manifest.json')
const tsconfig = require('../tsconfig.json')
const fs = require('fs')

const zip = new AdmZip()
const outputFile = 'output.zip'

try {
    if (fs.existsSync(outputFile)) {
        fs.rmSync(outputFile)
        console.log('Removed existing output file.')
    }
    zip.addLocalFile('./manifest.json')
    zip.addLocalFile(manifest.action.default_icon)
    zip.addLocalFile(manifest.action.default_popup)
    zip.addLocalFolder(tsconfig.compilerOptions.outDir)
    zip.extractAllTo('output', true)
    zip.writeZip(outputFile)
} catch (e) {
    console.log('Could not create archive. Cause:')
    console.error(e)
}

