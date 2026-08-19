import { Container } from "@/components/ui/Container";

function DeviceFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-panel-2 bg-panel">
      <div className="flex items-center gap-2 border-b border-panel-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-brick/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ochre/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-sage/60" />
        <span className="ml-2 font-mono text-xs text-foreground/50">
          {title}
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
    <section className="border-b border-panel-2 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Wat de procesbegeleider dagelijks ziet
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Drie schermen uit het platform — draagvlak, financiering en
            aannemerskeuze, per hersteleenheid bijgehouden.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <DeviceFrame title="Consensustracker — Blok 14, Schiedam">
            <div className="space-y-3">
              {[
                { label: "Nr. 12", status: "Akkoord", color: "bg-sage" },
                { label: "Nr. 14", status: "Akkoord", color: "bg-sage" },
                { label: "Nr. 16", status: "In overleg", color: "bg-ochre" },
                { label: "Nr. 18", status: "Nog geen intake", color: "bg-steel" },
                { label: "Nr. 20", status: "Niet akkoord", color: "bg-brick" },
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
                3 / 5 op weg naar 100% draagvlak
              </div>
            </div>
          </DeviceFrame>

          <DeviceFrame title="Financieringsnavigator — Eigenaar Nr. 16">
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs text-foreground/50">
                  Geschat herstelbudget
                </p>
                <Bar width="90%" color="bg-panel-2" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/50">
                  Eigen middelen
                </p>
                <Bar width="20%" color="bg-steel" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/50">
                  FDF-vangnetlening (geadviseerd)
                </p>
                <Bar width="70%" color="bg-sage" />
              </div>
              <p className="pt-1 font-mono text-xs text-ochre">
                Route: FDF — inkomenstoets vereist
              </p>
            </div>
          </DeviceFrame>

          <DeviceFrame title="Offertevergelijking — Blok 14">
            <div className="space-y-3">
              {[
                { label: "Aannemer A — KCAF", price: "€478.000", pick: true },
                { label: "Aannemer B — KCAF", price: "€512.500", pick: false },
                { label: "Aannemer C — KCAF", price: "€495.000", pick: false },
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
                Gezamenlijk gekozen door 5/5 eigenaren
              </p>
            </div>
          </DeviceFrame>
        </div>
      </Container>
    </section>
  );
}
