import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Widget, { WidgetProps } from "./Widget";

const defaultProps: WidgetProps = {
  size: "small",
};

describe("<Widget />", () => {
  it("should apply the correct size class based on the 'size' prop", () => {
    render(<Widget {...defaultProps} />);
    render(<Widget size="medium" />);

    const widgets = screen.getAllByRole("region");
    expect(widgets[0]).toHaveClass("widget-small");
    expect(widgets[1]).toHaveClass("widget-medium");
  });

  it("should apply the custom className if provided", () => {
    render(<Widget {...defaultProps} className="custom-class" />);

    const widget = screen.getByRole("region");
    expect(widget).toHaveClass("widget-small");
    expect(widget).toHaveClass("custom-class");
  });

  it("should render children content", () => {
    render(<Widget {...defaultProps}>Hello, world!</Widget>);

    const childContent = screen.getByText("Hello, world!");
    expect(childContent).toBeInTheDocument();
  });

  it("should render an empty section when no children are passed", () => {
    render(<Widget {...defaultProps} />);

    const widget = screen.getByRole("region");
    expect(widget).toBeEmptyDOMElement();
  });
});
