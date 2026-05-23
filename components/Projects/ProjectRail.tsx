"use client";

import { motion } from "framer-motion";
import type { Project } from "./projectsData";
import ProjectImage from "./ProjectImage";

type ProjectRailProps = {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const ProjectRail = ({ projects, activeIndex, onSelect }: ProjectRailProps) => {
  return (
    <div
      className="relative mt-6"
      role="tablist"
      aria-label="Choose a project"
    >
      <div className="flex gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(index)}
              className="relative shrink-0 overflow-hidden rounded-xl border text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                width: isActive ? "7.5rem" : "5.5rem",
                borderColor: isActive ? project.accent : "rgba(255,255,255,0.1)",
                boxShadow: isActive
                  ? `0 0 0 1px ${project.accent}55, 0 12px 40px -16px ${project.accent}66`
                  : undefined,
              }}
              animate={{
                scale: isActive ? 1.05 : 1,
                opacity: isActive ? 1 : 0.55,
              }}
              whileHover={{ opacity: 1, scale: isActive ? 1.05 : 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <div className="relative aspect-[4/3] w-full">
                <ProjectImage
                  project={project}
                  sizes="120px"
                  className="object-cover"
                  variant="compact"
                />
                <div className="absolute inset-0 bg-black/30" aria-hidden />
              </div>
              <span className="block truncate px-2 py-1.5 font-mono text-[0.6rem] text-white/80">
                {project.title}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRail;
