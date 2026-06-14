# Survivor Hub — Front-End Design Guide

> **Authority:** This guide is the single source of truth for all Survivor Hub UI work. When in doubt, defer to the existing mockup files in `artifacts/mockup-sandbox/src/components/mockups/survivor-hub/`. Every rule here is derived from those files — not the other way around.

---

## 1. Color Tokens

All values are used as inline-style hex strings or `rgba()` — no Tailwind, no CSS variables.

### Brand

| Token | Value | Usage |
|---|---|---|
| `BRAND` | `#7C3AED` | Primary violet — buttons, active states, gradient start |
| `CYAN` | `#0EA5E9` | Secondary cyan — gradient end, AI elements, Trust |
| `BRAND_GRADIENT` | `linear-gradient(135deg, #7C3AED 0%, #0EA5E9 100%)` | CTA buttons, logo mark, hero overlays |

### App accent colors

Every app surface has its own accent color and a matching dark card background (`bg`). **These are canonical — do not reassign, share, or omit.** The first row is the **Hub** platform shell; the last row is the **Account & Data** user-facing surface; the rows between are shipped plugins. Each accent is unique across the whole table (no two surfaces share a hex).

> **Plugin-count note:** This table includes the Hub shell plus every shipped plugin (including `LevelUp`, previously missing). The public-facing "18 plugins" figure in §12 is a separate marketing count — do **not** infer it from this table's row count, and do not change §12 without explicit owner instruction.

| App | Accent | Background (`bg`) |
|---|---|---|
| Hub *(platform shell)* | `#7C3AED` | `#0E061A` |
| GDP | `#06B6D4` | `#011417` |
| What Works | `#84CC16` | `#0F1602` |
| Trust | `#0EA5E9` | `#02121A` |
| Chyme / Live | `#22C55E` | `#04160A` |
| Foundation | `#F59E0B` | `#1B1101` |
| ServiceCredits | `#A855F7` | `#12091B` |
| ClickLog | `#EC4899` | `#1A0811` |
| GentlePulse | `#34D399` | `#061711` |
| LightHouse | `#60A5FA` | `#0B121C` |
| SocketRelay | `#FB923C` | `#1C1007` |
| TrustTransport | `#38BDF8` | `#06151B` |
| Workforce | `#F97316` | `#1B0D02` |
| Unlock | `#C084FC` | `#150F1C` |
| Mood | `#4ADE80` | `#08180E` |
| Directory | `#93C5FD` | `#10161C` |
| SkillsHunt | `#FBBF24` | `#1C1504` |
| SkillsTaxonomy | `#818CF8` | `#0E0F1B` |
| PeerProgramming | `#6EE7B7` | `#0C1914` |
| LevelUp | `#10B981` | `#02140E` |
| Account & Data *(user-facing surface)* | `#D946EF` | `#18081A` |

#### Background (`bg`) derivation rule

The `bg` column is **derived from the accent**, not hand-picked, so downstream repos can regenerate it deterministically:

```
bg = each accent RGB channel × 0.11, rounded to the nearest integer
```

This yields a near-black tint that preserves the accent's hue (e.g. Foundation accent `#F59E0B` → `bg #1B1101`). When an accent changes, recompute its `bg` with the same rule — never leave a `bg` whose hue no longer matches its accent. The `bg` is used behind app tiles and the app-open surface (e.g. `Desktop.tsx` `MINI_APPS`, the landing page app grid).

> **Hub accent — resolved collision:** Hub previously carried `#38BDF8` on the landing page, which is **TrustTransport's** accent. Hub now uses the brand violet `#7C3AED` (the platform/home shell carries the brand color), keeping every row collision-free.

### Semantic

| Token | Value | Usage |
|---|---|---|
| Success / Live | `#22C55E` | Live indicator, member count, positive state |
| Urgent / Error | `#EF4444` | Urgent announcements, destructive actions |
| AI blue | `#38BDF8` | AI Q&A text accent, @comic chip |
| AI blue soft | `#7DD3FC` | AI secondary text, pending state |
| Purple soft | `#A78BFA` | Brand accent text, AI Assistant icon |
| Purple lighter | `#C4B5FD` | Hover/emphasis on brand elements |

---

## 2. Backgrounds & Surfaces

