# AI Engineer Portfolio

A production-ready, premium portfolio website built for an AI Engineer / Machine Learning Engineer audience. Dark-themed, glassmorphic, and fully responsive — built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

**Live demo:** _add your deployed URL here_

![Portfolio preview](public/og-image.png)

---

## ✨ Features

- **Modern stack** — Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, next-themes
- **Dark / light theme** with persisted preference and no flash-of-wrong-theme
- **Sections** — Hero, About, Skills (13 categories), Projects (filterable case studies), Experience timeline, Certifications, GitHub stats, Resume, Contact form
- **Fully responsive** — mobile-first, tested from 360px up
- **SEO complete** — metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`
- **Accessible** — visible keyboard focus states, semantic HTML, `prefers-reduced-motion` respected
- **Single source of content** — everything personalizable lives in [`lib/data.ts`](lib/data.ts)
- **Working contact form** — posts to a Next.js API route (`app/api/contact/route.ts`), ready to wire up to an email provider

---

## 🗂 Project Structure

```
├── app/
│   ├── api/contact/route.ts   # Contact form submission handler
│   ├── layout.tsx             # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                # Composes all sections
│   ├── globals.css             # Design tokens & base styles
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/
│   ├── navbar.tsx / footer.tsx
│   ├── theme-provider.tsx / theme-toggle.tsx
│   ├── sections/                # One file per page section
│   └── ui/                      # Reusable primitives (Button, Card, Badge, SectionHeading)
├── lib/
│   ├── data.ts                  # 👉 ALL editable content lives here
│   └── utils.ts
└── public/
    ├── resume.pdf
    ├── og-image.png / favicon.ico
    └── projects/*.svg           # Project preview placeholders
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20 LTS recommended)
- npm (or pnpm/yarn if you prefer — swap the lockfile accordingly)

### Installation

```bash
git clone https://github.com/yaseenraihana87/portfolio.git
cd portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

---

## 🎨 Personalizing Your Content

Everything you need to change lives in **`lib/data.ts`**:

| Section | What to edit |
|---|---|
| `siteConfig` | Name, role, tagline, bio, email, social links, SEO metadata |
| `navLinks` | Navigation labels/anchors |
| `typingWords` | Words cycled in the hero's typewriter effect |
| `about` | Intro, objective, interests, career timeline |
| `skillCategories` | Skill categories + proficiency percentages |
| `projects` | Project case studies (problem, features, tech, results, links) |
| `experience` | Work experience with responsibilities & achievements |
| `certifications` | Certification cards |
| `githubStats` | GitHub username, stat counters, pinned repos |
| `contactInfo` | Contact section heading/subheading |

**You should rarely need to edit component files** — the architecture is built so content changes stay in one place.

### Replace these assets

- `public/resume.pdf` — your real resume
- `public/og-image.png` — social share preview image (1200×630)
- `public/favicon.ico` — your favicon
- `public/projects/*.svg` — swap for real project screenshots (`.png`/`.jpg` work too — just update the `image` field in `lib/data.ts`)

### Wire up the contact form

`app/api/contact/route.ts` currently logs submissions to the server console as a stub. Connect it to a real provider, for example [Resend](https://resend.com):

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "portfolio@yourdomain.com",
  to: "you@yourdomain.com",
  subject: `New message from ${name}`,
  text: message
});
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected) — no build settings need to change.
4. Add any environment variables your contact form provider needs (e.g. `RESEND_API_KEY`) under **Project Settings → Environment Variables**.
5. Click **Deploy**. Vercel will build and give you a live URL.
6. (Optional) Add a custom domain under **Project Settings → Domains**, and update `siteConfig.seo.url` in `lib/data.ts` to match it — this feeds your sitemap, canonical URLs, and Open Graph tags.

---

## ✅ Pre-Deployment Checklist

- [ ] Replace all placeholder content in `lib/data.ts` (name, bio, projects, experience, links)
- [ ] Replace `public/resume.pdf` with your real resume
- [ ] Replace `public/og-image.png` and `public/favicon.ico`
- [ ] Replace project preview images in `public/projects/`
- [ ] Update `siteConfig.seo.url` to your real production domain
- [ ] Update all social links (`github`, `linkedin`, `twitter`) to your real profiles
- [ ] Wire the contact form (`app/api/contact/route.ts`) to a real email/CRM provider
- [ ] Update GitHub username and pinned repos in `githubStats`
- [ ] Run `npm run build` locally to confirm a clean production build
- [ ] Run a Lighthouse audit (target 95+ on Performance, Accessibility, Best Practices, SEO)
- [ ] Test on mobile, tablet, and desktop breakpoints
- [ ] Test both dark and light themes
- [ ] Verify `sitemap.xml` and `robots.txt` render at `/sitemap.xml` and `/robots.txt`
- [ ] Confirm the deployed Open Graph image renders correctly (test with a link-preview tool)

---

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router, Server Components
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide React](https://lucide.dev/) — icons

---

## 📄 License

Licensed under the [MIT License](LICENSE) — free to use as a template for your own portfolio.
