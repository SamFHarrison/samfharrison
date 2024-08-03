import clsx from "clsx";
import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className,
  children,
}: ButtonProps) {
  const classes = clsx(
    className,
    variant === "primary" && "primary-button",
    variant === "secondary" && "secondary-button"
  );

  if (href) {
    return (
      <a className={classes} href={href} target="_blank">
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
