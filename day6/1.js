const fs = require('fs');

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);
  let ans = 1;

  const times = lines[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .filter((t) => t.length > 0);

  const distances = lines[1]
    .split(':')[1]
    .trim()
    .split(' ')
    .filter((t) => t.length > 0);

  times.forEach((t, index) => {
    let canWin = 0;

    let d = 0;
    for (let hold = 0; hold <= t; hold++) {
      for (let i = hold; i < t; i++) {
        d += hold;
      }
      if (d > distances[index]) {
        canWin += 1;
      }
      console.log(d);
      d = 0;
    }
    ans *= canWin;
  });

  console.log(ans);
};

solve('test.txt');
