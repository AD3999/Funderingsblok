"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Standard next-themes hydration guard: theme is unknown on the server,
    // so the real icon can only render after the client has mounted.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light print" : "Switch to blueprint"}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-panel-2 text-foreground/70 transition-colors hover:border-steel hover:text-foreground"
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? (
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
            fill="currentColor"
          />
        ) : (
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <line x1="12" y1="2.5" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="21.5" y2="12" />
            <line x1="5.1" y1="5.1" x2="6.9" y2="6.9" />
            <line x1="17.1" y1="17.1" x2="18.9" y2="18.9" />
            <line x1="5.1" y1="18.9" x2="6.9" y2="17.1" />
            <line x1="17.1" y1="6.9" x2="18.9" y2="5.1" />
          </g>
        )}
      </motion.svg>
    </button>
  );
}
