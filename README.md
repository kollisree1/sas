# Southern Agentic Systems (`southernagenticsystems`)

Marketing site for **Southern Agentic Systems** — React + Vite, deployed to **Heroku** (static build + `serve`).

## Prerequisites

- **Node.js** ≥ 20 (`nvm use` reads `.nvmrc`)

## Local development

```bash
cd southernagenticsystems   # this folder (standalone repo root)
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run lint
npm run build    # production bundle → dist/
npm run preview  # optional: test dist locally
```

## GitHub

This repository is intended to live at **`origin`** (e.g. `github.com/kollisree1/sas`). From this folder:

```bash
git status
git add .
git commit -m "Your message"
git push -u origin main
```

### GitHub Actions → Heroku

Workflow: `.github/workflows/deploy-heroku.yml` runs on pushes to **`main`**.

Repository secrets (**Settings → Secrets and variables → Actions**):

| Secret           | Purpose                          |
|-----------------|----------------------------------|
| `HEROKU_API_KEY`| Heroku account API key           |
| `HEROKU_EMAIL`  | Email you use to log into Heroku |

The Heroku app name in the workflow is **`southernagenticsystems`** — change it there if your app name differs.

## Heroku (manual deploy)

From this repo:

```bash
git push heroku main:master
```

(`master` is the branch name Heroku often uses for the deployed slug.)

## Production start

Heroku runs `npm start` → `serve -s dist`; `heroku-postbuild` runs `npm run build`.
