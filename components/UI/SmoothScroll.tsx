"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  getSectionIdFromHref,
  scrollToSection,
} from "@/lib/scroll";
import LenisContext from "./LenisContext";
import { usePreloader } from "./PreloaderContext";

export default function SmoothScroll({ children }: { children?: ReactNode }) {
  const { isPreloading } = usePreloader();
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: false,
    });
    lenisRef.current = lenis;
    setLenis(lenis);
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });
    document.documentElement.classList.add("lenis-active");

    let rafId = 0;
    const raf = (time: number) => {
      const instance = lenisRef.current;
      if (instance && !instance.isStopped) {
        instance.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onReducedMotionChange = () => {
      if (media.matches) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        lenisRef.current = null;
        setLenis(null);
        document.documentElement.classList.remove("lenis-active");
      }
    };
    media.addEventListener("change", onReducedMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      media.removeEventListener("change", onReducedMotionChange);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
      document.documentElement.classList.remove("lenis-active");
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

  useEffect(() => {
    if (isPreloading) return;

    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href*='#']",
      );
      if (!anchor) return;

      const sectionId = getSectionIdFromHref(anchor.href);
      if (!sectionId || !document.getElementById(sectionId)) return;

      event.preventDefault();
      scrollToSection(lenisRef.current, sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, [isPreloading]);

  useEffect(() => {
    if (isPreloading) return;

    const sectionId = window.location.hash.replace(/^#/, "");
    if (!sectionId || !document.getElementById(sectionId)) return;

    const frame = requestAnimationFrame(() => {
      scrollToSection(lenisRef.current, sectionId);
    });

    return () => cancelAnimationFrame(frame);
  }, [isPreloading]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
