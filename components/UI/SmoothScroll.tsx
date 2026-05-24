"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePreloader } from "./PreloaderContext";

export default function SmoothScroll() {
  const { isPreloading } = usePreloader();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });

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
        lenisRef.current = null;
      }
    };
    media.addEventListener("change", onReducedMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      media.removeEventListener("change", onReducedMotionChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isPreloading) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    } else {
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    }
  }, [isPreloading]);

  return null;
}
