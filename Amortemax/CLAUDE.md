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
# Playwright is installed as a devDependency
node your-script.mjs   # scripts use ESM (package.json has "type": "module")
```

## Architecture

Single-page landing page — no router, no state management library. Everything lives in two files:

- **`src/App.jsx`** — the entire page as one React component. Contains:
  - `IconWhatsApp()` — inline SVG component reused across all WhatsApp CTAs
  - `servicos[]` — static array driving the services grid (images + copy)
  - `App()` — renders 5 sections sequentially: header, `#apresentacao`, `#servicos`, `#endereco`, `#contato`, footer
  - Form state managed with a single `useState` object; `handleSubmit` encodes all fields into a `wa.me` deep-link and opens it in a new tab

- **`src/App.css`** — all visual styles. Uses CSS custom properties defined in `:root` (colors, shadows, radii). No CSS modules, no Tailwind.

- **`src/index.css`** — global reset only (box-sizing, margin/padding zero, scroll-behavior, font-smoothing).

## Key design decisions

**WhatsApp numbers:** Two separate numbers are hardcoded at the top of `App.jsx`:
- `WHATSAPP_CONTATO` (`5514997183644`) — used in the hero and address section buttons
- `WHATSAPP_FORM` (`5514981466763`) — used exclusively for form submissions

**Hero watermark:** `amortecedor.jpeg` (white-background photo) is positioned absolutely inside `.hero` with `mix-blend-mode: multiply`. This fuses the white pixels into the yellow background, leaving only the dark metal parts visible as a silhouette. Opacity is `0.22` desktop → `0.15` tablet → `0.12` mobile.

**Service images:** Each `peca0X.jpeg` is wrapped in `.servico-img-wrap` (fixed height, `overflow: hidden`) and rendered with `object-fit: contain` + padding so the full product shows without cropping.

**Images** live in `src/img/` (not `src/assets/`) and are imported directly in `App.jsx` so Vite fingerprints them at build time.

## CSS conventions

- All spacing/color/shadow decisions go through CSS variables in `:root` — add new variables there rather than hardcoding values.
- Responsive breakpoints: `960px` (tablet) and `600px` (mobile), defined at the bottom of `App.css`.
- `.btn-icon` + `.wa-icon` classes handle button-with-SVG layout (flexbox + gap). Apply both classes when a button needs an icon.
