---
name: CTF AI Assistant surfaces
description: Naming, label, and surface conventions for the Survivor Hub "AI Assistant" feature (design-only mockups).
---

## User-facing label vs trigger
- "AI Assistant" is the ONLY user-facing name for the feature. "@comic" is the *typed* trigger only — never use "@comic" as a label/heading, and never abbreviate to "ask AI".
- Composer helper copy standard: "Type @comic to ask the AI Assistant" (desktop/mobile signed-in); locked/public composer: "Sign in — or @comic to ask the AI Assistant…" / "type @comic to ask the AI Assistant…". Keep all four asker surfaces (Desktop, MobileHome, HubPublic, MobileHubPublic) consistent.

**Why:** Owner naming decision; "ask AI" / raw "@comic" labels are inconsistent and confusing.

## Surface set (all design-only)
- Composer is a SINGLE unified field (no post/ask toggle).
- Answered AI cards carry a rating row: helpful / not helpful / flag.
- Pending answers render an inline "Reviewing for safety" card variant in the stream.
- First-use consent (AIConsent web modal + MobileAIConsent bottom sheet): self-hosted, no third parties, Confirm / Not now.
- Owner Review & Correction Dashboard family (accent #0EA5E9): web + mobile, 4 states each (default queue / empty / loading / detail). Detail has editable corrected-text. Each item shows question, AI draft, sources, confidence; actions Approve / Edit&approve / Reject.
- Deck section name "AI Assistant", SECTION_COLORS #0EA5E9.

## Survivor-safety in AI copy
AI answers must never reveal a survivor's location or identity, and the assistant must never ask them to. Safety-sensitive drafts default to human review before reaching the survivor.

## "apps" / "coming soon" cleanup (resolved)
All user-facing "Mini-Apps"/"mini-app" replaced with "Apps"/"app", and all "coming soon" strings removed across survivor-hub mockups. Note the JS variable `MINI_APPS` in Desktop/MobileHome is internal code, not user-facing — leave it. "coming soon" replacements used: app-detail badge → "Real-time activity"; mobile nav placeholder → "— nothing here yet"; SkillsTaxonomy empty (public) → "Skills taxonomy/database not published yet". "Check back soon" is allowed (only the literal "coming soon" trope is banned).
