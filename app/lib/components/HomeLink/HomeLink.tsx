"use client";

import Link from "next/link";
import { ROUTES } from "../../contants";
import { usePathname } from "next/navigation";

export default function HomeLink() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <span className="secondary-text">samfharrison.com</span>;
  }

  return (
    <Link className="secondary-text" href={ROUTES.Home}>
      samfharrison.com
    </Link>
  );
}
