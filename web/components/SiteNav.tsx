import Link from "next/link";

const links = [
  { href: "/", label: "Úvod" },
  { href: "/zadani", label: "Zadání" },
  { href: "/reseni/ukol-1", label: "Úkol 1" },
  { href: "/reseni/ukol-2", label: "Úkol 2" },
  { href: "/reseni/ukol-3", label: "Úkol 3" },
  { href: "/reseni/ukol-4", label: "Úkol 4" },
  { href: "/reseni/ukol-4/proces-1-sales", label: "Proces 1 (Sales)" },
  { href: "/reseni/ukol-4/proces-2-realizace", label: "Proces 2 (Realizace)" },
  { href: "/reseni/ukol-4/proces-3-reseni-pozadavku", label: "Proces 3 (Požadavek)" },
] as const;

export function SiteNav() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="font-semibold text-slate-900 hover:text-sky-800">
          DataVision — případová studie
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-600 hover:text-sky-700 underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
