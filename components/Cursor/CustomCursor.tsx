"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TEAL = "#59BEB8";
const VIOLET = "#9655fe";
const TRAIL_LENGTH = 8;

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [data-cursor="hover"]';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );
  const trailId = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 });
  const auraX = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.8 });
  const auraY = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.8 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      const on = finePointer.matches && !reducedMotion.matches;
      setEnabled(on);
      document.body.classList.toggle("custom-cursor-active", on);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let lastTrailAt = 0;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const now = performance.now();
      if (now - lastTrailAt > 32) {
        lastTrailAt = now;
        trailId.current += 1;
        setTrail((prev) => [
          { x: e.clientX, y: e.clientY, id: trailId.current },
          ...prev.slice(0, TRAIL_LENGTH - 1),
        ]);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const accent = hovering ? VIOLET : TEAL;
  const ringSize = hovering ? 56 : clicking ? 28 : 40;
  const dotSize = hovering ? 6 : clicking ? 14 : 8;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden
    >
      {/* Motion trail */}
      {trail.map((point, i) => (
        <motion.span
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: 4 - i * 0.35,
            height: 4 - i * 0.35,
            background: hovering ? VIOLET : TEAL,
            boxShadow: `0 0 ${8 - i}px ${hovering ? VIOLET : TEAL}`,
            opacity: (TRAIL_LENGTH - i) / TRAIL_LENGTH,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 1.2, opacity: 0.6 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Outer aura — slowest lag */}
      <motion.div
        className="absolute rounded-full mix-blend-screen"
        style={{
          x: auraX,
          y: auraY,
          width: hovering ? 120 : 80,
          height: hovering ? 120 : 80,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
        }}
        animate={{ opacity: visible ? (hovering ? 0.9 : 0.5) : 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Main ring */}
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: accent,
          boxShadow: `0 0 20px ${accent}88, inset 0 0 12px ${accent}33`,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.75 : hovering ? 1.15 : 1,
          rotate: hovering ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Crosshair ticks on hover */}
      <motion.div
        className="absolute"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hovering && visible ? 1 : 0, scale: hovering ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <span
            key={deg}
            className="absolute block h-[2px] w-3 rounded-full"
            style={{
              background: VIOLET,
              boxShadow: `0 0 6px ${VIOLET}`,
              transform: `rotate(${deg}deg) translateX(${ringSize / 2 + 6}px)`,
              transformOrigin: "0 50%",
              left: "50%",
              top: "50%",
              marginLeft: -6,
              marginTop: -1,
            }}
          />
        ))}
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
          background: accent,
          boxShadow: `0 0 12px ${accent}, 0 0 24px ${accent}66`,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Click ripple */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: accent,
        }}
        animate={
          clicking
            ? { width: 80, height: 80, opacity: [0.6, 0] }
            : { width: 0, height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
