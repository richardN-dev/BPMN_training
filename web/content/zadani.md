# Případová studie – IT firma DataVision

*Poznámka: jakákoli podobnost s existující firmou je čistě náhodná.*

## Základní informace o firmě

Společnost **DataVision s.r.o.** je malá až střední IT firma se sídlem v Brně.

| | |
|--|--|
| Vznik | 2018 |
| Počet zaměstnanců | 25 |
| Obrat | cca 35 mil. Kč ročně |
| Právní forma | s.r.o. |
| Typ klientů | střední firmy (výroba, logistika, služby) |

**Zaměření:** vývoj datových řešení, business intelligence (Power BI, reporting), datová integrace a práce s databázemi, základní prvky data science (predikce, segmentace).

**Portfolio:** (1) datová analytika a reporting, (2) vývoj interních aplikací (web, DB, Docker on-prem), (3) konzultace a školení.

**Trhy:** ČR; menší projekty SK, DE. Zákazníci: výroba, logistika, menší banky a pojišťovny.

**Vnitřní fungování:** analytici, vývojáři, konzultanti; vysoká odbornost, omezené kapacity; závislost na klíčových lidech. Technologie: Python, SQL, Power BI, základní Azure, většinou on-prem, Docker.

**Obchod a marketing (doplňující kontext úkolů):** hlavní zdroj zakázek doporučení a kontakty; web existuje, není aktivně rozvíjen; minimum na sociálních sítích. **Finance:** stabilní růst, bez dluhů; omezené investice do marketingu a rozvoje.

---

## Praktický úkol 1 – SWOT a analýza tržního prostředí

**Zadání:** Na základě případové studie proveďte analýzu tržního prostředí:

- **PEST** analýzu (makrookolí) — u faktorů uvést příležitost/hrozbu a dopad na firmu  
- **Porterův model 5 sil** (mikrookolí)  
- **SWOT** — z interních faktorů a z výsledků analýzy tržního prostředí  
- **Strategická doporučení** — využití silných stránek a příležitostí; řešení slabých stránek a hrozeb  

*(Rozšíření na PESTLE je volitelné — právní a ekologické faktory.)*

---

## Praktický úkol 2 – Metoda kritické cesty (CPM)

**Projekt:** „Vývoj interní datové aplikace pro reporting zakázek“ — webová aplikace, databáze, filtry, přehledy pro management, nasazení Docker v interní síti klienta.

**Zadání:** Z tabulky činností určit **kritickou cestu**, **časové rezervy** jednotlivých činností a **celkovou dobu** projektu. Některé činnosti probíhají paralelně; integrace až po obou částech; projekt končí po školení uživatelů.

---

## Praktický úkol 3 – Business Motivation Model (BMM)

**Zadání:** Podle standardu **OMG** vytvořit **BMM** — proč firma existuje, kam směřuje, jaké faktory ji ovlivňují a jak na ně reaguje strategií.

**Struktura výstupu:** **Ends** (vision, goals, objectives), **Means** (strategies, tactics), **Influencers** (z předchozích analýz), **Assessment** (příležitost/hrozba, dopad), **Directives** (policies, business rules). Forma: strukturovaný dokument + **doporučený diagram** vazeb.

---

## Praktický úkol 4 – BPMN 2.0

**Zadání:** Navrhnout a nakreslit **vybrané procesy** ve standardu **BPMN 2.0**. Každý proces musí obsahovat: **role (swimlanes)**, **události (start/end)**, **činnosti (tasks)**, **rozhodování (gateway)**, **správné vazby**.

1. **Získání a zpracování poptávky (Sales)** — od přijetí poptávky po rozhodnutí zákazníka o nabídce.  
2. **Realizace IT projektu** — od zahájení po předání; vývoj backend/frontend paralelně; testování; při chybách oprava a návrat do vývoje; nasazení a předání.  
3. **Řešení incidentu / požadavku** — ticket; klasifikace incident vs. change; větve; sloučení; ověření a uzavření.  
4. **Vytvoření reportu (BI)** — zadání, zdroje, data, kvalita dat, transformace, vizualizace, validace, schválení, publikace.

---

*Tento text slouží jako přehled zadání pro webovou prezentaci; podrobné tabulky a činnosti CPM jsou v materiálech školení a v sekci Vypracování.*
