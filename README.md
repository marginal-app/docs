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

## Deploy (Cloudflare Pages)

Connect this repo in the Cloudflare dashboard with:

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node version | read from `.node-version` (24.18.1) |

Custom domain `docs.marginal.app` is set in the Pages project (the `public/CNAME` file only matters for GitHub Pages). `public/_headers` and `public/_redirects` are picked up by Pages automatically.
