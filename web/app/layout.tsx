import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataVision — případová studie a vypracování",
  description:
    "Školení: zadání případové studie IT firmy DataVision a vypracování úkolů 1–4 (strategické analýzy, CPM, BMM, BPMN).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <SiteNav />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="border-t border-slate-200 mt-16 py-8 text-center text-sm text-slate-500">
          Materiály pro školení · DataVision s.r.o. (fiktivní případová studie)
        </footer>
      </body>
    </html>
  );
}
