import Image from "next/image";
import Avatar from "../public/avatar.jpg";
import Button from "./components/Button/Button";
import { LINKS } from "./constants/globals";
import "./page.css";

export default function Home() {
  return (
    <main>
      {/* <Image
          src={Avatar}
          alt="Sam's digital avatar with blue eyes, blonde hair and glasses"
          width={200}
          height={200}
          placeholder="blur"
          className="avatar"
        /> */}

      <section className="hero-info"></section>
    </main>
  );
}
