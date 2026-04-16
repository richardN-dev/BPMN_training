# PESTLE analýza – DataVision s.r.o.

**Firma:** DataVision s.r.o. (Brno, ~25 zaměstnanců; datová analytika, BI, integrace, vývoj aplikací, školení)  
**Účel dokumentu:** základ pro praktický úkol 1 – makrookolí (doplňte hodnocení příležitost/hrozba a dopad).  
**Rámec:** **PESTLE** = Politické, Ekonomické, Sociální, Technologické, **Právní (Legal)**, **Ekologické (Environmental)**.  
**Poznámka:** V akronymu jsou dvě písmena „E“ – první **E** = ekonomické faktory níže; druhé **E** na konci = **ekologické / environmentální** (sekce na konci dokumentu před shrnutím).  
**Doporučený rozsah analýzy:** *(doplňte, např. Česká republika, B2B SME, horizont 2–3 roky)*

---

## Jak dokument používat

Ke **každému faktoru** doplňte:

1. **Typ vlivu:** příležitost (O) / hrozba (T) / obojí (O+T)  
2. **Dopad na DataVision:** konkrétně (ne obecně „na IT odvětví“)  
3. **Zdůvodnění:** krátce, proč tak hodnotíte  

*Nestačí jen vypsat faktor – musí být přeložen do dopadu na byznys firmy.*

**Rozdělení P vs. L:** Politické faktory (P) = směr politiky státu/EU, veřejné zakázky, daňová politika. **Právní faktory (L)** = konkrétní zákony a smluvní rámec (odpovědnost, licence, pracovní právo) – částečně se překrývají s P; u úkolu stačí faktor zařadit konzistentně a jednou ho rozepsat.

**Kontext z případové studie (pro interpretaci PESTLE):**

- Obchod / marketing: hlavní zdroj zakázek doporučení a kontakty; web existuje, není aktivně rozvíjen; minimum na sociálních sítích.  
- Finance: stabilní růst, bez dluhů; omezené investice do marketingu a rozvoje.

---

## P – Politické a legislativní faktory

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| GDPR (ochrana osobních údajů) | O+T | **O:** poptávka po nastavení přístupů k datům, dokumentaci, školení. **T:** nutnost právně čistých smluv (zpracovatel × správce), čas na DPIA a revize u větších BI projektů; riziko sankcí při chybě. | Firma pracuje s daty z ERP/CRM u klientů – GDPR je přímý náklad i příležitost prodávat „řízení dat“. |
| NIS2 (kybernetická bezpečnost) | O+T | **O:** u klientů v oboru (např. menší finanční instituce) vzrostou požadavky na bezpečné nasazení, logování, řízení přístupů – konzultace a úpravy řešení. **T:** nutnost držet krok s normou, případně posilovat bezpečnostní kompetence. | DataVision nasazuje on-prem / hybrid – NIS2 zvyšuje laťku u regulovanějších zákazníků. |
| Požadavky na auditovatelnost a logování systémů | O | Zakázky na rozšíření reportingu o auditní stopy, integrace s logy, role v BI – přirozeně zapadá do portfolia (integrace, BI). | Menší firma může nabídnout praktické řešení „auditovatelný reporting“ bez velkého vendor stacku. |
| Odpovědnost za chyby v software (SLA, penalizace) | T | Tvrdší smluvní rámce u větších klientů → nutnost rezerv v rozpočtu, pojištění OD, přesnější specifikace rozsahu; omezení agresivního cenového tlaku. | Malý tým – jeden vážný spor může zásadně ohrozit cash-flow; důraz na změnové řízení a písemné odsouhlasení. |
| Požadavky na dostupnost systémů (uptime) | T | SLA na provoz dashboardů/aplikací u klienta znamená mimořádné činnosti, monitoring, dohody o údržbě – zatížení kapacity nebo nutnost servisního režimu. | On-prem nasazení u klienta často znamená sdílenou odpovědnost s IT klienta – nutné smluvně oddělit role. |
| Vendor lock-in vs. open solutions (smluvní rámec) | O+T | **O:** silná vazba na Microsoft (Power BI) může být pro část trhu výhoda (standard, podpora). **T:** klienti vyžadující otevřené formáty/API nutí širší stack nebo integrace mimo ekosystém. | Portfolio je BI-heavy – strategicky buď zdvojovat kompetence, nebo cílit na firmy na MS stacku. |
| Složitost vstupu do veřejných zakázek | T | Omezený přístup k veřejnému sektoru bez lidí na přípravu nabídek, certifikací a procesů – firma zůstává spíše u soukromého SME segmentu. | Pro DataVision reálně „uzavřený“ kanál růstu, pokud neinvestuje do kapacity na VZ. |
| Důraz na certifikace (ISO, bezpečnostní standardy) | O+T | **O:** ISO 27001 apod. jako vstupenka k větším firmám a bankám. **T:** náklady a čas auditu, udržování procesů u malého týmu. | Bez certifikace zůstává závislost na doporučeních a referencích u menších klientů. |
| Administrativní náročnost veřejného sektoru | T | I když zakázku získá, vysoká byrokracie (změnová řízení, reporting) pojí kapacity analytiků a vývojářů. | Malá firma má málo lidí na „papírování“ – riziko přetahování projektů. |
| Podpora digitalizace (dotace, EU fondy) | O | Klienti čerpající dotace často řeší IT projekty (data, reporting) – nepřímá poptávka po dodavateli; případně vlastní rozvoj nástrojů s dotací. | Nutné sledovat výzvy; část trhu nakupuje až po schválení dotace (delší cyklus). |
| Daňové zvýhodnění IT investic | O | Zákazníci si mohou lépe obhájit CAPEX na systémy a integrace – mírně podporuje realizaci projektů. | Nepřímý vliv; spíš makro než přímá výhoda pro marži DataVision. |
| Náklady práce (odvody, zaměstnávání) | T | Vyšší celkové náklady zaměstnance → tlak na ceník a marži; omezuje rychlý nábor při růstu zakázek. | Případová studie zmiňuje omezené kapacity – legislativa kolem práce zvyšuje bariéru škálování týmu. |

