# AGENTS.md

Single-page Vite + React 18 + TypeScript app that generates printable raffle tickets. UI text and validation messages are in **Portuguese (pt-BR)**; currency is **BRL**. This is intentional — keep it.

## Commands

```bash
npm run dev        # Vite dev server; see base-path gotcha below
npm run build      # runs `tsc` (typecheck) then `vite build`
npm run lint       # eslint with --max-warnings 0
npx tsc --noEmit   # typecheck only (same check `build` runs)
npm run deploy     # predeploy runs build, then gh-pages -d dist
```

- **No test runner exists.** Lint + `tsc` are the only automated checks.
- `npm run build` fails on any TS error because `tsconfig` sets `strict`, `noUnusedLocals`, `noUnusedParameters`.
- `npm run lint` currently has **pre-existing failures** in `src/components/{Currency,IntegerInput,ScrollToTopButton}/index.tsx` (`no-explicit-any`, `no-extra-semi`). Don't assume a reported lint error was caused by your change; verify against `git stash`/baseline if in doubt.

## Dev server gotcha

`vite.config.ts` sets `base: '/raffle-ticket-generator'`, so the dev server serves the app at:

```
http://localhost:5173/raffle-ticket-generator/
```

Requesting `/` returns nothing useful. `server.host: "0.0.0.0"` is set for the devcontainer (port 5173 forwarded).

## Architecture

- Entry: `src/main.tsx` → `src/App.tsx`. Page = `Header` + `Container` (`Form` + `ScrollToTopButton`).
- Components live in `src/components/<Name>/` as `index.tsx` (+ optional `styles.ts` for styled-components). Follow this pairing for new components.
- Form: `src/components/Form/index.tsx` owns the zod schema (`IFormInput` is inferred from it), react-hook-form, and the whole generate flow. Other inputs (`Currency`, `IntegerInput`) are `Controller` wrappers that receive `control`.
- Theme: `src/styles/themes/default.ts`; typing is extended in `src/types/styled.d.ts`. Add new theme keys to the object, not the type.
- styled-components uses **transient props** (`$variant`) to avoid leaking props to the DOM — keep this pattern.
- Generate flow quirk: on submit, tickets are built with `setTickets` in a loop; a `useEffect` fires `window.print()` once tickets exist. Re-submitting identical data skips regeneration and prints immediately (compares JSON of last ticket vs form data). Tickets render as plain DOM; there is no print stylesheet beyond browser defaults.

## Deploy

GitHub Pages via `gh-pages` to the `gh-pages` branch, published under `/raffle-ticket-generator`. The `base` path above must stay in sync with the repo name.

## Agent skills

Repo-local skills live in `.agents/skills/` (`frontend-design`, `web-design-guidelines`), tracked by `skills-lock.json`. Load them for UI work.

## Conventions

- **No code comments** (repo style).
- Components are named exports (`export function X`), not default exports.
- Devcontainer: `.devcontainer/` uses docker compose (service `raffle-ticket-generator`) and an OpenCode feature.
