/**
 * Motion system. One idea per section, everything gated:
 *  - `motionOK` (prefers-reduced-motion: no-preference) gates ALL animation.
 *    Reduced-motion users get a fully static, fully visible page — initial
 *    states are set from JS only inside the gate, never in CSS.
 *  - `desktop` additionally gates scroll-scrubbed effects.
 * gsap.matchMedia() reverts everything automatically when conditions change.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

    // --- Hero load sequence: badge → headline → sub → CTAs → cards ---
    const heroSeq = gsap.utils.toArray<HTMLElement>('[data-hero-seq]');
    if (heroSeq.length > 0) {
      gsap.from(heroSeq, {
        y: 26,
        autoAlpha: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.11,
        delay: 0.15,
        clearProps: 'all',
      });
    }

    // --- Hero media drift: slow zoom + rise inside the fixed frame, and the
    //     content layer parting slightly faster — depth without moving the frame.
    if (desktop && document.getElementById('hero-frame')) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero-frame',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
        .to('#hero-media', { scale: 1.1, yPercent: 6, transformOrigin: 'center center', ease: 'none' }, 0)
        .to('#hero-content', { y: -48, ease: 'none' }, 0);
    }

    // --- Ambient ticker: seamless loop of the duplicated track ---
    const ticker = document.querySelector<HTMLElement>('[data-ticker]');
    if (ticker) {
      gsap.to(ticker, { xPercent: -50, ease: 'none', duration: 38, repeat: -1 });
    }

    // --- Schematic draw-lines: red line traces across as the section enters ---
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

    // --- Image parallax: images (pre-scaled 110%) drift inside their frames ---
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });

    // --- Section blocks: one soft rise per block ---
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 28,
        autoAlpha: 0,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,visibility,transform',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      });
    });

    // --- Card grids: batched stagger so rows arrive together ---
    const cards = gsap.utils.toArray<HTMLElement>('[data-reveal-card]');
    if (cards.length > 0) {
      gsap.set(cards, { y: 30, autoAlpha: 0 });
      ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.09,
            clearProps: 'opacity,visibility,transform',
          }),
      });
    }
  }
);
