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

    let possibleGames = [];

    for await (const line of rl) {
      const gameAndRolls = line.split(':');
      const id = gameAndRolls[0].split(' ')[1];

      const turns = gameAndRolls[1].split(';');

      let allTurnsInGame = [];
      for (let roll of turns) {
        roll = roll.replaceAll(' ', '').split(',');
        for (let dice of roll) {
          let numEnd = 0;
          for (let i = 0; i < dice.length; i++) {
            if (!isNaN(dice[i])) {
              numEnd++;
            }
          }
          const num = dice.substring(0, numEnd);
          const color = dice.substring(numEnd, dice.length);

          allTurnsInGame.push({
            color,
            num,
          });
        }
      }
      let isPossible = true;
      for (let turn of allTurnsInGame) {
        isPossible = checkColors(Number.parseInt(turn.num), turn.color);
        if (!isPossible) {
          break;
        }
      }
      if (isPossible) {
        possibleGames.push(Number.parseInt(id));
      }
    }

    ans = possibleGames.reduce((a, b) => a + b);
    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

const checkColors = (num, color) => {
  const red = 12;
  const green = 13;
  const blue = 14;

  if (color === 'green' && num > green) {
    return false;
  } else if (color === 'blue' && num > blue) {
    return false;
  } else if (color === 'red' && num > red) {
    return false;
  }
  return true;
};

async function part2(path) {
  let ans = 0;

  try {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
    }

    console.log(ans);
  } catch (err) {
    console.error(err);
  }
}

part1('part1/in2.txt');
