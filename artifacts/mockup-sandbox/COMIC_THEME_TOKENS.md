# Comic Theme — Design Token Spec

> **Authority:** This document is the handoff spec for the comic dark theme implementation (Task #2). The coding agent must implement the CSS variable layer and toggle logic using this token table verbatim. Do not deviate from the hex values or naming conventions defined here.
>
> **Source of truth for visual reference:** See the comic mockups in `artifacts/mockup-sandbox/src/components/mockups/survivor-hub/` — any file prefixed `Comic*`.

---

## 1. Shared Surface Tokens

These apply globally across every screen in comic theme.

| Token name          | Value       | Usage |
|---|---|---|
| `comic-bg`          | `#0D0D0D`   | Root page background — outermost container |
| `comic-surface`     | `#141414`   | Panels, sidebars, cards, header bars |
| `comic-surface-alt` | `#080808`   | Icon rail, deepest chrome (darker than surface) |
| `comic-border`      | `#D4C49A`   | Primary ink border — all hard 2px borders |
| `comic-border-dim`  | `#7A6A50`   | Dimmed ink border — inactive/secondary elements |
| `comic-border-faint`| `#D4C49A1A` | Very faint ink tint — row dividers, subtle separations |
| `comic-text-primary`| `#EDE3CB`   | Primary body text, card names, active labels |
| `comic-text-secondary`| `#7A6A50` | Secondary text, descriptions, timestamps |
| `comic-text-muted`  | `#4A3A2A`   | Deeply muted text — disabled, fine print |
| `comic-danger`      | `#B91C1C`   | Danger red — destructive actions, queued deletes, urgent badges |
| `comic-success`     | `#22C55E`   | Success / live indicator — retained from standard theme |
| `comic-gold`        | `#C8A84B`   | Warm gold accent — hero stats, progress bars, "economy" callouts |

---

## 2. Shadow Token

The hard offset shadow is the **signature element** of the comic theme. It must appear on every interactive surface and elevated card.

| Token name     | Value                  | Rule |
|---|---|---|
| `comic-shadow` | `3px 3px 0 #D4C49A`    | No blur. No spread. Hard offset only. Direction: bottom-right. |
| `comic-shadow-dim` | `2px 2px 0 #7A6A50` | Reduced version for inactive/secondary elements. |
| `comic-shadow-danger` | `3px 3px 0 #B91C1C` | Danger variant — used on danger zone panels and queued-delete rows. |

**Usage rule:** Apply `box-shadow: 3px 3px 0 #D4C49A` to:
- Buttons (`InkBtn`)
- Elevated panels / notice boxes
- Stat tiles in right rail
- Active/selected nav items
- Any card that the user can interact with

Do **not** apply shadows to:
- Background containers
- Passive text rows (e.g. data-inventory list rows at rest)
- The root `<div>` wrapper

---

## 3. Border & Radius Rule

All borders in the comic theme are **sharp** (no border-radius, or `borderRadius: 0`). The one permitted exception is a max of `borderRadius: 2` for tiny chips/badges where 0 would look broken.

| Element | Standard theme | Comic theme |
|---|---|---|
| Feed cards | `borderRadius: 14–16` | `borderRadius: 0` |
| Buttons | `borderRadius: 8–10` | `borderRadius: 0` |
| Chips / badges | `borderRadius: 4–7` | `borderRadius: 2` |
| Icon containers | `borderRadius: 10–12` | `borderRadius: 0` |
| Avatars | `borderRadius: "50%"` | `borderRadius: 0` (square crop) |
| Modals / dialogs | `borderRadius: 20–22` | `borderRadius: 0` |
| Composer input | `borderRadius: 14` | `borderRadius: 0` |

---

## 4. Typography Conventions

Font family is unchanged: `'Inter', 'Arial', sans-serif` — set once on root container.

| Role | `fontSize` | `fontWeight` | `color` | Extra |
|---|---|---|---|---|
| Section labels / panel headers | `10` | `800` | `#D4C49A` (ink) | `letterSpacing: "0.14em"`, `textTransform: "uppercase"`, left-border `3px solid ink` |
| Screen / card title | `14–15` | `800` | `#EDE3CB` (cream) | `letterSpacing: "0.06em"`, `textTransform: "uppercase"` |
| Body text | `13` | `400` | `#EDE3CB` | `lineHeight: 1.6` |
| Secondary / description | `11–12` | `400` | `#7A6A50` | |
| Danger label | `11–13` | `800` | `#B91C1C` | `letterSpacing: "0.06em"`, uppercase |
| Badge text | `9–10` | `700` | varies | `letterSpacing: "0.08em"`, uppercase |
| Timestamp / meta | `11` | `400` | `#7A6A50` | |

**Rule:** Uppercase labels are used liberally in the comic theme. Any label that would be `fontWeight: 700, textTransform: uppercase` in the standard theme keeps those properties here with wider `letterSpacing`.

---

## 5. Background Texture Token

The dotted background pattern is used on panel headers and section headers to give a "halftone/newsprint" feel.

```
comic-dot-bg: radial-gradient(#D4C49A1A 1px, transparent 1px)
              background-size: 8px 8px
```

Apply to: sidebar header areas, panel section dividers, hero blocks. Do **not** apply to card surfaces or the main feed area.

---

## 6. Per-App Accent Color Translations

Every app's standard accent color is translated into a deep, ink-compatible version. **No neon. No glow. Same hue family, deeper saturation, warm-shifted.**

These colors are used for:
- Active nav borders / background tints (at ~10–15% opacity)
- Icon container backgrounds (at ~10% opacity)
- Active/selected row left-border

| App | Standard accent | Comic-ink accent | Notes |
|---|---|---|---|
| Chyme | `#22C55E` | `#1A5C32` | Deep forest green |
| LightHouse | `#60A5FA` | `#1A4A7A` | Deep navy blue |
| TrustTransport | `#38BDF8` | `#0C4A6E` | Deep sky blue |
| Directory | `#93C5FD` | `#1A3A6A` | Deep slate blue |
| Foundation | `#F59E0B` | `#7A4A05` | Deep burnt amber |
| PeerProgramming | `#6EE7B7` | `#1A5C40` | Deep mint teal |
| GDP | `#06B6D4` | `#0E5A68` | Deep cyan |
| ServiceCredits | `#A855F7` | `#5C2C8A` | Deep violet |
| Workforce | `#F97316` | `#6A2A05` | Deep rust orange |
| GentlePulse | `#34D399` | `#1A5C45` | Deep teal |
| Mood | `#4ADE80` | `#1A5C2A` | Deep green |
| SocketRelay | `#FB923C` | `#7A3A0C` | Deep burnt orange |
| SkillsHunt | `#FBBF24` | `#7A5A05` | Deep gold |
| LevelUp | `#22C55E` | `#1A5C30` | Deep forest (slightly cooler than Chyme) |
| What Works | `#84CC16` | `#4A6B10` | Deep olive |
| Trust | `#0EA5E9` | `#0C5278` | Deep cobalt |
| ClickLog | `#EC4899` | `#7A1A4A` | Deep crimson-pink |
| SkillsTaxonomy | `#818CF8` | `#2A2A7A` | Deep indigo |
| Unlock | `#C084FC` | `#5C1A8A` | Deep violet |
| WeeklyPerformance | `#6366F1` | `#2A2A6A` | Deep indigo-blue |
| AI Assistant | `#38BDF8` | `#7A6A50` (inkDim) | AI elements use inkDim — no blue in comic theme |
| Account & Data | — | `#B91C1C` (danger) | Account/data uses comic-danger for destructive zone |

### Usage pattern for per-app accents

```
// Icon container background
background: `${comicAccent[app]}18`   // ~10% opacity tint
border:     `1.5px solid ${comicAccent[app]}50`

// Active nav row
background: `${comicAccent[app]}14`
border-left: `2px solid ${comicAccent[app]}`
box-shadow:  `2px 2px 0 ${comicAccent[app]}40`

// Inactive nav row
background: transparent
border-left: 2px solid transparent
```

---

## 7. Interactive State Tokens

| State | Background | Border | Shadow | Text |
|---|---|---|---|---|
| Default / rest | `#141414` | `1.5px solid #D4C49A45` | `2px 2px 0 #D4C49A18` | `#EDE3CB` |
| Active / selected | `#D4C49A14` | `1.5px solid #D4C49A` | `2px 2px 0 #D4C49A` | `#EDE3CB` |
| Hover | `#D4C49A0A` | `1.5px solid #D4C49A70` | `2px 2px 0 #D4C49A60` | `#EDE3CB` |
| Danger / queued | `#B91C1C08` | `2px solid #B91C1C` | `3px 3px 0 #B91C1C` | `#B91C1C` |
| Disabled / dim | `transparent` | `1.5px solid #7A6A5030` | none | `#7A6A50` |
| Success / queued-ok | `#22C55E14` | `1.5px solid #22C55E60` | `2px 2px 0 #22C55E40` | `#22C55E` |

---

## 8. Button Token (`InkBtn`)

The canonical interactive button in the comic theme:

```tsx
// InkBtn — primary (ink)
background: #141414 (surface)
border:     1.5px solid #D4C49A
box-shadow: 2px 2px 0 #D4C49A
color:      #D4C49A
fontSize:   11
fontWeight: 700
letterSpacing: "0.06em"
textTransform: "uppercase"
padding:    5px 11px
borderRadius: 0

// InkBtn — danger
border:     1.5px solid #B91C1C
box-shadow: 2px 2px 0 #B91C1C
color:      #B91C1C

// InkBtn — dim
border:     1.5px solid #7A6A50
box-shadow: 2px 2px 0 #7A6A50
color:      #7A6A50
```

---

## 9. Feed Card Tokens

### Community post card

```
background: #141414
border:     1.5px solid #D4C49A40
box-shadow: 2px 2px 0 #D4C49A18
padding:    16px 20px
```
- Avatar: `32×32`, square crop (borderRadius: 0), `background: #{comicAccent}18, border: 1px solid #{comicAccent}40`
- Author: `fontSize:13, fontWeight:700, color:#EDE3CB, letterSpacing:"0.04em"`
- Timestamp: `fontSize:11, color:#7A6A50`
- Body: `fontSize:13, color:#EDE3CB, lineHeight:1.6`
- Reactions: Heart / Reply / Share — `color:#7A6A50` at rest, `color:#B91C1C` for liked heart

### Announcement card

```
Not urgent: background #D4C49A06  border 2px solid #D4C49A40  box-shadow 2px 2px 0 #D4C49A28
Urgent:     background #B91C1C08  border 2px solid #B91C1C    box-shadow 3px 3px 0 #B91C1C
```
- "SH" avatar: `28×28`, square, `background: #141414, border: 2px solid #D4C49A`
- "OFFICIAL" badge: `fontSize:9, border:1px solid #D4C49A40, color:#D4C49A, padding:1px 5px`
- "URGENT" badge: `fontSize:9, border:1px solid #B91C1C, color:#B91C1C, padding:2px 6px, background:#B91C1C10`

### AI Q&A card

```
background: #141414
border:     1.5px solid #7A6A5060
box-shadow: 2px 2px 0 #7A6A5030
```
- AI icon: `32×32`, square, `background:#7A6A5014, border:1.5px solid #7A6A5050` — icon is `BookOpen` or `Sparkles` in `inkDim` color
- "AI ASSISTANT" label: `fontSize:13, fontWeight:800, color:#EDE3CB`
- "Q&A" badge: `fontSize:9, border:1px solid #7A6A5050, color:#7A6A50`
- Q block: `background:#0D0D0D, border:1.5px solid #D4C49A28, padding:8px 12px`
  - "Q:" prefix: `color:#D4C49A, fontWeight:800`
- A text: `color:#EDE3CB, fontSize:13`
- Rating row separator: `borderTop:1.5px solid #D4C49A20`
- Helpful btn: active `border:#22C55E, shadow:2px 2px 0 #22C55E, color:#22C55E` / idle `border:#7A6A5040, color:#7A6A50`
- Not helpful btn: active `border:#7A6A50, shadow:2px 2px 0 #7A6A50, color:#EDE3CB` / idle same as helpful idle
- Flag btn: active `border:#B91C1C, color:#B91C1C` / idle `border:transparent, color:#4A3A2A`

### AI Pending card

```
background: #141414
border:     1.5px dashed #7A6A5060
```
- "REVIEWING" badge: `fontSize:9, color:#7A6A50, border:1px solid #7A6A5040`
- Body: `fontSize:12, color:#7A6A50, lineHeight:1.6` — "AI Assistant is preparing an answer — a teammate is reviewing it for safety before it's posted."

---

## 10. Composer Token

```
// Container
background: #141414
border:     2px solid #D4C49A60
box-shadow: 2px 2px 0 #D4C49A40
padding:    10px 14px

// @comic chip
background: #0D0D0D
border:     1px solid #7A6A50
color:      #7A6A50
fontSize:   11
fontWeight: 700
letterSpacing: "0.08em"
textTransform: uppercase

// Hint text
color: #7A6A50
fontSize: 11
"Type @comic to ask the AI Assistant" — label unchanged

// Send button active
background: #D4C49A
color:      #0D0D0D
border:     none
box-shadow: 2px 2px 0 #7A6A50

// Send button idle
background: #141414
color:      #7A6A50
border:     1.5px solid #7A6A5060
```

---

## 11. Loading Screen

The comic theme has **no effect** on loading screens. Loading screens across all apps use the standard two-line format (see DESIGN_GUIDE.md §7) regardless of theme. Do not apply comic tokens to loading states.

---

## 12. Implementation Contract (for coding agent)

1. **CSS variable layer:** Define all tokens as CSS custom properties on `:root[data-theme="comic"]` selector. Variable names must match the token names in this doc (kebab-cased, e.g. `--comic-bg`, `--comic-border`, etc.).

2. **Toggle mechanism:** A single `data-theme="comic"` attribute on the `<html>` or root `<div>` activates the theme. Toggle must be exposed via a button in the UI (placement: account/settings area or a floating toggle in dev mode). State persists in `localStorage` under the key `"sh-theme"` with value `"comic"` or `"standard"`.

3. **Per-app accent lookup:** Implement the comic-ink accent map from §6 as a `const COMIC_ACCENTS: Record<string, string>` object in a shared `theme.ts` file. Any component that uses an app accent color must look up the correct variant based on the active theme.

4. **No neon:** If any proposed implementation value would produce a glowing, neon, or highly saturated color, reject it and use the deep equivalent from §6.

5. **No gradients in comic theme:** The standard theme uses `linear-gradient(135deg, #7C3AED, #0EA5E9)` for CTA buttons and logos. In comic theme, replace all gradients with flat `#141414` background + `2px solid #D4C49A` border + `box-shadow: 3px 3px 0 #D4C49A`.

6. **Border radius:** All `borderRadius` values must be 0 in comic theme (exception: `borderRadius: 2` for chips only).

7. **Shadows:** Apply `box-shadow: 3px 3px 0 #D4C49A` everywhere the standard theme uses elevation (`boxShadow: "0 4px 12px rgba(0,0,0,0.3)"` etc.). Never use blur in shadows.
