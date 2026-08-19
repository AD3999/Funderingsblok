"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STEP_ICONS } from "./StepIcon";
import { STEPS } from "./HowItWorks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACCENT_VAR: Record<string, string> = {
  steel: "var(--color-steel)",
  ochre: "var(--color-ochre)",
  sage: "var(--color-sage)",
};

export function StepsScroller() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = cardRefs.current.filter(Boolean) as HTMLLIElement[];

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: "top top+=80",
          end: "+=140%",
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          onUpdate(self) {
            const active = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length),
            );
            cards.forEach((card, i) => {
              const accent = card.dataset.accent ?? "steel";
              gsap.to(card, {
                opacity: i === active ? 1 : 0.4,
                scale: i === active ? 1 : 0.96,
                borderColor: i === active ? ACCENT_VAR[accent] : "var(--color-panel-2)",
                duration: 0.3,
                overwrite: true,
              });
            });
          },
        });

        return () => undefined;
      });

      return () => mm.revert();
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef} className="mt-12">
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <li
              key={step.n}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-accent={step.accent}
              className="rounded-sm border bg-panel p-6"
              style={{ borderColor: "var(--color-panel-2)" }}
            >
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
            </li>
          );
        })}
      </ol>
    </div>
  );
}
