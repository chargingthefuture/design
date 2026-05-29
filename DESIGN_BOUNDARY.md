# Design Boundary — Read Before Any Sync

This document defines the contract between the **design repo** (this repo, Replit) and the **app repo** (the separate production codebase). Both agents must read this before performing any sync operation.

---

## Repo responsibilities

| Repo | Owns | Never touches |
|------|------|---------------|
| **Design repo** (this repo) | Mockup components, landing page, slideshow deck, design tokens | App business logic, API routes, database schema, auth, anything in the app repo |
| **App repo** | Production application code, backend, infrastructure | Mockup source files, landing page source, slideshow source |

---

## Sync direction

```
design-repo  ──(copy only)──▶  app-repo
```

**One way. Never the other direction.**

The app repo never writes back to the design repo. The design repo never receives files from the app repo.

---

## The manifest is the contract

`sync-manifest.json` (repo root) lists every file that is allowed to move from design → app. Before touching anything during a sync:

1. Read `sync-manifest.json`
2. Only copy the files listed under `components.files`
3. Copy them from `components.src_dir` to `components.dest_dir`
4. Do nothing else

If a file is not in the manifest, it does not get synced. Period.

---

## The header marker protects app-owned files

Every file copied from the design repo must have this as its **first line**:

```
// design-sync
```

During a sync, the app agent checks for this marker before overwriting:

- **Marker present** → file is design-owned → safe to overwrite
- **Marker absent** → file is app-owned → skip it, do not touch it

This means: even if a file has the same name as a design component, if the app team has removed the marker because they customized it, it will never be overwritten again.

---

## What agents must never do during a sync

- `rm`, `rmdir`, `git rm`, or any deletion in the app repo
- Modify files outside `components.dest_dir`
- Touch `package.json`, `tsconfig.json`, routes, auth, database, or API files
- Remove imports or exports in the app repo's barrel/index files (add only)
- Commit or push on behalf of the other repo

---

## Adding a new design component

1. Build the component in `artifacts/mockup-sandbox/src/components/mockups/survivor-hub/`
2. Add its filename to `sync-manifest.json` under `components.files`
3. Add `// design-sync` as the first line of the new file
4. Commit both changes together — the manifest and the component

The app agent will pick it up on the next sync.

---

## Removing a design component

1. Delete it from `artifacts/mockup-sandbox/src/components/mockups/survivor-hub/`
2. Remove its filename from `sync-manifest.json`
3. **Do not delete it from the app repo** — flag it for the app team to remove manually
4. Add a note to the bottom of this file under "Deprecated components" if needed

Deletions in the app repo are always a human or app-team decision, never an automated sync action.

---

## Deprecated components

None yet. List any design components that have been retired here so the app team knows they can safely remove the corresponding files from the app repo.

---

## Checklist for the design agent before committing

- [ ] New or changed component files are in `artifacts/mockup-sandbox/src/components/mockups/survivor-hub/`
- [ ] Each new file starts with `// design-sync` on line 1
- [ ] `sync-manifest.json` is updated if any files were added or removed
- [ ] No files outside `artifacts/` were modified in this session (unless fixing the landing page or slideshow, which are design-owned)

## Checklist for the app agent before syncing

- [ ] Read `sync-manifest.json` — only copy listed files
- [ ] Check each destination file for the `// design-sync` marker before overwriting
- [ ] Confirm zero deletions will happen
- [ ] Confirm no files outside `components.dest_dir` will be modified
