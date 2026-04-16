# Webová prezentace — případová studie DataVision

Next.js aplikace: **zadání** (`content/zadani.md`) a **vypracování** úkolů 1–4 (Markdown z `output/docs`, kopie ve `web/content/`).

## Lokální vývoj

```bash
cd web
npm install
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000).

Obrázky v Markdownu (např. BPMN diagramy na stránkách Proces 1–4): **kliknutím** se otevře zvětšený náhled; zavření klikem mimo obrázek nebo klávesou Esc.

## Push na GitHub (jednorázově)

V kořeni `BPMN_training` (ne v `web/`):

1. Na GitHubu vytvořte **prázdný** repozitář (bez README).
2. Přidejte remote a pushněte větev `main`:

```bash
cd BPMN_training
git remote add origin https://github.com/VAS_UZIVATEL/VAS_REPO.git
git push -u origin main
```

(Přihlášení na GitHub proběhne přes prohlížeč nebo uložené údaje v Git Credential Manageru — hesla do chatu neposílejte.)

## Nasazení na Vercel

1. Účet na [vercel.com](https://vercel.com) a repozitář na GitHubu s tímto projektem (viz výše).
2. V Vercelu: **Add New Project** → **Import** vašeho GitHub repozitáře → jako **Root Directory** nastavte `web`.
3. Framework Preset: **Next.js** (automaticky). Build: `npm run build`, Output: `.next`.
4. Deploy.

**Pokud po nasazení vidíte jen Vercel `404 NOT_FOUND`:** v **Build and Deployment → Framework** musí být **Next.js**, ne „Other“. U Next.js nechte **Output Directory** prázdné (nepřepisovat na `out` ani `.next` ručně). Viz [Vercel: 404 po deployi](https://vercel.com/guides/why-is-my-deployed-project-giving-404).

**CLI (alternativa):**

```bash
cd web
npx vercel
```

Po přihlášení do Vercelu proběhne build a dostanete URL náhledu.

### Monorepo z kořene BPMN_training

Pokud importujete celý repozitář `BPMN_training`:

- V **Project Settings → General → Root Directory** nastavte `web`.
- Nebo přidejte `vercel.json` do kořene s `{"buildCommand": "cd web && npm run build", ...}` — jednodušší je jen Root Directory = `web`.

## Aktualizace obsahu

Po úpravách souborů v `output/docs/` zkopírujte je znovu do `web/content/` a případně obrázky do `web/public/diagrams/`.

```powershell
Copy-Item ..\output\docs\*.md .\content\
Copy-Item ..\output\diagrams\*.png .\public\diagrams\
```
