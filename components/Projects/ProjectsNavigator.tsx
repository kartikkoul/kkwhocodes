"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../Utils/useReducedMotion";
import ProjectDetails from "./ProjectDetails";
import ProjectRail from "./ProjectRail";
import ProjectStage from "./ProjectStage";
import { projects } from "./projectsData";

const ProjectsNavigator = () => {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = projects.length;
  const active = projects[activeIndex];

  const goToIndex = useCallback(
    (next: number) => {
      if (next === activeIndex || next < 0 || next >= count) return;

      setDirection(next > activeIndex ? 1 : -1);
      setShowDetails(false);
      setActiveIndex(next);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(
        () => setShowDetails(true),
        reducedMotion ? 0 : 380,
      );
    },
    [activeIndex, count, reducedMotion],
  );

  const moveBy = useCallback(
    (delta: number) => goToIndex(activeIndex + delta),
    [activeIndex, goToIndex],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="mx-auto mt-10 w-full max-w-6xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-xs text-white/40">
          <span className="text-white/25">{"// "}</span>
          <span style={{ color: active.accent }}>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-white/25"> / {String(count).padStart(2, "0")}</span>
        </p>

        <div className="flex gap-2">
          <motion.button
            type="button"
            onClick={() => moveBy(-1)}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 disabled:opacity-25"
            whileHover={{ borderColor: active.accent, color: active.accent }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous project"
          >
            ←
          </motion.button>
          <motion.button
            type="button"
            onClick={() => moveBy(1)}
            disabled={activeIndex === count - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 disabled:opacity-25"
            whileHover={{ borderColor: active.accent, color: active.accent }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next project"
          >
            →
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
        <div className="min-w-0 flex-1">
          <ProjectStage project={active} direction={direction} />
          <ProjectRail
            projects={projects}
            activeIndex={activeIndex}
            onSelect={goToIndex}
          />
        </div>

        <ProjectDetails project={active} visible={showDetails} />
      </div>
    </div>
  );
};

export default ProjectsNavigator;
