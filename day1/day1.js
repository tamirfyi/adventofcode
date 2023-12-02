const fs = require('fs');
const readline = require('readline');

async function part1(path) {
  let ans = 0;

  try {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      let nums = '';

      for (let letter of line) {
        if (!isNaN(letter)) {
          nums += letter;
        }
      }

      let converted = nums[0] + nums[nums.length - 1];
      let num = parseInt(converted);
      ans += num;
    }

    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

async function part2(path) {
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

  try {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (let line of rl) {
      //track & sort digit string occurrences by index
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
    }

    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

part1('part1/in2.txt');
part2('part2/in2.txt');
