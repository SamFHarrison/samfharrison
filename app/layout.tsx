import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam F-Harrison",
  description:
    "Welcome to my personal site. I'm a Software Engineer from Elgin, Scotland. Explore my journey in tech, my passions for rugby, snooker and cars, and my insights into UI/UX design and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
