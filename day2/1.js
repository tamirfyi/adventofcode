const fs = require('fs');

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  let ans = 0;
  let impossible = [];

  lines.forEach((line) => {
    let [left, right] = line.trim().split(':');
    let id = Number.parseInt(left.split(' ')[1]);
    let rolls = right.split(';');
    ans += id;

    for (const i of rolls) {
      let colors = {
        red: 0,
        green: 0,
        blue: 0,
      };

      for (const j of i.split(',')) {
        const [amt, color] = j.trim().split(' ');
        colors[color] = Number.parseInt(amt);
      }

      if (colors['red'] > 12 || colors['green'] > 13 || colors['blue'] > 14) {
        impossible.push(id);
      }
    }
  });
  ans = ans - [...new Set(impossible)].reduce((a, b) => a + b);
  console.log(ans);
};

solve('input.txt');
