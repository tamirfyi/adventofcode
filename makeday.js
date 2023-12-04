const readline = require('readline');
const fs = require('fs');
const path = require('path');

function makeDay(param) {
  const dayDir = `day${param}`;

  if (fs.existsSync(dayDir)) {
    console.log(`A directory for day ${param} already exists!`);
    return;
  }

  try {
    fs.mkdirSync(dayDir, { recursive: true });

    const files = ['1.js', '2.js', 'test.txt', 'input.txt'];

    files.forEach((file) => {
      fs.writeFileSync(path.join(dayDir, file), '');
    });

    console.log(`Directory and files for day ${param} created successfully.`);
  } catch (err) {
    console.error(`Error creating directory for day ${param}: ${err.message}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Day: ', (userInput) => {
  const dayNumber = parseInt(userInput);

  if (isNaN(dayNumber) || dayNumber <= 0) {
    console.log('Invalid input. Please enter a positive integer.');
    rl.close();
  } else {
    console.log(`Creating directory for day ${dayNumber}...`);
    makeDay(dayNumber);
    rl.close();
  }
});
