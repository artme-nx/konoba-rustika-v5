"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * LEVEL 00 — ROOF & FAÇADE
 * The topmost slice of the cutaway: terracotta roof tiles above, the stone
 * façade and doorway below. This stands in for a conventional photo hero —
 * the "image" is the building itself, rendered structurally.
 */
export function RoofHero() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-roof-tile]", {
          yPercent: -120,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.02,
        });
        gsap.from("[data-facade-in]", {
          autoAlpha: 0,
          y: 28,
          duration: 1,
          ease: "expo.out",
          stagger: 0.08,
          delay: 0.5,
        });
        gsap.to("[data-facade-in]", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  const tileCols = Array.from({ length: 14 });

  return (
    <section
      id="krov"
      ref={sectionRef}
      className="relative flex min-h-svh w-full flex-col overflow-hidden bg-background text-foreground"
    >
      {/* Roof tile course — terracotta scalloped strip standing in for the roofline */}
      <div className="flex h-10 w-full shrink-0 overflow-hidden md:h-14" aria-hidden>
        {tileCols.map((_, i) => (
          <div
            key={i}
            data-roof-tile
            className="h-full flex-1 border-r border-black/20"
            style={{
              background:
                "radial-gradient(ellipse 90% 140% at 50% -40%, #C1440E 0%, #9A3609 55%, #4A1904 100%)",
            }}
          />
        ))}
      </div>

      <div className="wall stone-joints relative flex flex-1 flex-col justify-center px-6 pt-20 pb-16 md:px-16 lg:px-24 xl:px-32">
        <p data-facade-in className="text-label text-ember">
          Vodice · Dalmacija
        </p>

        <h1
          data-facade-in
          className="font-display mt-4 max-w-4xl text-[clamp(2.75rem,9vw,7rem)] leading-[0.98] font-light tracking-[var(--tracking-display)]"
        >
          Konoba <em className="text-ember not-italic">Rustika</em>
        </h1>

        <p data-facade-in className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          Konoba u kamenoj uličici u Vodicama — stolovi vani, pod fenjerima.
          Jela ispod peke, riba i meso s gradela, svaki dan od 17 sati.
        </p>

        <div data-facade-in className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="tel:+385911644863"
            className="text-label bg-primary px-7 py-3.5 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)]"
          >
            Rezervacija — +385 91 1644 863
          </a>
          <a
            href="#ognjiste"
            className="text-label flex items-center gap-2 border border-[var(--button-ghost-border)] px-7 py-3.5 text-foreground transition-colors duration-(--duration-micro) hover:border-[var(--button-ghost-hover-border)]"
          >
            Pogledaj ponudu
          </a>
        </div>

        <dl
          data-facade-in
          className="text-label mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 border-t border-stone-line pt-6 text-foreground/70 sm:grid-cols-3"
        >
          <div>
            <dt className="text-foreground/45">Adresa</dt>
            <dd className="mt-1 normal-case">Ul. Kamila Pamukovića 5</dd>
          </div>
          <div>
            <dt className="text-foreground/45">Radno vrijeme</dt>
            <dd className="mt-1 normal-case">Svaki dan 17:00–01:00</dd>
          </div>
          <div>
            <dt className="text-foreground/45">Kuhinja</dt>
            <dd className="mt-1 normal-case">Riba · Roštilj · Peka</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
