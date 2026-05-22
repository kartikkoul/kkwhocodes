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
    <div className="absolute left-20 bottom-5 flex flex-1 items-center justify-center font-poppins max-[500px]:items-start max-[500px]:justify-end max-[500px]:px-6 max-[500px]:pt-8">
      <motion.div
        className="flex relative items-center gap-12 max-[500px]:flex-col max-[500px]:items-end max-[500px]:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="shrink-0 whitespace-nowrap text-[5rem] tracking-[0.2rem] text-white [writing-mode:vertical-lr] rotate-180 max-[500px]:[writing-mode:horizontal-tb] max-[500px]:rotate-0 max-[500px]:text-[2.5rem]"
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
          className="flex absolute left-28 bottom-0 w-max flex-col text-[#59BEB8] max-[500px]:text-right"
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
              className="m-0 list-none text-[3rem] font-semibold max-[500px]:text-[1.2rem]"
              whileHover={{ x: 15, color: "#fff" }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Headline;
