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
  const nums = new Set();
  let ans = 0;

  lines.forEach((line, row) => {
    line.forEach((char, col) => {
      if (isSymbol(char)) {
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
      }
    });
  });

  nums.forEach((num) => {
    const [x, start] = num.split(',').map(Number);
    let numberStr = '';
    let y = start;
    while (y < lines[x].length && isNumber(lines[x][y])) {
      numberStr += lines[x][y];
      y++;
    }
    if (numberStr) {
      ans += parseInt(numberStr, 10);
    }
  });

  console.log(ans);
};

solve('input.txt');
