"use client";

import { motion } from "framer-motion";
import LinearBackground from "../SVGs/Skills/LinearBackground.svg";
import SkillBoard from "./SkillBoard";
import SkillsHeadline from "./SkillsHeadline";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full flex-col overflow-hidden p-16 font-poppins"
    >
      <motion.p
        className="absolute left-16 top-8 z-10 m-0 text-[2rem] font-semibold text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 8, color: "#9655fe" }}
      >
        skills();
      </motion.p>

      <SkillsHeadline />
      <SkillBoard />

      <motion.div
        className="pointer-events-none absolute -left-80 -top-28 opacity-[0.15]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <LinearBackground className="h-[200rem] w-[200rem]" />
      </motion.div>
    </section>
  );
};

export default Skills;
