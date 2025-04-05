import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("should render the avatar image with correct alt text and className", () => {
    render(<Hero />);

    const avatarImage = screen.getByAltText(
      "Digital avatar of Sam, he has blonde hair, glasses and a friendly expression, styled in a cartoonish emoji-like appearance"
    );
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveClass("hero-widget-avatar");
  });

  it("should render the heading with the correct text", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hi, I'm Sam");
  });

  it("should render the tagline paragraph with correct text and className", () => {
    render(<Hero />);

    const tagline = screen.getByText("I build apps for web and mobile");
    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveClass("hero-widget-tagline");
  });
});
