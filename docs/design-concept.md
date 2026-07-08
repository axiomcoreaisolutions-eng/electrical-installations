# Design Concept — Electrical Installations d.o.o.

## v3.1 — Hard-edge correction (2026-07-08)

A screenshot study of the reference (not just its markup) forced a system
correction: the reference's identity is a **flat brand-color field** with
**zero border-radius** and visible hairline grid rules — not a dark photo
hero with rounded panels. Changes: all radius tokens zeroed globally
(only `rounded-full` node dots survive); homepage hero rebuilt as a
signal-red field with the black diamond-bolt mark as the hero graphic,
hairline label rows, and black/bordered squared CTAs; the video moved
below the field as a full-bleed band; header went light (porcelain,
hairline rule, squared black CTA); interior page heroes converted from
ink to porcelain ground. Display type tightened (weight 650, -0.03em,
lh 0.98). Red-as-field is the one sanctioned exception to "signal, never
a surface" — the hero only.

## v3 — Facelift (Enerblock-informed, 2026-07-08)

Structural reference: enerblock.net/en (structure, motion vocabulary, and
technical-document vernacular only — all code, copy, and assets are ours).
Palette and type stay ours; the reference's orange-accent slot maps to our
signal red.

**Adopted patterns:** Lenis smooth scroll (desktop, motion-OK only);
SplitText character reveals on display headings; numbered full-width
catalog sections (01–06 — a real catalog sequence, like the reference's
solutions list); a coded diagnostic showcase (D.01–D.05) in the
case-studies slot using only real subservice content; cursor-coordinate
readout on the hero media (instrument vernacular); footer reorganized into
numbered blocks (SEK.01–03). Glassmorphism retired per design rules —
solid surfaces and composition carry the hero now.

**Type scale (v3):** hero display up to ~6.5rem via clamp; Bricolage
Grotesque 600 remains the display voice, Archivo body, IBM Plex Mono
instrument labels. Everything below reads through these tokens.

*Defined before build, 2026-07-08. Every visual decision in the codebase derives
from this document.*

## Thesis

The company sells one thing: **systems that must not stop.** The design language
is therefore borrowed from the world where that promise is kept — the mechanical
room, the instrument panel, the technical drawing. Calm, dark, measured; nothing
decorative that a facility engineer would find embarrassing.

## Color — "noć u strojarnici" (night in the plant room)

| Token | Hex | Role | Reasoning |
|---|---|---|---|
| `ink` | `#0B1420` | hero/footer/dark panels, headings on light | Not pure black — a blue-graphite tuned to the cool blue-grey of the hero video, so the video never looks pasted onto a foreign background. |
| `ink-2` | `#12202F` | elevated dark surfaces, dark cards | One step of depth inside dark sections. |
| `porcelain` | `#F3F5F7` | light section backgrounds | Deliberately **cool** off-white (not warm cream) — reads as technical paper / blueprint stock, and keeps continuity with the cold-light hero. |
| `line` | `#DFE5EB` | hairlines, card borders | Schematic-drawing weight, never heavy borders. |
| `slate` | `#54657A` | secondary text | Cold grey-blue, matches the system. |
| `signal` | `#D22525` (v3; was `#E02D2D`) | primary CTA, active states, catalog indexes | The logo red, darkened one step in v3 so white button text and red-on-white labels pass WCAG AA (~5.3:1). Used the way red is used on an instrument panel: as a **signal**, never as a surface. |
| `steel` | `#3E5C7A` | diagram lines, subtle water-adjacent accents | Whisper of blue for schematic motifs; never competes with signal red. |

Section rhythm alternates dark → light deliberately: hero (dark) → categories
(porcelain) → why-it-matters (ink panel — gravity) → process (light) → deep dive
(light with dark media inset) → trust (porcelain) → about (white) → contact CTA
(ink) → form (white) → footer (ink). The dark bookends make the site feel like
one continuous system that begins and ends in the plant room.

## Typography (revised in v2)

- **Display: Bricolage Grotesque (variable, 600).** Characterful grotesque for
  h1/h2 — distinctive without losing the technical register; full Croatian
  diacritics. Used ONLY for display headings.
- **Body/UI: Archivo (variable).** Quiet workhorse for everything else.
- **Utility: IBM Plex Mono (400/500).** Eyebrow labels, data (phone, address),
  form labels, badge text, ticker. The "instrument label" voice.
- No serif anywhere. This subject has no serif in its world.

## Structure & signature

- 12-col grid, content max-width 1200px, generous vertical rhythm
  (~7rem desktop / 4rem mobile between sections).
- **No decorative numeration (v2).** Numbers appear only where sequence is real
  information: the five process steps. Category cards use consistent stroke
  icons instead; the featured (water) category gets the inverted dark card with
  photography — priority through contrast, not labels.
- **Signature element (v2): the framed hero.** The video sits inside an inset,
  rounded frame on the porcelain page from first paint — the medium arrives
  already *under control*. A faux-cutout corner card (page-surface color with
  inverse-radius SVG masks) carves the quick-inquiry CTA into the frame;
  glassmorphism card bottom-left carries the featured category. On scroll the
  media drifts and scales inside the fixed frame. Secondary motif: hairline
  schematic lines with node dots, plus the red draw-line that traces across
  the process section.
- Radii: small and technical (cards 12px, buttons 8px, inputs 8px). No pills,
  no glassmorphism, no gradients as decoration.
- Cards: white on porcelain, 1px `line` border, hover = border→ink + 2px lift.
  Category 01 gets the inverted (ink) card — visual priority through contrast,
  not size.

## Motion

GSAP + ScrollTrigger, one idea per section, all gated behind
`prefers-reduced-motion: no-preference` via `gsap.matchMedia()`:
- Hero: load-in stagger (badge → headline lines → sub → CTAs → cards),
  scroll-scrub containment of the video (scale + border-radius + margin).
- Sections: single soft rise+fade reveal per block, batched cards.
- Reduced motion / no JS: content fully visible, video replaced by poster.
- Mobile: no video element at all (poster image), no scrub — only opacity
  reveals.

## Imagery

Until real photography exists: **no fake stock**. Dark schematic/gradient
placeholder panels with mono labels ("FOTOGRAFIJA — zamijeniti stvarnom"),
flagged in the audit. The hero video is the only real media asset.
