export default function dayOne(input: string) {
  const rawLines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const startingPoint = 50;
  let currentCount = startingPoint;

  // Step 1
  let landOnZeroCount = 0;
  // Step 2
  let passesZeroCount = 0;

  for (const line of rawLines) {
    const direction = line.charAt(0);
    const moves = parseInt(line.slice(1), 10);

    // BAD ALGO
    // if (direction === "R") {
    //   if (currentCount + moves >= 100) {
    //     currentCount = currentCount - (100 - moves);
    //   } else {
    //     currentCount = currentCount + moves;
    //   }
    // }
    // if (direction === "L") {
    //   if (currentCount - moves < 0) {
    //     currentCount = currentCount + (100 - moves);
    //   } else {
    //     currentCount = currentCount - moves;
    //   }

    if (direction === "R") {
      for (let index = 0; index < moves; index++) {
        currentCount = (currentCount + 1) % 100;
        if (currentCount === 0) passesZeroCount++;
      }
    } else if (direction === "L") {
      for (let index = 0; index < moves; index++) {
        currentCount = (currentCount - 1) % 100;
        if (currentCount === 0) passesZeroCount++;
      }
    } else {
      continue;
    }

    if (currentCount === 0) landOnZeroCount++;
  }

  console.log("Step 1: landOnZeroCount", landOnZeroCount);
  console.log("Step 2: passesZeroCount", passesZeroCount);

  return {
    step1: landOnZeroCount,
    step2: passesZeroCount,
  };
}
