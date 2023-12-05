const fs = require('fs');

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  let ans = 0;
  let cardCopies = Array(lines.length).fill(1);

  lines.forEach((line, index) => {
    let [wnums, nums] = line.split('|').map((part) =>
      part
        .trim()
        .split(' ')
        .filter((num) => num.length > 0)
    );

    wnums = new Set(wnums);
    nums = new Set(nums);

    let copies = 0;
    nums.forEach((num) => {
      if (wnums.has(num)) {
        copies += 1;
      }
    });

    for (let i = index + 1; i <= index + copies && i < lines.length; i++) {
      cardCopies[i] += cardCopies[index];
    }
  });

  ans = cardCopies.reduce((sum, count) => sum + count, 0);

  console.log(ans);
};

solve('input.txt');
