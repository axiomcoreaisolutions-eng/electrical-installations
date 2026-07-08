# Project Brief — Electrical Installations d.o.o. Website

> Saved verbatim from the client brief on 2026-07-08. This is the authoritative
> reference for the entire build. Re-read before each phase.

## SETUP (completed 2026-07-08)

Folder state at project start: `C:\Users\Bernard\Elektro` contained only
`Logo.png` (black diamond + lightning bolt mark, "ELECTRICAL" in red,
"INSTALLATIONS" in dark gray). No frontend project existed. No CLAUDE.md.

---

## CONFIRMED DECISIONS (from client, 2026-07-08 — override anything ambiguous below)

1. **Stack:** Astro + TypeScript + Tailwind + GSAP + Sanity. Approved.
2. **Sanity project ID:** `4sqfr6zk` (dataset: production assumed).
3. **Contact (temporary, CMS-editable):** email `info@parking.hr` ("za sada"),
   phone `01 209 0733`, address `Krapanjska ulica 12, 10000 Zagreb, Hrvatska`.
   Forms: **Netlify Forms**.
4. **Card hints 2–6 approved as drafted:**
   - Elektroinstalacije: "Jaka i slaba struja — razvodni ormari, uzemljenje, videonadzor i strukturno kabliranje."
   - Solarni sustavi: "Solarni sustavi uz nadzor i održavanje."
   - Klimatizacija: "Ugradnja sustava klimatizacije i ventilacije."
   - Parking: "Rampe, sustavi naplate i programska podrška."
   - EV: "Distribucija i ugradnja Stekker EV punionica."
5. **No explicit urgent-inquiry path** — "Trebate brzu procjenu?" is the ceiling.
6. **Dizalica s košarom:** keep as Sanity subservice/mention only, not a homepage category.
7. **Hero video supplied by client:** `Slow_cinematic_dolly_shot_movi_Kling_30__54074.mp4`
   (13.9 MB source in project root — compress before shipping; extract poster frame
   for reduced-motion/mobile fallback). Hero direction approved via supplied media.

Research facts (Phase 1, confirmed from official site): founded 2023; tagline
"Partner za električnu energiju"; Stekker EV partnership; parking sectors
(airports, hospitals, hotels, shopping centers, municipalities...); jaka/slaba
struja service lists. NOT available anywhere official (placeholders required,
flagged for launch): certificates, references, warranties, response times,
service areas, team size, project counts, prices, social links, real photos,
privacy/legal pages. Water/plumbing category is NEW — zero official content
exists; keep all water copy method-neutral.

## PROJECT CONTEXT

Business: Electrical Installations d.o.o.
Current site: https://electrical-installations.hr/
Main competitor: https://www.bluemont.hr/
Competitor service reference: https://www.bluemont.hr/usluge

Goal: build a premium, modern, conversion-focused local website that is
clearer, more credible, and more commercially effective than both the
current official site and the competitor's site — with particular emphasis
on winning trust and inquiries for the newly expanded water/plumbing
service category, which is the direct point of competition with Bluemont.

This is a local-first build: custom frontend + Sanity headless CMS,
deploying later to Cloudflare Pages or Netlify. Output must be clean,
performant, portable, deploy-ready. All user-facing content is in Croatian.

## PHASE 1 — RESEARCH

Fetch and read:
1. https://electrical-installations.hr/ — the ONLY factual source for
   existing services, positioning, and any real trust signals (years
   active, certifications, service areas, etc.)
2. https://www.bluemont.hr/ and https://www.bluemont.hr/usluge —
   competitor research only, for category structure and positioning.
   Do not copy wording, structure, or phrasing from this site.

Hard factual constraint: do not invent, imply, or infer any of the
following unless explicitly stated on the official Electrical
Installations site — years of experience, certificates/licenses, client
names, references, warranties, response times, service areas, team size,
equipment/partner brands, awards, project counts, prices. If something is
unconfirmed, use neutral CMS-editable placeholder language and flag it in
the research summary as "needs real content."

