import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { RootLayoutContainer } from "./components/RootLayoutContainer/RootLayoutContainer";
import { KEYWORDS, PERSON_SCHEMA } from "./seo";
import "./globals.css";
import "./typography.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jet-brains-mono",
});

export const generateMetadata = (): Metadata => {
  return {
    title: "Sam F-Harrison | Portfolio",
    description:
      "Portfolio of Sam F-Harrison, a passionate software engineer specialising in web and mobile app development. Explore innovative projects, clean code practices, and future-focused solutions.",
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
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <RootLayoutContainer>{children}</RootLayoutContainer>

        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PERSON_SCHEMA),
          }}
        />

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
