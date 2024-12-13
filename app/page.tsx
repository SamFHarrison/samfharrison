import {
  FigmaAppIcon,
  GitHubAppIcon,
  InstagramAppIcon,
  LinkedInAppIcon,
} from "./assets/appIcons";
import AppIcon from "./components/AppIcon/AppIcon";
import AoC from "./components/Widgets/AoC/AoC";
import Hero from "./components/Widgets/Hero/Hero";
import { LINKS } from "./constants/globals";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="app-icon-container">
        <AppIcon name="figma" appIcon={FigmaAppIcon} url={LINKS.Figma} />

        <AppIcon
          name="instagram"
          appIcon={InstagramAppIcon}
          url={LINKS.Instagram}
        />

        <AppIcon
          name="github"
          appIcon={GitHubAppIcon}
          url={LINKS.GitHub.Profile}
        />

        <AppIcon
          name="linkedin"
          appIcon={LinkedInAppIcon}
          url={LINKS.LinkedIn}
        />
      </section>

      <AoC />
    </main>
  );
}
