"use client";

import { motion } from "framer-motion";
import BlueLight from "../SVGs/About/Lightning1.svg";
import CyanLight from "../SVGs/About/LightningCyan.svg";
import { useReducedMotion } from "../Utils/useReducedMotion";

const AboutBackdrop = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Texture on black — no base color swap */}
      <div className="absolute inset-0 about-bg-grid opacity-[0.55]" />
      <div className="absolute inset-0 about-bg-lines opacity-80" />
      <div className="absolute inset-0 about-bg-scatter opacity-75" />

      {/* Soft CSS orbs — fills empty space */}
      <div className="about-bg-orb about-bg-orb--violet absolute -right-16 -top-12 h-[22rem] w-[22rem] md:h-[28rem] md:w-[28rem]" />
      <div className="about-bg-orb about-bg-orb--teal absolute -left-20 bottom-[5%] h-64 w-64 md:h-80 md:w-80" />
      <div className="about-bg-orb about-bg-orb--cyan absolute right-[8%] top-[18%] hidden h-72 w-72 md:block" />
      <div className="about-bg-orb about-bg-orb--magenta absolute bottom-[12%] left-[22%] hidden h-56 w-56 md:block" />
      <div className="about-bg-orb about-bg-orb--violet absolute left-[38%] top-[38%] hidden h-[26rem] w-[26rem] opacity-90 lg:block" />
      <div className="about-bg-orb about-bg-orb--cyan absolute left-[52%] top-[55%] hidden h-48 w-48 opacity-80 lg:block" />

      <div
        className="absolute left-1/2 top-[42%] h-[min(36rem,72vh)] w-[min(48rem,90vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 48% 50%, rgba(85,254,244,0.55) 0%, transparent 58%), radial-gradient(ellipse 45% 40% at 55% 48%, rgba(109,85,254,0.45) 0%, transparent 62%)",
        }}
      />
      <div className="about-bg-bridge absolute left-1/2 top-[44%] hidden h-[min(32rem,65vh)] w-[min(44rem,52vw)] -translate-x-1/2 -translate-y-1/2 lg:block" />

      <div className="about-bg-horizon absolute left-[8%] right-[8%] top-[32%] hidden md:block" />
      <div className="about-bg-horizon absolute bottom-[26%] left-[14%] right-[18%] hidden opacity-50 lg:block" />

      <span className="about-bg-code about-bg-code--bracket left-[6%] top-[20%] hidden md:block">
        {"{"}
      </span>
      <span className="about-bg-code about-bg-code--slash right-[10%] top-[48%] hidden lg:block">
        /&gt;
      </span>
      <span className="about-bg-code about-bg-code--bracket right-[14%] bottom-[18%] hidden xl:block">
        {"}"}
      </span>

      {/* SVG glow lights — same style you already had */}
      <motion.div
        className="absolute -right-4 top-0 hidden opacity-75 sm:block md:opacity-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        <motion.div
          className={reducedMotion ? "" : "about-light-pulse"}
          animate={
            reducedMotion
              ? undefined
              : { scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BlueLight className="h-40 w-40 md:h-[22rem] md:w-[22rem]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-6 hidden opacity-65 md:right-40 md:block lg:right-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className={reducedMotion ? "" : "about-light-float"}
          animate={
            reducedMotion
              ? undefined
              : { y: [0, -12, 0], opacity: [0.55, 0.95, 0.55] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyanLight className="h-48 w-48 md:h-72 md:w-72" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[40%] hidden -translate-x-1/2 opacity-50 lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.04, 1] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyanLight className="h-40 w-40 xl:h-56 xl:w-56" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[2%] hidden opacity-45 sm:block md:left-[6%] md:opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
      >
        <motion.div
          className={reducedMotion ? "" : "about-light-float"}
          animate={
            reducedMotion
              ? undefined
              : { y: [0, -8, 0], opacity: [0.45, 0.8, 0.45] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyanLight className="h-32 w-32 md:h-44 md:w-44" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[24%] top-[12%] hidden opacity-35 lg:block xl:right-[28%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
      >
        <motion.div
          className={reducedMotion ? "" : "about-light-pulse"}
          animate={
            reducedMotion
              ? undefined
              : { scale: [1, 1.06, 1], opacity: [0.3, 0.55, 0.3] }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BlueLight className="h-28 w-28 xl:h-36 xl:w-36" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 about-bg-vignette" />
    </div>
  );
};

export default AboutBackdrop;
