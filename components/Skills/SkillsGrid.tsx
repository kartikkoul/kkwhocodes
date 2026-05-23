"use client";

import { skillCategories } from "./skillsData";
import SkillCategoryCard from "./SkillCategoryCard";

const SkillsGrid = () => {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-6xl px-2 sm:px-4">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
