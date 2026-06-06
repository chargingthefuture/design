---
name: CTF Feed consolidation
description: FeedAnnouncements standalone app absorbed into the Survivor Hub as a single blended #community channel.
---

## The Rule
There is no standalone "Feed & Announcements" app. The Hub homepage **is** the community channel. The `feed` tile does not appear in any MINI_APPS list.

**Why:** User decision — a single blended channel (Announcements + AI Q&A + Peer posts) replaces the multi-channel sidebar and separate Feed app. No multi-channel sidebar, no Feed/Announcements tile.

**How to apply:**
- MINI_APPS arrays (Desktop.tsx, MobileHome.tsx): no `id: "feed"` entry
- App count user-facing label: **18 apps** (not 17)
- HubPublic.tsx / any public channel views: single `CHANNELS = ["community"]`, no multi-channel
- Color: Hub brand colors (#7C3AED / #0EA5E9), not the old Feed lime (#84CC16)
- Blended stream has 3 typed post kinds: `announcement` (admin, 📣 Official badge), `ai_qa` (🤖 AI Q&A badge, cyan), `community` (user post, heart/reply)
- FeedAnnouncementsEmpty.tsx: thin wrapper `<FeedAnnouncements initialEmpty />` — keep this pattern
- Public views (FeedAnnouncementsPublic, MobileFeedPublic, HubPublic): channel is **publicly readable** — no blur/lock overlay on content. Only the composer is locked. CTA: "Sign in to post or ask the assistant."
- Remove "End-to-end encrypted" everywhere (not accurate per product)
- "Use at least one plugin" in Trust widget → "Use at least one app"
- **No "Safe Space" anywhere.** Replace with: big callouts → `Exit Their Economy · Invite Only`; banner sub-copy → `Exit Their Economy`; small trust badge → `Survivor Verified`; header badge → `Our Economy`; profile card → `Verified Member`; footer tagline → `a work of optimism · Survivor Hub`; status lines → `Exit Their Economy · 4,912 online` / `Exit Their Economy · 4.9M members`; why join → `✓ Invite-only, survivor-verified`; prose → `survivor-verified`; Chyme room label → `Survivor Room`; Chyme feature row → `Survivor Verified, Members confirmed real`; Unlock prose → `protects the integrity of this economy`

## Canonical surfaces (current reality)
There are **no `Feed*` / `MobileFeed*` files** — the feed lives inside the Hub home, not a separate component.
- Desktop feed = the `#community` blended stream inside `Desktop.tsx`.
- Mobile feed = the `#community` stream inside `MobileHome.tsx` (annotated `D8 DECISION` in its header — the authoritative mobile feed; no `MobileFeed.tsx` needed).
- The 3 typed post kinds (`announcement` / `ai_qa` / `community`) render inline within those home streams.
- sync-manifest.json (`artifacts/mockup-sandbox/sync-manifest.json`) notes the consolidation; no Feed/Announcements tile.

**Why:** Owner decided the feed is not a standalone app — it is the Hub `#community` stream. If a tracker/issue ever claims a "missing feed mockup," that premise is outdated; the `MobileHome.tsx` header annotation is the authoritative record. Do not create `MobileFeed.tsx`.
