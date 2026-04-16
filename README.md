# New project

Centrální přehled projektu – vstupní bod pro orientaci v dokumentaci.

---

## Na začátku projektu

**Před zahájením práce:**

1. **Vyplň projektový kontext** → [templates/project_context.md](templates/project_context.md) → ulož do `input/project_context.md`
2. **Vyber role** → „S jakými rolemi budeme pracovat?" (viz [roles/README.md](roles/README.md))
3. **Aktivuj agenty** → otevři příslušné profily v `roles/`

---

## Struktura projektu

```
kořenový adresář projektu/
├── README.md                   ← tento soubor – přehled a index dokumentů
├── .env                        ← parametry projektu (klíče apod.) – neukládat do Gitu
├── .cursor/rules/              ← pravidla a agenti pro Cursor AI
├── output/                     ← výstupy projektu připravené Cursorem
│   ├── docs/                   ← dokumenty
│   │   └── archive/            ← archivované návrhy, data
│   ├── diagrams/               ← diagramy, ArchiMate model
│   └── prompts/                ← prompty pro externí nástroje (Gemini, atd.)
├── input/                      ← vstupní materiály do projektu
├── instructions/               ← instrukce pro práci s projektem
├── roles/                      ← role a profily
│   ├── Analysis/               ← business analýza
│   ├── Architecture/           ← ICT architektura
│   ├── Management/             ← projektové řízení
│   └── Clarity/                ← Clarity PPM
└── templates/                  ← šablony dokumentů (vč. project_context.md)
```

## Klíčové dokumenty

Odkazy na aktuální verze s krátkým popisem:

- Design architektury (aktuální verze)
- Specifikace serverů (Ceph, K8s, backup target)
- Specifikace síťových komponent (spine, leaf, management, kabeláž)
- Plán kapacity a škálování
- Rozpočet a hardware

## Další dokumenty

- **Rozložení a diagramy** – rack layout, diagramy PNG/JPG, PlantUML → [output/diagrams/](output/diagrams/)
- **Archiv a reference** – ms14-ms21 objemy, starší verze designu → [output/docs/archive/](output/docs/archive/)
- **Prompty a instrukce** – Gemini, diagramy → [output/prompts/](output/prompts/)

## Rychlé odkazy

| Dokument | Verze | Stav |
|----------|-------|------|
| *(doplnit při vytvoření dokumentů)* | | |

## Pravidla údržby

- Při vytvoření nového klíčového dokumentu doplnit odkaz do tohoto README
- Při změně verze dokumentu aktualizovat verzi v tabulce Rychlé odkazy
- Při přidání nového diagramu doplnit odkaz do sekce Rozložení a diagramy
- Při změně struktury projektu upravit sekci Struktura projektu

## Jak začít

1. **Projektový kontext** – vyplň [templates/project_context.md](templates/project_context.md) → ulož do `input/project_context.md`
2. **Urči role** – „S jakými rolemi budeme pracovat?" (viz [roles/README.md](roles/README.md))
3. **Aktivuj agenty** – otevři příslušné profily v [roles/](roles/)
4. Prostuduj [instructions/](instructions/) – instrukce pro práci
5. Pro dokumenty použij šablonu [templates/document_template.md](templates/document_template.md)
6. Výstupy ukládej do [output/](output/)
