"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.06] px-6 py-10 font-poppins sm:px-12 lg:px-16">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-violetLight/40 to-transparent"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-[0.08] blur-[70px]"
        style={{ backgroundColor: "#9655fe" }}
        aria-hidden
      />

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-white/30">
          {"// still shipping"}
        </p>

        <p className="max-w-md font-montserrat text-sm font-light leading-relaxed text-white/55 sm:text-base">
          Turning ideas into interfaces —{" "}
          <span className="bg-skills-headline bg-clip-text font-poppins font-medium text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Made by Kartik Koul
          </span>
        </p>

        <p className="font-mono text-[0.65rem] text-white/25">
          © {year} · kartikkoul.com
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
