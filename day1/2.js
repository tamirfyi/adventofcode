const fs = require('fs');

const solve = (path) => {
  let ans = 0;

  const digits = {
    oneight: '18',
    twone: '21',
    threeight: '38',
    eighthree: '83',
    eightwo: '82',
    fiveight: '58',
    sevenine: '79',
    nineight: '98',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  const file = fs.readFileSync(path, 'utf8');
  const lines = file.split('\n').filter((line) => line.length > 0);

  lines.forEach((line) => {
    for (let [key, val] of Object.entries(digits)) {
      line = line.replace(key, val);
    }

    let numstr = [];
    for (let char of line) {
      if (!isNaN(char)) {
        numstr.push(char);
      }
    }
    ans += Number.parseInt(`${numstr[0]}${numstr[numstr.length - 1]}`);
  });

  console.log(ans);
};

solve('input.txt');
