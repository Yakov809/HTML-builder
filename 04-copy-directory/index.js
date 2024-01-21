const path = require('path');
const fs = require('fs').promises;

const pathFolder = path.join(__dirname, 'files');
const pathFolderCopy = path.join(__dirname, 'files-copy');

async function copyDir() {
  try {
    await fs.rm(pathFolderCopy, { 
        force: true, 
        recursive: true 
    });
    await fs.mkdir(pathFolderCopy, { 
        recursive: true 
    });
    const files = await fs.readdir(
      pathFolder,
      { withFileTypes: true },
      (error, files) => {
        return files;
      },
    );
    files.forEach((file) => {
      const fileIndex = path.join(pathFolder, file.name);
      const fileCopy = path.join(pathFolderCopy, file.name);
      fs.copyFile(fileIndex, fileCopy);
    });
    process.stdout.write('File copying completed. \n');
  } catch (error) {
    console.log(error.message);
  }
}
copyDir();