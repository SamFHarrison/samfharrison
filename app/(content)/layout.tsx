import { Footer } from "../lib/components";
import "./layout.css";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}
