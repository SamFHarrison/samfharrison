import Image from "next/image";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import LinkedInLogo from "../../assets/LinkedInLogo.svg";
import X from "../../assets/X.svg";
import { LINKS } from "../../links";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <hr />
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
        <a target="_blank" href={LINKS.X}>
          <Image src={X} alt="X logo" width={24} height={24} unoptimized />
        </a>
      </div>
    </footer>
  );
}
