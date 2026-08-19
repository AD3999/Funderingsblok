"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const FAR_HOUSES = [6, 5, 7, 4.5, 6.5, 5.5, 7.5, 5, 6, 4.5];
const NEAR_HOUSES = [
  { w: 11, h: 9 },
  { w: 9, h: 7.5 },
  { w: 12, h: 10 },
  { w: 8.5, h: 7 },
  { w: 10.5, h: 8.5 },
  { w: 9.5, h: 8 },
];

function Skyline({
  houses,
  className,
}: {
  houses: { w: number; h: number }[];
  className?: string;
}) {
  const offsets = houses.reduce<number[]>((acc, h, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + houses[i - 1].w);
    return acc;
  }, []);

  return (
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      {houses.map((h, i) => {
        const rectX = offsets[i];
        return (
          <g key={i}>
            <polygon
              points={`${rectX},${20 - h.h * 0.55} ${rectX + h.w / 2},${20 - h.h} ${rectX + h.w},${20 - h.h * 0.55} ${rectX + h.w},20 ${rectX},20`}
            />
            <rect
              x={rectX + h.w * 0.35}
              y={20 - h.h * 0.35}
              width={h.w * 0.14}
              height={h.h * 0.22}
              className="fill-navy"
            />
          </g>
        );
      })}
    </svg>
  );
}

export function HeroBackdrop() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const farY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 60]);
  const nearY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 140]);
  const glowY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 30]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-navy) 0%, color-mix(in srgb, var(--color-steel) 22%, var(--color-navy)) 55%, var(--color-navy) 100%)",
        }}
      />
      {/* work-light glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-0 left-1/2 h-[60%] w-[140%] -translate-x-1/2 rounded-[100%] opacity-40 blur-3xl"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-ochre) 45%, transparent) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* far skyline */}
      <motion.div style={{ y: farY }} className="absolute inset-x-0 bottom-0 h-[45%] opacity-30">
        <Skyline houses={FAR_HOUSES.map((h) => ({ w: h + 3, h }))} className="h-full w-full fill-steel" />
      </motion.div>

      {/* near skyline */}
      <motion.div style={{ y: nearY }} className="absolute inset-x-0 bottom-0 h-[62%]">
        <Skyline houses={NEAR_HOUSES} className="h-full w-full fill-panel-2" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-steel/25" />
      </motion.div>

      {/* mist / contrast scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--color-navy) 55%, transparent) 0%, transparent 30%, transparent 55%, color-mix(in srgb, var(--color-navy) 92%, transparent) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-navy/25" />
    </div>
  );
}
