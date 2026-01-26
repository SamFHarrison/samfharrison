import Link from "next/link";
import { ROUTES } from "../../routes";
import { input } from "./input";

export default function GiftShop() {
  const batteryBanks = input.split("\n");

  let maxJoltages = [];

  for (const bank of batteryBanks) {
    let maxJoltage = 0;

    const joltages = Array.from(bank, Number);

    // PART 1
    // 1st algo, not great, but works
    // for (let i = 0; i < joltages.length - 1; i++) {
    //   const tensDigit = joltages[i];

    //   for (let j = i + 1; j < joltages.length; j++) {
    //     const onesDigit = joltages[j];

    //     const candidate = tensDigit * 10 + onesDigit;

    //     if (candidate > maxJoltage) maxJoltage = candidate;
    //   }
    // }
    // console.log("maxJoltage", maxJoltage);

    maxJoltages.push(maxJoltage);
  }

  const maxima = maxJoltages.reduce((sum, i) => sum + i);

  // PART 2
  // better algo
  function findMaxNumberIn(digits: number[], length: number): number[] {
    let result = [];
    let start = 0;

    for (let pick = 0; pick < length; pick++) {
      const remaining = length - (pick + 1);
      const end = digits.length - remaining;

      let maxDigit = -1;
      let maxIndex = start;

      for (let i = start; i < end; i++) {
        if (digits[i] > maxDigit) {
          maxDigit = digits[i];
          maxIndex = i;
        }
      }

      result.push(maxDigit);

      start = maxIndex + 1;
    }
    return result;
  }

  return (
    <>
      <Link href={ROUTES.AoC.Home}>Back</Link>
      <h1>Lobby</h1>
      <p className="secondary-text">Day 3</p>

      <hr />

      <p>Part 1: {maxima}</p>
      {/* <p>Part 2: {part2}</p> */}
    </>
  );
}
