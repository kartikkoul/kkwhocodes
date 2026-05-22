"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import LoaderVisual from "./LoaderVisual";
import PreLoaderLogo from "./PreLoaderLogo";

export const PRELOADER_MIN_MS = 6000;

const TAGLINES = ["I imagine.", "I create.", "I solve."];

interface PreLoaderPageProps {
  show?: boolean;
  onExitComplete?: () => void;
}

const letterVariants: Variants = {
  before: { opacity: 0, y: "-0.5rem" },
  after: { opacity: 1, y: 0 },
};

const headlineVariants: Variants = {
  before: {},
  after: {
    transition: { delayChildren: 1.2, staggerChildren: 0.03 },
  },
};

const lineVariants: Variants = {
  before: {},
  after: {
    transition: { staggerChildren: 0.03, delayChildren: 0.15 },
  },
};

const pageVariants: Variants = {
  before: {},
  after: {},
  exit: {
    y: -80,
    opacity: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, duration: 1.2 },
  },
};

function StaggeredLine({ text }: { text: string }) {
  return (
    <motion.span variants={lineVariants} className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letterVariants}
          className="font-righteous font-light text-neutral-100"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

const PreLoaderPage = ({ show = true, onExitComplete }: PreLoaderPageProps) => {
  const [showK, setShowK] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const kTimer = setTimeout(() => setShowK(true), 3700);
    const start = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, (elapsed / PRELOADER_MIN_MS) * 100));
    }, 40);

    return () => {
      clearTimeout(kTimer);
      clearInterval(progressTimer);
    };
  }, []);

  const logoVariants: Variants = {
    before: { width: 100, y: "-8vh" },
    after: { width: 36, y: 0, transition: { duration: 2 } },
  };

  const kVariant: Variants = {
    before: { scale: 2 },
    after: { scale: 1, transition: { duration: 2 } },
  };

  const dotVariant: Variants = {
    enter: {
      scale: [2, 1],
      transition: { duration: 2, ease: "easeOut" },
    },
    exit: {
      y: [0, -10, 0, -10, 0],
      scale: [1, 1, 1, 1, 0],
      opacity: [1, 1, 1, 1, 0],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const enterKVariant: Variants = {
    before: { scale: 0.35, opacity: 0, y:-10 },
    after: {
      scale: 1,
      opacity: 1,
      y:0,
      transition: {
        ease: "easeOut",
        delay: -0.3,
      },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading"
          aria-live="polite"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
          variants={pageVariants}
          initial="before"
          animate="after"
          exit="exit"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(89,190,184,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(150,85,254,0.08) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:gap-8 md:px-16 lg:px-24">
            <div className="flex flex-col gap-6">
              <motion.div
                variants={headlineVariants}
                initial="before"
                animate="after"
                className="flex flex-col gap-1 text-2xl sm:text-3xl md:text-4xl [&>span]:[text-shadow:0_0_12px_rgba(89,190,184,0.25)]"
              >
                {TAGLINES.map((line) => (
                  <StaggeredLine key={line} text={line} />
                ))}
              </motion.div>

              <PreLoaderLogo
                showSecondK={showK}
                logoVariants={logoVariants}
                kVariant={kVariant}
                dotVariant={dotVariant}
                enterKVariant={enterKVariant}
              />
            </div>

            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              <LoaderVisual />
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-8 right-8 md:left-16 md:right-16">
            <div className="mb-2 flex items-center justify-between text-xs tracking-widest text-neutral-500">
              <span>Loading</span>
              <span className="tabular-nums text-accent-teal">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left rounded-full bg-accent-teal"
                style={{ boxShadow: "0 0 8px #59BEB8" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoaderPage;
