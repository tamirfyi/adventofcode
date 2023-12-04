const fs = require('fs');

const isNumber = (character) => {
  return /\d/.test(character);
};

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);
  let ans = 0;

  lines.forEach((line) => {
    let [card, game] = line.split(':');
    let [wnums, nums] = game.split('|');

    wnums = wnums.split(' ').filter((wnum) => wnum.length > 0);
    nums = nums.split(' ').filter((num) => num.length > 0);

    wnums = new Set(wnums);
    nums = new Set(nums);

    let reward = 1;
    let score = 0;
    nums.forEach((num) => {
      if (wnums.has(num)) {
        if (reward == 1) {
          score = 1;
          reward = 2;
        } else {
          score *= reward;
        }
      }
    });
    ans += score;
  });

  console.log(ans);
};

solve('input.txt');
