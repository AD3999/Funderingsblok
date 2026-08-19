const HOUSES = [
  { status: "sage" as const, label: "Akkoord", pile: "new" as const },
  { status: "sage" as const, label: "Akkoord", pile: "new" as const },
  { status: "ochre" as const, label: "In overleg", pile: "mixed" as const },
  { status: "steel" as const, label: "Diagnose", pile: "old" as const },
  { status: "brick" as const, label: "Niet akkoord", pile: "old" as const },
];

const STATUS_STROKE: Record<string, string> = {
  sage: "var(--color-sage)",
  ochre: "var(--color-ochre)",
  steel: "var(--color-steel)",
  brick: "var(--color-brick)",
};

/**
 * Foundation cross-section, drawn to section-cut convention: a shared
 * strip footing in soil hatch, with each house's pile shown as either the
 * original rotting timber pile (old, cross-hatched) or the replacement
 * concrete pile (new, dot-hatched) — the literal mechanic of
 * funderingsherstel, not a decorative stand-in for it. Consent status
 * reads as a stroke color + tag on each house, independent of pile
 * material, since a house can be "akkoord" before its pile is replaced.
 */
export function BlockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 260"
      role="img"
      aria-label="Doorsnede van een rij huizen op een gedeelde fundering: bestaande houten palen worden vervangen door nieuwe betonpalen, per eigenaar met een eigen consensusstatus"
      className={className}
    >
      {/* soil below the section line */}
      <rect x="0" y="176" width="520" height="84" fill="url(#hatch-soil)" />
      {/* section-cut ground line */}
      <line x1="10" y1="176" x2="510" y2="176" stroke="var(--color-steel)" strokeOpacity="0.5" strokeWidth="1.5" />

      {HOUSES.map((house, i) => {
        const x = 30 + i * 95;
        const pileFill =
          house.pile === "old" ? "url(#hatch-oldwood)" : "url(#hatch-concrete)";
        return (
          <g key={i}>
            <polygon
              points={`${x},70 ${x + 40},30 ${x + 80},70 ${x + 80},150 ${x},150`}
              fill="var(--color-panel)"
              stroke={STATUS_STROKE[house.status]}
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <rect
              x={x + 15}
              y={95}
              width={18}
              height={28}
              fill="var(--color-navy)"
              stroke="var(--color-steel)"
              strokeOpacity="0.5"
            />
            {/* pile, in section, driven through the soil hatch */}
            <rect x={x + 32} y={150} width={16} height={70} fill={pileFill} />
            <rect
              x={x + 32}
              y={150}
              width={16}
              height={70}
              fill="none"
              stroke={STATUS_STROKE[house.status]}
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          </g>
        );
      })}

      {/* dimension line: pile depth */}
      <g stroke="var(--color-foreground)" strokeOpacity="0.35" strokeWidth="1">
        <line x1="470" y1="150" x2="470" y2="220" />
        <line x1="465" y1="150" x2="475" y2="150" />
        <line x1="465" y1="220" x2="475" y2="220" />
      </g>
      <text
        x="480"
        y="188"
        fontSize="10"
        fontFamily="var(--font-mono)"
        fill="var(--color-foreground)"
        fillOpacity="0.5"
      >
        ±9m
      </text>

      {/* leader annotation on the "in overleg" pile */}
      <g stroke="var(--color-ochre)" strokeOpacity="0.7" strokeWidth="1">
        <line x1="253" y1="170" x2="253" y2="150" />
        <line x1="253" y1="150" x2="290" y2="150" />
      </g>
      <text
        x="294"
        y="153"
        fontSize="9"
        fontFamily="var(--font-mono)"
        fill="var(--color-ochre)"
        fillOpacity="0.85"
      >
        schroefpaal Ø320mm
      </text>
    </svg>
  );
}
