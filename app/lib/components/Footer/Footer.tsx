import Image from "next/image";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import LinkedInLogo from "../../assets/LinkedInLogo.svg";
import XLogo from "../../assets/X.svg";
import { LINKS } from "../../contants";
import HomeLink from "../HomeLink/HomeLink";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <footer>
        <div className="social-links" aria-label="Social links">
          <a target="_blank" href={LINKS.GitHub}>
            <Image
              src={GitHubLogo}
              alt="GitHub logo"
              width={24}
              height={24}
              unoptimized
            />
          </a>
          <a target="_blank" href={LINKS.X}>
            <Image
              src={XLogo}
              alt="X logo"
              width={24}
              height={24}
              unoptimized
            />
          </a>
          <a target="_blank" href={LINKS.LinkedIn}>
            <Image
              src={LinkedInLogo}
              alt="LinkedIn logo"
              width={24}
              height={24}
              unoptimized
            />
          </a>
          <a target="_blank" href={LINKS.Instagram}>
            <Image
              src={InstagramLogo}
              alt="Instagram logo"
              width={24}
              height={24}
              unoptimized
            />
          </a>
        </div>

        <HomeLink />
      </footer>
    </>
  );
}
