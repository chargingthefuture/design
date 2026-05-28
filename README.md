# design

This workspace contains design and mockup artifacts for the Survivor Hub project.

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
