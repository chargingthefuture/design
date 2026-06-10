---
name: CTF Contributions plugin
description: Design conventions, accent color, and hard copy rules for the Contributions plugin mockups (issue #393).
---

## Accent color
`#F472B6` (warm pink) — not used by any of the 18 existing plugins in DESIGN_GUIDE.md.
Deck SECTION_COLORS key: `"Contributions"`.

## File inventory (14 files, both packages)
Web: `Contributions`, `ContributionsPublic`, `ContributionsLoading`, `ContributionsConfirmation`, `ContributionsEmpty`, `ContributionsBanner`, `ContributionsAdmin`
Mobile: `MobileContributions`, `MobileContributionsPublic`, `MobileContributionsLoading`, `MobileContributionsConfirmation`, `MobileContributionsEmpty`, `MobileContributionsBanner`, `MobileContributionsAdmin`

## Deck wiring
- 12 member-facing slides under `"Contributions"` section.
- `ContributionsAdmin` → `"Admin Web"` section.
- `MobileContributionsAdmin` → `"Admin Mobile"` section.

## Hard copy rules (binding, from spec rule 124)
- No gift-card code entry anywhere in any screen — codes go to owner on Signal outside the app.
- Equal-weight "Not now" on every ask — same visual size/color as the contribute action.
- Banner dismiss is silent: never mention how long it stays away, never say "remind me in X months".
- Status labels: "Waiting for review" (not FAILED), "Not matched" (not rejected).
- "Survivors" not "victims". No "safe space" phrasing.
- Credits: "as a thank-you, you'll receive Service Credits" — never "buy credits".
- No recurring-payment, subscription, or autopay UI.
- No public recognition: no badges, donor lists, or leaderboards anywhere.
- Contributing requires only being signed in — no Unlock/tier gating.

**Why:** Platform serves survivors in financial hardship; access is and stays free; spec rule 124 mandates trauma-informed, low-pressure, agency-affirming copy throughout.