| Layer | Value | Where |
|---|---|---|
| Root / page | `#0F1117` | Outermost container |
| Status bar / bottom nav / top bar | `#090B0F` | Mobile status bar, desktop icon rail |
| Panel / right rail / header | `#0D0F14` | Desktop right column, header bars |
| Surface / sidebar | `#161B27` | Second sidebar, card surfaces in empty states |
| Card (subtle) | `rgba(255,255,255,0.02)` | Feed post cards |
| Card (hover/active) | `rgba(255,255,255,0.04)` | Composer input, interactive rows |

### Borders

| Use | Value |
|---|---|
| Hard border (sidebar dividers) | `#1E2A3A` |
| Soft border (most cards) | `rgba(255,255,255,0.06)` |
| Softer border (inner elements) | `rgba(255,255,255,0.08)` |
| Accent tint border | `rgba({accent_hex},0.2–0.35)` |

---

## 3. Typography

No external font loading — `'Inter', system-ui, sans-serif` everywhere. Set on the root container; do not repeat on every element.

| Role | `fontSize` | `fontWeight` | `color` | Notes |
|---|---|---|---|---|
| Display / hero number | `22–26` | `800` | `#F9FAFB` | GDP figures, hero stats |
| Screen title | `18–20` | `800` | `#F9FAFB` | Page H1s |
| Section heading | `15` | `700` | `#F9FAFB` | Card titles, panel headers |
| Card author / name | `14–15` | `700` | `#F9FAFB` | |
| Body | `14` | `400` | `#D1D5DB` | lineHeight `1.6–1.7` |
| Body emphasis | `14` | `600` | `#E8EAF0` | |
| Secondary body | `13` | `400` | `#9CA3AF` | Descriptions, sub-lines |
| Label uppercase | `11` | `700` | `#4B5563` | `letterSpacing:0.08em`, `textTransform:uppercase` |
| Meta / timestamp | `11–12` | `400` | `#6B7280` | |
| Badge text | `10` | `600` | varies | See badge section |
| Loading screen text | `11` | `500` | `rgba(255,255,255,0.22)` | `letterSpacing:0.18em`, uppercase |

---

## 4. Border Radius

| Element | Value |
|---|---|
| Feed cards | `borderRadius: 14–16` |
| CTA buttons | `borderRadius: 8–10` |
| Chips / small badges | `borderRadius: 4–7` |
| Icon containers (square) | `borderRadius: 10–12` |
| Avatar (circle) | `borderRadius: "50%"` |
| Modal / consent dialog | `borderRadius: 20–22` |
| Pill badges | `borderRadius: 20–24` |
| Composer input area | `borderRadius: 14` |
| Send button | `borderRadius: 8–9` |

---

## 5. Component Patterns

### 5.1 Community Feed Cards

#### Regular post card
```
background: rgba(255,255,255,0.02)
border:      1px solid rgba(255,255,255,0.06)
borderRadius: 16
padding:      20px
marginBottom: 16
```
- Avatar: `40×40`, `borderRadius:12`, background `${authorColor}22`, border `${authorColor}38`, text `fontWeight:800` in `authorColor`
- Author name: `fontSize:14, fontWeight:700, color:#F9FAFB`
- Timestamp: `fontSize:12, color:#4B5563`
- Body: `fontSize:14, color:#D1D5DB, lineHeight:1.7`
- Reaction row: Heart (pink `#EC4899` when liked), MessageCircle, Share2, Bookmark — all `fontSize:13, color:#6B7280`

#### Announcement card
```
Not urgent:  background rgba(124,58,237,0.07)  border 1px solid rgba(124,58,237,0.22)
Urgent:      background rgba(239,68,68,0.05)   border 1px solid rgba(239,68,68,0.25)
```
- Author "SH" logo: `28–40px`, gradient pill, `fontWeight:800`
- Official badge: `fontSize:10, padding:1px 5px, borderRadius:3, background:rgba(124,58,237,0.2), color:#A78BFA`
- URGENT badge: `padding:3px 8px, borderRadius:5, background:#EF444415, border:1px solid #EF444330, color:#EF4444, fontSize:10, fontWeight:700`

#### AI Q&A card (answered)
```
background: rgba(14,165,233,0.04)
border:      1px solid rgba(14,165,233,0.16)
borderRadius: 16
padding:      20px
```
- AI icon container: `40×40, borderRadius:12, background:rgba(14,165,233,0.1), border:1px solid rgba(14,165,233,0.22)`
- "AI Assistant" label: `fontSize:14, fontWeight:700, color:#F9FAFB`
- Badge "🤖 Q&A": `fontSize:10, background:rgba(14,165,233,0.1), color:#7DD3FC, border:1px solid rgba(14,165,233,0.25), padding:2px 7px, borderRadius:4`
- Q block: `padding:10px 14px, borderRadius:10, background:rgba(255,255,255,0.03), border:1px solid rgba(255,255,255,0.06)`
  - "Q: " label: `color:#38BDF8, fontWeight:600`