---

## E – Ekonomické faktory

*U IT firem nejde jen o HDP – důležitá je ochota klientů investovat do IT.*

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| Digitalizace jako nutnost vs. „nice to have“ u klientů | O+T | **O:** firmy ve výrobě a logistice potřebují data a reporting pod tlakem konkurence – poptávka po BI a integracích. **T:** když digitalizace není vnímána jako priorita, projekty se protahují nebo padají z rozpočtu. | DataVision cílí na střední firmy – cyklus nákupu závisí na tom, zda management vidí IT jako investici, nebo náklad. |
| Rozpočtové škrty klientů → odklad nebo škrtnutí IT | T | První škrt často padá na „neprioritní“ IT a rozšíření reportingu – prázdný pipeline, posuny termínů, menší follow-up zakázky. | U služební firmy bez dlouhých kontraktů hrozí výkyvy tržeb a nutnost cash rezervy. |
| Vysoké mzdy IT specialistů | T | Rostoucí personální náklady (analytici, vývojáři) – tlak na marži, pokud ceník nezvedáte; obtížnější nábor do Brna/regions. | Případová studie: vysoká odbornost, omezené kapacity – mzdy přímo limitují růst bez zdražení. |
| Tlak na outsourcing / nearshoring | T | Konkurence levnějších dodavatelů (nearshore, velké integrátory) u standardních integrací a části BI. **O:** možnost spolupráce s partnerem pro špičky. | DataVision musí hrát na kvalitu, doménu a vztahy; cena sama o sobě často nestačí. |
| Kurzové riziko (projekty v EUR/USD, cloud často v USD) | T | Menší projekty v zahraničí (SK, DE) + licence cloud/Azure v cizí měně – kolísání marže při fixních nabídkách v CZK. | Část stacku je Azure/cloud – výdaje v USD/EUR mohou překvapit při dlouhých projektech. |
| Úrokové sazby a financování (drahé vs. levné financování investic) | O+T | **O:** levnější úvěry klientům usnadní financovat větší implementace. **T:** drahé financování odkládá CAPEX projekty u zákazníků (ERP, rozšíření dat). | U SME je citlivost na úroky často vysoká – ovlivňuje načasování zakázek. |
| Inflace (tlak na ceny projektů, tlak klientů na nižší ceny) | T | Rostoucí náklady (mzdy, subdodávky) vs. tlak klientů na fixní nebo nižší ceny – zúžení marže; nutnost pravidelně upravovat ceník a SOW. | Služby na MD/hodiny jsou inflací zranitelné, pokud smlouvy nemají valorizační klauzuli. |

