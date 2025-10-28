import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  SecondaryText({ children, props }) {
    return (
      <p className="secondary-text" {...props}>
        {children}
      </p>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
