"use client";

import { motion } from "framer-motion";
import ProjectsHeadline from "./ProjectsHeadline";
import ProjectsNavigator from "./ProjectsNavigator";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full flex-col px-6 py-16 sm:px-12 lg:px-16"
    >
      <motion.p
        className="absolute left-6 top-8 z-10 m-0 text-[1.65rem] font-semibold text-white sm:left-12 sm:text-[2rem] lg:left-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 8, color: "#59BEB8" }}
      >
        projects();
      </motion.p>

      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full opacity-[0.1] blur-[90px]"
        style={{ backgroundColor: "#9655fe" }}
        aria-hidden
      />

      <ProjectsHeadline />
      <ProjectsNavigator />
    </section>
  );
};

export default Projects;
