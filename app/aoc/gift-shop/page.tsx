import Link from "next/link";
import { ROUTES } from "../../routes";
import { input } from "./input";
import dayTwo from "./solution";

export default function GiftShop() {
  const part1 = dayTwo(input, 1);
  const part2 = dayTwo(input, 2);

  return (
    <>
      <Link href={ROUTES.AoC.Home}>Back</Link>
      <h1>Gift Shop</h1>
      <p className="secondary-text">Day 2</p>

      <hr />

      <p>Step 1: {part1}</p>
      <p>Step 2: {part2}</p>
    </>
  );
}
