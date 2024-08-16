const AdmZip = require('adm-zip')

const zip = new AdmZip()

try {
    zip.addLocalFile('./manifest.json')
    zip.addLocalFile('./popup.html')
    zip.addLocalFile('./app_icon.png')
    zip.addLocalFolder('./build')
    zip.writeZip('output.zip')
} catch (e) {
    console.log('Could not create archive. Cause:')
    console.error(e)
}