- A text: `fontSize:14, color:#D1D5DB, lineHeight:1.7`
- Rating row (below a `borderTop:1px solid rgba(14,165,233,0.12)` separator, `marginTop:12`):
  - Helpful: thumb-up → active `background:rgba(34,197,94,0.15), border:rgba(34,197,94,0.4), color:#4ADE80` / idle `background:rgba(255,255,255,0.03), border:rgba(255,255,255,0.08), color:#6B7280`
  - Not helpful: thumb-down → active `background:rgba(148,163,184,0.15), border:rgba(148,163,184,0.4), color:#CBD5E1`
  - Flag: → active `background:rgba(239,68,68,0.12), border:rgba(239,68,68,0.35), color:#F87171` / idle `background:transparent, border:transparent, color:#4B5563`; `marginLeft:auto`

#### AI Pending card
```
background: rgba(14,165,233,0.03)
border:      1px dashed rgba(14,165,233,0.3)
borderRadius: 16
padding:      20px
```
- "Reviewing for safety" badge: `<ShieldCheck size={9} /> Reviewing for safety` — same badge style as Q&A but `color:#7DD3FC`
- Animated dots (3 spans, opacity `0.35 / 0.60 / 0.85`): `width:6, height:6, borderRadius:"50%", background:#38BDF8`
- Body text: `fontSize:13, color:#7DD3FC, lineHeight:1.6` — "AI Assistant is preparing an answer — a teammate is reviewing it for safety before it's posted."

### 5.2 Badges & Chips

| Badge | Style |
|---|---|
| **Live** | `background:${color}15, color:${color}, border:1px solid ${color}30, fontSize:10, padding:2px 8px, borderRadius:20` |
| **Verified Member** | `background:rgba(124,58,237,0.15), color:#A78BFA, border:1px solid rgba(124,58,237,0.25), fontSize:11, padding:4px 12px, borderRadius:20` |
| **📣 Official** | `background:rgba(124,58,237,0.2), color:#A78BFA, fontSize:10, padding:1px 5px, borderRadius:3` |
| **🤖 Q&A** | `background:rgba(14,165,233,0.12), color:#38BDF8, fontSize:10, padding:1px 5px, borderRadius:3` |
| **Estimate** (GDP) | `display:inline-flex, fontSize:10, fontWeight:600, color:#6B7280, background:rgba(255,255,255,0.05), border:1px solid rgba(255,255,255,0.08), borderRadius:4, padding:2px 7px, letterSpacing:0.04em` |
| **Unverified** | `background:rgba(255,255,255,0.05), color:#6B7280, border:1px solid rgba(255,255,255,0.08), fontSize:10` |
| **Our Economy** | `background:rgba(34,197,94,0.12), border:1px solid rgba(34,197,94,0.25), color:#22C55E, fontSize:11, fontWeight:600` |

### 5.3 Composer

#### Authenticated (standard)
```
{/* @comic chip + helper — sits above the input bar */}
<span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px",
  borderRadius:7, background:"rgba(14,165,233,0.12)", border:"1px solid rgba(14,165,233,0.3)",
  color:"#38BDF8", fontSize:12, fontWeight:700 }}>
  <AtSign size={12} /> comic
</span>
<span style={{ fontSize:12, color:"#6B7280" }}>
  Type <span style={{ color:"#38BDF8", fontWeight:600 }}>@comic</span> to ask the AI Assistant
</span>

{/* Input row */}
<div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 16px",
  background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)",
  borderRadius:14 }}>
  <Plus size={18} style={{ color:"#4B5563" }} />
  <input placeholder="Share with the community, or type @comic to ask…"
    style={{ flex:1, background:"transparent", border:"none", outline:"none",
      fontSize:14, color:"#E8EAF0" }} />
  <button style={{ width:32, height:32, borderRadius:8,
    background: inputHasValue
      ? "linear-gradient(135deg,#7C3AED 0%,#0EA5E9 100%)"
      : "rgba(255,255,255,0.06)",
    border:"none" }}>
    <Send size={14} style={{ color: inputHasValue ? "#fff" : "#4B5563" }} />
  </button>
</div>
<div style={{ textAlign:"center", fontSize:11, color:"#374151", marginTop:8 }}>
  a work of optimism · Survivor Hub
</div>
```