Report back a short summary — confirmed facts, gaps, anything on the
current site worth preserving — before moving to Phase 2.

## PHASE 2 — CLARIFYING QUESTIONS

Ask anything needed before building: stack choice (if the folder is
empty), CMS access/credentials, content gaps found in research, or
anything in this brief that's ambiguous. Ask once, as a batch.

## PHASE 3 — HERO MEDIA DIRECTION (deliverable, not code)

Do not write code, create files, or scaffold components yet.

Deliver:
1. One primary Artlist.io video-generation prompt for the hero background.
2. One alternative prompt, in case the first is too abstract to generate
   well.
3. A short explanation of how the video functions in the hero section
   (background layer vs. focal visual; relationship to headline/UI cards).
4. Recommended specs: aspect ratio, duration, camera movement, loopability,
   lighting direction, texture/mood, what to avoid.
5. A short note on how the video supports the scroll-linked hero animation
   described later in this brief.

Direction: cinematic, technical, premium, infrastructure-focused — not
generic construction footage. Should evoke water systems, pressure,
technical precision, controlled movement, electrical infrastructure,
reliability, calm authority, modern technical systems, premium B2B trust.
Strong depth, controlled motion, enough negative space for headline copy
and UI cards to sit on top.
Visual/interaction reference (logic only, not brand meaning):
https://motionsites.ai/?prompt=rivr-hero

Stop after this step and wait for approval of the direction, or for the
user to supply the generated media, before continuing.

---

Everything below is reference material Phase 4 draws on — not additional
sequential phases.

---

## BUSINESS STRATEGY & POSITIONING

Position Electrical Installations d.o.o. as a technical infrastructure
partner across water/plumbing, electrical, solar, HVAC, parking systems,
and EV charging — one partner for multiple systems, not "an electrician
who added plumbing."

Homepage leads with the water/plumbing category (the Bluemont-competing
one) without overcrowding the page. Six umbrella categories only, in this
order:
1. Vodovod, kanalizacija i detekcija kvarova
2. Izvođenje elektroinstalacija
3. Solarni sustavi
4. Klimatizacijski i ventilacijski sustavi
5. Sustavi za kontrolu parkinga
6. Punionice električnih vozila — EV

For category 1 only, include small supporting text hinting at subservices
(exact copy in Content Reference below) — hints, not separate homepage
cards. Full subservice detail lives in Sanity and on service pages.

## SKILL ORCHESTRATION

- ui-ux-pro-max: lead experience architect. Owns hierarchy, trust, service
  clarity, contact intent, perceived competence, premium feel through
  restraint rather than density.
- frontend-design: defines the design concept before build — color theme,
  typography, spacing, grid, section rhythm, image direction, button/card/
  form/nav styles, one signature visual idea. State the reasoning behind
  color and type choices, not just the output.
- frontend-ui-ux: quality/polish reviewer. Spacing, layout, hierarchy,
  mobile behavior, CTA clarity, flow, cohesion. Removes anything generic,
  cluttered, or template-like. Every section serves one of: trust, clarity,
  service discovery, proof, inquiry, conversion.
- GSAP (or equivalent scroll animation): only where it improves experience
  without hurting performance. Subtle, quiet — opacity, transform,
  perspective, scale, masked reveals, scroll-linked transitions. No
  excessive parallax, jank, or aggressive motion. Real reduced-motion
  fallback, not just a media-query stub.
- mobile-app-ui-design: mobile-first review lens at the 375px viewport —
  thumb-friendly CTAs, readable type, short sections, minimal scroll
  fatigue. Hero video and scroll effects degrade gracefully, not just
  shrink.
- shadcn: reference for component discipline, variants, accessible forms,
  buttons, cards, spacing, nav patterns, dialog/form accessibility. Don't
  pull in components the site doesn't need.
- material-3 / Expo / SwiftUI: optional lessons-only lenses (accessibility,
  adaptive layout, interaction clarity) — do not force their patterns into
  the site.

