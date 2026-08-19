/**
 * Fixed drawing-sheet backdrop: CAD-style grid + corner registration
 * crosshairs, like the sheet border on a technical drawing. Sits behind
 * all content so panel surfaces (opaque) simply occlude it section by
 * section.
 */
export function BlueprintBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <svg width="100%" height="100%" className="h-full w-full">
        <rect width="100%" height="100%" fill="url(#grid-blueprint)" />
      </svg>
      {[
        "left-3 top-3",
        "right-3 top-3",
        "left-3 bottom-3",
        "right-3 bottom-3",
      ].map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 20 20"
          className={`absolute ${pos} h-4 w-4 text-steel/25`}
        >
          <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </div>
  );
}
