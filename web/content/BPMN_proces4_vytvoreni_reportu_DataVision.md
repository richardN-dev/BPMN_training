# Proces 4 — Vytvoření reportu (BI / dashboard)

**BPMN 2.0 — collaboration:** proces organizace **DataVision** a externích **Zákazníků** (black-box pool) pro vývoj a vydání reportu či dashboardu podle požadavku. Model je v **Camunda Modeler** určen pro **Camunda Cloud 8.x** (`isExecutable="true"`).

![BPMN diagram — Proces 4 Vytvoření reportu, DataVision a Zákazníci](/diagrams/proces-4-vytvoreni-reportu-datavision.png)

---

## Účel procesu

Řídit **end-to-end dodávku reportu**: od **příchozího požadavku** přes **analýzu a získání dat**, **kontrolu kvality a úplnosti dat**, **transformaci**, **návrh vizualizace a dashboardu**, **validaci se zákazníkem** až po **publikaci** a finální **zprávu zákazníkovi**.

---

## Účastníci

| Pool | Role |
|------|------|
| **DataVision** | Analytika dat, ETL/transformace, návrh UI, dashboard, publikace. |
| **Zákazníci** | Zadání požadavku, odpovědi na validaci, příjem výsledku (message flow). |

---

## Hlavní tok

1. **Start (message): Zadání požadavku zákazníka** — zpráva *požadavek na report* od zákazníka.
2. **Exkluzivní join** slučuje **start** a **návrat z řešení kvality dat** (smyčka kvality).
3. **Analýza datových zdrojů** → **Získání dat**.
4. **Exkluzivní brána „Jsou data kompletní?“**  
   - **NE** → **Řešení kvality dat** → návrat na join před analýzou (opakování analýzy/načtení).  
   - **ANO** → **Transformace dat**.
5. **Exkluzivní join** slučuje výstup transformace a **návrat z úpravy reportu** (smyčka po zamítnuté validaci).
6. **Návrh vizualizace** → **Vytvoření dashboardu** → **Validace se zákazníkem** (interní příprava).
7. **Intermediate throw:** **Odeslání požadavku na validaci** → **catch:** **Přijetí výsledku validace** (message).
8. **Exkluzivní brána „Schváleno zákazníkem?“**  
   - **NE** → **Úprava reportu** → návrat na join před návrhem vizualizace.  
   - **ANO** → **Publikace reportu**.
9. **Konec (message): Ukončení s odesláním zprávy zákazníkovi** — zpráva *publikovaný report*.

---

## Komunikace (message flows)

| Směr | Název | Význam |
|------|--------|--------|
| Zákazník → DataVision | požadavek na report | Start procesu. |
| DataVision → Zákazník | požadavek na validaci | Žádost o schválení návrhu / dashboardu. |
| Zákazník → DataVision | výsledek validace | Souhlas / nesouhlas. |
| DataVision → Zákazník | publikovaný report | Finální předání výstupu. |

---

## Poznámky k modelu

- Použity jsou **exkluzivní brány** pro rozhodnutí ano/ne a pro **join** větví — pro tento lineární proces s alternativními smyčkami je to vhodné.
- Dva **nepojmenované XOR join** v diagramu slouží ke sloučení toku po startu / po kvalitě dat a po transformaci / po úpravě reportu — při prezentaci je vhodné je v modeleru popsat krátkým popiskem.

---

## Implementace (Camunda 8)

- Definice **zpráv** a **korelace** s ID požadavku / reportu.
- Úlohy typu **task** lze při nasazení mapovat na **service task** (ETL, publikace) nebo **user task** (validace, úpravy).

---

*Zdroj modelu: `input/Diagrams/Úkol 4_Proces 4-Vytvoření reportu.bpmn` (Camunda Modeler).*
