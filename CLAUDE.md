# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:5173 (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # ESLint (js + jsx)
```

No test suite is configured. Use Playwright for visual verification:
```bash
# Playwright is a devDependency — run scripts with node directly
node your-script.cjs   # use .cjs extension (require() syntax), not .mjs
```

## Architecture

Single-page landing page — no router, no state management library. Everything lives in two files:

- **`src/App.jsx`** — the entire app as one module. Sections rendered sequentially: sticky header → optional `PromoCarousel` → `#apresentacao` (hero) → `#servicos` → `#endereco` → `#contato` → footer. When `?admin` is in the URL, renders `AdminPanel` exclusively instead of the landing page.

- **`src/App.css`** — all visual styles. CSS custom properties defined in `:root`. No CSS modules, no Tailwind.

- **`src/index.css`** — global reset only.

## Key components in App.jsx

**`PromoCarousel`** — receives `banners`, `current`, `onDotClick`. Renders stacked `div`s with `background-image`; only the active one is visible via CSS opacity transition. Progress bar uses a `key={current}` trick to restart the CSS `@keyframes promo-progress` animation on slide change. Auto-advance interval lives in `App()`, not inside the carousel.

**`AdminPanel` / `AdminLogin`** — `AdminPanel` checks `sessionStorage` on mount; if not authenticated, renders `AdminLogin`. Credentials come from Vite env vars (`import.meta.env.VITE_ADMIN_USER` / `VITE_ADMIN_PASS`) defined in `.env.local` (gitignored). Auth state key: `amortemax_admin_auth`. Banner data key: `amortemax_banners` (localStorage). File uploads are read as base64 via FileReader, capped at 3 MB.

**Service icons** — six inline SVG components (`IconAmortecedorNovo`, `IconRemanufaturado`, `IconSuspensao`, `IconFreios`, `IconEscapamentos`, `IconOleo`) all use `className="servico-icone-svg"`. The `servicos[]` array stores `{ Icone, titulo, desc }` and is rendered in a 4-column dark grid.

**Address icons** — `IconPin`, `IconClock`, `IconPhone` use `className="info-icone-svg"` inside `.info-icone-wrap` (circular yellow-on-dark badge).

## Key design decisions

**WhatsApp numbers:** Two constants at the top of `App.jsx`:
- `WHATSAPP_CONTATO` (`5514997183644`) — hero and address section buttons
- `WHATSAPP_FORM` (`5514981466763`) — form submission deep-link only

**Hero watermark:** `amortecedor.png` positioned absolutely with `mix-blend-mode: multiply`. White pixels fuse into the yellow background, leaving only the dark silhouette. Opacity: `0.22` desktop → `0.15` tablet → `0.12` mobile.

**Services grid:** `repeat(4, 1fr)` at desktop. 5th card uses `grid-column-start: 2` so cards 5–6 appear centered in the last row (`_ [5][6] _`). Reset to `auto` at `960px` breakpoint.

**Images:** All in `src/img/` as PNG, imported directly in `App.jsx` for Vite fingerprinting. `logo02.png` (transparent background) is used in the admin panel; `logo.png` is used in the header and admin login.

**Admin route detection:** `new URLSearchParams(window.location.search).has('admin')` — evaluated at render time, not in an effect.

## CSS conventions

- All color/spacing/shadow decisions go through CSS variables in `:root` — add new variables there rather than hardcoding.
- Breakpoints: `960px` (tablet) and `600px` (mobile), defined at the bottom of `App.css`.
- `.btn-icon` + `.wa-icon` for buttons with inline SVG (flex + gap). Button variants: `.btn-amarelo`, `.btn-dark`, `.btn-whatsapp`, `.btn-danger`, `.btn-sm`.
- Section backgrounds: default white, `.section-dark` (`#111111`), `.section-yellow` (`var(--amarelo)`).

## Environment

`.env.local` (gitignored) must exist locally for admin auth to work:
```
VITE_ADMIN_USER=admin
VITE_ADMIN_PASS=amortemax2025
```
