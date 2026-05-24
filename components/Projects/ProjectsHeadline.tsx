"use client";

import { motion } from "framer-motion";

const ProjectsHeadline = () => {
  return (
    <div className="relative mx-auto mt-24 w-full max-w-4xl px-4 text-center">
      <motion.p
        className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-white/35"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {"// projects showcase"}
      </motion.p>

      <motion.h2
        className="font-montserrat text-[1.35rem] font-extralight leading-snug text-white/80 sm:text-[1.65rem]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        My{" "}
        <motion.span
          className="bg-skills-headline bg-clip-text font-poppins text-[2.4rem] font-semibold leading-tight text-transparent animate-gradient-shift bg-[length:200%_auto] sm:text-[3.25rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          Creations
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default ProjectsHeadline;
