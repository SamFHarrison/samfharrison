import Link from 'next/link';
import { ROUTES } from '../../routes';
import { input } from './input';
import dayOne from './solution';

export default function SecretEntrance() {
  const answer = dayOne(input);

  return (
    <>
      <Link href={ROUTES.AoC.Home}>Back</Link>
      <h1>Secret Entrance</h1>
      <p className="secondary-text">Day 1</p>

      <hr />

      <p>Step 1: {answer.step1}</p>
      <p>Step 2: {answer.step2}</p>
    </>
  );
}