---

## S – Sociální faktory

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| Nedostatek IT specialistů (boj o talenty, růst mezd, fluktuace) | T | Obtížný nábor analytiků a vývojářů v Brně/regionu – projekty se spoléhají na stejné klíčové lidi; riziko odchodu = riziko nedodání; nutnost zvyšovat mzdy a udržovat znalosti. | Případová studie: firma závislá na několika klíčových lidech – sociální faktor se přímo promítá do kontinuity služeb. |
| Remote work, freelance vs. zaměstnanci, distribuované týmy | O+T | **O:** možnost najmout lidi mimo Brno nebo spolupracovat s freelancery při špičkách. **T:** konkurence o lidi napříč ČR/EU; u klientů rozptýlené týmy – složitější workshopy a komunikace na místě. | Pro malý tým je hybrid výhodný, ale vyžaduje řízení znalostí a bezpečnost přístupů k datům klientů. |
| Digitální gramotnost zákazníků (náročnější požadavky, UX) | O+T | **O:** klient lépe popíše potřebu reportingu, rozumí dashboardům – kratší „vysvětlovací“ fáze. **T:** vyšší očekávání vzhledu, samoobsluhy a rychlosti změn; více iterací a UX práce v ceně. | DataVision dodává BI a aplikace – roste tlak na srozumitelnost a self-service pro business uživatele. |
| Důvěra v technologie (AI, bezpečnost dat, outsourcing IT) | O+T | **O:** důvěra v data a v dodavatele posiluje dlouhodobé vztahy a doporučení (hlavní zdroj zakázek). **T:** obavy z úniku dat a z AI snižují ochotu outsourcovat nebo sdílet data – delší sales cyklus, více bezpečnostních požadavků. | Slabý marketing – firma stojí na referencích; jedna ztráta důvěry může poškodit reputaci v úzkém segmentu. |
| Zákaznické chování (tlak na rychlost, očekávání „hotového řešení“, nízká tolerance k chybám) | T | Klienti chtějí rychlé dodání a „fungující“ výsledek – tlak na odhady, scope a kvalitu; chyby v reportingu podkopávají důvěru u managementu klienta. | Nutnost jasného řízení očekávání (MVP vs. plná vize) a testování před předáním. |

---

## T – Technologické faktory

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| Vývoj AI a automatizace (nahrazování části analytické práce, generování kódu, predikce) | O+T | **O:** nové služby (predikce, segmentace, asistence při SQL/kódu) – rozšíření portfolia o „data science light“ a školení. **T:** část rutinní analytiky a jednoduchého reportingu může zákazník řešit nástroji – tlak na cenu a na hodnotu „lidské“ analýzy. | Portfolio už zmiňuje základní DS – AI posiluje důvod investovat do hlubší analytiky, ne jen do dashboardů. |
| Cloud vs. on-premise (přechod na cloud, obavy o bezpečnost, hybrid) | O+T | **O:** Azure a hybridní architektury – projekty napojení dat, modernizace. **T:** většina klientů preferuje on-prem a Docker – nutné udržovat kompetence v nasazení a provozu u zákazníka, ne jen v cloudu. | DataVision musí umět obojí; jinak ztrácí segment regulovaných nebo konzervativních firem. |
| Nástroje a platformy (Power BI, Tableau, Looker; závislost na vendorovi) | O+T | **O:** silná pozice Power BI na trhu – poptávka po školeních, modelech a integracích. **T:** roadmapa Microsoftu a licenční politika ovlivňují náklady klientů; konkurence Tableau/Looker u některých tendrů. | Firma je BI-heavy – změny u vendorů přímo mění rozsah a cenu projektů. |
| Low-code / no-code (klienti si část řešení tvoří sami) | T | Zákazníci si část reportingu a jednoduchých aplikací postaví v Power Platform / podobných nástrojích – menší zakázky na „jednoduché“ věci nebo posun na poradenství a složité integrace. | Nutné posouvat nabídku směrem k datové kvalitě, architektuře a řešením, která low-code samo nezvládne. |
| Kybernetická bezpečnost (útoky, poptávka po zabezpečení) | O | Rostoucí počet incidentů zvyšuje poptávku po bezpečném návrhu, segmentaci přístupů v BI a auditovatelných tocích dat. | Příležitost pro konzultace a úpravy existujících řešení; souvisí s NIS2 a legislativou (návaznost na sekci P). |
| Integrace a datová architektura (rostoucí složitost, data governance) | O | Více systémů (ERP, CRM, logistika) = potřeba integrací, ETL a kvality dat – core business DataVision. **T:** složitost zvyšuje riziko chyb a délku projektů; klienti často nemají governance – nutná analytická práce navíc. | „Střední firmy“ typicky nemají čistá data – firma musí prodávat i úklid a pravidla, ne jen vizualizaci. |

