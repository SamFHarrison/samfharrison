import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./app/lib/components";
import NavLink, { NavLinkProps } from "./app/lib/components/HomeLink/NavLink";

const components: MDXComponents = {
  SecondaryText({ children, props }) {
    return (
      <p className="secondary-text" {...props}>
        {children}
      </p>
    );
  },

  pre: ({ children }: any) => {
    const preProps = children?.props;

    const raw =
      typeof preProps?.children === "string"
        ? preProps.children
        : Array.isArray(preProps?.children)
          ? preProps.children.join("")
          : "";

    return <CodeBlock code={raw} />;
  },

  code: ({ children }) => {
    return <code className="inline-code">{children}</code>;
  },

  li: ({ children }) => {
    // TODO: Extract this into a ListItem component
    return (
      <li>
        <div>{children}</div>
      </li>
    );
  },

  a: ({ children, ...props }) => {
    return (
      <a target="_blank" {...props}>
        {children}
      </a>
    );
  },

  NavLink(props: NavLinkProps) {
    return <NavLink {...props} />;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
