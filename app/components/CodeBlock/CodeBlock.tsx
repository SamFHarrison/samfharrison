"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) {
  return (
    <SyntaxHighlighter language={lang} style={oneDark} PreTag="div">
      {code}
    </SyntaxHighlighter>
  );
}
