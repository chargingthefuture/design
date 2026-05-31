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

## File map (as of consolidation)
- FeedAnnouncements.tsx — desktop blended channel (logged-in)
- FeedAnnouncementsPublic.tsx — desktop blended channel (public, full Discord layout, no blur)
- FeedAnnouncementsEmpty.tsx — wrapper only
- FeedAnnouncementsLoading.tsx — standard loader, unchanged
- MobileFeed.tsx — mobile blended channel (logged-in, no separate bottom tabs)
- MobileFeedPublic.tsx — mobile public channel (no blur, locked composer + join CTA)
- MobileFeedEmpty.tsx — mobile empty state (Hub purple, not lime)
- MobileFeedLoading.tsx — standard loader, unchanged
- sync-manifest.json — component registry at `artifacts/mockup-sandbox/sync-manifest.json`
