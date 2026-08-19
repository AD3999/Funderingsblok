"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MotionA } from "@/components/ui/MotionPress";

const LINKS = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#municipalities", label: "For municipalities" },
  { href: "#preview", label: "Product" },
];

function Mark() {
  return (
    <svg viewBox="0 0 28 24" className="h-5 w-6 text-steel">
      <polygon
        points="4,14 9,7 14,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="7.2" y="14" width="3.6" height="7" fill="currentColor" />
      <line x1="1" y1="21" x2="27" y2="21" stroke="currentColor" strokeWidth="1.6" />
      <polygon
        points="16,14 21,7 26,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-panel-2 bg-navy/75 backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground">
            Funderingsblok
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MotionA
            href="#pilot"
            className="hidden rounded-sm bg-steel px-4 py-2 font-sans text-sm font-semibold text-navy transition-colors hover:bg-steel/90 sm:inline-block"
          >
            Request a pilot
          </MotionA>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-panel-2 text-foreground/70 md:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4">
              {menuOpen ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-panel-2 bg-navy/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-2 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground/70 hover:bg-panel"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pilot"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-sm bg-steel px-4 py-2.5 text-center font-sans text-sm font-semibold text-navy"
              >
                Request a pilot
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
