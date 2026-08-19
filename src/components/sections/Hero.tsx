import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MotionA } from "@/components/ui/MotionPress";
import { BlockSceneLoader } from "@/components/three/BlockSceneLoader";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col overflow-hidden pt-16"
    >
      <HeroBackdrop />
      <Container className="flex flex-col items-center gap-10 py-20 text-center sm:py-28">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
            Foundation-repair coordination platform
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            One block, one foundation, one decision.
          </h1>
          <p className="max-w-2xl text-balance font-sans text-base text-foreground/70 sm:text-lg">
            A shared foundation under a row of houses only gets repaired once
            every owner agrees. Funderingsblok replaces the process
            coordinator&apos;s spreadsheets and email threads with one
            platform for consent, financing, and contractor selection — per
            repair unit.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MotionA
              href="#pilot"
              className="rounded-sm bg-steel px-6 py-3 font-sans text-sm font-semibold text-navy transition-colors hover:bg-steel/90"
            >
              Request a pilot
            </MotionA>
            <MotionA
              href="#how-it-works"
              className="rounded-sm border border-panel-2 px-6 py-3 font-sans text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-colors hover:border-steel hover:text-foreground"
            >
              See how it works
            </MotionA>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-4 w-full max-w-xl">
          <div className="rounded-md border border-panel-2/70 bg-panel/40 p-3 shadow-2xl shadow-navy/40 backdrop-blur-xl sm:p-4">
            <BlockSceneLoader className="aspect-[2/1] w-full" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