#### Unauthenticated / locked (desktop)
```
<div style={{ borderRadius:12, border:"1px solid #1E2A3A",
  background:"#161B27", padding:"14px 16px",
  display:"flex", alignItems:"center", gap:12 }}>
  <Lock size={16} color="#6B7280" />
  <span style={{ fontSize:14, color:"#6B7280", flex:1 }}>
    Sign in to post — or type @comic to ask the AI Assistant…
  </span>
  <button style={{ padding:"8px 18px", borderRadius:8,
    background:"linear-gradient(90deg,#7C3AED,#0EA5E9)",
    color:"#fff", fontWeight:700, fontSize:13 }}>
    Join Free →
  </button>
</div>
```

#### Unauthenticated / locked (mobile)
```
<div style={{ borderRadius:24, border:"1px solid #1E2A3A",
  background:"rgba(255,255,255,0.04)", padding:"10px 14px",
  display:"flex", alignItems:"center", gap:8 }}>
  <Lock size={14} color="#6B7280" />
  <span style={{ fontSize:13, color:"#6B7280", flex:1 }}>
    Sign in — or @comic to ask the AI Assistant…
  </span>
  <button style={{ padding:"6px 14px", borderRadius:16,
    background:"linear-gradient(90deg,#7C3AED,#0EA5E9)",
    color:"#fff", fontWeight:700, fontSize:11 }}>
    Join Free
  </button>
</div>
```

#### Empty state (authenticated, no channel yet)
Same layout as authenticated standard but with dimmed `color:"#374151"` placeholder and no active send state. Add @comic chip + helper above. Do **not** lock with a Lock icon — user is signed in.

### 5.4 Icon Containers

```
{/* Standard app icon container */}
<div style={{ width:40, height:40, borderRadius:12,
  background:`${color}20`, border:`1px solid ${color}35`,
  display:"flex", alignItems:"center", justifyContent:"center" }}>
  <AppIcon size={20} style={{ color }} />
</div>

{/* AI Assistant icon container */}
<div style={{ width:40, height:40, borderRadius:12,
  background:"rgba(14,165,233,0.1)", border:"1px solid rgba(14,165,233,0.22)",
  display:"flex", alignItems:"center", justifyContent:"center" }}>
  <Sparkles size={18} style={{ color:"#38BDF8" }} />
</div>
```

### 5.5 GDP Progress Widget

```
<div style={{ background:"rgba(6,182,212,0.06)", border:"1px solid rgba(6,182,212,0.12)",
  borderRadius:12, padding:"14px 16px" }}>
  <div>GDP Progress — color:#22D3EE, fontSize:12, fontWeight:600</div>
  {/* Value line: always include Estimate chip inline */}
  <span style={{ fontSize:22, fontWeight:800, color:"#F9FAFB" }}>$247B</span>
  <span style={{ /* Estimate chip */ display:"inline-flex", fontSize:10, fontWeight:600,
    color:"#6B7280", background:"rgba(255,255,255,0.05)",
    border:"1px solid rgba(255,255,255,0.08)",
    borderRadius:4, padding:"2px 7px", letterSpacing:"0.04em" }}>Estimate</span>
  {/* Progress bar */}
  <div style={{ height:6, borderRadius:3, background:"rgba(255,255,255,0.08)" }}>
    <div style={{ height:"100%", width:"82%", borderRadius:3,
      background:"linear-gradient(90deg,#06B6D4 0%,#7C3AED 100%)" }} />
  </div>
</div>
```

**Rule:** Any numeric GDP value shown to users (sidebar widget, hero stat, full GDP screen) **must** be accompanied by the Estimate chip or a footnote reading "GDP figure is an estimate based on reported activity."

### 5.6 Empty States

Every empty state follows the same three-part structure:

1. **Visual anchor** — dashed-border circle or icon container with `border: 1px dashed rgba(accent,0.3)`, icon at `40–48%` opacity
2. **Label + descriptor** — `fontSize:13–14, fontWeight:600, color:#9CA3AF` + `fontSize:11–12, color:#4B5563`
3. **CTA button** — accent `rgba(accent,0.12)` background + `1px solid rgba(accent,0.3)` border

### 5.7 Trust Widget (empty / unverified state)

