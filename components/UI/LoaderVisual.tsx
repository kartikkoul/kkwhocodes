"use client";

import { motion } from "framer-motion";

const TEAL = "#59BEB8";
const DOT_COUNT = 10;

const trailDots = Array.from({ length: DOT_COUNT }, (_, i) => ({
  angle: -120 + i * 14,
  size: 3 + (i % 3),
  delay: i * 0.08,
}));

export default function LoaderVisual() {
  return (
    <div
      className="relative flex h-[min(52vw,280px)] w-[min(52vw,280px)] items-center justify-center"
      aria-hidden
    >
      <motion.div
        className="absolute inset-[-20%] rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle, ${TEAL}33 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {trailDots.map((dot) => (
        <motion.span
          key={dot.angle}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            background: TEAL,
            boxShadow: `0 0 ${dot.size * 2}px ${TEAL}`,
            transform: `rotate(${dot.angle}deg) translateX(42%)`,
            transformOrigin: "center",
          }}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.svg
        viewBox="0 0 200 200"
        className="relative h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <filter id="loader-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke={TEAL}
          strokeWidth="1.5"
          strokeOpacity="0.15"
        />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke={TEAL}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="90 362"
          filter="url(#loader-glow)"
        />
      </motion.svg>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute left-1/2 top-1/2 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: TEAL,
            boxShadow: `0 0 12px ${TEAL}`,
            transform: "translate(-50%, -50%) translateX(72px)",
          }}
        />
      </motion.div>
    </div>
  );
}
