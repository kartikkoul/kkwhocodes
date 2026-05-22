"use client";

import { motion } from "framer-motion";
import Outer from "../SVGs/About/DisplayFrame/Outer.svg";
import Inner from "../SVGs/About/DisplayFrame/Inner.svg";

const DisplayFrame = () => {
  return (
    <motion.div
      className="relative mt-16 flex w-1/2 items-center justify-center"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      <motion.div
        className="absolute right-32 z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Outer className="h-[26rem] w-[26rem]" />
      </motion.div>

      <motion.div
        className="absolute right-36 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <Inner className="h-96 w-96" />
      </motion.div>
    </motion.div>
  );
};

export default DisplayFrame;