---

## L – Právní faktory (Legal)

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| Smluvní typy a odpovědnost za výsledek (smlouva o dílo, licence, SLA) | O+T | **O:** jasně nastavené SOW a licence snižují spory. **T:** nejednoznačné vlastnictví kódu/modelů a sankce zvyšují právní riziko; nutnost právního review u větších zakázek. | Dodávka řešení v Dockeru u klienta – hranice odpovědnosti musí být ve smlouvě (provoz vs. vývoj). |
| Odpovědnost za škodu a omezení záruky (software, data) | T | Nárok na náhradu škody při chybě v datech/reportingech může být vysoký vůči klientovi – nutnost limitů odpovědnosti a pojištění. | BI ovlivňuje rozhodování managementu; chybná čísla = reputační i právní dopad. |
| Pracovní právo a spolupráce s dodavateli (OSVČ, agentury) | O+T | **O:** flexibilní spolupráce při špičkách. **T:** změny legislativy (např. okolo spolupracujících osob) zvyšují administrativu a cenu externí kapacity. | Malý tým často spoléhá na externisty – compliance musí sedět s fakturací a IP předáním. |
| Duševní vlastnictví a licence (open source, knihovny, Power BI) | O+T | **O:** využití OSS zrychluje vývoj. **T:** porušení licencí nebo špatné šíření kódu klientovi – spor; nutnost licence audit u řešení s třetími stranami. | Integrace a Python stack často závisí na OSS – evidovat licence ve výstupu pro klienta. |
| Konkurenční doložky a ochrana know-how | T | Odchod klíčového člověka ke konkurenci nebo zneužití know-how – slabší ochrana u malé firmy bez robustních smluv. | Případová studie: závislost na klíčových lidech – právní rámec NDAs a přístupů k datům klientů. |
| Spotřebitelské vs. B2B režimy (zřídka u DataVision) | T | Pokud by firma prodávala školení nebo služby i „malým“ subjektům, mohou platit přísnější informační povinnosti – jinak typicky B2B rámec. | Primárně B2B – nižší zátěž než B2C e-commerce. |

---

## Ekologické faktory (Environmental — druhé „E“ v PESTLE)

*Ekologie a udržitelnost; neplést s **Ekonomickými** faktory výše.*

*Návrh vyplnění (upravte podle vlastního úsudku / školení).*

| Faktor | O / T / O+T | Dopad na DataVision | Poznámky / zdůvodnění |
|--------|-------------|---------------------|------------------------|
| Energetická náročnost IT (servery u klienta, cloud, datová centra) | O+T | **O:** optimalizace dotazů, datových toků a architektury snižuje spotřebu – prodejní argument „úspornější reporting“. **T:** klienti řeší náklady energie a CO₂ – tlak na efektivnější zpracování dat a menší noční joby. | Přímý dopad spíš u velkých provozů; u SME menší, ale narůstá v diskuzích o „zeleném“ IT. |
| Udržitelnost a ESG reporting u klientů | O | Firmy sbírají ESG metriky – poptávka po datech, dashboardech a integraci z výroby/logistiky (klienti ve výrobě). | DataVision má klienty ve výrobě a logistice – ESG může být nový zdroj reportů a integrací. |
| Odpovědnost za odpad elektroniky (zřídka přímý dopad) | T | Při dodávce HW nebo on-prem komponent občas nastupují povinnosti k likvidaci / recycling – spíš okrajově u čistě softwarové firmy. | Primárně služby – nízký dopad; u rozšíření o HW by rostl. |
| Legislativa k životnímu prostředí u klientů (emise, odpady) | O | Klienti potřebují měřit a reportovat environmentální ukazatele – data a BI jako nástroj compliance. | Není to core výroby DataVision, ale **příležitost** v projektech u výrobních firem. |
| „Green cloud“ a výběr regionu/datacenter | O+T | **O:** Azure nabízí regiony s nižší uhlíkovou intenzitou – součást návrhu řešení. **T:** náklady nebo omezení výběru lokality podle politiky klienta. | U cloud části projektů lze promítnout do architektonické konzultace. |
| Home office a cestovní stopa (udržitelnost provozu firmy) | O | Menší dojíždění při hybridu – marginální značka u zaměstnanců a marketingu (spíš interní). | Sociální přesah; ekologický přínos menší než u výroby. |

