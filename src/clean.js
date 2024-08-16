const fs = require('fs')

try {
    if (fs.existsSync('./build')) {
        fs.rmSync('./build', { recursive: true })
        console.log('Clean complete.')
    }
} catch (e) {
    console.error('Clean completed with errors.')
    console.error(e)
}