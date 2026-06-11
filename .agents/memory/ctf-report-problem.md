---
name: CTF Report a Problem surface
description: Design conventions for the in-app bug reporting surface (12 slides, web + mobile).
---

## Surface identity
- Section label: "Report a Problem"
- Section color: `#A78BFA` (purple soft — §1 semantic: "help/support")
- No plugin accent — utility surface; uses brand gradient for primary action

## Entry controls
- Web: `?` icon (HelpCircle) at the bottom of the global icon rail → help popover with "Help center" + "Report a problem" (highlighted)
- Mobile: Settings tab → Support section → "Report a problem" list item

## Form modal anatomy
- Web: 540px wide centered modal, `background: #1C2333`, `borderRadius: 20`, over `rgba(0,0,0,0.65)` overlay
- Mobile: full-width bottom sheet, `borderRadius: "20px 20px 0 0"`, sits above the bottom nav (70px)
- Two fields only: "What went wrong?" [required] + "What were you trying to do?" [optional]
- Privacy note: AlertCircle + "Our team reads these to fix problems. Please don't include passwords or personal details."
- Primary: "Send report" (gradient); secondary: "Cancel" (ghost)

## States (6 total, web + mobile = 12 files)
1. Entry trigger — entry control with popover/Settings list item
2. Form — empty/default
3. Submitting — fields disabled, "Sending •••" button
4. Success — "Got it — we'll look into this." + Done + "Report another problem"
5. Error — "Couldn't send your report. What you wrote is still there."
6. Rate limited — "We already have your recent reports — try again in a little while."

## Copy rules
- No GitHub anywhere (issues, repos, labels — none visible to users)
- No "submit feedback" marketing tone; no pleasantries, no sign-offs
- Error state explicitly preserves user input ("still there")
- Rate limit is gentle and non-accusatory

**Why:** Audience is non-technical and in a sensitive context; the spec mandates calm, plain, private experience throughout.
