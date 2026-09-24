# DSA-60 Days

**Master DSA Patterns. Solve Problems. Build Strong Logic.**
*Learn. Solve. Track. Revise.*

A complete, frontend-only DSA learning platform: **16 patterns · 193 curated problems · a 60-day practice journey**, with progressive hints, dry runs, real solutions, local progress tracking and a built-in revision plan.

Developed by Naveen · © 2026 DSA-60 Days

---

## Run it

```bash
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

Optional verification (renders every route + all 193 question pages in Node via SSR):

```bash
node smoke-runner.mjs
```

## Tech (exactly as specified)

- **React 18** + **Vite**
- **Tailwind CSS 3** (custom design tokens, dark mode via `.dark`)
- **Framer Motion 11** (subtle 0.2–0.5s easeOut motion, reduced-motion friendly)
- **React Router DOM 6** (routing only)
- **JavaScript** (ESM) — no TypeScript, no other UI/chart/state libraries
- **localStorage** for 100% of state — no backend, no API

## Routes

| Route | Page |
| --- | --- |
| `/` | Home (hero, search, stats, journey strip, recently viewed, pattern grid) |
| `/patterns` | The 16 patterns with live progress bars |
| `/patterns/:patternSlug` | Pattern education: definition, when to use, how to identify / common clues, basic approach, common mistakes, template + its problems |
| `/questions` | All 193 questions — search, filters (pattern/difficulty/platform/status/bookmark), 6 sort modes |
| `/questions/:questionSlug` | Full learning flow (below) |
| `/daily-practice` | 60-Day Journey — current day, day's problems, journey map, pattern schedule |
| `/progress` | Live stats, CSS-only daily bar chart, CSS-grid heatmap (30/60 toggle), per-pattern progress |
| `/bookmarks` | Saved questions |
| `/revision` | Recently Solved / Bookmarked / Problems With Notes / Multiple Attempts, each with "Practice Again" |
| `/notes` | All your personal notes + approaches |
| `/profile` | Account (demo auth) or guest, stats, continue learning |
| `/settings` | Theme, daily goal, reset-all-data |
| `/about` | About the platform |
| `/login`, `/signup` | Local demo auth (explicitly marked "not production security") |
| `*` | 404 page |

## The question learning flow

Every problem page walks the full loop:

1. **Summary** — what the problem is, in two lines
2. **Why this pattern** — plus the common clues for this exact problem
3. **Think Before Coding** — 5 expandable guided questions
4. **Progressive hints** — 3-level ladder, revealed one at a time
5. **Brute Force / Optimal** — accordions with idea, numbered steps, time & space
6. **Step-by-step Dry Run** — animated stepper through a worked example
7. **Complexity cards** — brute vs optimal side by side
8. **Solutions** — Java / JavaScript / Python / C++ tabs with Copy; an honest empty state where a language is unavailable (never fake code)
9. **Solved control** — Not Started / In Progress / Solved, always changeable (never locked)
10. **Your Notes** — personal notes + a separate "My Approach" editor (save/edit/delete)
11. **Attempts** — count, last attempt, solved date
12. **Related Questions** — same pattern, ordered by difficulty
13. **External links** — the exact platform URL(s) ("Open LeetCode ↗" etc.), opened in a new tab

## Where the data lives (localStorage)

| Key | Contents |
| --- | --- |
| `dsa60_progress` | per-question status, attempts, lastAttempt, solvedAt |
| `dsa60_bookmarks` | bookmarked question ids |
| `dsa60_notes` | per-question note + approach + updatedAt |
| `dsa60_activity` | per-day `{ solved, practiced, checkpoints }` |
| `dsa60_settings` | dailyGoal, sidebarCollapsed |
| `dsa60_recent` | recently viewed ids |
| `dsa60_last_question` | "Continue learning" target |
| `dsa60_theme` | `light` \| `dark` |
| `dsa60_user`, `dsa60_users` | demo auth (local only) |

All dashboard numbers (streak, today, this week, progress %, charts, heatmap) are computed from this state — nothing is hardcoded.

## The 60-day journey

`src/data/journey.js` assigns **every one of the 193 questions to exactly one day** (data-driven, validated at module load: chunk sums must match real question counts, or it throws). The "current day" on `/daily-practice` is the first day that isn't fully solved — so the plan always points at real, existing problems.

## DSA Assistant

The floating 💬 assistant is a fully local UI: 7 suggested prompts (including "Explain in simple Hinglish"), context-aware replies built from the question you're viewing, and a clear note that no backend is involved. The reply engine is isolated in `src/utils/assistant.js` behind one function — `getAssistantReply(prompt, context)` — so a Gemini/OpenAI backend can be swapped in later without touching the UI.

## Data integrity rules

- Exactly **16 patterns**, exactly the **193 supplied problems** — nothing invented, removed or relinked.
- Every URL is the exact one supplied; extra supplied links (Link 2 / Link 3, video links) appear as extra buttons.
- Where a language solution was not available, the UI shows a graceful empty state instead of fake code.

## Layout

- **Navbar** — desktop links, live search with dropdown results, theme toggle, profile; mobile ☰ drawer with the full menu
- **Sidebar** (desktop, collapsible) — Dashboard / Patterns / All Questions / Daily Practice / Progress / Bookmarks / Revision / My Notes + Profile / Settings / Logout
- **BottomNav** (mobile) — Home / Patterns / Practice / Progress / Profile
- **Footer** — brand, taglines, quick links, "Developed by Naveen", "© 2026 DSA-60 Days"
- **ChatAssistant** — floating on every page

Responsive from 320px to 1920px, no horizontal overflow, 44px+ touch targets, semantic HTML with ARIA labels, visible focus states, and page-level code splitting via `React.lazy`.
