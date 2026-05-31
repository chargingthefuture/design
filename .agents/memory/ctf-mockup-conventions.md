---
name: CTF mockup-sandbox conventions
description: Durable design rules and naming standards for the Charging The Future / Survivor Hub mockup-sandbox, established through systematic punch-list work.
---

## Phase labels
Remove entirely — no replacement word (not "Live", "Beta", "Active", etc.). Affects both sidebar badge `<span>` elements in Empty files and `· Phase X` suffixes in main-component subtitles.

**Why:** Owner decision — phase labelling was exposed to users and implies incomplete product.

**How to apply:** Search for `Phase` in any new mockup file before merging; remove if found.

## Naming conventions
- "ServiceCredits" — one PascalCase word everywhere (not "Service Credits", not "SC", not "cr"). Exception: numeric inline badges like "{n} SC" are acceptable in tight-space contexts only.
- Plugin count: **18 plugins** (internal term "plugin", not "mini-app"). Use "Usable across all 18 plugins" in fiat-adjacent copy.
- Goal framing: aspirational numbers (e.g. 5M) must be labelled "Goal:" or framed as aspirational — never presented as current reality.

## Standard loading state format
All loading components (not just survivor-hub, also landing/) must use this exact format:
```tsx
// design-sync
export function XxxLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0F1117", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',system-ui" }}>
      <div style={{ textAlign: "center", padding: "0 32px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", fontWeight: 500, marginBottom: 16, lineHeight: 2 }}>
          EXIT THEIR ECONOMY
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", fontWeight: 500, lineHeight: 2 }}>
          EXIT THE PSYOP
        </div>
      </div>
    </div>
  );
}
```
No spinners, no Tailwind, no "Preparing your community..." copy.

## Fiat parity rule
Never show dollar-equivalent values for ServiceCredits (e.g. "≈ $242 USD"). Copy should say "usable across 18 plugins" or similar non-monetary framing.

## Brand voice
- Trafficker language in user-facing copy: replace with self-sufficiency/dignity framing (e.g. "stop depending on traffickers" → "build self-sufficient pathways"; "reduces infiltration" → "adds social proof").
- Urgency stacking: remove double-urgency in housing posts ("Urgent:" prefix + "immediately" → neutral tone).
- Crisis labels: "Crisis Handled" → "Crisis Support Provided".
- DO (caps) emphasis: use sentence case ("do") in affirmation copy.

## Trust brand color
MobileTrust canonical color: `#0EA5E9` (not `#0284C7`). Both MobileTrust.tsx and MobileTrustEmpty.tsx should use `#0EA5E9`.

## Chyme/ChymeApp relationship
Chyme.tsx is a re-export barrel from ChymeApp.tsx. ChymeApp.tsx is the canonical implementation. Do not edit Chyme.tsx directly.

## design-sync marker
All mockup files (including landing/) must start with `// design-sync` on line 1.

## Widely-misattributed Jung quote
"You are not what happened to you. You are what you choose to become." — NOT from Carl Jung. Rendered as "— Unattributed" in Desktop.tsx.

## Deck frame fit — mockup root height
The survivor-hub-deck renders every mockup inside a FIXED 1440×900 (mobile 390×844) div with `overflow:hidden`, then scales the whole frame to fit. It is NOT an iframe and the height is NOT auto-fit to content. Mockup roots must therefore be bounded to the frame, or tall content gets clipped at the bottom (e.g. a chat composer disappearing).

**Rule:** mockup root must use `height:"100vh"` + `maxHeight:"100%"` + `overflow:"hidden"` — never Tailwind `min-h-screen` (min-height allows unbounded growth, so inner flex `ScrollArea`s never constrain and content overflows the frame). `maxHeight:"100%"` caps to the 900px deck frame when window>900 (deck context) while being ignored in the bare-rendered mockup-sandbox (no definite-height parent) so it stays full-viewport there. Long inner panes (feeds, sidebars) get their own `flex:1; overflowY:auto; minHeight:0` so they scroll internally instead of pushing the frame.

**Why:** HubPublic worked because it already used `height:100vh`+overflow:hidden; Desktop signed-in was cut off because it used `min-h-screen`.

## No platform-wide direct messaging
There is NO standalone/persistent direct-messaging feature on Survivor Hub. DMs exist ONLY transiently inside an app's transaction scope (e.g. requesting a ride in TrustTransport opens a chat between the two parties; when the ride/transaction completes the chat closes). Do not add a "Direct Messages" list, DM tab, or persistent inbox to the Hub sidebar or any global navigation. The mobile "Chat" nav refers to the #community channel, not DMs — that is fine.

**Why:** Owner correction — platform model is community channels + app-scoped ephemeral chat, not a Slack/Discord-style persistent DM system.

## App/plugin count labels — do not auto-bump
The numeric app/plugin count in copy and in `app_count` of both sync-manifest files is owner-sensitive and ambiguous (grid tile count vs brand-narrative count differ). When adding a new app, do NOT change these count labels to keep them "in sync" with the number of tiles — leave them as-is unless the owner explicitly asks. Reviewers (architect) may suggest bumping; treat that as non-blocking and skip it.

**Why:** Counts span brand copy, fiat-parity copy ("usable across N plugins"), and manifest metadata; a blind bump risks contradicting copy elsewhere. Owner intent on the canonical number is unconfirmed.

## "What Works" app (18th user-facing app)
One SHARED, survivor-verified curated list of tools/products organized by problem (benable.com list format meets the "Look Ma, I Fixed It" problems page). Brand color `#84CC16` (lime, BRAND const in each file). 8 mockup files (web+mobile × default/Public/Empty/Loading). Grid tile id `"what-works"`, icon `ListChecks`. Public state is publicly readable with a sign-in gate to suggest. No ads, no affiliates — that framing is core to the concept (icon: `Ban`, not `Heart`).

**Why:** Owner wanted a single trusted, survivor-verified shopping list keyed by the real problems survivors face, distinct from per-user lists (which may come later).

**No prices:** Product cards/data carry NO price field. Owner decision — monitoring prices of programmatically-shared links is too tedious/expensive/fragile. Don't reintroduce a `price` on the Product type or card JSX.

**Add-item / "Empty" form (WhatWorksEmpty + MobileWhatWorksEmpty):** used by BOTH admins and members (NOT admin-only — that gating was tried and reverted). Deck slide label "Web/Mobile · Add Item". The "Problem it solves" field is a `<select>` over `EXISTING_PROBLEMS` — members can only pick a pre-existing problem; only admins create new problems (prevents the same need being listed twice under different names). Keep this page even if per-survivor published lists ship later — it's reused there.

## pnpm version
Use pnpm@10.26.1 (matches nix store). Do not upgrade to 10.32+ without checking nix store version first.
