const path = require('path');
const fs = require('fs');
const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, { withFileTypes: true }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    process.stdout.write('The data presented in the format: \n');
    process.stdout.write('<file name>-<file extension>-<file size> \n');
    files.forEach((file) => {
      if (file.isFile()) {
        const fileName = file.name;
        const extName = path.extname(file.name);
        fs.stat(path.join(pathFolder, fileName), (error, item) => {
          if (error) {
            console.log(error);
        } else {
            const resultFileName = fileName.replace(extName, '');
            const resultExtName = extName.replace('.', '');
            const resultSize = item.size / 1000;
            const data = `${resultFileName} - ${resultExtName} - ${resultSize}kb`;
            console.log(data);
          }
        });
      }
    });
  }
});