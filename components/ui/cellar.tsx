"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeamDivider } from "./beam-divider";

gsap.registerPlugin(ScrollTrigger);

/**
 * LEVEL 03 — PODRUM (stone-vaulted cellar)
 * Darkest, deepest level of the cutaway — arched niches (CSS-drawn vault
 * ribs) hold the house wine and dessert, the way a real konoba cellar
 * would store bottles along a vaulted stone wall.
 */
export function Cellar() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-arch]", {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
        gsap.from("[data-arch-copy]", {
          autoAlpha: 0,
          y: 16,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.08,
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <BeamDivider levelNumber="03" label="Podrum" />
      <section
        id="podrum"
        ref={sectionRef}
        className="w-full px-6 py-20 md:px-16 lg:px-24 xl:px-32"
        style={{ background: "linear-gradient(180deg, #1B1712 0%, #120F0B 100%)" }}
      >
        <div className="text-center">
          <p className="text-label text-ember">Razina 03 — Podrum</p>
          <h2 className="font-display mt-3 text-4xl leading-tight font-light text-foreground md:text-5xl">
            Vino i desert kuće
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Vino kuće",
              text: "Domaće bijelo i crno vino kuće, uz ribu ili meso — gosti ga u recenzijama izdvajaju posebno.",
              tone: "wine",
            },
            {
              title: "Palačinke s Nutellom",
              text: "Za kraj, klasik koji naruči i pola stola — palačinke s Nutellom.",
              tone: "timber",
            },
          ].map((card) => (
            <div key={card.title} className="relative">
              {/* Arched vault niche */}
              <div
                data-arch
                aria-hidden
                className="mx-auto h-2 w-full max-w-xs rounded-t-full border-t-4 border-r-4 border-l-4"
                style={{ borderColor: card.tone === "wine" ? "#5C1A2E" : "#6B3E20" }}
              />
              <div
                data-arch-copy
                className="mx-auto -mt-1 max-w-xs border-r-4 border-l-4 px-6 py-10 text-center"
                style={{
                  borderColor: card.tone === "wine" ? "#5C1A2E" : "#6B3E20",
                  background:
                    card.tone === "wine"
                      ? "radial-gradient(ellipse at 50% 0%, rgba(92,26,46,0.35), transparent 70%)"
                      : "radial-gradient(ellipse at 50% 0%, rgba(107,62,32,0.35), transparent 70%)",
                }}
              >
                <h3 className="font-display text-2xl font-normal text-foreground">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">{card.text}</p>
              </div>
              <div
                aria-hidden
                className="mx-auto h-1 w-full max-w-xs border-r-4 border-b-4 border-l-4"
                style={{ borderColor: card.tone === "wine" ? "#5C1A2E" : "#6B3E20" }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
