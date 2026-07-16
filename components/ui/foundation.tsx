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
              Konoba u kamenoj uličici u Vodicama — jela ispod peke, riba i meso
              s gradela, svaki dan od 17 do 01.
            </p>
          </div>

          <div>
            <p className="text-label text-foreground/45">Kontakt</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/75">
              <a href="tel:+385911644863" className="transition-colors hover:text-ember">
                +385 91 1644 863
              </a>
              <a href="tel:+385955052887" className="transition-colors hover:text-ember">
                +385 95 5052 887
              </a>
              <a
                href="mailto:konoba.rustika@gmail.com"
                className="transition-colors hover:text-ember"
              >
                konoba.rustika@gmail.com
              </a>
              <p>Ul. Kamila Pamukovića 5, 22211 Vodice</p>
            </div>
          </div>

          <div>
            <p className="text-label text-foreground/45">Radno vrijeme</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/75">
              <p>Ponedjeljak – Nedjelja</p>
              <p>17:00 – 01:00</p>
            </div>
          </div>
        </div>

        <div className="text-label mt-8 flex flex-col gap-3 text-foreground/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Konoba Rustika — Vodice, Dalmacija</span>
          <span>Ispod peke · S gradela · Riba · Vino kuće</span>
        </div>
      </footer>
    </>
  );
}
