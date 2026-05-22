"use client";

import { useCallback, useEffect, useState } from "react";

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
  const [metrics, setMetrics] = useState<ScrollMetrics>(initialMetrics);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight;
    const clientHeight = doc.clientHeight;
    const scrollTop = doc.scrollTop;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      setMetrics(initialMetrics);
      return;
    }

    const trackHeight = clientHeight - TRACK_INSET * 2;
    const thumbHeight = Math.max(
      MIN_THUMB,
      (clientHeight / scrollHeight) * trackHeight
    );
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop =
      TRACK_INSET + (scrollTop / maxScroll) * maxThumbTop;

    setMetrics({
      visible: true,
      thumbHeight,
      thumbTop,
    });
  }, []);

  useEffect(() => {
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.documentElement);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [update]);

  if (!metrics.visible) return null;

  return (
    <div
      className="pointer-events-none fixed right-0 top-0 z-[90] hidden h-[100dvh] w-5 sm:block"
      aria-hidden
    >
      {/* Track — faint nebula line */}
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

      {/* Thumb */}
      <div
        className="absolute right-[7px] w-[10px] will-change-transform"
        style={{
          height: metrics.thumbHeight,
          transform: `translateY(${metrics.thumbTop}px)`,
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
