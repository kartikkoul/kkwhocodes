"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "./projectsData";
import ProjectImage from "./ProjectImage";

type ProjectStageProps = {
  project: Project;
  direction: number;
};

const slideTransition = { type: "spring" as const, stiffness: 320, damping: 32 };

const ProjectStage = ({ project, direction }: ProjectStageProps) => {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 sm:aspect-[16/9]">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={project.id}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            x: direction >= 0 ? 48 : -48,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: direction >= 0 ? -48 : 48,
          }}
          transition={slideTransition}
        >
          <ProjectImage project={project} priority className="object-contain" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
            aria-hidden
          />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
              {project.year}
            </p>
            <h3 className="font-montserrat text-2xl font-light text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 font-poppins text-sm text-white/60">
              {project.tagline}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-1 origin-left"
        style={{ backgroundColor: project.accent }}
        key={`accent-${project.id}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-hidden
      />
    </div>
  );
};

export default ProjectStage;
