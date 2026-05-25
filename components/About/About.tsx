"use client";

import { motion } from "framer-motion";
import AboutBackdrop from "./AboutBackdrop";
import Board from "./Board";
import DisplayFrame from "./DisplayFrame";

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-2 flex min-h-screen w-full flex-col overflow-x-clip bg-black px-6 py-16 font-poppins sm:px-12 lg:px-16"
    >
      <AboutBackdrop />

      <motion.p
        className="absolute left-6 top-8 z-10 m-0 text-[1.65rem] font-semibold text-white sm:left-12 sm:text-[2rem] lg:left-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ x: 8, color: "#59BEB8" }}
      >
        about(kartik);
      </motion.p>

      <div className="relative z-10 mx-auto mt-20 flex w-full flex-col items-center gap-10 sm:mt-24 lg:mt-28 lg:flex-row lg:items-start lg:gap-12">
        <Board />
        <DisplayFrame className="about-display-standalone hidden lg:ml-auto lg:mr-[8rem] lg:flex" />
      </div>
    </section>
  );
};

export default About;
