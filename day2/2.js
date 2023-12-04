const fs = require('fs');
const readline = require('readline');

async function solve(path) {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  let ans = 0;

  lines.forEach((line) => {
    let [left, right] = line.trim().split(':');
    let id = Number.parseInt(left.split(' ')[1]);
    let rolls = right.split(';');

    let maxcolors = {
      red: 0,
      green: 0,
      blue: 0,
    };
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

      maxcolors = {
        red: Math.max(maxcolors.red, colors['red']),
        green: Math.max(maxcolors.green, colors['green']),
        blue: Math.max(maxcolors.blue, colors['blue']),
      };
    }
    const power = maxcolors.red * maxcolors.blue * maxcolors.green;
    ans += power;
  });

  console.log(ans);
}

solve('input.txt');
