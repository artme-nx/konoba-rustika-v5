"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeamDivider } from "./beam-divider";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    quote:
      "Osjećaš se kao dio obitelji — domaćini vas dočekaju osobno i pobrinu se da odete siti.",
    meta: "Gost, Google recenzija",
  },
  {
    quote:
      "Izdašne porcije, svježa riba i meso svaki dan, te kućno vino koje se pamti.",
    meta: "Gost, TripAdvisor",
  },
  {
    quote: "Topla, autentična konoba — pravi dalmatinski ugođaj, bez kompromisa.",
    meta: "Gost, TripAdvisor",
  },
];

/**
 * LEVEL 04 — DVORIŠTE (courtyard / open-air terrace)
 * The cutaway "opens up" here — no roofline overhead, textured ground
 * plane below, review plaques standing like garden signage.
 */
export function Courtyard() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-plaque]", {
          autoAlpha: 0,
          y: 24,
          rotate: -1.5,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <BeamDivider levelNumber="04" label="Dvorište" />
      <section
        id="dvoriste"
        ref={sectionRef}
        className="wall stone-joints w-full px-6 py-20 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-label text-ember">Razina 04 — Vanjska terasa</p>
          <h2 className="font-display mt-3 text-4xl leading-tight font-light md:text-5xl">
            Večeri pod vodičkim nebom
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/75">
            Ocjena 4,6/5 na Googleu i preko 500 recenzija na TripAdvisoru —
            gosti se najčešće vraćaju zbog gostoljubivosti i punog tanjura.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <blockquote
              data-plaque
              key={i}
              className="border border-stone-line bg-card/60 p-6"
              style={{ transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.6deg)" }}
            >
              <p className="font-display text-lg leading-snug font-light text-foreground italic">
                “{r.quote}”
              </p>
              <cite className="text-label mt-4 block not-italic text-foreground/45">{r.meta}</cite>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
