import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./SocialIcons";
import "./SocialLink.css";

const icons = {
  github: { component: GitHubIcon, label: "GitHub" },
  instagram: { component: InstagramIcon, label: "Instagram" },
  linkedin: { component: LinkedInIcon, label: "LinkedIn" },
  x: { component: XIcon, label: "X" },
};

export type SocialIcon = keyof typeof icons;

export interface SocialLinkProps {
  href: string;
  icon: SocialIcon;
}

export default function SocialLink({ href, icon }: SocialLinkProps) {
  const { component: Icon, label } = icons[icon];

  return (
    <a
      target="_blank"
      href={href}
      className="social-link"
      aria-label={label}
    >
      <Icon />
    </a>
  );
}
