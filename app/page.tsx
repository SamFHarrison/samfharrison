import Image from "next/image";
import {
  FigmaAppIcon,
  GitHubAppIcon,
  InstagramAppIcon,
  LinkedInAppIcon,
} from "./assets/appIcons";
import Hero from "./components/Widgets/Hero/Hero";
import { LINKS } from "./constants/globals";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="app-icon-container">
        <a className="app-icon-button" target="_blank" href={LINKS.Figma}>
          <Image className="app-icon" src={FigmaAppIcon} alt="Figma app icon" />
        </a>

        <a className="app-icon-button" target="_blank" href={LINKS.Instagram}>
          <Image
            className="app-icon"
            src={InstagramAppIcon}
            alt="Instagram app icon"
          />
        </a>

        <a className="app-icon-button" target="_blank" href={LINKS.GitHub}>
          <Image
            className="app-icon"
            src={GitHubAppIcon}
            alt="GitHub app icon"
          />
        </a>

        <a className="app-icon-button" target="_blank" href={LINKS.LinkedIn}>
          <Image
            className="app-icon"
            src={LinkedInAppIcon}
            alt="LinkedIn app icon"
          />
        </a>
      </section>
    </main>
  );
}
