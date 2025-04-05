import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LINKS } from "../../../constants/globals";
import {
  FigmaAppIcon,
  GitHubAppIcon,
  InstagramAppIcon,
  LinkedInAppIcon,
} from "../appIcons";
import AppIcon, { AppIconProps } from "./AppIcon";

const defaultProps: AppIconProps = {
  name: "figma",
  url: LINKS.Figma,
  appIcon: FigmaAppIcon,
};

describe("<AppIcon />", () => {
  it("should render the anchor element with correct href, target, className, and aria-label", () => {
    render(<AppIcon {...defaultProps} />);

    const anchorElement = screen.getByRole("link", {
      name: `Click to visit Sam's ${defaultProps.name} profile`,
    });
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", defaultProps.url);
    expect(anchorElement).toHaveAttribute("target", "_blank");
    expect(anchorElement).toHaveClass("app-icon-anchor");
    expect(anchorElement).toHaveAttribute(
      "aria-label",
      `Click to visit Sam's ${defaultProps.name} profile`
    );
  });

  it("should render the Image component with correct src, alt, className, and aria-labelledby", () => {
    render(<AppIcon {...defaultProps} />);

    const imageElement = screen.getByAltText(`${defaultProps.name} app icon`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", defaultProps.appIcon);
    expect(imageElement).toHaveClass("app-icon");
    expect(imageElement).toHaveAttribute(
      "aria-labelledby",
      `${defaultProps.name} app icon`
    );
  });

  it("should set the correct id on the anchor element", () => {
    render(<AppIcon {...defaultProps} />);

    const anchorElement = screen.getByRole("link", {
      name: `Click to visit Sam's ${defaultProps.name} profile`,
    });
    expect(anchorElement).toHaveAttribute(
      "id",
      `${defaultProps.name} app icon`
    );
  });

  it("should render correctly for different 'name' props", () => {
    const names: AppIconProps["name"][] = [
      "figma",
      "instagram",
      "linkedin",
      "github",
    ];
    const urls = {
      figma: LINKS.Figma,
      instagram: LINKS.Instagram,
      linkedin: LINKS.LinkedIn,
      github: LINKS.GitHub.Profile,
    };
    const appIcons = {
      figma: FigmaAppIcon,
      instagram: InstagramAppIcon,
      linkedin: LinkedInAppIcon,
      github: GitHubAppIcon,
    };

    names.forEach((name) => {
      render(<AppIcon name={name} url={urls[name]} appIcon={appIcons[name]} />);

      const anchorElement = screen.getByRole("link", {
        name: `Click to visit Sam's ${name} profile`,
      });
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute("href", urls[name]);
      expect(anchorElement).toHaveAttribute("id", `${name} app icon`);

      const imageElement = screen.getByAltText(`${name} app icon`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", appIcons[name]);
      expect(imageElement).toHaveAttribute(
        "aria-labelledby",
        `${name} app icon`
      );
    });
  });
});
