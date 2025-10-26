import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { BIO, KEYWORDS, PERSON_SCHEMA } from './seo';
import './globals.css';
import './typography.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jet-brains-mono",
});

export const generateMetadata = (): Metadata => {
  return {
    title: "Sam F-Harrison | Software Engineer, UI",
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
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        {children}

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
