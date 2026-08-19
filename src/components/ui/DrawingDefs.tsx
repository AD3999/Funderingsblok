/**
 * Shared SVG <defs> for the site's technical-drawing motif: section-cut
 * hatch fills (soil, concrete, old timber) and the blueprint grid, rendered
 * once and referenced elsewhere via fill="url(#id)" — SVG fill/pattern
 * references resolve against the whole document, not just one <svg>.
 */
export function DrawingDefs() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute">
      <defs>
        <pattern
          id="hatch-soil"
          width="6"
          height="6"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="6" height="6" fill="var(--color-panel)" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-steel)" strokeOpacity="0.35" strokeWidth="1" />
        </pattern>

        <pattern
          id="hatch-concrete"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <rect width="8" height="8" fill="var(--color-panel-2)" />
          <circle cx="2" cy="2" r="0.7" fill="var(--color-steel)" fillOpacity="0.5" />
          <circle cx="6" cy="6" r="0.7" fill="var(--color-steel)" fillOpacity="0.5" />
          <circle cx="6" cy="1.5" r="0.5" fill="var(--color-steel)" fillOpacity="0.35" />
        </pattern>

        <pattern
          id="hatch-oldwood"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <rect width="7" height="7" fill="var(--color-panel-2)" />
          <line x1="0" y1="0" x2="7" y2="7" stroke="var(--color-brick)" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="7" y1="0" x2="0" y2="7" stroke="var(--color-brick)" strokeOpacity="0.4" strokeWidth="1" />
        </pattern>

        <pattern
          id="grid-blueprint"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="var(--color-steel)"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
      </defs>
    </svg>
  );
}
