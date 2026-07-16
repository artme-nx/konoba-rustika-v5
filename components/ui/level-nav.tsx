"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LEVELS = [
  { id: "krov", tag: "R", label: "Krov" },
  { id: "gostionica", tag: "01", label: "Gostionica" },
  { id: "ognjiste", tag: "02", label: "Gradele i peka" },
  { id: "podrum", tag: "03", label: "Podrum" },
  { id: "dvoriste", tag: "04", label: "Dvorište" },
  { id: "temelji", tag: "T", label: "Temelji" },
] as const;

/**
 * Replaces the conventional top navbar. Reads like an elevation drawing's
 * floor index: a fixed vertical strip of level tags running down the side
 * of the viewport on desktop, tracking which "level" of the building
 * cross-section is currently in view.
 *
 * On mobile this renders a slim top strip plus a full-screen level index
 * overlay. The overlay is a plain sibling `<div>` in this same component's
 * return (not nested inside any backdrop-blur container), so its
 * `fixed inset-0` always covers the full viewport — see the known
 * site-header/backdrop-blur containing-block bug in other builds.
 */
export function LevelNav() {
  const [active, setActive] = React.useState<string>(LEVELS[0].id);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const triggers = LEVELS.map((level) =>
      ScrollTrigger.create({
        trigger: `#${level.id}`,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: () => setActive(level.id),
        onEnterBack: () => setActive(level.id),
      })
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function goTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Desktop: fixed vertical level index, right edge of viewport */}
      <nav
        aria-label="Razine konobe"
        className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 flex-col items-end gap-1 pr-3 md:flex"
      >
        {LEVELS.map((level) => (
          <button
            key={level.id}
            onClick={() => goTo(level.id)}
            className={[
              "text-label group flex items-center gap-2 py-1.5 pl-3 transition-colors duration-(--duration-micro)",
              active === level.id ? "text-ember" : "text-foreground/50 hover:text-foreground",
            ].join(" ")}
          >
            <span className="hidden group-hover:inline">{level.label}</span>
            <span
              className={[
                "flex h-6 w-6 items-center justify-center border font-display text-[0.65rem] not-italic transition-colors duration-(--duration-micro)",
                active === level.id
                  ? "border-ember bg-ember text-background"
                  : "border-stone-line text-foreground/70",
              ].join(" ")}
            >
              {level.tag}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile: compact top strip with a level toggle */}
      <div className="fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-4 py-3 md:hidden">
        <span className="font-display text-sm tracking-[var(--tracking-display)] text-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          Konoba Rustika
        </span>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Otvori razine konobe"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center border border-stone-line bg-background/70 text-foreground"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile: full-screen level index overlay — sibling of the strip above,
          NOT a descendant of any backdrop-blur element. */}
      <div
        id="level-nav-overlay"
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-background wall stone-joints transition-opacity duration-(--duration-base) md:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Zatvori"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center border border-stone-line text-foreground"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        {LEVELS.map((level) => (
          <button
            key={level.id}
            onClick={() => goTo(level.id)}
            className="flex items-center gap-4 py-3 text-foreground"
          >
            <span className="font-display text-sm not-italic text-ember">{level.tag}</span>
            <span className="font-display text-3xl">{level.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
