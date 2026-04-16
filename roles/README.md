# Role a agenti projektu

## PRAVIDLO: Vždy používej NEJVYŠŠÍ verzi profilu

Pokud existuje více verzí profilu, **vždy používej verzi s nejvyšším číslem** (viz pole `version` v YAML hlavičce). Při úpravě profilu zvyš verzi a zapiš do `revisions`.

---

## Na začátku projektu

**Před zahájením práce:**

1. **Zkontroluj projektový kontext** – existuje `input/project_context.md`?
   - Pokud **ne** → požádej o vyplnění šablony z `templates/project_context.md`
   - Pokud **ano** → načti ho a řiď se jím
2. **Zeptej se: „S jakými rolemi budeme na tomto projektu pracovat?"**
3. Pro každou vybranou roli aktivuj příslušného agenta

---

## Přehled rolí

### Architecture (ICT architektura)

| Role | Profil | Agent | Verze | Zaměření |
|------|--------|-------|-------|----------|
| **Enterprise Architekt** | [architecture_enterprise-architect.md](Architecture/architecture_enterprise-architect.md) | `@agent-enterprise-architect` | 1.1 | TOGAF, ArchiMate, BPMN, UML |
| **Application Architekt** | [architecture_application-architect.md](Architecture/architecture_application-architect.md) | `@agent-application-architect` | 1.1 | Microservices, API, eIDAS, NSSS |
| **Infrastructure Architekt** | [architecture_infrastructure-architect.md](Architecture/architecture_infrastructure-architect.md) | `@agent-infrastructure-architect` | 1.1 | ARM64, KVM, Kubernetes, Ceph |
| **Security Architekt** | [architecture_security-architect.md](Architecture/architecture_security-architect.md) | `@agent-security-architect` | 1.1 | Zero Trust, E2EE, compliance |

### Analysis (Business analýza)

| Role | Profil | Agent | Verze | Zaměření |
|------|--------|-------|-------|----------|
| **IT Business Analytik** | [analysis_business-analyst.md](Analysis/analysis_business-analyst.md) | `@agent-business-analyst` | 1.0 | Požadavky, BPMN, UML, specifikace |

### Management

| Role | Profil | Agent | Verze | Zaměření |
|------|--------|-------|-------|----------|
| **Projektový Manažer** | [management_project-manager.md](Management/management_project-manager.md) | `@agent-project-manager` | 1.0 | PRINCE2, Agile, plánování, reporting |

### Clarity (Broadcom Clarity PPM)

| Role | Profil | Agent | Verze | Zaměření |
|------|--------|-------|-------|----------|
| **Clarity Funkční Konzultant** | [clarity_functional-consultant.md](Clarity/clarity_functional-consultant.md) | `@agent-clarity-functional` | 1.1 | PPM procesy, konfigurace, governance |
| **Clarity Technický Konzultant** | [clarity_technical-consultant.md](Clarity/clarity_technical-consultant.md) | `@agent-clarity-technical` | 1.1 | Integrace, GEL, NSQL, troubleshooting |

**Poznámka:** Clarity role vycházejí ze společného [clarity_consultant-system-prompt.md](Clarity/clarity_consultant-system-prompt.md) (v1.1).

---

## Agenti

Agenti jsou definováni v `.cursor/rules/` a aktivují se při otevření příslušného profilu.

| Agent | Soubor | Aktivace |
|-------|--------|----------|
| Enterprise Architekt | `agent-enterprise-architect.mdc` | Otevření enterprise-architect profilu |
| Application Architekt | `agent-application-architect.mdc` | Otevření application-architect profilu |
| Infrastructure Architekt | `agent-infrastructure-architect.mdc` | Otevření infrastructure-architect profilu |
| Security Architekt | `agent-security-architect.mdc` | Otevření security-architect profilu |
| Projektový Manažer | `agent-project-manager.mdc` | Otevření project-manager profilu |
| IT Business Analytik | `agent-business-analyst.mdc` | Otevření business-analyst profilu |
| Clarity Funkční | `agent-clarity-functional.mdc` | Otevření functional-consultant profilu |
| Clarity Technický | `agent-clarity-technical.mdc` | Otevření technical-consultant profilu |

---

## Postup při zahájení projektu

1. **Projektový kontext** – Vyplň `input/project_context.md` (šablona: `templates/project_context.md`)
2. **Urči role** – Zeptej se: „S jakými rolemi budeme pracovat?"
3. **Aktivuj agenty** – Otevři příslušné profily v `roles/`
4. **Konzultuj profily** – Při práci se řiď instrukcemi v profilech (vždy nejvyšší verze!)

---

## Verzování profilů

| Akce | Pravidlo |
|------|---------|
| Nový profil | `version: "1.0"`, `status: "Active"` |
| Drobná úprava | Zvyš minor (1.0 → 1.1), zapiš do `revisions` |
| Zásadní změna | Zvyš major (1.1 → 2.0), zapiš do `revisions` |
| Nahrazení | `status: "Replaced"`, nový profil s vyšší verzí |
