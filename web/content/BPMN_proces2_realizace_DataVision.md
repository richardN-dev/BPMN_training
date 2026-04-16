# Proces 2 — Realizace IT projektu

**BPMN 2.0** — jednopoolový proces organizace **DataVision** popisující realizaci dodávky od zahájení projektu po předání řešení zákazníkovi. Model je v **Camunda Modeler** nastaven jako spustitelný pro **Camunda Cloud 8.x** (`isExecutable="true"`), uživatelské úkoly používají rozšíření **Zeebe user task**.

![BPMN diagram — Proces 2 Realizace IT projektu, pool DataVision](/diagrams/proces-2-realizace-datavision.png)

---

## Účel procesu

Řídit **realizaci IT projektu** po obchodní fázi: **detailní analýzu**, **návrh řešení** (volitelné části podle zakázky), **vývoj** (volitelné části), **integraci**, **testování** s možnou **opravnou smyčkou**, **nasazení** a **formální předání** zákazníkovi.

U startu je textová poznámka: *podmínkou pro zahájení projektu je schválení nabídky zákazníkem* — návaznost na Proces 1 (Sales) je tím zdůvodněna v dokumentaci, start události je modelován jako **message start** (např. příchod zakázky / schválení ze systému).

---

## Proč inkluzivní brány (inclusive gateway)

V diagramu jsou u **rozvětvení návrhu** (architektura, data, UI) a u **rozvětvení vývoje** (backend, frontend) použity **inkluzivní brány**, nikoli paralelní (AND).

**Záměr modelu:** jednotlivé části **návrhu řešení** a **vývoje** se mají **aktivovat podle požadavků zákazníka na řešení** — tedy podle rozsahu zakázky (např. jen úprava datové vrstvy, nebo jen UI, případně jen jedna z vývojových linií). Inkluzivní split umožňuje v BPMN vyjádřit, že **může běžet podmnožina větví** podle podmínek na výstupních **sequence flow** (v implementaci je doplníte výrazem nebo pravidly). Inkluzivní **join** pak synchronizuje dokončení **těch větví, které byly skutečně spuštěny**.

Paralelní brána by naopak vyjadřovala povinný souběh **všech** větví — což by u variabilního rozsahu zakázky neodpovídalo záměru.

---

## Hlavní tok procesu

1. **Start (message): Zahájení projektu** — spuštění např. zprávou o schválení / zadání zakázky.
2. **Detailní analýza požadavků** (user task).
3. **Inkluzivní split:** podle potřeby se aktivují úkoly  
   - **Návrh řešení – architektura**,  
   - **Návrh řešení – data**,  
   - **Návrh řešení – UI**  
   (na diagramu jsou větve popsány jako „Požadavek na … – ANO“ — tj. tato část rozsahu je pro danou zakázku vyžadována).
4. **Inkluzivní join** — sloučení dokončených návrhových větví, které proběhly.
5. **Inkluzivní split** před vývojem: podle potřeby **Vývoj backend** a/nebo **Vývoj frontend** (opět podle rozsahu; popisky „Požadavek na vývoj … – ANO“).
6. **Inkluzivní join** po vývoji.
7. **Integrace řešení** → **Testování řešení**.
8. **Exkluzivní brána: Jsou nalezeny chyby?**  
   - **ANO** — návrat před vývojové rozvětvení (opravy v backendu a/nebo frontendu podle stejné logiky inkluzivního splitu).  
   - **NE** — **Nasazení řešení**.
9. **Konec (message): Předání řešení zákazníkovi** — předání doprovázené zprávou (např. předání artefaktů, odkazů, dokumentace).

---

## Typy prvků (shrnutí)

| Typ | Použití v procesu |
|-----|-------------------|
| **User task** | Analýza, návrhové úkoly, vývoj (lidská práce / úkol v úložišti úkolů). |
| **Task** | Integrace, testování, nasazení (lze později zpřesnit na service / user podle reality). |
| **Inclusive gateway** | Variabilní rozsah návrhu a vývoje dle zákazníka. |
| **Exclusive gateway** | Binární rozhodnutí po testech (chyby ano/ne). |
| **Message start / message end** | Navázání na externí událost a na předání výstupu zákazníkovi. |

---

## Poznámky k implementaci (Camunda 8)

- Na **sequence flow** z inkluzivních splitů doplnit **podmínky** (feel expression / údaj z procesní proměnné „rozsah zakázky“), jinak engine potřebuje jasná pravidla výběru větví.
- **Message start** a **message end** vyžadují definice zpráv a v případě korelace napojení na Proces 1 nebo na CRM.
- Smyčka z testů zpět do stejné **inkluzivní** brány před vývojem zachovává stejnou logiku výběru částí vývoje jako při prvním průchodu.

---

*Zdroj modelu: `input/Diagrams/Úkol 4_Proces 2-Realizace IT projektu.bpmn` (Camunda Modeler).*
