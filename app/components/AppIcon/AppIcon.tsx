import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "./AppIcon.css";

export interface AppIconProps {
  name: "figma" | "instagram" | "linkedin" | "github";
  url: string;
  appIcon: string | StaticImport;
}

const AppIcon = ({ name, url, appIcon }: AppIconProps) => {
  const appIconLabel = `${name} app icon`;

  return (
    <a
      id={appIconLabel}
      className="app-icon-anchor"
      target="_blank"
      href={url}
      aria-label={`Click to visit Sam's ${name} profile`}
    >
      <Image
        className="app-icon"
        src={appIcon}
        alt={appIconLabel}
        aria-labelledby={appIconLabel}
        width={57}
        height={57}
      />
    </a>
  );
};

export default AppIcon;
