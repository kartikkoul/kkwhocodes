"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onReducedMotionChange = () => {
      if (media.matches) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      }
    };
    media.addEventListener("change", onReducedMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      media.removeEventListener("change", onReducedMotionChange);
      lenis.destroy();
    };
  }, []);

  return null;
}
