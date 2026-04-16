import Link from "next/link";

const tiles = [
  {
    href: "/reseni/ukol-4/puvodni-reseni",
    title: "Původní řešení",
    desc: "Souhrnný text BPMN 2.0 — čtyři procesy, pooly, události, brány (dokument z školení).",
  },
  {
    href: "/reseni/ukol-4/proces-1-sales",
    title: "Proces 1 — Sales",
    desc: "Diagram z Camundy + popis: poptávka, nabídka, rozhodnutí zákazníka.",
  },
  {
    href: "/reseni/ukol-4/proces-2-realizace",
    title: "Proces 2 — Realizace IT projektu",
    desc: "Diagram + popis: analýza, návrh, vývoj, testy, nasazení (inkluzivní brány).",
  },
  {
    href: "/reseni/ukol-4/proces-3-reseni-pozadavku",
    title: "Proces 3 — Řešení požadavku",
    desc: "Diagram + popis: incident / change, validace, smyčky (message flow).",
  },
  {
    href: "/reseni/ukol-4/proces-4-vytvoreni-reportu",
    title: "Proces 4 — Vytvoření reportu",
    desc: "Diagram + popis: data, dashboard, validace, publikace.",
  },
] as const;

export default function Ukol4HubPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-wide text-sky-800 font-medium">Úkol 4</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">BPMN 2.0 — přehled</h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
          Vyberte <strong>původní textové řešení</strong> nebo jeden ze <strong>čtyř procesů</strong> s diagramem z
          Camunda Modeler a popisem.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {tiles.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-300 hover:shadow transition"
            >
              <h2 className="font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
