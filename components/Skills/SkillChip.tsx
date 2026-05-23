"use client";

import { motion } from "framer-motion";

type SkillChipProps = {
  label: string;
  accent: string;
  index: number;
};

const SkillChip = ({ label, accent, index }: SkillChipProps) => {
  return (
    <motion.span
      className="group/chip relative inline-flex cursor-default select-none items-center rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-[0.78rem] font-medium tracking-wide text-white/85 backdrop-blur-sm transition-colors duration-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        delay: index * 0.03,
      }}
      whileHover={{
        y: -2,
        borderColor: `${accent}66`,
        backgroundColor: `${accent}14`,
        color: "#fff",
      }}
    >
      <span
        className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full opacity-70 transition-opacity group-hover/chip:opacity-100"
        style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}88` }}
        aria-hidden
      />
      {label}
    </motion.span>
  );
};

export default SkillChip;
