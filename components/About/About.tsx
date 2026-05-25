"use client";

import { motion } from "framer-motion";
import Board from "./Board";
import DisplayFrame from "./DisplayFrame";
import BlueLight from "../SVGs/About/Lightning1.svg";
import CyanLight from "../SVGs/About/LightningCyan.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-2 flex min-h-screen w-full flex-col overflow-x-clip px-6 py-16 font-poppins sm:px-12 lg:px-16"
    >
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

      <div className="mx-auto mt-20 flex w-full flex-col items-center gap-10 sm:mt-24 lg:mt-28 lg:flex-row lg:items-start lg:gap-12">
        <Board />
        <DisplayFrame className="hidden lg:ml-auto lg:mr-[8rem] lg:flex" />
      </div>

      <motion.div
        className="pointer-events-none absolute -right-4 top-0 z-0 hidden opacity-70 sm:block md:opacity-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BlueLight className="h-40 w-40 md:h-[22rem] md:w-[22rem]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-0 right-8 hidden opacity-60 md:right-48 md:block lg:right-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyanLight className="h-48 w-48 md:h-72 md:w-72" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

