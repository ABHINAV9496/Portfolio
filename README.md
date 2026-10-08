# Abhinav A — Python Full-Stack Developer Portfolio

A modern, dark-mode-first personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to be deploy-ready for Vercel.

## Features

- Dark, navy + yellow theme (strict two-color palette, CSS-variable tokens)
- Staggered hero reveal + typewriter title + gradient-mesh background
- Scroll-triggered section animations (`whileInView`) via shared Framer Motion variants
- SEO ready: `sitemap.xml`, `robots.txt`, and a generated Open Graph image (`next/og`)
- Hardened response headers (nosniff, frame options, referrer policy) and `x-powered-by` disabled
- Production image optimization via `next/image` + `sharp`
- Animated skill pills (with official brand logos via react-icons) grouped by category
- Alternating vertical experience timeline
- Project cards with mouse-tracking hover-tilt and an expandable details modal
- Sticky glass navbar with scroll-spy active-section highlighting + mobile slide-in menu
- Contact section with EmailJS-powered form and hover-animated social cards
- `prefers-reduced-motion` respected via `MotionConfig reducedMotion="user"` + CSS overrides
- SEO metadata (title, description, Open Graph, Twitter cards)

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a strict navy (#0A1128) + yellow (#FACC15) palette (CSS-variable tokens)
- Framer Motion for animation
- lucide-react for icons

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # fonts, SEO metadata, background
  page.tsx            # section composition
  globals.css         # design tokens, glass/grid utilities, reduced-motion
components/
  animations.ts       # shared Framer Motion variants (DRY)
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx,
  Experience.tsx, Projects.tsx, ProjectCard.tsx, ProjectModal.tsx,
  Education.tsx, Contact.tsx, Footer.tsx ...
data/
  content.ts          # ALL content lives here (edit me!)
hooks/
  useActiveSection.ts # scroll-spy
  useTypewriter.ts    # hero typewriter
```

## Customize Content

Everything content-related lives in **`data/content.ts`**:

- `profile` — name, title, contact details, summary, social links
- `skills` — flat skill list feeding both the marquee strip and category grid
- `experience` / `education` — timeline entries
- `projects` — project cards + modal details

> **Note:** LinkedIn, GitHub, and the project "Source code" URLs in `data/content.ts`
> are wired to `linkedin.com/in/abhinav-a-934696202` and `github.com/ABHINAV9496`.
> The EcoCharge (`/ABHINAV9496/Ecocharge`) and CricGear (`/ABHINAV9496/CrickGear-Ecommerce`)
> repos point to the real projects.

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.
4. Add the environment variables (Project → Settings → Environment Variables):

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | from `.env.local` |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | from `.env.local` |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | from `.env.local` |
   | `NEXT_PUBLIC_SITE_URL` | your production domain |

   Without them the contact form silently falls back to a `mailto:` link.
5. Redeploy after adding the variables.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

That's it — every push to `main` triggers a new production deployment.

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

## License

MIT — feel free to fork, modify, and make it your own.
