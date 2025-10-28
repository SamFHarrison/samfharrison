import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import Script from 'next/script';
import { BIO, KEYWORDS, PERSON_SCHEMA } from './seo';
import './globals.css';

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
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`}>
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