Canonical pattern in `Desktop.tsx` right rail. Shows:
- "No trust signals yet" placeholder with dashed shield icon
- Three unchecked step rows (`border:1.5px solid rgba(255,255,255,0.12)`)
- "Request Verification" CTA
- Visibility row ("Visible to: Public" + ChevronDown)

Trust brand color is **`#0EA5E9`** (not `#0284C7`).

---

## 6. Screen-State Conventions

Every app surface exists in up to five states. The naming suffix encodes the state:

| Suffix | Auth | Content | Who sees it |
|---|---|---|---|
| *(none)* | Signed in | Populated | Default member view |
| `Public` | **Not** signed in | Readable (no blur) | Public visitors |
| `Empty` | Signed in | No content yet | Fresh install / new member |
| `Loading` | Either | Skeleton / wait | All users during load |
| `Admin` | Signed in (admin role) | Admin tooling | Staff only |

### What each state must show

**Public** — full readable content stream; locked composer with "Sign in to post — or @comic…"; visible "Join Free" CTA; no blur or paywall on content.

**Empty (authenticated)** — welcome hero card; onboarding checklist (3 steps); @comic hint composer (not locked — user is signed in); no "Phase" labels.

**Loading** — see §7 below for exact format. No skeletons, no spinners, no copy.

**Admin** — admin tooling only; include a calm disclaimer where applicable (e.g. GDP rate admin: "These factors estimate GDP only — not a per-user or per-wallet value.").

---

## 7. Loading State — Exact Format

**Do not deviate from this.** All loading screens across every app must use this exact pattern:

```tsx
// design-sync
export function XxxLoading() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0F1117",
      alignItems: "center", justifyContent: "center",
      fontFamily: "'Inter',system-ui" }}>
      <div style={{ textAlign: "center", padding: "0 32px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.22)", textTransform: "uppercase",
          fontWeight: 500, marginBottom: 16, lineHeight: 2 }}>
          EXIT THEIR ECONOMY
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.22)", textTransform: "uppercase",
          fontWeight: 500, lineHeight: 2 }}>
          EXIT THE PSYOP
        </div>
      </div>
    </div>
  );
}
```

**Forbidden:** spinners, progress bars, "Preparing your community…" copy, Tailwind classes, any branded logo during load.

---

## 8. File & Naming Conventions

### File header
Every mockup file must start with exactly:
```
// design-sync
```
No exceptions — the sync manifest validation uses this marker.

### Component naming
```
ScreenName.tsx          → export function ScreenName()
MobileScreenName.tsx    → export function MobileScreenName()
```

**State suffix order** (if multiple variants): `Default → Public → Empty → Loading → Admin`

**Examples:**
```
GDP.tsx               MobileGDP.tsx
GDPPublic.tsx         MobileGDPPublic.tsx
GDPEmpty.tsx          MobileGDPEmpty.tsx
GDPLoading.tsx        MobileGDPLoading.tsx
GDPRateAdmin.tsx      MobileGDPRateAdmin.tsx
```

### Chyme exception
`Chyme.tsx` is a re-export barrel from `ChymeApp.tsx`. **Always edit `ChymeApp.tsx`** — never edit `Chyme.tsx` directly.

### sync-manifest.json
Every new screen pair (web + mobile) requires two entries in `artifacts/mockup-sandbox/sync-manifest.json`:
```json
{
  "id": "kebab-case-id",
  "name": "PascalCaseName",
  "file": "src/components/mockups/survivor-hub/FileName.tsx",
  "kind": "screen",
  "states": ["populated"],
  "platform": "desktop",
  "notes": "One-line description. Include legal guardrails if applicable."
}
```

---

## 9. Deck Frame Fit — Root Container Rules

The `survivor-hub-deck` renders every mockup inside a fixed **1440×900** (desktop) or **390×844** (mobile) div, then scales the whole frame. Mockup roots must be bounded or content gets clipped.

**Desktop mockup root:**
```tsx
<div style={{
  width: 1440,
  height: 900,
  background: "#0F1117",
  fontFamily: "'Inter', system-ui, sans-serif",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}}>
```

**Mobile mockup root:**
```tsx
<div style={{
  width: 390,
  height: "100%",
  minHeight: "100vh",
  background: "#0F1117",
  fontFamily: "'Inter', system-ui, sans-serif",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}}>
```

**Scrollable inner panes** (feeds, sidebars — anything that should scroll internally):
```tsx
style={{ flex: 1, overflowY: "auto", minHeight: 0 }}
```

