"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeamDivider } from "./beam-divider";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    tag: "01",
    title: "Obiteljska kuća",
    text: "Konobu vode domaćini osobno — od nabave svježe ribe i mesa ujutro do posluge navečer.",
  },
  {
    tag: "02",
    title: "Bakine recepture",
    text: "Jela po tradicionalnim dalmatinskim receptima, onako kako se u ovoj kući kuhalo generacijama.",
  },
  {
    tag: "03",
    title: "Stara kamena kuća",
    text: "Rustični interijer stare kuće u Vodicama čuva ugođaj ribarskog i seoskog doba ovog kraja.",
  },
];

/**
 * LEVEL 01 — GOSTIONICA (ground-floor dining room)
 * Two structural bays framed by a load-bearing timber pillar, the way a
 * cutaway elevation shows a room split by its support beam.
 */
export function DiningRoom() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-pillar]", {
          autoAlpha: 0,
          y: 30,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <BeamDivider levelNumber="01" label="Gostionica" />
      <section id="gostionica" ref={sectionRef} className="wall stone-joints w-full px-6 py-20 md:px-16 lg:px-24 xl:px-32">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-0">
          <div className="md:pr-12">
            <p className="text-label text-ember">Razina 01 — Prizemlje</p>
            <h2 className="font-display mt-4 text-4xl leading-tight font-light md:text-5xl">
              Konoba kakve je nekad bilo
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75">
              Vodice imaju more restorana na rivi — Rustika je ona kuća malo
              dalje od nje, gdje se jede kao kod bake: bez žurbe, s domaćinima
              koji vas dočekaju osobno i pobrinu se da nitko ne ostane
              gladan.
            </p>
          </div>

          {/* Load-bearing timber pillar between the two bays */}
          <div
            aria-hidden
            className="hidden w-4 self-stretch md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(100deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 2px, transparent 2px, transparent 6px), linear-gradient(90deg, #8F5A2E 0%, #6B3E20 50%, #3E2515 100%)",
            }}
          />

          <div className="grid gap-8 md:pl-12">
            {PILLARS.map((p) => (
              <div key={p.tag} data-pillar className="border-l-2 border-ember/60 pl-5">
                <span className="text-label text-foreground/45">{p.tag}</span>
                <h3 className="font-display mt-1 text-xl font-normal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
