import Link from "next/link";
import { ROUTES } from "../routes";

export default function AdventOfCode() {
  return (
    <>
      <Link href={ROUTES.Home}>Back</Link>
      <h1>Advent of Code</h1>

      <ol>
        <li>
          <Link href={ROUTES.AoC.Home + ROUTES.AoC.SecretEntrance}>
            Day 1: Secret Entrance
          </Link>
        </li>

        <li>
          <Link href={ROUTES.AoC.Home + ROUTES.AoC.GiftShop}>
            Day 2: Gift Shop
          </Link>
        </li>
      </ol>
    </>
  );
}
