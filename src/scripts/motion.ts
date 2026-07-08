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

    // --- Display headings: character rise, masked by lines ---
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
