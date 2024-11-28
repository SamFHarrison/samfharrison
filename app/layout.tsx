import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";
import { KEYWORDS, PERSON_SCHEMA } from "./seo";
import "./globals.css";
import "./typography.css";

export const metadata: Metadata = {
  title: "Sam F-Harrison | Portfolio",
  description:
    "Portfolio of Sam F-Harrison, a passionate software engineer specialising in web and mobile app development. Explore innovative projects, clean code practices, and future-focused solutions.",
  creator: "Sam F-Harrison",
  keywords: KEYWORDS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: PERSON_SCHEMA,
          }}
        />
      </Head>

      <body>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
