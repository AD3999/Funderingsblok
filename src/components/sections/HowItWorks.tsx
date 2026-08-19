import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const StepsScroller = dynamic(() =>
  import("./StepsScroller").then((mod) => mod.StepsScroller),
);

export const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    icon: "diagnose",
    accent: "steel",
    body: "De gemeente registreert een hersteleenheid — de rij woningen die één fundering delen. Het platform haalt automatisch de FunderMaps-risicoklasse (A–E) per adres op.",
  },
  {
    n: "02",
    title: "Intake",
    icon: "intake",
    accent: "steel",
    body: "Elke eigenaar doorloopt een intake van inkomen en situatie. De Financieringsnavigator berekent per eigenaar de route: de FDF-vangnetlening of marktfinanciering.",
  },
  {
    n: "03",
    title: "Coördinatie",
    icon: "coordination",
    accent: "ochre",
    body: "Elke eigenaar zet een status: akkoord, in overleg of niet akkoord. Een live dashboard toont het blok in real time op weg naar 100% draagvlak.",
  },
  {
    n: "04",
    title: "Offertes",
    icon: "offerte",
    accent: "steel",
    body: "Zodra het blok akkoord is, vraagt het platform offertes op bij KCAF-gecertificeerde aannemers. Het blok vergelijkt en kiest gezamenlijk.",
  },
  {
    n: "05",
    title: "Financiering",
    icon: "financiering",
    accent: "ochre",
    body: "Elke eigenaar vraagt via zijn eigen route financiering aan — FDF of markt — parallel gevolgd tot aan goedkeuring.",
  },
  {
    n: "06",
    title: "Uitvoering",
    icon: "uitvoering",
    accent: "sage",
    body: "De aannemer voert het herstel uit voor de hele eenheid. Het blok wordt afgesloten in het landelijke herstelregister.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="border-b border-panel-2 py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Van diagnose tot afgerond herstel, in zes stappen
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Eén doorlopend proces per hersteleenheid, zichtbaar voor de
            gemeente, de procesbegeleider en elke eigenaar.
          </p>
        </Reveal>
        <StepsScroller />
      </Container>
    </section>
  );
}
