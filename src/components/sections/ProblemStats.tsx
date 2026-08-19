import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GlassReveal } from "@/components/ui/GlassReveal";
import { GLASS_CARD } from "@/components/ui/glass";

const STATS = [
  {
    value: "425,000+",
    label: "buildings with foundation damage or reaching end-of-life by 2035",
  },
  {
    value: "€54bn",
    label: "potential national repair cost",
  },
  {
    value: "~1,000/yr",
    label: "homes actually repaired, against a need of 7,500–25,000",
  },
  {
    value: "100%",
    label: "of owners in a repair unit must agree before repair can start",
  },
];

export function ProblemStats() {
  return (
    <section id="problem" className="border-b border-panel-2 bg-panel/30 py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            The problem is known. The coordination isn&apos;t.
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Foundation-risk disclosure became mandatory in property
            valuations in April 2026, and will be mandatory at sale or rent
            from 2029. What&apos;s missing isn&apos;t data — it&apos;s a way
            to bring an entire block of owners to a joint decision.
          </p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <GlassReveal key={stat.label} delay={i * 0.08}>
              <div className={GLASS_CARD}>
                <dt className="font-mono text-3xl font-semibold text-steel">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-sans text-sm text-foreground/70">
                  {stat.label}
                </dd>
              </div>
            </GlassReveal>
          ))}
        </dl>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <p className="max-w-md border-t border-dashed border-steel/30 pt-3 text-center font-mono text-sm text-foreground/60">
            <span className="text-steel">€92,000</span> average repair cost
            per home — 75,000+ owners can&apos;t pay directly, 25,000+
            can&apos;t responsibly borrow it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
