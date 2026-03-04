# Pokedex - Project Memory

Running log of decisions, context, and things to remember across sessions.

---

## 2026-03-04 — Project Kickoff

### Key Decisions
- **Platform**: PWA (Next.js 15) — originally planned as native iOS Swift but user doesn't have a Mac
- **OCR Removed**: Initially planned OCR camera scanning with Tesseract.js but removed — browser OCR on iOS PWA was too unreliable/slow. App focuses on name search instead.
- **Search only**: Single search method — Fuse.js fuzzy name search integrated into Pokedex grid page
- **Data strategy**: Build-time fetch from PokeAPI REST → static JSON files → IndexedDB for offline
- **Walkthroughs**: Full step-by-step guides for all ~37 mainline Pokemon games, written as MDX files
- **Navigation**: 4-tab bottom bar (Pokedex, Guides, Teams, Profile)
- **Auth**: Firebase Auth (Google + email/password) — no Apple Sign In (would need Apple Dev Account)
- **Social**: Friend code system (e.g., PIKA-2847), friend collections/teams viewing, Web Share API

### Tech Stack
- Next.js 15 + TypeScript + Tailwind CSS 4
- Firebase (Auth, Firestore, Cloud Functions)
- Fuse.js, Zustand, TanStack Query, Radix UI
- IndexedDB via idb, Serwist for service worker
- next-mdx-remote for walkthrough content
- Vercel for deployment

### User Info
- GitHub: aclarkson2013
- Repo: https://github.com/aclarkson2013/Pokedex
- Developing on Windows
- Primary device: iPhone (PWA installed to home screen)

### Open Questions
- Firebase project not yet created — need to set up Auth + Firestore
- Walkthrough content needs to be written (starting with Gen 1: Red/Blue)
- PWA icons and splash screens not yet designed

---
