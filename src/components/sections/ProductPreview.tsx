import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GlassReveal } from "@/components/ui/GlassReveal";

function DeviceFrame({
  title,
  sheet,
  children,
}: {
  title: string;
  sheet: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group h-full overflow-hidden rounded-md border border-panel-2/70 bg-panel/40 bg-grid-faint shadow-lg shadow-navy/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-steel/60 hover:shadow-xl hover:shadow-steel/10">
      <div className="flex items-center justify-between gap-2 border-b border-panel-2/70 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-steel/50">
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="font-mono text-xs text-foreground/50">{title}</span>
        </div>
        <span className="rounded-sm border border-steel/30 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-steel/70">
          {sheet}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Bar({ width, color }: { width: string; color: string }) {
  return <div className={`h-2 rounded-full ${color}`} style={{ width }} />;
}

export function ProductPreview() {
  return (
    <section id="preview" className="border-b border-panel-2 py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            What the process coordinator sees every day
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Three screens from the platform — consent, financing, and
            contractor selection, tracked per repair unit.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassReveal delay={0}>
            <DeviceFrame title="Consensus tracker — Block 14, Schiedam" sheet="DWG. CT-14">
              <div className="space-y-3">
                {[
                  { label: "No. 12", status: "Agreed", color: "bg-sage" },
                  { label: "No. 14", status: "Agreed", color: "bg-sage" },
                  { label: "No. 16", status: "In discussion", color: "bg-ochre" },
                  { label: "No. 18", status: "No intake yet", color: "bg-steel" },
                  { label: "No. 20", status: "Not agreed", color: "bg-brick" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between font-mono text-xs text-foreground/70"
                  >
                    <span>{row.label}</span>
                    <span className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${row.color}`} />
                      {row.status}
                    </span>
                  </div>
                ))}
                <div className="pt-2 font-mono text-xs text-steel">
                  3 / 5 toward 100% consensus
                </div>
              </div>
            </DeviceFrame>
          </GlassReveal>

          <GlassReveal delay={0.1}>
            <DeviceFrame title="Financing Navigator — Owner No. 16" sheet="DWG. FN-16">
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs text-foreground/50">
                    Estimated repair budget
                  </p>
                  <Bar width="90%" color="bg-panel-2" />
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/50">
                    Own funds
                  </p>
                  <Bar width="20%" color="bg-steel" />
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/50">
                    FDF safety-net loan (recommended)
                  </p>
                  <Bar width="70%" color="bg-sage" />
                </div>
                <p className="pt-1 font-mono text-xs text-ochre">
                  Route: FDF — income test required
                </p>
              </div>
            </DeviceFrame>
          </GlassReveal>

          <GlassReveal delay={0.2}>
            <DeviceFrame title="Quote comparison — Block 14" sheet="DWG. QC-14">
              <div className="space-y-3">
                {[
                  { label: "Contractor A — KCAF", price: "€478,000", pick: true },
                  { label: "Contractor B — KCAF", price: "€512,500", pick: false },
                  { label: "Contractor C — KCAF", price: "€495,000", pick: false },
                ].map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between rounded-sm border px-3 py-2 font-mono text-xs ${
                      row.pick
                        ? "border-sage/50 text-sage"
                        : "border-panel-2 text-foreground/60"
                    }`}
                  >
                    <span>{row.label}</span>
                    <span>{row.price}</span>
                  </div>
                ))}
                <p className="pt-1 font-mono text-xs text-foreground/50">
                  Chosen jointly by 5/5 owners
                </p>
              </div>
            </DeviceFrame>
          </GlassReveal>
        </div>
      </Container>
    </section>
  );
}
