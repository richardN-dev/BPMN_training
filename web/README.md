# Webová prezentace — případová studie DataVision

Next.js aplikace: **zadání** (`content/zadani.md`) a **vypracování** úkolů 1–4 (Markdown z `output/docs`, kopie ve `web/content/`).

## Lokální vývoj

```bash
cd web
npm install
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000).

## Nasazení na Vercel

1. Účet na [vercel.com](https://vercel.com) a (doporučeno) repo na GitHubu/GitLabu s tímto projektem.
2. V Vercelu: **Add New Project** → import repozitáře → jako **Root Directory** nastavte `web` (nebo z rootu monorepo použijte „Edit“ a nastavte subdirectory na `web`).
3. Framework Preset: **Next.js** (automaticky). Build: `npm run build`, Output: `.next`.
4. Deploy.

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
