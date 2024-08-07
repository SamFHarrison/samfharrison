import Run from "./Icons/Run";

export type IconNames = "run";

export interface IconProps {
  size?: number;
  name?: IconNames;
  className?: string;
}

export default function Icon({ name, size = 24, className }: IconProps) {
  switch (name) {
    case "run":
      return <Run size={size} className={className} />;
    default:
      break;
  }
}
