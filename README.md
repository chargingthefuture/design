# design

This workspace contains design and mockup artifacts for the Charging the Future app (mockups,
the landing page mirror, the slideshow deck, design tokens).

## Status: reference only (owner decision, 2026-06-17)

Production is the single source of truth for design. This repository and the Replit design agent
are deprecated: nothing here is authoritative and nothing is synced into the app repository any
more. Agents building UI in `chargingthefuture/chargingthefuture` use it for inspiration (the
design guide, tokens, component patterns) and never restore a shipped screen to a mockup kept
here. The one-way sync described in `DESIGN_BOUNDARY.md` and `sync-manifest.json` is the
historical contract, kept for the record.

## Layout

| Path | What it is |
|---|---|
| `artifacts/mockup-sandbox/` | Vite + React app that previews the mockup components |
| `artifacts/ctf-landing/` | Mirror of the marketing landing page (`chargingthefuture/landing-page`) |
| `artifacts/survivor-hub-deck/` | Slideshow deck |
| `artifacts/api-server/` | Small API used by the sandbox |
| `DESIGN_BOUNDARY.md`, `sync-manifest.json` | The former design-to-app sync contract |

## Deploying `artifacts/mockup-sandbox` to Vercel

The mockup sandbox is a Vite React app located at `artifacts/mockup-sandbox`.

### Steps

1. Open Vercel and import this repository.
2. Set the project root to `artifacts/mockup-sandbox`.
3. Use the build command:
   - `pnpm run build`
4. Set the output directory to:
   - `dist`
5. Ensure the environment variable `BASE_PATH` is either unset or `/`.

### Notes

- `artifacts/mockup-sandbox/vercel.json` is included to support Vercel static deployment.
- `artifacts/mockup-sandbox/vite.config.ts` now defaults `BASE_PATH` to `/` and does not require `PORT` for production.
- The app supports SPA routing so preview paths under `/preview/*` will work.

### Local build verification

From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm --dir artifacts/mockup-sandbox run build
```
