const shared = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Sondering: borehole log through soil layers, read out with a loupe. */
function IconDiagnose() {
  return (
    <svg {...shared}>
      <line x1="12" y1="6" x2="12" y2="26" strokeDasharray="1.5 3" />
      <line x1="8" y1="12" x2="16" y2="12" strokeOpacity="0.5" />
      <line x1="8" y1="17" x2="16" y2="17" strokeOpacity="0.5" />
      <line x1="8" y1="22" x2="16" y2="22" strokeOpacity="0.5" />
      <circle cx="21" cy="10" r="4" />
      <line x1="24" y1="13" x2="27" y2="16" />
    </svg>
  );
}

/** Intake form: clipboard with an income/situation checklist. */
function IconIntake() {
  return (
    <svg {...shared}>
      <rect x="8" y="6" width="16" height="21" rx="1" />
      <rect x="12" y="4" width="8" height="4" rx="1" />
      <rect x="11" y="13" width="3" height="3" />
      <line x1="17" y1="14.5" x2="22" y2="14.5" strokeOpacity="0.6" />
      <path d="M11 20l1.5 1.5L15 18.5" />
      <line x1="17" y1="20" x2="22" y2="20" strokeOpacity="0.6" />
    </svg>
  );
}

/** Consensus row: shared-foundation houses, tracked to agreement. */
function IconCoordination() {
  return (
    <svg {...shared}>
      <line x1="4" y1="24" x2="28" y2="24" strokeOpacity="0.5" />
      {[6, 15, 24].map((x, i) => (
        <g key={x}>
          <polygon points={`${x - 4},16 ${x},11 ${x + 4},16 ${x + 4},24 ${x - 4},24`} />
          {i < 2 && <path d={`M${x - 2} 20l1.3 1.3L${x + 2.3} 18`} strokeWidth="1.25" />}
        </g>
      ))}
    </svg>
  );
}

/** Engineer's approval stamp for the selected quote. */
function IconOfferte() {
  return (
    <svg {...shared}>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="12" strokeDasharray="1.2 3" strokeOpacity="0.5" />
      <path d="M11.5 16.5l3 3 6-6.5" />
    </svg>
  );
}

/** Financing route, framed like a drawing detail callout. */
function IconFinanciering() {
  return (
    <svg {...shared}>
      <path d="M8 6h-2v6M24 6h2v6M8 26h-2v-6M24 26h2v-6" />
      <path d="M13 12c0-1.7 1.5-3 3.4-3s3.4 1.1 3.4 2.4c0 3-6.8 2-6.8 5.2 0 1.3 1.5 2.4 3.4 2.4s3.4-1.3 3.4-3" strokeOpacity="0.9" />
      <line x1="16" y1="7.5" x2="16" y2="9" />
      <line x1="16" y1="19.5" x2="16" y2="21" />
    </svg>
  );
}

/** Screw-pile rig lowering the new foundation element into the soil. */
function IconUitvoering() {
  return (
    <svg {...shared}>
      <line x1="10" y1="4" x2="10" y2="24" />
      <rect x="7" y="10" width="6" height="4" />
      <line x1="18" y1="24" x2="18" y2="16" />
      <path d="M15.5 16h5l-2.5 4z" />
      <line x1="4" y1="26" x2="28" y2="26" strokeOpacity="0.5" />
      <line x1="18" y1="26" x2="18" y2="29" strokeOpacity="0.6" />
    </svg>
  );
}

export const STEP_ICONS = {
  diagnose: IconDiagnose,
  intake: IconIntake,
  coordination: IconCoordination,
  offerte: IconOfferte,
  financiering: IconFinanciering,
  uitvoering: IconUitvoering,
} as const;

export type StepIconName = keyof typeof STEP_ICONS;
