# Instrukce pro práci na projektu

## Organizace projektu

### Soubor README.md

**Umístění**: `README.md` v rootu projektu

**Účel**: Centrální přehled dokumentů projektu – vstupní bod pro orientaci v dokumentaci.

**Obsah**:

1. **Klíčové dokumenty** – odkazy na aktuální verze s krátkým popisem:
   
   - Design architektury (aktuální verze)
   - Specifikace serverů (Ceph, K8s, backup target)
   - Specifikace síťových komponent (spine, leaf, management, kabeláž)
   - Plán kapacity a škálování
   - Rozpočet a hardware

2. **Další dokumenty** – odkazy s popisem:
   
   - Rozložení a diagramy (rack layout, diagramy PNG/JPG, PlantUML)
   - Archiv a reference (ms14-ms21 objemy, starší verze designu)
   - Prompty a instrukce (Gemini, diagramy)

3. **Struktura projektu** – přehled adresářů a jejich účelu

4. **Rychlé odkazy** – tabulka s aktuálními verzemi hlavních dokumentů

**Pravidla údržby**:

- Při vytvoření nového klíčového dokumentu doplnit odkaz do README
- Při změně verze dokumentu aktualizovat verzi v README (např. v3.2)
- Při přidání nového diagramu doplnit odkaz do sekce „Rozložení a diagramy“
- Při změně struktury projektu upravit sekci „Struktura projektu“

**Formát**: Markdown, odkazy relativní k rootu projektu.

---

## Struktura adresářů v projektu

Adresáře budou organizované následujícím způsobem:

```
kořenový adresář projektu/
├── README.md                   ← soubor s informacemi o projektu
├── .env                        ← parametry projektu (klíče apod.) – neukládat do Gitu
├── .cursor/rules/              ← pravidla a agenti pro Cursor AI
├── output/                     ← výstupy projektu připravené Cursorem
│   ├── docs/                   ← dokumenty
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

---

## Zahájení projektu

Před zahájením práce na projektu:

1. **Vyplň projektový kontext** – šablona `templates/project_context.md` → ulož do `input/project_context.md`
2. **Vyber role** – „S jakými rolemi budeme na tomto projektu pracovat?" (viz `roles/README.md`)
3. **Aktivuj agenty** – otevři příslušné profily v `roles/`, čímž se aktivují AI agenti z `.cursor/rules/`

---
