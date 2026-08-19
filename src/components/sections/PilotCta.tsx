import { Container } from "@/components/ui/Container";

export function PilotCta() {
  return (
    <section id="pilot" className="border-b border-panel-2 bg-panel py-16 sm:py-24">
      <Container className="max-w-2xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Vraag een pilot aan
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Voor gemeenten en procesbegeleiders die één hersteleenheid
            willen coördineren zonder spreadsheets. We nemen binnen twee
            werkdagen contact op.
          </p>
        </div>

        <form className="mt-10 space-y-5">
          <div>
            <label
              htmlFor="municipality"
              className="block font-mono text-xs uppercase tracking-widest text-foreground/60"
            >
              Gemeente / organisatie
            </label>
            <input
              id="municipality"
              name="municipality"
              type="text"
              required
              placeholder="Gemeente Schiedam"
              className="mt-2 w-full rounded-sm border border-panel-2 bg-navy px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact"
                className="block font-mono text-xs uppercase tracking-widest text-foreground/60"
              >
                Contactpersoon
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="Naam procesbegeleider"
                className="mt-2 w-full rounded-sm border border-panel-2 bg-navy px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs uppercase tracking-widest text-foreground/60"
              >
                E-mailadres
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="naam@gemeente.nl"
                className="mt-2 w-full rounded-sm border border-panel-2 bg-navy px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block font-mono text-xs uppercase tracking-widest text-foreground/60"
            >
              Regio
            </label>
            <input
              id="region"
              name="region"
              type="text"
              placeholder="Zuid-Holland"
              className="mt-2 w-full rounded-sm border border-panel-2 bg-navy px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-steel px-6 py-3 font-sans text-sm font-semibold text-navy transition-colors hover:bg-steel/90"
          >
            Pilot aanvragen
          </button>
        </form>
      </Container>
    </section>
  );
}
