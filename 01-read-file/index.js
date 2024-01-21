const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathFile, 'utf-8');
stream.on('data', (chunk) => {
  process.stdout.write(chunk);
});
stream.on('error', (err) => {
  // console.log(err)
  process.stdout.write(err.message);
});