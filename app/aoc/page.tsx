import Link from "next/link";
import { ROUTES } from "../lib/contants";

export default function AdventOfCode() {
  return (
    <>
      <h1>Advent of Code</h1>
      <p className="secondary-text">Living artifact</p>

      <hr />

      <p>I like tinkering with AoC when I have time.</p>

      <h2>2025</h2>
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

        <li>
          <Link href={ROUTES.AoC.Home + ROUTES.AoC.Lobby}>Day 3: Lobby</Link>
        </li>
      </ol>
    </>
  );
}
