# Proces 1 — Sales (poptávka → nabídka → rozhodnutí)

Následující **collaboration diagram BPMN 2.0** modeluje sales proces společnosti **DataVision** v interakci se **Zákazníky** (externí pool jako black-box). Model byl vyhotoven v **Camunda Modeler** s cílem spustitelnosti na **Camunda Cloud 8.x** (`isExecutable="true"` u procesu DataVision).

![BPMN diagram — Proces 1 Sales, DataVision a Zákazníci](/diagrams/proces-1-sales-datavision.png)

---

## Účel procesu

Zpracovat příchozí **poptávku**, rozhodnout o smysluplnosti obchodního zájmu, **upřesnit požadavky** se zákazníkem, **odhadnout práci**, případně **připravit a odeslat nabídku** a **vyhodnotit rozhodnutí zákazníka** včetně větví ukončení s odesláním zprávy externí straně.

## Účastníci a hranice

| Pool | Role |
|------|------|
| **DataVision** | Interní sales logika: úkoly, rozhodnutí, odesílání a příjem zpráv. |
| **Zákazníci** | Externí účastník; detail jejich vnitřního procesu není modelován (komunikace pouze přes **message flow**). |

## Hlavní tok (sekvenční logika)

1. **Start (message): Přijetí poptávky** — proces začíná příchodem zprávy „Poptávka“ od zákazníka.
2. **Prvotní vyhodnocení poptávky** — interní činnost (kvalifikace leadu).
3. **Rozhodnutí: Má smysl se jí zabývat?** (exclusive gateway)  
   - **NE** → **Ukončení s odesláním zprávy zákazníkovi** (message end) — např. poděkování a odmítnutí.  
   - **ANO** → pokračování.
4. **Kontaktování zákazníka a upřesnění požadavků** — práce obchodníka / konzultanta.
5. **Odeslání žádosti o upřesnění** (intermediate throw message) následované **příjmem odpovědi** (intermediate catch message) se stejným obchodním významem „upřesnění požadavků“. Tím je dodrženo pořadí: nejdřív odeslat, potom čekat na odpověď.
6. **Interní odhad pracnosti**.
7. **Rozhodnutí: Vytvořit nabídku?** (exclusive gateway)  
   - **NE** → **Ukončení s odesláním zprávy zákazníkovi** (message end).  
   - **ANO** → **Vytvoření nabídky**.
8. **Odeslání nabídky** (intermediate throw message) — zákazník obdrží „nabídka“.
9. **Čekání na rozhodnutí zákazníka** (intermediate catch message).
10. **Vyhodnocení rozhodnutí zákazníka** (exclusive gateway)  
    - **zamítnutí** → **Ukončení s odesláním zprávy zákazníkovi** (message end) — např. poděkování.  
    - **akceptace** → **přechod na realizaci** (koncová událost bez message) — představuje návaznost na další proces (realizace zakázky), který lze modelovat samostatně.

## Komunikace se zákazníkem (message flows)

| Směr | Zpráva (název na diagramu) | Význam |
|------|----------------------------|--------|
| Zákazník → DataVision | Poptávka | Spuštění procesu. |
| DataVision → Zákazník | poděkování a odmítnutí poptávky | Odmítnutí po prvotním vyhodnocení nebo po rozhodnutí nevytvářet nabídku. |
| DataVision → Zákazník | upřesnění požadavků | Žádost o doplnění informací (throw). |
| Zákazník → DataVision | upřesnění požadavků | Odpověď / doplnění (catch). |
| DataVision → Zákazník | nabídka | Odeslaná nabídka. |
| Zákazník → DataVision | rozhodnutí zákazníka | Akceptace / zamítnutí nabídky. |
| DataVision → Zákazník | poděkování | Po zamítnutí nabídky zákazníkem. |

## Poznámky k modelu a implementaci

- Pro **Camunda 8** bude potřeba sjednotit **definice zpráv** (název, korelace) mezi throw a catch událostmi a napojit je na konkrétní konektory / REST.
- **Exclusive gateway** by měly mít jednoznačné podmínky nebo výchozí větev podle konvencí týmu.
- Koncový stav **„přechod na realizaci“** záměrně nezasílá zprávu — představuje handover do navazujícího BPMN procesu.

---

*Zdroj modelu: `input/Diagrams/Úkol 4_Proces 1-Sales proces.bpmn` (Camunda Modeler).*
