"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeamDivider } from "./beam-divider";

gsap.registerPlugin(ScrollTrigger);

const DISHES = [
  {
    group: "S mora",
    items: [
      { name: "Tuna steak", note: "s blitvom i krumpirom" },
      { name: "Riblja plata za dvoje", note: "izbor ribe s gradela, za podijeliti" },
      { name: "Školjke i lignje", note: "lignje s gradela ili fritane, školjke na buzaru" },
      { name: "Tjestenina s plodovima mora", note: "gosti je izdvajaju u recenzijama" },
    ],
  },
  {
    group: "S gradela i ispod peke",
    items: [
      { name: "Ćevapi s lepinjom", note: "najčešće naručeno jelo kuće" },
      { name: "Mješano meso s gradela", note: "za veći apetit" },
      { name: "Odrezak s gradela", note: "uz domaći krumpir" },
      { name: "Ispod peke", note: "hobotnica, teletina ili janjetina — najava dan ranije" },
    ],
  },
];

/**
 * LEVEL 02 — OGNJIŠTE (hearth / open kitchen)
 * The structural "core" of the cutaway: an ember-lit firebox at centre with
 * the menu arranged around it like dishes set near the fire.
 */
export function Hearth() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-dish]", {
          autoAlpha: 0,
          y: 18,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
        });
        gsap.to("[data-ember-glow]", {
          opacity: 0.55,
          scale: 1.15,
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <BeamDivider levelNumber="02" label="Gradele i peka" />
      <section id="ognjiste" ref={sectionRef} className="w-full bg-background px-6 py-20 text-foreground md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center text-center">
          <div
            data-ember-glow
            aria-hidden
            className="h-16 w-16 rounded-full opacity-80"
            style={{
              background: "radial-gradient(circle, #C1440E 0%, #9A3609 55%, transparent 75%)",
              filter: "blur(2px)",
            }}
          />
          <p className="text-label mt-6 text-ember">Razina 02 — Kuhinja</p>
          <h2 className="font-display mt-3 text-4xl leading-tight font-light md:text-5xl">
            Iz vatre, ravno na stol
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/75">
            Riba i meso stižu svježi svaki dan. Ono što ne ide na roštilj,
            ide ispod peke — polako, kako Dalmacija odvajkada priprema
            najbolje zalogaje.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {DISHES.map((group) => (
            <div key={group.group}>
              <h3 className="text-label border-b border-stone-line pb-3 text-foreground/60">
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                {group.items.map((item) => (
                  <li data-dish key={item.name} className="flex items-start gap-4">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <div>
                      <p className="font-display text-lg font-normal">{item.name}</p>
                      <p className="mt-0.5 text-sm text-foreground/60">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-label mt-14 text-center text-foreground/45">
          Za jela ispod peke javite se dan ranije — kuhaju se satima. Jelovnik i
          cijene na upit na +385 91 1644 863
        </p>
      </section>
    </>
  );
}
