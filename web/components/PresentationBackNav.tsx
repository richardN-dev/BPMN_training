"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Zobrazí odkaz „o úroveň výše“ podle aktuální cesty (úvod → úkol → dílčí stránka Úkolu 4).
 */
export function PresentationBackNav() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  if (pathname === "/zadani") {
    return (
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-sky-800 hover:text-sky-950 hover:underline"
        >
          ← Zpět na úvod
        </Link>
      </div>
    );
  }

  if (
    pathname === "/reseni/ukol-1" ||
    pathname === "/reseni/ukol-2" ||
    pathname === "/reseni/ukol-3"
  ) {
    return (
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-sky-800 hover:text-sky-950 hover:underline"
        >
          ← Zpět na úvod
        </Link>
      </div>
    );
  }

  if (pathname === "/reseni/ukol-4") {
    return (
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-sky-800 hover:text-sky-950 hover:underline"
        >
          ← Zpět na úvod
        </Link>
      </div>
    );
  }

  if (pathname.startsWith("/reseni/ukol-4/")) {
    return (
      <div className="mb-6">
        <Link
          href="/reseni/ukol-4"
          className="inline-flex items-center text-sm font-medium text-sky-800 hover:text-sky-950 hover:underline"
        >
          ← Zpět na Úkol 4 (přehled)
        </Link>
      </div>
    );
  }

  return null;
}
