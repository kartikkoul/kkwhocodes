"use client";

import { useCallback, useEffect, useRef } from "react";
import { useLenis } from "./LenisContext";

const TRACK_INSET = 48;
const MIN_THUMB = 56;

type ScrollMetrics = {
  visible: boolean;
  thumbHeight: number;
  thumbTop: number;
};

const initialMetrics: ScrollMetrics = {
  visible: false,
  thumbHeight: MIN_THUMB,
  thumbTop: 0,
};

export default function CustomScrollbar() {
  const lenis = useLenis();
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<ScrollMetrics>(initialMetrics);

  const applyMetrics = useCallback(() => {
    const root = rootRef.current;
    const thumb = thumbRef.current;
    if (!root || !thumb) return;

    const { visible, thumbHeight, thumbTop } = metricsRef.current;
    root.style.opacity = visible ? "1" : "0";
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translate3d(0, ${thumbTop}px, 0)`;
  }, []);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight;
    const clientHeight = doc.clientHeight;
    const scrollTop = lenis ? lenis.scroll : doc.scrollTop;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      metricsRef.current = initialMetrics;
      applyMetrics();
      return;
    }

    const trackHeight = clientHeight - TRACK_INSET * 2;
    const thumbHeight = Math.max(
      MIN_THUMB,
      (clientHeight / scrollHeight) * trackHeight,
    );
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop = TRACK_INSET + (scrollTop / maxScroll) * maxThumbTop;

    metricsRef.current = {
      visible: true,
      thumbHeight,
      thumbTop,
    };
    applyMetrics();
  }, [applyMetrics, lenis]);

  useEffect(() => {
    let rafId = 0;
    const scheduleUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    scheduleUpdate();

    if (lenis) {
      lenis.on("scroll", scheduleUpdate);
    } else {
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
    }
    window.addEventListener("resize", scheduleUpdate);

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.off("scroll", scheduleUpdate);
      } else {
        window.removeEventListener("scroll", scheduleUpdate);
      }
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
    };
  }, [lenis, update]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed right-0 top-0 z-[10] hidden h-[100dvh] w-5 opacity-0 sm:block"
      aria-hidden
    >
      <div
        className="absolute right-[11px] w-px rounded-full opacity-60"
        style={{
          top: TRACK_INSET,
          bottom: TRACK_INSET,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(49, 34, 90, 0.9) 18%, rgba(89, 190, 184, 0.12) 50%, rgba(150, 85, 254, 0.2) 82%, transparent 100%)",
          boxShadow: "0 0 12px rgba(150, 85, 254, 0.15)",
        }}
      />

      <div
        ref={thumbRef}
        className="absolute right-[7px] w-[10px] will-change-transform"
        style={{
          height: MIN_THUMB,
          transform: `translate3d(0, ${TRACK_INSET}px, 0)`,
        }}
      >
        <div className="scrollbar-aurora absolute -inset-x-1 inset-y-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(150,85,254,0.55)_0%,rgba(89,190,184,0.25)_45%,transparent_72%)] blur-[7px]" />
        <div
          className="absolute inset-y-0 right-[2px] w-[5px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(89,190,184,0.95) 0%, rgba(150,85,254,0.9) 48%, rgba(0,178,255,0.85) 100%)",
            boxShadow:
              "0 0 10px rgba(89, 190, 184, 0.55), 0 0 22px rgba(150, 85, 254, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        />
        <div className="absolute right-[3px] top-1/2 h-[40%] w-[2px] -translate-y-1/2 rounded-full bg-white/25 blur-[1px]" />
      </div>
    </div>
  );
}
