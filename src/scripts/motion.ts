/**
 * Motion system v3. Everything gated:
 *  - `motionOK` (prefers-reduced-motion: no-preference) gates ALL animation
 *    and smooth scrolling. Reduced-motion users get a fully static, fully
 *    visible page - initial states are set from JS only inside the gate.
 *  - `desktop` additionally gates smooth scroll and scrubbed effects.
 * gsap.matchMedia() reverts everything automatically when conditions change.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const mm = gsap.matchMedia();

mm.add(
  {
    motionOK: '(prefers-reduced-motion: no-preference)',
    desktop: '(min-width: 768px)',
  },
  (context) => {
    const { motionOK, desktop } = context.conditions as {
      motionOK: boolean;
      desktop: boolean;
    };
    if (!motionOK) return;

    // --- Smooth scroll (Lenis), integrated with ScrollTrigger ---
    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;
    if (desktop) {
      lenis = new Lenis({ lerp: 0.12, anchors: true });
      lenis.on('scroll', ScrollTrigger.update);
      tickerFn = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
      // Exposed so programmatic scrolls (and tests) go through Lenis
      // instead of being overwritten by its next animation frame.
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    // --- Display headings: character rise, masked by lines (hero + page H1s) ---
    const splits: SplitText[] = [];
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      const split = SplitText.create(el, { type: 'lines,chars', mask: 'lines' });
      splits.push(split);
      gsap.from(split.chars, {
        yPercent: 110,
        duration: 0.9,
        ease: 'power3.out',
        stagger: { each: 0.016, from: 'start' },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // --- Section headings: word-by-word illumination on scroll (BEC-style).
    //     Calmer and more editorial than a character stagger; words rise from
    //     dim to full as the heading passes through the upper viewport. ---
    document.querySelectorAll<HTMLElement>('[data-reveal-words]').forEach((el) => {
      const split = SplitText.create(el, { type: 'words' });
      splits.push(split);
      gsap.set(split.words, { opacity: 0.22 });
      gsap.to(split.words, {
        opacity: 1,
        ease: 'none',
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 82%', end: 'top 42%', scrub: true },
      });
    });

    // --- Hero load sequence for non-split elements ---
    const heroSeq = gsap.utils.toArray<HTMLElement>('[data-hero-seq]');
    if (heroSeq.length > 0) {
      gsap.from(heroSeq, {
        y: 24,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.1,
        clearProps: 'all',
      });
    }

    // --- Hero media parallax + slow zoom (media oversized ±6% in markup) ---
    const heroMedia = document.getElementById('hero-media');
    if (desktop && heroMedia) {
      gsap.fromTo(
        heroMedia,
        { yPercent: -6, scale: 1.02 },
        {
          yPercent: 6,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: heroMedia, start: 'top top', end: 'bottom top', scrub: 0.6 },
        }
      );
    }

    // --- Ambient steel aurora drift (subtle, keeps the dark hero alive) ---
    const aurora = document.querySelector('.hero-aurora');
    if (aurora) {
      gsap.to(aurora, { xPercent: 8, yPercent: -6, duration: 16, ease: 'sine.inOut', repeat: -1, yoyo: true });
    }

    // --- Marquees (hero + footer): seamless loop of duplicated track ---
    gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((el) => {
      gsap.to(el, { xPercent: -50, ease: 'none', duration: 34, repeat: -1 });
    });

    // --- Magnetic buttons (desktop, fine pointer only) ---
    if (desktop && window.matchMedia('(pointer: fine)').matches) {
      gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - r.left - r.width / 2) * 0.3);
          yTo((e.clientY - r.top - r.height / 2) * 0.3);
        });
        el.addEventListener('pointerleave', () => {
          xTo(0);
          yTo(0);
        });
      });
    }

    // --- Schematic cross-grid (contact CTA band = interactive, footer = static) ---
    if (desktop) {
      const NS = 'http://www.w3.org/2000/svg';
      const cols = 20;
      const rows = 8;
      const spacing = 44;
      const arm = 5;
      const finePointer = window.matchMedia('(pointer: fine)').matches;

      document.querySelectorAll<HTMLElement>('[data-cross-grid]').forEach((grid) => {
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${cols * spacing} ${rows * spacing}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        grid.appendChild(svg);

        const crosses: { scale: SVGGElement; cx: number; cy: number }[] = [];
        for (let x = 0; x < cols; x++) {
          for (let y = 0; y < rows; y++) {
            const cx = x * spacing + spacing / 2;
            const cy = y * spacing + spacing / 2;
            const outer = document.createElementNS(NS, 'g');
            outer.setAttribute('transform', `translate(${cx},${cy})`);
            const scale = document.createElementNS(NS, 'g');
            scale.setAttribute('class', 'cross-scale');
            const l1 = document.createElementNS(NS, 'line');
            l1.setAttribute('x1', String(-arm)); l1.setAttribute('y1', '0'); l1.setAttribute('x2', String(arm)); l1.setAttribute('y2', '0'); l1.setAttribute('class', 'cross-line');
            const l2 = document.createElementNS(NS, 'line');
            l2.setAttribute('x1', '0'); l2.setAttribute('y1', String(-arm)); l2.setAttribute('x2', '0'); l2.setAttribute('y2', String(arm)); l2.setAttribute('class', 'cross-line');
            scale.append(l1, l2);
            outer.append(scale);
            svg.append(outer);
            crosses.push({ scale, cx, cy });
          }
        }

        // Cursor spotlight only where flagged. JS sets target scale/opacity;
        // CSS transitions smooth it. rAF-throttled against pointer floods.
        if (grid.hasAttribute('data-cross-interactive') && finePointer) {
          const maxR = 180;
          const maxScale = 2.4;
          let queued = false;
          let mx = -9999;
          let my = -9999;
          const paint = () => {
            queued = false;
            const rect = svg.getBoundingClientRect();
            const px = ((mx - rect.left) / rect.width) * (cols * spacing);
            const py = ((my - rect.top) / rect.height) * (rows * spacing);
            for (const c of crosses) {
              const d = Math.hypot(px - c.cx, py - c.cy);
              if (d < maxR) {
                const f = Math.pow(1 - d / maxR, 0.7);
                c.scale.style.transform = `scale(${1 + f * (maxScale - 1)})`;
                c.scale.style.opacity = String(0.14 + f * 0.8);
              } else {
                c.scale.style.transform = '';
                c.scale.style.opacity = '';
              }
            }
          };
          const section = grid.closest('section') ?? grid;
          section.addEventListener('pointermove', (e) => {
            mx = (e as PointerEvent).clientX;
            my = (e as PointerEvent).clientY;
            if (!queued) {
              queued = true;
              requestAnimationFrame(paint);
            }
          });
          section.addEventListener('pointerleave', () => {
            for (const c of crosses) {
              c.scale.style.transform = '';
              c.scale.style.opacity = '';
            }
          });
        }
      });
    }

    // --- Mosaic image reveal (BEC-style): tiles cover the image, then
    //     dissolve away in a random stagger as the frame enters view. ---
    document.querySelectorAll<HTMLElement>('[data-mosaic]').forEach((grid) => {
      const tiles = grid.children;
      gsap.set(tiles, { autoAlpha: 1 });
      gsap.to(tiles, {
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power1.out',
        stagger: { each: 0.018, from: 'random', grid: 'auto' },
        scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
      });
    });

    // --- Image frames: clip reveal from bottom as they enter ---
    gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach((frame) => {
      gsap.from(frame, {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: frame, start: 'top 90%', once: true },
      });
    });

    // --- Schematic draw-lines ---
    gsap.utils.toArray<HTMLElement>('[data-draw-line]').forEach((el) => {
      gsap.fromTo(
        el,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 45%', scrub: true },
        }
      );
    });

    // --- Section blocks: one soft rise per block ---
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 26,
        opacity: 0,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // --- Card groups: batched stagger ---
    const cards = gsap.utils.toArray<HTMLElement>('[data-reveal-card]');
    if (cards.length > 0) {
      gsap.set(cards, { y: 28, opacity: 0 });
      ScrollTrigger.batch(cards, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.08,
            clearProps: 'opacity,transform',
          }),
      });
    }

    // Cleanup when conditions flip (e.g. viewport crosses 768px)
    return () => {
      splits.forEach((s) => s.revert());
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }
);
