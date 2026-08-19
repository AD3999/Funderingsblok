export const HOUSES = [
  { status: "sage", pile: "new" },
  { status: "sage", pile: "new" },
  { status: "ochre", pile: "mixed" },
  { status: "steel", pile: "old" },
  { status: "brick", pile: "old" },
] as const;

export const STATUS_HEX: Record<string, string> = {
  sage: "#6e9b7a",
  ochre: "#d89b3c",
  steel: "#5fa8c9",
  brick: "#c1543a",
};

export const PALETTE = {
  navy: "#0e1a26",
  panel: "#132538",
  panel2: "#17304a",
  steel: "#5fa8c9",
};
