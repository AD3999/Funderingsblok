import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GlassReveal } from "@/components/ui/GlassReveal";
import { GLASS_CARD, ACCENT_HOVER } from "@/components/ui/glass";

const POINTS = [
  {
    title: "No more spreadsheets and scattered email threads",
    body: "One file per repair unit: who's been informed, who's signed on, who's still on the fence. Nothing gets lost between process coordinators.",
    accent: "steel",
  },
  {
    title: "Consent made visible, not assumed",
    body: "The consensus dashboard shows each owner's status in real time — the only way to know when a block is actually ready for quotes and execution.",
    accent: "ochre",
  },
  {
    title: "Plugs into FDF and KCAF, not around them",
    body: "The Financing Navigator routes owners to the Fonds Duurzaam Funderingsherstel or market financing; quotes go only to KCAF-certified contractors you already trust.",
    accent: "sage",
  },
];

export function ForMunicipalities() {
  return (
    <section id="municipalities" className="border-b border-panel-2 bg-panel/30 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
              For municipalities and process coordinators
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Built for whoever already does the coordinating
            </h2>
            <p className="mt-4 font-sans text-foreground/70">
              Funderingsblok isn&apos;t a new policy instrument — it&apos;s
              the workspace for the process coordinator who already calls
              owners, keeps files, and requests quotes today.
            </p>
          </Reveal>
          <ul className="space-y-6">
            {POINTS.map((point, i) => (
              <GlassReveal key={point.title} as="li" delay={i * 0.1}>
                <div className={`${GLASS_CARD} ${ACCENT_HOVER[point.accent]}`}>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-foreground/70">
                    {point.body}
                  </p>
                </div>
              </GlassReveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
