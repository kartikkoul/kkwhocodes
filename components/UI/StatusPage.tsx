"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type StatusPageProps = {
  code: string;
  monoLabel: string;
  title: string;
  description: string;
  onRetry?: () => void;
};

const StatusPage = ({
  code,
  monoLabel,
  title,
  description,
  onRetry,
}: StatusPageProps) => {
  return (
    <main className="relative flex min-h-[calc(100vh-12rem)] w-full flex-col items-center justify-center overflow-hidden bg-hero-gradient px-6 py-24 sm:px-12">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full opacity-[0.12] blur-[80px]"
        style={{ backgroundColor: "#9655fe" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-48 w-48 rounded-full opacity-[0.1] blur-[70px]"
        style={{ backgroundColor: "#59BEB8" }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex max-w-xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 18 }}
      >
        <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white/35">
          {`// ${monoLabel}`}
        </p>

        <motion.p
          className="mt-6 font-display text-[6rem] font-bold leading-none tracking-tight text-white sm:text-[8rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ textShadow: "0 0 48px #9655fe55" }}
        >
          {code}
        </motion.p>

        <h1 className="mt-4 font-display text-2xl font-semibold text-accent-teal sm:text-3xl">
          {title}
        </h1>

        <p className="mt-4 max-w-md font-sans text-sm font-light leading-relaxed text-white/60 sm:text-base">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded border-2 border-accent-violet bg-accent-violet px-6 text-sm font-medium text-white shadow-resume transition-[box-shadow] duration-300 hover:shadow-resumeHover"
            >
              return home()
            </Link>
          </motion.div>

          {onRetry ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex h-11 items-center rounded border border-accent-teal/50 bg-black/40 px-6 font-mono text-sm text-accent-teal transition-colors duration-300 hover:border-accent-teal hover:bg-accent-teal/10"
              >
                try again()
              </button>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#projects"
                className="inline-flex h-11 items-center rounded border border-white/15 bg-black/40 px-6 font-mono text-sm text-white/70 transition-colors duration-300 hover:border-accent-teal/40 hover:text-accent-teal"
              >
                view projects()
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default StatusPage;
