import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-sky-800 font-medium">
          Webová prezentace
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Případová studie DataVision
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Přehled <strong>zadání</strong> (případová studie IT firmy a praktické úkoly 1–4) a{" "}
          <strong>vypracování</strong> v podobě dokumentů použitých při školení — strategické analýzy,
          kritická cesta projektu, Business Motivation Model a návrh BPMN procesů.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/zadani"
            className="inline-flex items-center rounded-lg bg-sky-700 px-5 py-2.5 text-white font-medium hover:bg-sky-800 transition"
          >
            Zadání případové studie
          </Link>
          <Link
            href="/reseni/ukol-1"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-800 hover:bg-slate-50 transition"
          >
            Přejít na vypracování
          </Link>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Struktura úkolů</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            {
              n: "1",
              title: "PEST / PESTLE, Porter, SWOT",
              href: "/reseni/ukol-1",
              desc: "Makro a mikro prostředí, strategická doporučení a MoSCoW.",
            },
            {
              n: "2",
              title: "CPM — kritická cesta",
              href: "/reseni/ukol-2",
              desc: "Časové rezervy, kritická cesta, diagramy a PDM mřížka.",
            },
            {
              n: "3",
              title: "Business Motivation Model",
              href: "/reseni/ukol-3",
              desc: "Ends, Means, Influencers, Assessment, Directives + diagram.",
            },
            {
              n: "4",
              title: "BPMN 2.0 — čtyři procesy",
              href: "/reseni/ukol-4",
              desc: "Sales, realizace projektu, incident/change, BI report. Detail Proces 1 (diagram + popis) je zvlášť.",
            },
          ].map((item) => (
            <li key={item.n}>
              <Link
                href={item.href}
                className="block h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-300 hover:shadow transition"
              >
                <span className="text-xs font-bold text-sky-700">Úkol {item.n}</span>
                <h3 className="mt-1 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
