const AdmZip = require('adm-zip');
const zip = new AdmZip();
try {
    zip.addLocalFile('./manifest.json');
    zip.addLocalFolder('./build');
    zip.writeZip('build/output.zip');
}
catch (e) {
    console.log('Could not create archive. Cause:');
    console.error(e);
}
//# sourceMappingURL=package.js.map