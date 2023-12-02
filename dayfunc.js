async function part1(path) {
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
