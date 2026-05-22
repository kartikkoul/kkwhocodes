"use client";

import { motion } from "framer-motion";

const SkillsHeadline = () => {
  return (
    <div className="w-full">
      <motion.h1
        className="mt-20 text-center font-montserrat text-[2rem] font-thin text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        My only skill is{" "}
        <motion.span
          className="bg-skills-headline bg-clip-text font-poppins text-[3.5rem] font-semibold text-transparent animate-gradient-shift bg-[length:200%_auto]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          Problem Solving
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default SkillsHeadline;
