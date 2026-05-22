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
      className="relative mt-2 flex min-h-screen max-h-screen w-full overflow-hidden p-16 font-poppins"
    >
      <motion.p
        className="absolute left-16 top-8 m-0 text-[2rem] font-semibold text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ x: 8, color: "#59BEB8" }}
      >
        about(kartik);
      </motion.p>

      <Board />
      <DisplayFrame />

      <motion.div
        className="pointer-events-none absolute right-0 top-0 z-30"
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
          <BlueLight className="h-[22rem] w-[22rem]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-0 right-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyanLight className="h-72 w-72" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
