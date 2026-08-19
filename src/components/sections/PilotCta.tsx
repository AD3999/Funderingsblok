import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PilotForm } from "./PilotForm";

export function PilotCta() {
  return (
    <section id="pilot" className="border-b border-panel-2 bg-panel/30 py-16 sm:py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Request a pilot
          </h2>
          <p className="mt-4 font-sans text-foreground/70">
            For municipalities and process coordinators who want to
            coordinate one repair unit without spreadsheets. We&apos;ll be
            in touch within two working days.
          </p>
        </Reveal>
        <PilotForm />
      </Container>
    </section>
  );
}
