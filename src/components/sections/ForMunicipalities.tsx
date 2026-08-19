import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  {
    title: "Geen spreadsheets en losse mailwisseling meer",
    body: "Eén dossier per hersteleenheid: wie is geïnformeerd, wie heeft ingetekend, wie twijfelt nog. Niets raakt zoek tussen procesbegeleiders.",
  },
  {
    title: "Draagvlak zichtbaar, niet aangenomen",
    body: "Het consensusdashboard toont per eigenaar de status in real time — nodig om te weten wanneer een blok daadwerkelijk klaar is voor offerte en uitvoering.",
  },
  {
    title: "Sluit aan op FDF en KCAF, niet ernaast",
    body: "De Financieringsnavigator wijst eigenaren naar het Fonds Duurzaam Funderingsherstel of marktfinanciering; offertes gaan alleen naar KCAF-gecertificeerde aannemers die u al kent.",
  },
];

export function ForMunicipalities() {
  return (
    <section className="border-b border-panel-2 bg-panel py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
              Voor gemeenten en procesbegeleiders
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Gebouwd voor wie de coördinatie al doet
            </h2>
            <p className="mt-4 font-sans text-foreground/70">
              Funderingsblok is geen nieuw beleidsinstrument — het is de
              werkvloer voor de procesbegeleider die vandaag al eigenaren
              belt, dossiers bijhoudt en offertes opvraagt.
            </p>
          </Reveal>
          <ul className="space-y-6">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1} as="li">
                <div className="rounded-sm border border-panel-2 bg-navy p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-foreground/70">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
