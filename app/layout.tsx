import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { KEYWORDS, PERSON_SCHEMA } from "./seo";
import "./globals.css";
import "./typography.css";

export const generateMetadata = (): Metadata => {
  return {
    title: "Sam F-Harrison | Portfolio",
    description:
      "Portfolio of Sam F-Harrison, a passionate software engineer specialising in web and mobile app development. Explore innovative projects, clean code practices, and future-focused solutions.",
    creator: "Sam F-Harrison",
    keywords: KEYWORDS,
    other: { "application/ld+json": JSON.stringify(PERSON_SCHEMA) },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
