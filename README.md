# marginal-docs

Docs and landing page for [Marginal](https://github.com/marginal-app/marginal-app), a self-hosted, local-first web highlighter.

- `/` — Korean landing page (`src/pages/index.astro`)
- `/en/` — English landing page (`src/pages/en/index.astro`)
- `/getting-started/…`, `/self-host/…`, `/concepts/…` — Korean docs (Starlight)
- `/en/getting-started/…`, `/en/self-host/…`, `/en/concepts/…` — English docs (Starlight)

Use the language switcher to move between the Korean and English versions of the current page. Add future translations under `src/content/docs/<locale>/` and register the locale in `astro.config.mjs`.

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
