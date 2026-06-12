"use client";
// ============================================
// SmoothScroll Provider — Lenis + GSAP sync
// ============================================
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<ReturnType<typeof useLenis> | null>(null);

  useEffect(() => {
    // Sync GSAP ticker with Lenis for perfect ScrollTrigger alignment
    function update(time: number) {
      lenisRef.current?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.8,
      }}
    >
      {children}
    </ReactLenis>
  );
}
