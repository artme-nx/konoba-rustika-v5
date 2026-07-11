type BeamDividerProps = {
  label?: string;
  levelNumber?: string;
};

/**
 * A thick, wood-grained horizontal beam — the structural divider between
 * two "levels" of the building cross-section. Carries a small architectural
 * level tag, like a floor label on a cutaway elevation drawing.
 */
export function BeamDivider({ label, levelNumber }: BeamDividerProps) {
  return (
    <div className="beam" data-beam aria-hidden={!label}>
      {label ? (
        <span className="text-label absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 whitespace-nowrap text-foreground/85">
          {levelNumber ? <span className="text-ember">{levelNumber}</span> : null}
          <span>{label}</span>
        </span>
      ) : null}
    </div>
  );
}
