"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type MotionAProps = ComponentProps<typeof motion.a>;

/** Anchor with a small press/hover response, no-op under reduced motion. */
export function MotionA({ children, ...props }: MotionAProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

type MotionButtonProps = ComponentProps<typeof motion.button>;

export function MotionButton({ children, ...props }: MotionButtonProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.button
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