**Never use** `minHeight: "100vh"` on any inner div — it breaks deck-frame clipping. Never use Tailwind `min-h-screen`.

---

## 10. Mirror Workflow

`artifacts/mockup-sandbox` is the **source of truth**. `artifacts/survivor-hub-deck` is a byte-identical mirror.

After editing any file in sandbox:
```bash
cp artifacts/mockup-sandbox/src/components/mockups/survivor-hub/FileName.tsx \
   artifacts/survivor-hub-deck/src/components/mockups/survivor-hub/FileName.tsx
```

After adding a new component to sandbox, also update `artifacts/survivor-hub-deck/src/App.tsx`:
1. Add import at the top
2. Add to `COMPONENTS` map
3. Add entry to `SLIDES` array using the correct helper:
   - `web("ComponentName", "Web · Label", "Section Name")`
   - `mob("MobileComponentName", "Mobile · Label", "Section Name")`

Always run both typechecks before considering work done:
```bash
pnpm --filter @workspace/mockup-sandbox run typecheck
pnpm --filter @workspace/survivor-hub-deck run typecheck
```

Both must exit with zero errors.

---

## 11. Brand Voice & Copy Rules

| Rule | Detail |
|---|---|
| **Tone** | Self-sufficiency and dignity — never pity, never urgency-stacking |
| **Urgency** | One urgency signal per message only. "URGENT" badge OR "immediately" in body — not both |
| **Crisis framing** | "Crisis Support Provided" — not "Crisis Handled" |
| **Trafficker language** | Replace with neutral framing: "build self-sufficient pathways", "adds social proof" |
| **Aspirational numbers** | Label with "Goal:" or frame explicitly as aspirational — never state as current fact |
| **Quote attribution** | "You are not what happened to you…" is unattributed — render as `— Unattributed` |
| **Tagline** | "Exit Their Economy" — community tagline, appears in status line under hub name |
| **Footer watermark** | `a work of optimism · Survivor Hub` — appears below desktop composer |

---

## 12. Legal Rails

These are hard constraints — never override without explicit owner instruction.

### ServiceCredits

- Always written **ServiceCredits** — one PascalCase word. Never "Service Credits", "SC" as a standalone word, or "credits". Exception: tight-space badges may use `{n} SC`.
- **Never** show `N ServiceCredits ≈ $X` — no dollar equivalence for any user-facing or per-wallet figure.
- Fiat-adjacent copy must use: "usable across 18 plugins" or "utility token — no fiat conversion".

### GDP figures

- All GDP values (sidebar widget, hero stats, full GDP screen, rate admin) **must** include either:
  - The **Estimate chip** inline with the number, or
  - A footnote: "GDP figure is an estimate based on reported activity."
- Rate admin screens must include: "These factors estimate GDP only — not a redemption or per-wallet value."

### Phase labels

- **Remove all phase labels** — "Phase 1", "Phase 2", "Beta", "Active" status badges indicating project phase. Do not replace with other phase-equivalent words.

### App / plugin count

- Current canonical count is **18 plugins**. Do not change this number in copy or `sync-manifest.json` unless the owner explicitly requests it — even when a new app tile is added.

### Direct messaging

- There is **no persistent DM system** on Survivor Hub. Chat exists only inside transaction-scoped app contexts (e.g. TrustTransport ride request). Do not add a DM tab, inbox, or message list to any global navigation.

---

## 13. AI Assistant Surface Rules

The AI Assistant is summoned via `@comic` in the community composer. All surfaces follow these rules:

- **No on/off toggle** — single unified composer; `@comic` is always available to signed-in members.
- **Consent gate** — first-time use triggers `AIConsent` modal (blurred channel behind, 4 privacy points, "I understand — turn it on" / "Not now"). After consent, no further gate.
- **Self-hosted framing** — copy must say "runs on our own servers", "no third parties". Never imply an external AI provider.
- **Human review** — always mention teammate review for safety-sensitive answers ("a teammate is reviewing it for safety before it's posted").
- **Pending state** — while awaiting review, show `ai_pending` card with dashed border and "Reviewing for safety" badge. Do not show a partial answer.
- **Rating row** — every answered `ai_qa` card has: Helpful (ThumbsUp) / Not helpful (ThumbsDown) / Flag — toggle active state on click.
- **Identity** — name is "AI Assistant". Summoned as `@comic`. Never "AI Bot", "ChatBot", or a third-party product name.
