import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GlassReveal } from "@/components/ui/GlassReveal";
import { GLASS_CARD, ACCENT_HOVER } from "@/components/ui/glass";
import { STEP_ICONS } from "./StepIcon";

export const STEPS = [
  {
    n: "01",
    title: "Diagnosis",
    icon: "diagnose",
    accent: "steel",
    body: "The municipality registers a repair unit — the row of houses sharing one foundation. The platform pulls the FunderMaps risk class (A–E) per address automatically.",
  },
  {
    n: "02",
    title: "Intake",
    icon: "intake",
    accent: "steel",
    body: "Each owner completes an income and situation intake. The Financing Navigator works out their route: the FDF safety-net loan or market financing.",
  },
  {
    n: "03",
    title: "Coordination",
    icon: "coordination",
    accent: "ochre",
    body: "Each owner sets a status: agreed, in discussion, or not agreed. A live dashboard tracks the block toward 100% consensus in real time.",
  },
  {
    n: "04",
    title: "Quotes",
    icon: "offerte",
    accent: "steel",
    body: "Once the block agrees, the platform requests quotes from KCAF-certified contractors. The block compares and picks one together.",
  },
  {
    n: "05",
    title: "Financing",
    icon: "financiering",
    accent: "ochre",
    body: "Each owner applies for financing through their own route — FDF or market — tracked in parallel through to approval.",
  },
  {
    n: "06",
    title: "Execution",
    icon: "uitvoering",
    accent: "sage",
    body: "The contractor carries out the repair for the whole unit. The block is closed out in the national repair register.",
  },
] as const;

const ACCENT_VAR: Record<string, string> = {
  steel: "var(--color-steel)",
  ochre: "var(--color-ochre)",
  sage: "var(--color-sage)",
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-panel-2 py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            From diagnosis to completed repair, in six steps
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            One continuous process per repair unit, visible to the
            municipality, the process coordinator, and every owner.
          </p>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <GlassReveal key={step.n} as="li" delay={(i % 3) * 0.1}>
                <div className={`${GLASS_CARD} ${ACCENT_HOVER[step.accent]} h-full`}>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-sm border"
                    style={{ borderColor: ACCENT_VAR[step.accent], color: ACCENT_VAR[step.accent] }}
                  >
                    <Icon />
                  </span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-mono text-xs tracking-widest opacity-50">
                      {step.n}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 font-sans text-sm text-foreground/70">
                    {step.body}
                  </p>
                </div>
              </GlassReveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
