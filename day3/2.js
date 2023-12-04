const fs = require('fs');

const isSymbol = (character) => {
  return /[^\w\s.]/.test(character);
};

const isNumber = (character) => {
  return /\d/.test(character);
};

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').map((line) => line.split(''));
  let nums = new Set();
  let gears = [];
  let ans = 0;

  lines.forEach((line, row) => {
    line.forEach((char, col) => {
      if (isSymbol(char) && char === '*') {
        for (
          let x = Math.max(row - 1, 0);
          x <= Math.min(row + 1, lines.length - 1);
          x++
        ) {
          for (
            let y = Math.max(col - 1, 0);
            y <= Math.min(col + 1, line.length - 1);
            y++
          ) {
            if (isNumber(lines[x][y])) {
              let start = y;
              while (start > 0 && isNumber(lines[x][start - 1])) {
                start--;
              }
              nums.add(`${x},${start}`);
            }
          }
        }
        if (nums.size == 2) {
          nums.forEach((num) => gears.push(num));
        }
        nums.clear();
      }
    });
  });

  let gearnums = [];
  gears.forEach((num) => {
    const [x, start] = num.split(',').map(Number);
    let numberStr = '';
    let y = start;
    while (y < lines[x].length && isNumber(lines[x][y])) {
      numberStr += lines[x][y];
      y++;
    }
    if (numberStr) {
      gearnums.push(parseInt(numberStr, 10));
    }
  });

  while (gearnums.length != 0) {
    const first = gearnums.shift();
    const second = gearnums.shift();
    ans += first * second;
  }
  console.log(ans);
};

solve('input.txt');
