import Image from "next/image";
import Avatar from "../public/avatar.jpg";
import Button from "./components/Button/Button";
import { LINKS } from "./constants/globals";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="background-overlay" />

      <section className="hero">
        <Image
          src={Avatar}
          alt="Sam's digital avatar with blue eyes, blonde hair and glasses"
          width={200}
          height={200}
          placeholder="blur"
          className="avatar"
        />

        <div className="hero-info">
          <h1>Hi, I&apos;m Sam.</h1>

          <p className="headline">
            I design and build applications for the web and mobile.
          </p>

          <Button href={LINKS.Figma}>Open this site in Figma</Button>

          <div className="button-group">
            <Button variant="secondary" href={LINKS.LinkedIn}>
              LinkedIn
            </Button>

            <Button variant="secondary" href={LINKS.GitHub}>
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
