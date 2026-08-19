import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    value: "425.000+",
    label: "gebouwen met funderingsschade of einde levensduur voor 2035",
  },
  {
    value: "€54 mrd",
    label: "potentiële nationale herstelkosten",
  },
  {
    value: "~1.000 / jaar",
    label: "woningen daadwerkelijk hersteld, tegen een behoefte van 7.500–25.000",
  },
  {
    value: "100%",
    label: "van de eigenaren in een hersteleenheid moet akkoord gaan voordat herstel kan starten",
  },
];

export function ProblemStats() {
  return (
    <section className="border-b border-panel-2 bg-panel py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Het probleem is bekend. De coördinatie niet.
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Funderingsrisico is sinds april 2026 verplicht onderdeel van
            taxaties, en wordt dat vanaf 2029 ook bij verkoop en verhuur.
            Wat ontbreekt is niet data — het is een manier om een heel
            blok eigenaren gezamenlijk tot besluitvorming te brengen.
          </p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-panel-2 bg-panel-2 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-panel p-6">
              <dt className="font-mono text-3xl font-semibold text-steel">
                {stat.value}
              </dt>
              <dd className="mt-2 font-sans text-sm text-foreground/70">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <p className="max-w-md border-t border-dashed border-steel/30 pt-3 text-center font-mono text-sm text-foreground/60">
            <span className="text-steel">€92.000</span> gemiddeld herstel per
            woning — 75.000+ eigenaren kunnen dit niet direct betalen, 25.000+
            kunnen het niet verantwoord lenen.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
