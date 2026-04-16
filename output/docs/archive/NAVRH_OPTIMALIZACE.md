---
title: "Návrh optimalizace struktury projektu a instrukcí"
author: "AI Assistant"
date: "2025-03-10"
status: "Draft"
language: "CZ"
owner: "Projekt"
version: "0.1"
tags: "[meta, struktura, optimalizace, instrukce]"
based_on: "project_guidelines.md, md-guidelines.md, diagrams.md, tools.md"
revisions:
- "2025-03-10: První verze návrhu (0.1)"
---

**Poznámka**: Tento návrh byl částečně realizován. Viz README.md, .env, .gitignore a aktualizované instrukce.

# Návrh optimalizace struktury projektu a instrukcí

Tento dokument shrnuje doporučení pro optimalizaci struktury adresářů, souborů a instrukcí pro práci na projektu.

---

## 1. Shrnutí zjištěných problémů

| Problém | Kde | Dopad |
|---------|-----|-------|
| Chybějící adresáře | `output/`, `input/`, `diagrams/` | Plánovaná struktura není vytvořena |
| Konflikt umístění diagramů | `diagrams.md` vs `project_guidelines.md` | diagrams.md: `diagrams/` v rootu; guidelines: `output/diagrams/` |
| Chybná cesta v příkladu | `diagrams.md` ř. 27 | `d:\Cursor\Infrastruktura\diagrams` místo aktuálního projektu |
| Pravopisné chyby | více souborů | "následujícícm", "Název dokumentu"" (dvojité uvozovky), "diagram" vs "diagrams", "jetsli" |
| Chybějící Archi v tools.md | `tools.md` | diagrams.md zmiňuje Archi, ale tools.md nemá cestu |
| Chybějící index.md | root | Centrální vstupní bod neexistuje |
| Chybějící .gitignore | root | Pro budoucí verzování |
| Chybějící README.md | root | Přehled projektu pro nové uživatele |

---

## 2. Doporučená optimalizovaná struktura

```
kořenový adresář projektu/
├── README.md                   ← Přehled projektu (nový)
├── index.md                    ← Centrální index dokumentů (nový)
├── .gitignore                  ← Pro verzování (nový)
├── .cursorindexingignore       ← (existuje)
│
├── output/                     ← Všechny výstupy Cursoru (nový adresář)
│   ├── docs/                   ← Dokumenty
│   │   └── archive/            ← Archivované návrhy
│   ├── diagrams/               ← Diagramy (PlantUML, draw.io, PNG, ArchiMate)
│   └── prompts/                ← Prompty pro externí nástroje (Gemini, atd.)
│
├── input/                      ← Vstupní materiály (nový adresář)
│
├── instructions/               ← Instrukce pro práci
│   ├── project_guidelines.md
│   ├── tools.md
│   ├── md-guidelines.md
│   ├── diagrams.md
│   └── README.md               ← Přehled instrukcí (volitelné)
│
├── roles/
│   ├── Architecture/
│   └── Clarity/
│
├── templates/
│   └── document_template.md
│
└── .specstory/                 ← (existuje)
```

**Klíčové rozhodnutí:** Diagramy patří do `output/diagrams/` – sjednocení s `project_guidelines.md`. Všechny výstupy na jednom místě.

---

## 3. Konkrétní úpravy souborů

### 3.1 project_guidelines.md

- **Ř. 45:** Opravit "následujícícm" → "následujícím"
- **Doplnit:** Odkaz na README.md a .gitignore v sekci struktury

### 3.2 md-guidelines.md

- **Ř. 13:** "Název dokumentu"" → "Název dokumentu"
- **Ř. 66:** "složka diagram" → "složka output/diagrams"
- **Ř. 70:** "jetsli" → "zda"
- **Doplnit:** Explicitní cesta k obrázkům: `output/diagrams/`

### 3.3 diagrams.md

- **Ř. 17:** "složka diagrams/" → "složka output/diagrams/"
- **Ř. 22, 27, 48, 51:** Aktualizovat všechny cesty na `output/diagrams/`
- **Ř. 27:** `d:\Cursor\Infrastruktura\diagrams` → `d:\Cursor\New project\output\diagrams` (nebo použít relativní cestu)
- **Doplnit:** Cesta k Archi v tools.md (nebo přidat do diagrams.md)

### 3.4 tools.md

- **Doplnit:** Sekce Archi (pokud používáte)
- **Formát:** Sjednotit formátování (nadpisy, mezery)

### 3.5 templates/document_template.md

- **Ř. 3:** "Název dokumentu"" → "Název dokumentu"

---

## 4. Nové soubory k vytvoření

### 4.1 index.md (v rootu)

Šablona podle project_guidelines.md – centrální přehled s placeholder sekcemi pro klíčové dokumenty, diagramy, archiv a rychlé odkazy.

### 4.2 README.md (v rootu)

Krátký přehled projektu:
- Účel projektu (Voyager/ARK, Clarity PPM)
- Struktura adresářů
- Odkaz na instructions/ a index.md
- Jak začít

### 4.3 .gitignore

```
# SpecStory (pokud není v .cursorindexingignore)
.specstory/.project.json
.specstory/.what-is-this.md

# OS
.DS_Store
Thumbs.db

# Dočasné soubory
*.tmp
*.bak
*~
```

### 4.4 output/.gitkeep, input/.gitkeep

Prázdné soubory `.gitkeep` v prázdných adresářích, aby Git sledoval strukturu (pokud používáte Git).

---

## 5. Doplnění instrukcí

### 5.1 Pravidlo pro Cursor (.cursor/rules/)

Doporučení: Vytvořit `.cursor/rules/project-conventions.mdc` s pravidly:
- Při vytváření dokumentů používat šablonu z templates/
- Ukládat výstupy do output/
- Diagramy do output/diagrams/
- Verzování podle md-guidelines

### 5.2 instructions/README.md (volitelné)

Krátký index instrukcí:
- project_guidelines.md – organizace projektu
- tools.md – lokální nástroje
- md-guidelines.md – práce s MD dokumenty
- diagrams.md – práce s diagramy

---

## 6. Priorita implementace

| Priorita | Akce | Náročnost |
|----------|------|-----------|
| 1 | Vytvořit output/, input/, output/docs/, output/docs/archive/, output/diagrams/, output/prompts/ | Nízká |
| 2 | Opravit pravopisné chyby a konflikty v existujících souborech | Nízká |
| 3 | Vytvořit index.md (šablona) | Střední |
| 4 | Vytvořit README.md | Nízká |
| 5 | Vytvořit .gitignore | Nízká |
| 6 | Doplnit Archi do tools.md (pokud používáte) | Nízká |
| 7 | Vytvořit .cursor/rules/ (volitelné) | Střední |

---

## 7. Shrnutí

Optimalizace zahrnuje:
1. **Sjednocení** – diagramy výhradně do `output/diagrams/`
2. **Doplnění** – vytvoření chybějících adresářů a index.md
3. **Opravy** – pravopis, cesty, konzistence
4. **Rozšíření** – README, .gitignore, volitelně Cursor rules

Mám tyto změny provést v projektu?
