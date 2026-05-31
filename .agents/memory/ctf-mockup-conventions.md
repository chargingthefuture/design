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

## pnpm version
Use pnpm@10.26.1 (matches nix store). Do not upgrade to 10.32+ without checking nix store version first.
