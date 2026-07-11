import { BeamDivider } from "./beam-divider";

/**
 * LEVEL 05 — TEMELJI (stone foundation)
 * The base of the cross-section: heaviest, plainest stone course, carrying
 * the load of everything built above it — contact, address, hours.
 */
export function Foundation() {
  return (
    <>
      <BeamDivider levelNumber="T" label="Temelji" />
      <footer
        id="temelji"
        className="w-full px-6 pt-16 pb-10 text-foreground md:px-16 lg:px-24 xl:px-32"
        style={{
          background:
            "linear-gradient(180deg, #14100C 0%, #0E0B08 100%)",
        }}
      >
        <div className="grid gap-12 border-b border-stone-line pb-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-light">
              Konoba <em className="text-ember not-italic">Rustika</em>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              Obiteljska konoba u staroj kamenoj kući u srcu Vodica — svježa
              riba, roštilj, peka i domaće vino, svaki dan od 16 do 24h.
            </p>
          </div>

          <div>
            <p className="text-label text-foreground/45">Kontakt</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/75">
              <a href="tel:+385921670225" className="transition-colors hover:text-ember">
                +385 92 167 0225
              </a>
              <p>Ul. Kamila Pamukovića 5, 22211 Vodice</p>
            </div>
          </div>

          <div>
            <p className="text-label text-foreground/45">Radno vrijeme</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/75">
              <p>Ponedjeljak – Nedjelja</p>
              <p>16:00 – 24:00</p>
            </div>
          </div>
        </div>

        <div className="text-label mt-8 flex flex-col gap-3 text-foreground/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Konoba Rustika — Vodice, Dalmacija</span>
          <span>Kamena kuća · Prizemlje · Podrum · Dvorište</span>
        </div>
      </footer>
    </>
  );
}
