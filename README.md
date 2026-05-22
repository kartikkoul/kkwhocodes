# kkwhocodes

Personal portfolio of Kartik Koul. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (preloader animations)
- [SVGR](https://react-svgr.com/) for importing SVGs as React components

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm run start` | Start the production server       |
| `npm run lint`  | Run ESLint                        |

## Project Structure

```
app/
  api/hello/route.ts   # GET /api/hello
  globals.css          # Tailwind directives + global styles
  layout.tsx           # Root layout (wraps every route)
  page.tsx             # Homepage (Hero, About, Skills)
components/
  About/               # About section + experience board
  Hero/                # Landing headline + canvas
  Layout/              # Header + page chrome
  Skills/              # Skills section
  SVGs/                # SVG assets imported via @svgr/webpack
  UI/                  # Reusable UI (PreLoaderPage, ...)
  Utils/               # Helpers (date utilities, ...)
public/                # Static assets (images, favicon)
```

## Deploy

The easiest way to deploy a Next.js app is via [Vercel](https://vercel.com/new).
See the [Next.js deployment docs](https://nextjs.org/docs/deployment) for more options.
