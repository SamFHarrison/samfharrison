import { LINKS } from "../../contants";
import { SocialLink } from "../SocialLink";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <footer>
        <SocialLink href={LINKS.GitHub} icon="github" />
        <SocialLink href={LINKS.X} icon="x" />
        <SocialLink href={LINKS.LinkedIn} icon="linkedin" />
        <SocialLink href={LINKS.Instagram} icon="instagram" />
      </footer>
    </>
  );
}
