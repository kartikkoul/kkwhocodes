"use client";

import { motion } from "framer-motion";

const ContactHeadline = () => {
  return (
    <motion.div
      className="relative w-full max-w-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 16 }}
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-white/35">
        {"// get in touch"}
      </p>

      <h2 className="font-sans text-[1.35rem] font-extralight leading-snug text-white/80 sm:text-[1.65rem]">
        Let&apos;s build something{" "}
        <motion.span
          className="bg-skills-headline bg-clip-text font-sans text-[2.4rem] font-semibold leading-tight text-transparent animate-gradient-shift bg-[length:200%_auto] sm:text-[3.25rem]"
          whileHover={{ scale: 1.02 }}
        >
          together
        </motion.span>
      </h2>

      <p className="mt-5 max-w-md font-sans text-sm font-light leading-relaxed text-white/45 sm:text-base">
        Drop a message - it lands straight in my inbox. Or find me on socials
        below.
      </p>
    </motion.div>
  );
};

export default ContactHeadline;
