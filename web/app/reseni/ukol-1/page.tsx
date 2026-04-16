import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";
import { stripFirstH1 } from "@/lib/stripFirstH1";

const sections = [
  { id: "pest", title: "PEST / PESTLE", file: "PEST_analyza_DataVision.md" },
  { id: "porter", title: "Porter — 5 sil", file: "Porter_5_sil_DataVision.md" },
  { id: "swot", title: "SWOT a MoSCoW", file: "SWOT_DataVision.md" },
] as const;

export default async function Ukol1Page() {
  const contents = await Promise.all(
    sections.map(async (s) => ({
      ...s,
      body: await readMarkdownFile(s.file),
    }))
  );

  return (
    <article className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Úkol 1 — Vypracování</h1>
        <p className="mt-2 text-slate-600">
          Strategické analýzy tržního prostředí a doporučení pro DataVision.
        </p>
        <nav className="mt-6 flex flex-wrap gap-3 text-sm">
          {contents.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-slate-200 px-3 py-1 text-slate-800 hover:bg-sky-200"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </div>
      {contents.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            {s.title}
          </h2>
          <MarkdownBody content={stripFirstH1(s.body)} />
        </section>
      ))}
    </article>
  );
}
