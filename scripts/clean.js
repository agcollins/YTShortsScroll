const fs = require('fs')
const tsconfig = require('../tsconfig.json')

const toRemove = [
    tsconfig.compilerOptions.outDir,
    'output-chrome',
    'output-firefox',
    'output-safari',
    'output-chrome.zip',
    'output-firefox.zip',
    'output-safari.zip'
]

try {
    toRemove.forEach(file => {
        if (fs.existsSync(file)) {
            fs.rmSync(file, { recursive: true })
            console.log(`Removed ${file}`)
        }
    })
} catch (e) {
    console.error('Clean completed with errors.')
    console.error(e)
}