import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PilotForm } from "./PilotForm";

export function PilotCta() {
  return (
    <section id="pilot" className="border-b border-panel-2 bg-panel py-16 sm:py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Vraag een pilot aan
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            Voor gemeenten en procesbegeleiders die één hersteleenheid
            willen coördineren zonder spreadsheets. We nemen binnen twee
            werkdagen contact op.
          </p>
        </Reveal>
        <PilotForm />
      </Container>
    </section>
  );
}