---

## Shrnutí PESTLE

**Nejvýznamnější příležitosti z makrookolí:**

- **Regulace a bezpečnost dat** (GDPR, NIS2, auditovatelnost) – poptávka po řízení dat, logování a konzultacích u klientů s citlivými daty.
- **Kybernetická bezpečnost a bezpečný návrh BI/integrací** – rozšíření služeb o bezpečnostní aspekty a úpravy existujících řešení.
- **Rostoucí složitost integrací a datová architektura** – jádrová oblast firmy (ERP/CRM, ETL, kvalita dat); digitalizace u středních firem jako dlouhodobý tahoun poptávky.
- **Technologický vývoj AI** – možnost nabízet predikce, pokročilejší analytiku a školení místo čistě „klasického“ reportingu.
- **Cloud a hybrid (Azure)** – projekty modernizace napojení dat u klientů, kteří postupně přidávají cloud k on-prem.
- **Podpora digitalizace a zvýhodnění IT investic** – nepřímo podporuje rozhodnutí klientů investovat do projektů (časování zakázek).
- **Právní jistota smluv a IP** (L) – dobře nastavené smlouvy a licence umožňují škálovat dodávky bez zbytečných sporů; u B2B typicky výhoda oproti B2C režimu.
- **ESG a environmentální reporting klientů** (E) – nové požadavky na data a dashboardy ve výrobě a logistice.

**Nejvýznamnější hrozby z makrookolí:**

- **Smluvní a provozní tlak** (SLA, uptime, penalizace) – vyšší riziko a náklady u malé firmy s omezenou kapacitou.
- **Ekonomika klientů** – škrty v IT jako první oběť; inflace a kurzové riziko tlačí na marži a stabilitu pipeline.
- **Náklady na zaměstnance a nedostatek specialistů** – tlak mezd, fluktuace, závislost na klíčových lidech.
- **Konkurence (outsourcing, nearshoring, low-code)** – cenový a substituční tlak na jednoduché projekty a reporting.
- **Legislativa a veřejné zakázky** – administrativní bariéra u státního sektoru bez investic do VZ a certifikací.
- **Očekávání klientů** – rychlost dodání, „hotové“ řešení, nízká tolerance k chybám v datech a reportingu.
- **Právní rizika smluv a odpovědnosti za data** (L) – vysoké nároky na správnost reportingu; riziko sporů při špatně vymezené odpovědnosti (klientův provoz vs. dodávka).
- **Energetická politika a tlak na efektivitu IT** (E) – rostoucí cena energií a potřeba obhájit náročné noční zpracování dat / velké dotazy u klientů.

**Krátký závěr (3–5 vět):**

Makrookolí pro DataVision kombinuje **příležitosti v regulaci, bezpečnosti a složitosti datových řešení** s **hrozbami na straně nákladů lidí, marže a konkurence levnějších nebo samoobslužných modelů**. Firma je pozitivně nasměrovaná na poptávku po integracích, BI a governance, ale musí počítat s **výkyvy poptávky** podle ekonomické situace klientů a s **rostoucími nároky na kvalitu, bezpečnost a rychlost**. Technologický vývoj (AI, low-code) neznamená jen hrozbu, ale i **šanci posunout nabídku směrem k vyšší přidané hodnotě**, pokud se nebude konkurovat jen cenou jednoduchých dashboardů. Rozšíření na **PESTLE** doplňuje **právní rovinu smluv a IP** a **ekologický kontext** (ESG data, energetická efektivita řešení), který u výrobních a logistických klientů přibývá k klasickým BI projektům. Pro strategické rozhodnutí je užitečné PESTLE propojit s **Porterovou analýzou** a následně se **SWOT** (interní silné/slabé stránky).

---

*Další krok v rámci úkolu 1: Porterova analýza 5 sil, poté SWOT a strategická doporučení.*
