const fs = require('fs');

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  const time = [
    Number.parseInt(
      lines[0]
        .split(':')[1]
        .trim()
        .split(' ')
        .filter((t) => t.length > 0)
        .join('')
    ),
  ];

  const distance = [
    Number.parseInt(
      lines[1]
        .split(':')[1]
        .trim()
        .split(' ')
        .filter((t) => t.length > 0)
        .join('')
    ),
  ];

  let ans = 0;
  time.forEach((t, index) => {
    for (let hold = 0; hold < t; hold++) {
      if (hold * (t - hold) > distance[index]) {
        ans += 1;
      }
    }
  });

  console.log(ans);
};

solve('input.txt');
