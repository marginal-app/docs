# marginal-docs

Docs and landing page for [Marginal](https://github.com/marginal-app/marginal-app), a self-hosted, local-first web highlighter.

- `/` — landing page (`src/pages/index.astro`)
- `/getting-started/…`, `/self-host/…`, `/concepts/…` — docs (Starlight, `src/content/docs`)

Design source of truth is the Figma file **Marginal-App**. Tokens in `src/styles/tokens.css` and every image in `public/screens/` are exported from it; do not redraw screens here.

```bash
pnpm install
pnpm dev
pnpm build
```
