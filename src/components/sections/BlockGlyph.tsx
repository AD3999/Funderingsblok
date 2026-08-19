const HOUSES = [
  { status: "sage" as const, label: "Akkoord" },
  { status: "sage" as const, label: "Akkoord" },
  { status: "ochre" as const, label: "In overleg" },
  { status: "steel" as const, label: "Diagnose" },
  { status: "brick" as const, label: "Niet akkoord" },
];

const STATUS_FILL: Record<string, string> = {
  sage: "var(--color-sage)",
  ochre: "var(--color-ochre)",
  steel: "var(--color-steel)",
  brick: "var(--color-brick)",
};

/**
 * Static blueprint-style poster of the row-house / shared-foundation motif.
 * Serves as the Phase-2 hero visual and the reduced-motion / no-WebGL
 * fallback once the Phase-4 3D scene replaces it in motion contexts.
 */
export function BlockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 220"
      role="img"
      aria-label="Rij huizen op een gedeelde fundering, elk met een eigen consensusstatus"
      className={className}
    >
      <line
        x1="10"
        y1="190"
        x2="490"
        y2="190"
        stroke="var(--color-panel-2)"
        strokeWidth="6"
      />
      {HOUSES.map((house, i) => {
        const x = 30 + i * 95;
        return (
          <g key={i}>
            <polygon
              points={`${x},70 ${x + 40},30 ${x + 80},70 ${x + 80},150 ${x},150`}
              fill="var(--color-panel)"
              stroke="var(--color-steel)"
              strokeOpacity="0.4"
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
            <rect
              x={x}
              y={150}
              width={80}
              height={40}
              fill={STATUS_FILL[house.status]}
              fillOpacity="0.85"
            />
          </g>
        );
      })}
    </svg>
  );
}
