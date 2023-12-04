const fs = require('fs');
const readline = require('readline');

async function solve(path) {
  let ans = 0;

  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  lines.forEach((line) => {
    let nums = '';

    for (let letter of line) {
      if (!isNaN(letter)) {
        nums += letter;
      }
    }

    let converted = nums[0] + nums[nums.length - 1];
    let num = parseInt(converted);
    ans += num;
  });

  console.log(ans);
}

solve('input.txt');
