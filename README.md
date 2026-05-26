# My Portfolio Website

Personal portfolio site for [kartikkoul.com](https://kartikkoul.com). A single-page experience with a 3D hero, experience timeline, skills grid, project showcase, and a contact form with bot protection.

## Features

- **Hero** : React Three Fiber scene with animated headline
- **About** : Experience board with scroll-driven reveals
- **Skills** : Categorized skill chips
- **Projects** : Video-backed project rail with live links
- **Contact** : Form backed by Gmail SMTP and Cloudflare Turnstile
- **SEO** : Open Graph / Twitter images, sitemap, robots, and JSON-LD
- **UX** : Lenis smooth scroll, custom cursor, preloader, and reduced-motion support

## Tech stack

| Area | Tools |
|------|--------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| 3D | Three.js, React Three Fiber, Drei |
| Motion | Framer Motion, Lenis |
| Email | Nodemailer (Gmail SMTP) |
| Security | Cloudflare Turnstile |

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install

```bash
git clone https://github.com/kartikkoul/kkwhocodes.git
cd kkwhocodes
npm install
```

### Environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` or `SITE_URL` | Recommended | Production URL for canonical links, OG tags, and sitemap |
| `GMAIL_USER` | For contact form | Gmail address used to send mail |
| `GMAIL_APP_PASSWORD` | For contact form | [Gmail App Password](https://myaccount.google.com/apppasswords) |
| `CONTACT_TO_EMAIL` | Optional | Inbox for submissions (defaults to `GMAIL_USER`) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | For contact form | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | For contact form | Turnstile secret key |

For local development, Turnstile [test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) always pass verification — see `.env.example`.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

The `start` script runs lint, build, and the production server.

## Project structure

```
app/                 # Next.js App Router (pages, API routes, metadata)
components/          # UI sections (Hero, About, Skills, Projects, Contact, Layout)
lib/                 # Site config, OG helpers, Turnstile, scroll utilities
public/assets/       # Images, videos, resume PDF
```

Content is driven by data files you can edit without touching layout code:

- `lib/site.ts` :- Site name, title, description, SEO keywords
- `components/About/expData.ts` :- Experience entries
- `components/Skills/skillsData.ts` :- Skill categories
- `components/Projects/projectsData.ts` :- Projects (add `.webm` loops under `public/assets/videos/projects/`)
- `components/Contact/contactData.ts` :- Social links

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Lint, build, and start production server |
| `npm run lint` | Run ESLint |

## Deploy

Optimized for [Vercel](https://vercel.com/). Set the environment variables in your project settings and point your domain to the deployment.

## Author

**Kartik Koul**: [@kkwhocodes](https://x.com/kkwhocodes)

- [GitHub](https://github.com/kartikkoul)
- [LinkedIn](https://www.linkedin.com/in/kartikkoul/)
- [Portfolio](https://kartikkoul.com)
