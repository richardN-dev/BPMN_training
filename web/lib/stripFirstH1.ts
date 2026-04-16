/** Odstraní první řádek typu # nadpis (kvůli vlastnímu layoutu stránky). */
export function stripFirstH1(markdown: string): string {
  return markdown.replace(/^#\s[^\n]+\n+/, "").trimStart();
}
