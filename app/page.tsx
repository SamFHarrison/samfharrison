import Image from "next/image";
import Avatar from "../public/avatar.png";
import "./page.css";

export default function Home() {
  return (
    <section className="widget-large">
      <Image
        src={Avatar}
        alt="Digital avatar of Sam, he has blonde hair, glasses and a friendly expression, styled in a cartoonish emoji-like appearance."
        className="hero-widget-avatar"
      />

      <div className="hero-widget-text-wrapper">
        <h1>Hi, I&apos;m Sam</h1>

        <p className="hero-widget-tagline">Building apps for web and mobile</p>
      </div>
    </section>
  );
}
