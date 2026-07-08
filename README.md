# Electrical Installations d.o.o. — web stranica

Premium, conversion-focused site for Electrical Installations d.o.o. (Zagreb).
Astro + TypeScript + Tailwind CSS 4 + GSAP, with Sanity as headless CMS.

- **Design reasoning:** [docs/design-concept.md](docs/design-concept.md)
- **Full project brief & decisions:** [docs/project-brief.md](docs/project-brief.md)

## Structure

```
├── src/                  # Astro site (frontend)
│   ├── content/defaults.ts   # Seeded Croatian content — single source of truth
│   ├── lib/content.ts        # Sanity client; CMS values override defaults
│   ├── components/           # Header, Hero, cards, form, ...
│   ├── layouts/Base.astro    # SEO head, JSON-LD, fonts, header/footer
│   ├── scripts/motion.ts     # GSAP + ScrollTrigger (reduced-motion gated)
│   └── pages/                # naslovnica, usluge, 6 kategorija, podusluge,
│                             # o-nama, kontakt, hvala, privatnost, 404
├── studio/               # Sanity Studio (separate workspace)
│   ├── schemas/index.ts      # All document types
│   └── seed/seed.ndjson      # Starter content for the dataset
└── public/media/         # Compressed hero video + poster
```

## Development

```bash
npm install
npm run dev        # site at http://localhost:4321
npm run build      # static build to dist/
npm run check      # TypeScript/Astro diagnostics

cd studio
npm install
npm run dev        # Sanity Studio at http://localhost:3333
npm run seed       # import starter content into the production dataset
```

## Content model

The site **always builds**, with or without Sanity: every page falls back to
the seeded Croatian content in `src/content/defaults.ts`. Once a Sanity
document exists, any field the editor fills in overrides its default.
Project ID `4sqfr6zk`, dataset `production` (public read; no token needed
unless the dataset is made private — then set `SANITY_API_READ_TOKEN`).

To hand the CMS to editors: `cd studio && npx sanity login && npm run seed`,
then `npm run deploy` for a hosted Studio.

## Deployment

**Netlify (recommended — the contact form depends on it):**
`netlify.toml` is included. Connect the repo, build command `npm run build`,
publish directory `dist`. Netlify Forms picks up the `upit` form automatically;
submissions arrive in the Netlify dashboard (add email notifications there).

**Cloudflare Pages:** build `npm run build`, output `dist`. Note: Netlify
Forms will NOT work there — swap the form `action` in
`src/components/ContactForm.astro` for a form endpoint (e.g. a Worker or a
service like Formspree) before going live on Cloudflare.

Environment variables (both hosts): copy `.env.example`. No secrets are
required for a public dataset.

## Before launch — needs real business input

- Final phone/email (current: `info@parking.hr` provided as temporary)
- Photography: the site ships with licensed Unsplash imagery
  (`public/images/`) — swap for the company's own site photos when available
- Privacy policy text should get a legal read-through before go-live
- Any certificates/references/service-area claims (deliberately absent —
  nothing unconfirmed is stated on the site)
