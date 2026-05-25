"use client";

import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";
import SkillsHeadline from "./SkillsHeadline";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 py-16 sm:px-12 lg:px-16"
    >
      <motion.p
        className="absolute left-6 top-8 z-10 m-0 text-[1.65rem] font-semibold text-white sm:left-12 sm:text-[2rem] lg:left-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 8, color: "#9655fe" }}
      >
        skills();
      </motion.p>

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-[0.12] blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #4734C1 0%, #C53683 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full opacity-[0.08] blur-[80px]"
        style={{ backgroundColor: "#59BEB8" }}
        aria-hidden
      />

      <SkillsHeadline />
      <SkillsGrid />

      <motion.div
        className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/[0.06] px-4 pt-8 font-mono text-[0.7rem] text-white/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span>return fullStackEngineer;</span>
        <span className="hidden text-white/20 sm:inline">·</span>
        <span className="text-accent-teal/80">always learning</span>
      </motion.div>
    </section>
  );
};

export default Skills;