Note: if any skill isn't found, treat the label as a role description
instead of a tool invocation — it shouldn't block anything.

## TECHNICAL STACK

If a project already exists in the folder, use its existing architecture
unless there is a specific, stated reason to change it — state that reason
before switching. If no project exists, propose a stack briefly and
confirm before initializing.

Requirements regardless of stack: Sanity headless CMS, static/hybrid
deployment compatible with Cloudflare Pages or Netlify, TypeScript,
component-based architecture, image/video optimization, SEO-ready page
structure, animation only where justified.

## ENVIRONMENT & SECRETS

Sanity project ID and dataset name aren't sensitive; a Sanity API token
(used for drafts/previews or write access) is. Keep it in environment
variables only, ship a .env.example with placeholder values (no real
secrets), make sure .env* is in .gitignore, and never hardcode or commit a
real token.

## SANITY CMS STRUCTURE

1. Site settings (company name, logo, phone, email, address, social links,
   legal links)
2. Homepage (hero badge/headline/subheadline, primary/secondary CTA, hero
   cards, section content)
3. Service categories (title, slug, short homepage description, subservice
   hints, priority order, featured image/media, CTA label, SEO title/
   description)
4. Subservices (title, parent category, slug, short + long description,
   SEO title/description)
5. Process steps
6. Trust / way-of-working cards
7. FAQ (if useful)
8. SEO metadata
9. Contact page content

Keep homepage categories clean and limited; subservices live here for
detail pages, internal linking, SEO, and future expansion. Don't
overcomplicate the schema beyond what's needed above.

## SITE STRUCTURE

Pages: Naslovnica, Usluge, the six category pages above, O nama, Kontakt.
Optional (if scope allows): individual pages for Detekcija curenja vode,
Ispitivanje puknuća cijevi, Mjerenje tlakova, Istraživanje gubitaka vode,
Odštopavanje odvoda.
CMS-driven wherever it makes sense.

## CONTENT REFERENCE — CROATIAN COPY (verbatim; do not translate or paraphrase)

Hero:
- Badge: "Odvodnja – elektroinstalacije - Solarni sustavi - HVAC, Sistemi
  za kontrolu parkinga, Punionice električnih vozila (EV)"
- Headline (H1): "Tehnički sustavi koji moraju raditi pouzdano."
- Subheadline: "Od detekcije kvarova u vodovodnim sustavima do
  elektroinstalacija, solarnih sustava, klimatizacije, parking sustava i EV
  punionica — Electrical Installations d.o.o. pruža jasna tehnička
  rješenja za objekte koji ne smiju stati."
- Primary CTA: "Zatražite ponudu" / Secondary CTA: "Pogledajte usluge"
- Bottom-left card — title: "Prioritetna kategorija"; text: "Vodovod,
  kanalizacija i detekcija kvarova."; hint: "Curenja, puknuća cijevi,
  mjerenje tlakova i gubici vode."
- Bottom-right card — title: "Trebate brzu procjenu?"; CTA: "Pošaljite
  upit"

Section 2 (umbrella categories):
- Headline: "Ključni tehnički sustavi na jednom mjestu."
- Supporting copy: "Od vodovodnih kvarova i elektroinstalacija do
  solarnih sustava, klimatizacije, parking kontrole i EV punionica —
  usluge su organizirane jasno kako biste brzo pronašli pravi smjer."
- Card 1 hint: "Detekcija curenja, ispitivanje puknuća cijevi, mjerenje
  tlakova, istraživanje gubitaka vode, odštopavanje odvoda."
