const fs = require('fs');

const parseMap = (mapText) => {
  return mapText.split('\n').map((line) => {
    const [destination, source, length] = line.split(' ').map(Number);
    return {
      sourceStart: source,
      sourceEnd: source + length - 1,
      destinationStart: destination,
      destinationEnd: destination + length - 1,
    };
  });
};

const convertNumber = (number, conversionRanges) => {
  for (const range of conversionRanges) {
    if (number >= range.sourceStart && number <= range.sourceEnd) {
      return range.destinationStart + (number - range.sourceStart);
    }
  }
  return number;
};

const solve = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const lines = file.trim().split('\n\n');
  const maps = lines.slice(1).map(parseMap);
  const seeds = lines[0].split(':')[1].trim().split(' ').map(Number);

  let minLocation = Infinity;
  seeds.forEach((seed) => {
    let currentNumber = seed;
    maps.forEach((map) => {
      currentNumber = convertNumber(currentNumber, map);
    });
    minLocation = Math.min(minLocation, currentNumber);
  });

  console.log(minLocation);
};

solve('input.txt');
