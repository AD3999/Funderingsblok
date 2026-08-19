"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Card-specific scroll reveal: starts as frosted drafting film (blurred,
 * dim, slightly scaled down) and comes into focus as it enters the
 * viewport — distinct from Reveal's plain fade, used for glass cards.
 */
export function GlassReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial={
        reduceMotion
          ? undefined
          : { opacity: 0, scale: 0.94, filter: "blur(14px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
