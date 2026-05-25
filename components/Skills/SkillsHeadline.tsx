"use client";

import { motion } from "framer-motion";

const SkillsHeadline = () => {
  return (
    <div className="relative mx-auto mt-24 w-full max-w-4xl px-4 text-center">
      <motion.p
        className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-white/35"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {"// stack & craft"}
      </motion.p>

      <motion.h2
        className="font-sans text-[1.35rem] font-extralight leading-snug text-white/80 sm:text-[1.65rem]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        My core skill is{" "}
        <motion.span
          className="bg-skills-headline text-nowrap bg-clip-text font-sans text-[2.4rem] font-semibold leading-tight text-transparent animate-gradient-shift bg-[length:200%_auto] sm:text-[3.25rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          Problem Solving
        </motion.span>
      </motion.h2>

      <motion.p
        className="mx-auto mt-5 max-w-2xl font-sans text-sm font-light leading-relaxed text-white/45 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        Everything below is just the toolkit.
      </motion.p>
    </div>
  );
};

export default SkillsHeadline;
