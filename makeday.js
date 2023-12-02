const readline = require('readline');
const fs = require('fs');
const path = require('path');

function makeDay(param) {
  const baseDir = `day${param}`;

  if (fs.existsSync(`day${param}`)) {
    console.log('A directory for that day already exists!');
    return;
  }

  fs.mkdirSync(baseDir, { recursive: true });

  fs.writeFileSync(path.join(baseDir, `day${param}.js`), '');

  const subDirs = ['part1', 'part2'];
  const files = ['in1.txt', 'in2.txt', 'test.txt'];

  subDirs.forEach((dir) => {
    const dirPath = path.join(baseDir, dir);
    fs.mkdirSync(dirPath);

    files.forEach((file) => {
      fs.writeFileSync(path.join(dirPath, file), '');
    });
  });

  console.log(`Done. Good luck!`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Day: ', (userInput) => {
  console.log(`Creating directory for day ${userInput}...`);
  makeDay(userInput);
  rl.close();
});
