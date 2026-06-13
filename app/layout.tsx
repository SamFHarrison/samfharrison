import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { BIO, KEYWORDS, PERSON_SCHEMA } from "./lib/seo";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { ROUTES } from "./lib/contants";
import "./globals.css";

export const generateMetadata = (): Metadata => {
  return {
    title: "Sam F-Harrison",
    description: BIO,
    creator: "Sam F-Harrison",
    keywords: KEYWORDS,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`}>
      <body>
        <Link className="secondary-text" href={ROUTES.Home}>
          samfharrison.com
        </Link>

        {children}
      </body>

      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_SCHEMA),
        }}
      />

      <Analytics />

      <SpeedInsights />
    </html>
  );
}
