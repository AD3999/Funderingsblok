import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    accent: "steel",
    body: "De gemeente registreert een hersteleenheid — de rij woningen die één fundering delen. Het platform haalt automatisch de FunderMaps-risicoklasse (A–E) per adres op.",
  },
  {
    n: "02",
    title: "Intake",
    accent: "steel",
    body: "Elke eigenaar doorloopt een intake van inkomen en situatie. De Financieringsnavigator berekent per eigenaar de route: de FDF-vangnetlening of marktfinanciering.",
  },
  {
    n: "03",
    title: "Coördinatie",
    accent: "ochre",
    body: "Elke eigenaar zet een status: akkoord, in overleg of niet akkoord. Een live dashboard toont het blok in real time op weg naar 100% draagvlak.",
  },
  {
    n: "04",
    title: "Offertes",
    accent: "steel",
    body: "Zodra het blok akkoord is, vraagt het platform offertes op bij KCAF-gecertificeerde aannemers. Het blok vergelijkt en kiest gezamenlijk.",
  },
  {
    n: "05",
    title: "Financiering",
    accent: "ochre",
    body: "Elke eigenaar vraagt via zijn eigen route financiering aan — FDF of markt — parallel gevolgd tot aan goedkeuring.",
  },
  {
    n: "06",
    title: "Uitvoering",
    accent: "sage",
    body: "De aannemer voert het herstel uit voor de hele eenheid. Het blok wordt afgesloten in het landelijke herstelregister.",
  },
] as const;

const ACCENT_CLASS: Record<string, string> = {
  steel: "text-steel border-steel/40",
  ochre: "text-ochre border-ochre/40",
  sage: "text-sage border-sage/40",
};

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="border-b border-panel-2 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Van diagnose tot afgerond herstel, in zes stappen
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Eén doorlopend proces per hersteleenheid, zichtbaar voor de
            gemeente, de procesbegeleider en elke eigenaar.
          </p>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className={`rounded-sm border bg-panel p-6 ${ACCENT_CLASS[step.accent]}`}
            >
              <span className="font-mono text-xs tracking-widest opacity-70">
                {step.n}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-foreground/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
