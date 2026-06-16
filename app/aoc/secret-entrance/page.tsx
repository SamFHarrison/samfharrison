import { input } from "./input";
import dayOne from "./solution";

export default function SecretEntrance() {
  const answer = dayOne(input);

  return (
    <>
      <h1>Secret Entrance</h1>
      <p className="secondary-text">Day 1</p>

      <hr />

      <p>Part 1: {answer.step1}</p>
      <p>Part 2: {answer.step2}</p>
    </>
  );
}
