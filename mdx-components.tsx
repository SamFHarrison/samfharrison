import type { MDXComponents } from "mdx/types";
import CodeBlock from "./app/components/CodeBlock/CodeBlock";

const components: MDXComponents = {
  SecondaryText({ children, props }) {
    return (
      <p className="secondary-text" {...props}>
        {children}
      </p>
    );
  },

  pre: ({ children, ...props }: any) => {
    const preProps = children?.props;

    const raw =
      typeof preProps?.children === "string"
        ? preProps.children
        : Array.isArray(preProps?.children)
        ? preProps.children.join("")
        : "";

    const lang = (preProps?.className || "").replace("language-", "") || "ts";

    return <CodeBlock code={raw} lang={lang as any} {...props} />;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
