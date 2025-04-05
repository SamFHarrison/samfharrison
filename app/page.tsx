import Image from "next/image";
import Avatar from "./assets/avatar.png";
import { Link } from "./components/Link/Link";
import { LINKS } from "./constants/globals";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="hero-container">
        <Image
          src={Avatar}
          alt="Digital avatar of Sam, he has blonde hair, glasses and a friendly expression, styled in a cartoonish emoji-like appearance"
          className="hero-widget-avatar"
          width={75}
          height={75}
          priority
        />

        <h1>Sam F-Harrison</h1>

        <p>Designing and building applications for the web and mobile</p>

        <Link label="GitHub" href={LINKS.GitHub.Profile} />
      </div>
    </main>
  );
}
