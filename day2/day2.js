const fs = require('fs');
const readline = require('readline');

async function part1(path) {
  let ans = 0;
  let impossible = [];

  try {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let games = 0;
    for await (const line of rl) {
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
    }

    ans = ans - [...new Set(impossible)].reduce((a, b) => a + b);

    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

async function part2(path) {
  let ans = 0;
  let impossible = [];

  try {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let games = 0;
    for await (const line of rl) {
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
    }

    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

// part1('part1/in2.txt');
part2('part2/in2.txt');
