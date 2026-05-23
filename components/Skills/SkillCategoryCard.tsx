"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "./skillsData";
import SkillChip from "./SkillChip";

const spanClass: Record<NonNullable<SkillCategory["span"]>, string> = {
  default: "lg:col-span-1",
  wide: "lg:col-span-2",
  tall: "lg:row-span-2",
};

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
};

const SkillCategoryCard = ({ category, index }: SkillCategoryCardProps) => {
  const { label, symbol, accent, items, span = "default" } = category;

  return (
    <motion.article
      className={`group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md ${spanClass[span]}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: index * 0.07,
      }}
      whileHover={{
        borderColor: `${accent}55`,
        boxShadow: `0 0 0 1px ${accent}33, 0 20px 50px -24px ${accent}44`,
      }}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover/card:opacity-40"
        style={{ backgroundColor: accent }}
        aria-hidden
      />

      <header className="relative mb-4 flex items-start justify-between gap-3">
        <div>
          <p
            className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40"
          >
            {label}
          </p>
          <h3 className="font-mono text-sm text-white/90">
            <span className="text-white/45">const </span>
            <span style={{ color: accent }}>{symbol}</span>
            <span className="text-white/45"> = [</span>
          </h3>
        </div>
        <span
          className="shrink-0 rounded-md border px-2 py-0.5 font-mono text-[0.65rem] tabular-nums text-white/50"
          style={{ borderColor: `${accent}44`, color: accent }}
        >
          {items.length}
        </span>
      </header>

      <div className="relative flex flex-wrap gap-2">
        {items.map((item, i) => (
          <SkillChip key={item} label={item} accent={accent} index={i} />
        ))}
      </div>

      <p className="relative mt-4 font-mono text-xs text-white/25">];</p>
    </motion.article>
  );
};

export default SkillCategoryCard;
