import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MotionA } from "@/components/ui/MotionPress";
import { BlockSceneLoader } from "@/components/three/BlockSceneLoader";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-panel-2 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
            Coördinatieplatform funderingsherstel
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Eén blok, één fundering, één besluit.
          </h1>
          <p className="max-w-2xl text-balance font-sans text-base text-foreground/70 sm:text-lg">
            Een fundering onder een rij woningen wordt pas hersteld als
            iedere eigenaar akkoord is. Funderingsblok vervangt de
            spreadsheets en e-mailwisseling van de procesbegeleider door
            één platform voor draagvlak, financiering en aannemerskeuze —
            per hersteleenheid.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MotionA
              href="#pilot"
              className="rounded-sm bg-steel px-6 py-3 font-sans text-sm font-semibold text-navy transition-colors hover:bg-steel/90"
            >
              Vraag een pilot aan
            </MotionA>
            <MotionA
              href="#hoe-het-werkt"
              className="rounded-sm border border-panel-2 px-6 py-3 font-sans text-sm font-semibold text-foreground/80 transition-colors hover:border-steel hover:text-foreground"
            >
              Bekijk hoe het werkt
            </MotionA>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-4 w-full max-w-2xl">
          <BlockSceneLoader className="aspect-[2/1] w-full" />
        </Reveal>
      </Container>
    </section>
  );
}
