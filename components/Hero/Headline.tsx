"use client";

import { motion } from "framer-motion";

const taglines = ["I imagine", "I create", "I solve"];

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6 + i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

const Headline = () => {
  const name = "KARTIK KOUL";

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-[58%] bg-gradient-to-t from-black/95 via-black/55 to-transparent max-[500px]:block"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className="absolute bottom-5 left-20 z-10 max-[500px]:inset-x-0 max-[500px]:bottom-0 max-[500px]:left-0 max-[500px]:flex max-[500px]:h-full max-[500px]:flex-col max-[500px]:justify-end max-[500px]:px-6 max-[500px]:pb-16 max-[500px]:pt-[38%]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative flex items-center gap-12 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-4">
          <motion.h1
            className="shrink-0 whitespace-nowrap text-[5rem] tracking-[0.2rem] text-white [writing-mode:vertical-lr] rotate-180 max-[500px]:[writing-mode:horizontal-tb] max-[500px]:rotate-0 max-[500px]:text-[2.15rem] max-[500px]:tracking-[0.14rem] max-[380px]:text-[1.85rem]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
            }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={letterVariants}
                className="inline-block"
                whileHover={{
                  scale: 1.15,
                  color: "#59BEB8",
                  textShadow: "0 0 20px #59BEB8",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="absolute bottom-0 left-28 flex w-max flex-col gap-1 text-[#59BEB8] max-[500px]:static max-[500px]:left-auto max-[500px]:bottom-auto max-[500px]:gap-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {taglines.map((line, i) => (
              <motion.p
                key={line}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={taglineVariants}
                className="m-0 list-none text-[3rem] font-semibold leading-snug max-[500px]:text-[1.05rem] max-[500px]:font-medium"
                whileHover={{ x: 15, color: "#fff" }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Headline;
