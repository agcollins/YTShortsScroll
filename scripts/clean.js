const fs = require('fs')
const tsconfig = require('../tsconfig.json')

try {
    if (fs.existsSync(tsconfig.compilerOptions.outDir)) {
        fs.rmSync(tsconfig.compilerOptions.outDir, { recursive: true })
        console.log('Clean complete.')
    }
} catch (e) {
    console.error('Clean completed with errors.')
    console.error(e)
}