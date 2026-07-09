# Site Teardown: BE (bec.uk)

**URL:** https://www.bec.uk
**Built by:** custom Webflow build
**Platform:** Webflow (Webflow IX2 interactions engine)
**Date analyzed:** 2026-07-09

## Tech Stack (Confirmed from Source)

| Technology | Evidence | Purpose |
|---|---|---|
| Webflow + IX2 | `webflow.*.js` chunks, `data-w-id`, `w-mod-ix` opacity gating in `<head>` | Layout, scroll/hover interactions (fade-ups, color reveals) |
| Lenis 1.0.23 | jsdelivr script + inline `new Lenis({lerp:0.1, wheelMultiplier:0.7})` | Smooth scroll |
| GSAP 3.12.2 | cdnjs script | The interactive cross-grid hero decoration |
| Flowbase Count-Up | jsdelivr `boosters-countup` + `fb-count`/`fb-count-target` attrs | Animated stat counters (300+, 05+, 03) |
| Lottie (Webflow) | `data-animation-type="lottie"` on industry icons + CTA plus-icons | Vector icon micro-animations |

## Design System

### Colors (from CSS custom properties)
| Name/Usage | Value |
|---|---|
| Text / ink (primary) | `#18181b` (zinc-900) |
| Dimmed word (pre-reveal) | `rgba(24,24,27,0.2)` = `#18181b33` |
| Secondary text | `#222` |
| White / surfaces | `#fff` |
| Grey section bg | `#f7f7f7` |
| Hairlines | `#eee`, `#ccc`, `#dad9d7` |
| Brand blue (accent) | `#2d62ff` (light `#d9e5ff`, dark `#080331`) |
| Brand pink (secondary, unused on home) | `#dd23bb` |

Near-black text on white/`#f7f7f7`, **one** blue accent, everything else neutral grey. Extremely restrained — the "premium" comes from type + space + motion, not color.

### Typography
| Role | Font | Weight | Tracking | Size |
|---|---|---|---|---|
| Headings (h2) | **Diatype** (`Besansdiatype`) | **500 (medium!)** | `-2px` | `4rem` / line-height `4rem` (1.0) |
| Big stat numbers | Diatype | 700 | `-3px` | `5.25rem` |
| Body | Diatype | 400 | normal | 1–1.25rem |
| Eyebrows / numbers / labels | **Diatype Mono** (`Besansdiatypemono`) | 400 | uppercase | ~0.8rem |

**Key insight:** headings are *large but medium-weight*, very tight tracking, line-height 1.0. Not bold. That restraint is the premium signal. Mono is used for every label, number (S01, I01, H01), and eyebrow.

### Spacing
rem-based, generous. `padding-section-large/medium/small` + `padding-global`. Card grids gap 16px; section-to-content gaps ~5rem. Lots of whitespace.

### Responsive
Breakpoints 991 / 767 / 479. Marquee + grids collapse; heading sizes step down (4rem → ~38px mobile).

## Effects Breakdown

| Effect | Implementation | Complexity | Cloneable? |
|---|---|---|---|
| **Word-by-word heading reveal** | Each word wrapped in `<span class="color-change">` starting `color:rgba(24,24,27,0.2)`; IX2 scroll-scrub animates each to full `#18181b`, staggered L→R as the heading enters | Med | Yes (GSAP ScrollTrigger scrub + stagger, or opacity) |
| Eyebrow chip + dot | `.title-head`: grey `#f7f7f7` chip, mono uppercase, tiny `.title-head_dot` square (0.25rem, 50% black) | Low | Yes |
| CTA text-swap | `.cta-text-wrapper` = flex column with the label twice; hover translates column up so the second copy slides in | Low | Yes |
| Card hover line-fill | `.line` (1px absolute bottom) + `.line-inner-hover` (inner bar width 0→100% on card hover) | Low | Yes |
| Count-up stats | Flowbase reads `fb-count-target`, tweens 0→N when in view; huge tight numbers (5.25rem/-3px) | Low | Yes (IntersectionObserver + rAF) |
| Hover-reveal video cards | Big page cards swap a poster `<img>` for an autoplay bg `<video>` on hover | Med | Yes |
| Logo marquee | Duplicated logo columns, infinite horizontal translate | Low | Yes (we already have this) |
| Interactive cross-grid | Inline GSAP: grid of 25×15 SVG crosses; opacity gradient by corner distance; on `mousemove` each cross within 180px scales up + brightens (spotlight) | Med | Yes (self-contained script in HTML) |
| Sticky-image impact section | Text column scrolls over a `position:sticky` background image | Low | Yes |
| Fade-up reveals | IX2 sets `opacity:0` inline, animates to 1 on enter | Low | Yes |

