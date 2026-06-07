# React + Vite Boilerplate

A clean, production-ready starter with React, Vite, TypeScript, and CSS Modules — pre-configured for Netlify deployment.

## Stack

- **React 18** — UI library
- **Vite** — Dev server & bundler
- **TypeScript** — Type safety
- **CSS Modules** — Scoped styling

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button/
│   └── Card/
├── pages/            # Page-level components
│   └── Home/
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── types/            # Shared TypeScript types
├── App.tsx
└── index.css
```

## Netlify Deployment

This project includes a `netlify.toml` with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rule (all routes → `index.html`)

Connect your GitHub repo to Netlify and it will deploy automatically on every push to `main`.
