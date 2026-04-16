"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  src?: string | null;
  alt?: string | null;
  className?: string;
};

export function ZoomableImage({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!src) return null;

  const label = alt ? `Zvětšit diagram: ${alt}` : "Zvětšit obrázek";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
        aria-label={label}
        title="Kliknutím zobrazíte diagram v plné velikosti"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ""}
          className={
            className ??
            "max-w-full h-auto rounded-lg border border-slate-200 bg-white"
          }
        />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/55 px-2 py-0.5 text-xs text-white opacity-0 shadow-sm transition group-hover:opacity-100">
          Zvětšit
        </span>
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[101] rounded-lg bg-white/15 px-3 py-1.5 text-sm text-white backdrop-blur hover:bg-white/25"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            Zavřít (Esc)
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? ""}
            className="max-h-[90vh] max-w-[95vw] cursor-default object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
