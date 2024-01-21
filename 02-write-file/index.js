const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;

const pathFile = path.join(__dirname, 'text.txt');
const outputFile = fs.createWriteStream(pathFile);

process.on('exit', () => {
  stdout.write('Спасибо!')
});
process.on('SIGINT', () => {
  //console.log('exit');
  process.exit()});

stdout.write('Введите текст для записи в файл:\n');
stdout.write('Для выхода: ctrl+c или exit. \n');
stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') {
    process.exit()};
  outputFile.write(chunk);
});
stdin.on('error', (err) => {
    // console.log(err)
    process.stdout.write(err.message);
  });