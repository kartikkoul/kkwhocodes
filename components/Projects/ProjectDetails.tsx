"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "./projectsData";

type ProjectDetailsProps = {
  project: Project | null;
  visible: boolean;
};

const ProjectDetails = ({ project, visible }: ProjectDetailsProps) => {
  return (
    <AnimatePresence mode="wait">
      {visible && project ? (
        <motion.aside
          key={project.id}
          className="relative flex w-full flex-col justify-center lg:max-w-sm lg:pl-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          role="region"
          aria-live="polite"
          aria-label={`${project.title} details`}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-white/40">
            {project.year}
          </p>
          <h3
            className="font-sans text-2xl font-light sm:text-[1.75rem]"
            style={{ color: project.accent }}
          >
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-sm text-white/55">{project.tagline}</p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded border px-2 py-0.5 font-mono text-[0.65rem]"
                style={{
                  borderColor: `${project.accent}44`,
                  color: project.accent,
                }}
              >
                {tag}
              </li>
            ))}
          </ul>

          <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border-2 px-5 py-2.5 font-sans text-sm font-medium text-white transition-shadow duration-300"
              style={{
                borderColor: project.accent,
                backgroundColor: `${project.accent}18`,
                boxShadow: `0 0 24px ${project.accent}33`,
              }}
            >
              Visit project ↗
            </Link>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectDetails;
