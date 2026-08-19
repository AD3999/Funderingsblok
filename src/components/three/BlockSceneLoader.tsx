"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { BlockGlyph } from "@/components/sections/BlockGlyph";

const BlockScene = dynamic(
  () => import("./BlockScene").then((mod) => mod.BlockScene),
  { ssr: false },
);

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

export function BlockSceneLoader({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const [mode, setMode] = useState<"pending" | "scene" | "poster">("pending");

  useEffect(() => {
    // One-time client-only capability check (WebGL/viewport/reduced-motion):
    // these APIs don't exist during SSR, so this can't be computed at render time.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isSmallViewport = window.matchMedia("(max-width: 639px)").matches;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(
      reduceMotion || isSmallViewport || !supportsWebGL() ? "poster" : "scene",
    );
  }, []);

  useEffect(() => {
    if (mode !== "scene") return;
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - Math.min(1, Math.max(0, rect.top / window.innerHeight));
      scrollRef.current = progress;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  return (
    <div ref={containerRef} className={className}>
      {mode === "scene" ? (
        <BlockScene animate scrollRef={scrollRef} />
      ) : (
        <BlockGlyph className="w-full text-foreground" />
      )}
    </div>
  );
}