## Implementation Details

### Word-by-word heading reveal (the signature)
```
HTML: <h2><span class="color-change" style="color:rgba(24,24,27,0.2)">A</span> <span ...>leading</span> ...>
Mechanism: as the heading scrolls from ~80% to ~40% viewport, each word tweens
from 20%-opacity ink to full ink, staggered left→right (scrub-tied to scroll).
Reveal: it's not per-character — it's per-WORD, calm and readable. That calmness
is what reads as premium vs a busy character stagger.
Our adaptation: SplitText type:'words', animate opacity 0.28→1, scrub + stagger.
Background-agnostic (opacity works on dark or light).
```

### CTA text-swap
```
.cta-text-wrapper { display:flex; flex-direction:column } holds the label twice.
Button clips overflow; on hover the wrapper translateY(-50%) so copy #2 rises in.
Pairs with a Lottie plus-icon that plays on hover. (BEC buttons are pills, 2rem
radius — we keep our squared shape, adopt only the swap.)
```

### Card hover line-fill
```
.line.top { position:absolute; height:1px; background:#ccc } sits on the card edge.
.line-inner-hover { width:0%; background:darker } — on card :hover, width→100%
(transition ~.4s). A hairline "loading" fill that signals interactivity.
```

## Assets Needed to Recreate
1. **Diatype + Diatype Mono** — commercial (Dinamo). We already run Archivo + IBM Plex Mono, the same grotesque+mono philosophy — no new fonts needed.
2. **Client logos** (marquee) — BEC uses partner SVGs; we have no client roster (don't fabricate).
3. **Lottie industry icons** — optional; we use lucide-style stroke icons already.
4. **Cross-grid** — pure code (SVG + GSAP), no asset.

## Build Plan (for OUR site — adaptation, not clone)

### What to adopt (palette-agnostic, fits our dark/red structure)
- **Word-by-word scroll reveal** on section headings → replaces our character-rise on H2s (calmer, more premium). Keep char/fade on hero H1.
- **Eyebrow chips**: upgrade our plain mono eyebrow to a subtle surface chip + dot (BEC `.title-head`).
- **CTA text-swap** on primary buttons (keep squared corners, our red).
- **Card hover line-fill** on catalog rows.
- **More whitespace** — nudge section padding up; let headings breathe.
- **Honest count-up** (optional): only real numbers (6 sustava, 5 dijagnostičkih usluga, od 2023) — never fabricated client/stat counts.

### What NOT to adopt
- BEC's blue accent (`#2d62ff`) — our brand is red. Keep red.
- Pill buttons (2rem radius) — our system is hard-edged (0 radius). Keep squared.
- Light-only palette — we keep the dark cinematic hero + dark section rhythm; only borrow the refinement, space, and motion.
- Medium-weight (500) headings everywhere — the client approved heavy Archivo Expanded; keep it for impact, apply BEC's *tracking/whitespace/reveal* discipline instead.

## Notes
- The whole "premium" feeling is **restraint + motion timing**, not decoration: one accent, big tight type, per-word reveals, generous space, Lenis. We already have the infrastructure (GSAP, SplitText, Lenis, marquee, magnetic) — this is a polish pass, not a rebuild.
- Count-up must use only real figures per the project's no-fabrication rule.