- Cards 2–6: use the category titles above; hints TBD from Phase 1
  research (official site's existing service descriptions) — do not draft
  these until confirmed.
- Card CTA: "Saznajte više" or "Pošaljite upit"

Section 3 (why this matters):
- Headline: "Kvarovi, prekidi i loše izvedeni sustavi nisu samo tehnički
  problem."
- Consequences to cover: prekid rada, šteta na objektu, veći troškovi
  sanacije, sigurnosni rizik, gubitak vremena, nejasna odgovornost.

Section 4 (process):
- Headline: "Jasan proces od upita do izvedbe."
- Steps: Pošaljite upit → Kratka procjena situacije → Izlazak na teren /
  tehnička analiza (where applicable) → Jasna preporuka i ponuda →
  Izvedba i završna provjera.

Section 5 (featured category deep dive):
- Headline: "Vodovod, kanalizacija i detekcija kvarova bez nepotrebnog
  nagađanja."
- Problems to address: pad tlaka, vlaga u prostoru, sumnja na puknuće
  cijevi, nejasna lokacija curenja, gubitak vode, problemi s odvodnjom,
  kvarovi na vodovodnim i kanalizacijskim sustavima.

Section 6 (trust / way of working):
- Jasna komunikacija, Tehnička preciznost, Profesionalan pristup objektu,
  Rješenja za više sustava, Odgovorna izvedba.

Section 8 (contact CTA):
- Headline: "Imate kvar, projekt ili tehničko pitanje?"
- Primary CTA: "Kontaktirajte nas" / Secondary CTA: "Pogledajte usluge"

Section 9 (contact form):
- Fields: Ime i prezime, Telefon, Email, Vrsta usluge, Lokacija objekta,
  Poruka, GDPR consent checkbox.
- Submit button: "Pošaljite upit"

SEO H1s (category pages): "Vodovod, kanalizacija i detekcija kvarova" /
"Izvođenje elektroinstalacija" / "Solarni sustavi" / "Klimatizacijski i
ventilacijski sustavi" / "Sustavi za kontrolu parkinga" / "Punionice
električnih vozila — EV"
SEO H1s (optional subservice pages): "Detekcija curenja vode" /
"Ispitivanje puknuća cijevi" / "Mjerenje tlakova" / "Istraživanje gubitaka
vode" / "Odštopavanje odvoda"

## HOMEPAGE SECTIONS

Use the Content Reference above for all literal copy. Structural/creative
direction per section:

1. HERO — anchor is the Artlist hero media once approved. Scroll
   interaction: premium, scroll-linked media movement (see reference link
   above for logic, not literal copying). Mobile: hero and scroll
   animation degrade gracefully — readability and performance win over
   preserving every effect.
2. UMBRELLA CATEGORIES — six cards, category 1 gets visual priority, not
   dominance. Each card: title, short description, subservice hint, CTA.
3. WHY THIS MATTERS — translate technical failures into business/property
   consequences, then position the company as the structured alternative.
4. PROCESS — build trust through clarity; no specific timelines unless
   confirmed in research.
5. FEATURED CATEGORY DEEP DIVE — frame around identifying the issue and
   recommending next steps; no invented equipment or methods.
6. TRUST / WAY OF WORKING — real trust signals only if research finds
   them; otherwise the process-based list above.
7. ABOUT — source from official site content only, no exaggeration.
8. CONTACT CTA — move visitors toward inquiry.
9. CONTACT FORM — clear labels, clear error states, clean focus states,
   mobile-friendly inputs, short privacy note.
10. FOOTER — company name/logo, short positioning line, main nav, service
    links, phone, email, address (only if confirmed), legal links, privacy
    policy link, copyright.

## IMAGERY DIRECTION

Themes: pipe inspection, water systems, pressure measurement, technical
workers on site, electrical panels, solar systems, EV chargers, parking
systems, HVAC systems, clean infrastructure details, controlled lighting,
European/Croatian technical environment.
Avoid: fake smiling stock teams, random skyscrapers, cheap construction
imagery, overly staged corporate tech photos, irrelevant abstract graphics.
If real media isn't available, use clearly labeled premium placeholders —
flag each one so the user knows what needs replacing before launch.

## MOTION & INTERACTIONS

Use: soft page-load reveal, subtle hero text reveal, scroll-linked hero
movement, service-card reveal on scroll, gentle button hover, slight arrow
movement, smooth mobile menu transition, clean form focus states.
Avoid: heavy parallax, aggressive animation, layout shift, excessive
custom scripts, distracting motion, anything that hurts mobile
performance.

## MOBILE REQUIREMENTS (375px baseline)

Hero readable; CTAs thumb-friendly; priority category appears early; cards
stack cleanly; subservice hints readable but visually secondary; calm
spacing; simple nav; contact CTA easy to reach; usable form; no
overlapping cards, tiny captions, or cramped text; hero video doesn't hurt
performance; 3D scroll effect simplifies or disables gracefully if needed.

## SEO REQUIREMENTS

Use the H1s specified in Content Reference. Write SEO titles and meta
descriptions for every page — no keyword stuffing, clear Croatian service
terms, structured metadata where appropriate.

## ACCESSIBILITY REQUIREMENTS

Readable contrast, proper heading hierarchy, form labels, meaningful
button labels, keyboard navigation, visible focus states, alt text, video
captions/fallback where appropriate, reduced-motion support, clear error
messages, no important text locked inside images/video only.

## PERFORMANCE REQUIREMENTS

Optimized images/video, no unnecessary heavy scripts, no excessive
animation, no layout jank, mobile-first performance, lazy loading where
appropriate, clean component structure, deploy-ready build, Core Web
Vitals awareness.

## PHASE 4 — BUILD (after hero direction is approved)

4.1 Re-confirm folder state (already checked in Setup — re-verify if time
    has passed).
4.2 Initialize the project if needed, or extend the existing one.
4.3 Set up Sanity CMS + schema.
4.4 Build frontend components.
4.5 Connect content to Sanity.
4.6 Add routing.
4.7 Add SEO metadata.
4.8 Add responsive styling.
4.9 Add motion/scroll behavior where justified.
4.10 Test locally: run the build and typecheck/lint and confirm they
     pass; if there is a way to render pages (dev server plus a browser or
     screenshot tool), actually check each breakpoint (375px / tablet /
     desktop) instead of inferring from the code alone.
4.11 Fix whatever the testing in 4.10 actually turns up — visual,
     responsive, accessibility, content, performance.
4.12 Leave the project deploy-ready for Cloudflare Pages or Netlify.

## FINAL REVIEW CHECKLIST (before calling it done)

Desktop: hierarchy, spacing, alignment, premium feel, CTA clarity,
category order, homepage density, hero-to-later-section continuity.
Tablet: card wrapping, nav behavior, spacing, flow.
Mobile: 375px readability, clean stacking, CTA access, form usability, no
scroll fatigue, simplified motion where needed.
Content: Croatian throughout, no copied competitor text, no fabricated
claims, natural Croatian (not awkward or machine-sounding), no filler,
subservices stay secondary to umbrella categories.
CMS: categories/subservices/homepage/SEO/contact fields all editable,
schema not overcomplicated.
Visual system: color and typography choices are deliberate and tied to
stated reasoning, cohesive beyond the hero section.

## PHASE 5 — FINAL AUDIT (deliver after build)

1. What was built
2. Stack used
3. Sanity structure created
4. Design direction and reasoning
5. How hero media was integrated
6. How the scroll animation works, including its reduced-motion fallback
7. How the rest of the site ties back to the hero visually
8. How the homepage avoids category clutter
9. Specific improvements over the current Electrical Installations site
10. Specific competitive advantages over Bluemont
11. Mobile review notes
12. Accessibility and performance notes
13. Deployment readiness for Cloudflare Pages/Netlify
14. Outstanding items needing real business input: final hero video file,
    real photos, phone number, email, service areas, certificates,
    references, legal/privacy pages, exact urgent-response wording.

## SEQUENCE

Research → clarifying questions → hero video prompt (stop, wait for
approval) → build → final audit. Six umbrella categories on the homepage;
full subservice detail lives in Sanity/service pages, never as homepage
cards.
