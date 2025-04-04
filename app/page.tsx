import Image from "next/image";
import Avatar from "./assets/avatar.png";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Image
        src={Avatar}
        alt="Digital avatar of Sam, he has blonde hair, glasses and a friendly expression, styled in a cartoonish emoji-like appearance"
        className="hero-widget-avatar"
        width={100}
        height={100}
        priority
      />

      <h1>Hi, I&apos;m Sam</h1>
    </main>
  );
}
