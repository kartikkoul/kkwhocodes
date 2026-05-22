"use client";

import { motion } from "framer-motion";
import Outer from "../SVGs/About/DisplayFrame/Outer.svg";
import Inner from "../SVGs/About/DisplayFrame/Inner.svg";
import { useReducedMotion } from "../Utils/useReducedMotion";
import Image from "next/image"

const highlights = [
  { label: "Focus", value: "Full-stack(Backend focused) & AI engineering" },
  { label: "Based in", value: "India" },
  { label: "Open to", value: "Remote roles" },
];

const DisplayFrame = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex w-full max-w-md items-center justify-center py-8 md:max-w-lg md:py-0 xl:max-w-none"
      initial={reducedMotion ? false : { opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      <div
        className={`absolute right-8 z-10 md:right-16 lg:right-24 xl:right-32 ${
          reducedMotion ? "" : "about-frame-spin"
        }`}
      >
        <Outer className="h-56 w-56 md:h-[22rem] md:w-[22rem] lg:h-[30rem] lg:w-[30rem]" />
      </div>

      <div
        className={`absolute right-10 z-20 md:right-20 lg:right-28 xl:right-36 ${
          reducedMotion ? "" : "about-frame-float"
        }`}
      >
        <Inner className="h-48 w-48 md:h-80 md:w-80 lg:h-[28rem] lg:w-[28rem]" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
          <Image src={""} alt="Your photo here" />
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayFrame;
