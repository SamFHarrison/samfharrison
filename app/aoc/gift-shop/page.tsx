import Link from "next/link";
import { ROUTES } from "../../routes";
import { input } from "./input";

export default function GiftShop() {
  let ranges: string[][] = [];

  input.split(",").forEach((range) => {
    const rangeArray = range.split("-");
    ranges.push(rangeArray);
  });

  let invalidNumbers: number[] = [];

  ranges.forEach((range) => {
    for (let i = parseInt(range[0]); i <= parseInt(range[1]); i++) {
      let currentNumber = String(i);

      // if (currentNumber.length % 2 !== 1) {
      const midpoint = currentNumber.length / 2;

      // STEP 1
      // const halves = [
      //   currentNumber.slice(0, midpoint),
      //   currentNumber.slice(midpoint),
      // ];

      // if (halves[0] === halves[1])
      //   invalidNumbers.push(parseInt(currentNumber));

      // STEP 2
      for (let index = 1; index <= currentNumber.length / 2; index++) {
        const slice = currentNumber.slice(0, index);

        if (currentNumber.length % slice.length !== 0) continue;

        const matcher = slice.repeat(currentNumber.length / slice.length);

        if (matcher === currentNumber) {
          invalidNumbers.push(parseInt(currentNumber));
          break;
        }
      }
      // }
    }

    console.log("invalidNumbers", invalidNumbers);
  });

  const sumOfInvalidNumbers = invalidNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log("Step 1:", sumOfInvalidNumbers);

  return (
    <>
      <Link href={ROUTES.AoC.Home}>Back</Link>
      <h1>Secret Entrance</h1>
      <p className="secondary-text">Day 1</p>
    </>
  );
}
