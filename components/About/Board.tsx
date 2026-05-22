"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../SVGs/About/arrow.svg";
import ExpItem, { ExpItemProps } from "./ExpItem";
import ExpList from "./ExpList";
import reducePeriodInMonths from "../Utils/date";

const colors = {
  cyan: "#00B2FF",
  green: "#21d83e",
  purp: "#8f8dfe",
  saffron: "#f7a501",
  yellow: "#fff500",
} as const;

const formatPeriod = (date1: Date, date2?: Date): string => {
  const leftParts = date1.toDateString().split(" ");
  const leftBound = `${leftParts[1]} ${leftParts[3]}`;

  let rightBound: string;
  let period: number;

  if (date2 instanceof Date) {
    const rightParts = date2.toDateString().split(" ");
    rightBound = `${rightParts[1]} ${rightParts[3]}`;
    period = Math.floor(
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24) / 30
    );
  } else {
    const presentDate = new Date();
    rightBound = "Present";
    period = Math.floor(
      Math.abs(presentDate.getTime() - date1.getTime()) /
        (1000 * 60 * 60 * 24) /
        30
    );
  }

  let periodString: string;
  if (period > 12) {
    const { months, years } = reducePeriodInMonths(period);
    periodString = `${years} years, ${months} months`;
  } else {
    periodString = `${period} months`;
  }

  return `${leftBound} - ${rightBound} (${periodString})`;
};

const Board = () => {
  const [isActive, setIsActive] = useState(false);

  const exp: ExpItemProps[] = [
    {
      id: 1,
      title: "Web Developer",
      company: "Tech Table",
      period: formatPeriod(new Date(2021, 0, 1), new Date(2021, 6, 1)),
      imageUrl: "/assets/images/techtableicon.png",
    },
    {
      id: 2,
      title: "Freelancer",
      company: "Self-Employed",
      period: formatPeriod(new Date(2021, 7, 1)),
      imageUrl: "/assets/images/stay-at-home.png",
    },
    {
      id: 3,
      title: "SDE-1",
      company: "AVRL",
      period: formatPeriod(new Date(2022, 3, 11)),
      imageUrl: "/assets/images/avrl.jpg",
    },
  ];

  return (
    <motion.div
      className="relative mt-16 flex max-h-[36rem] min-h-[30rem] w-[36rem] shrink-0 flex-col border border-[#32b4f511] bg-[#32b4f513] p-8 font-poppins text-white shadow-board"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      whileHover={{
        boxShadow: "0px 0px 2rem 12px #32b4f550",
        borderColor: "#32b4f533",
      }}
    >
      <div className="m-0 h-full text-[1.1rem] [&_span]:text-[1.2rem] [&_span]:font-semibold">
        Based out of <span style={{ color: colors.saffron }}>India</span>, I&apos;m
        a developer with a passion for all things tech. I enjoy continually
        learning new concepts and staying up-to-date with the latest tech in
        this fast-paced environment. Apart from coding, I love to watch{" "}
        <b>Documentaries</b>, <b>Thrillers</b> and <b>Biopics</b> &amp; play
        video games. My favourite video game series are <b>Assassin Creed</b>,{" "}
        <b>Resident Evil</b>, <b>FarCry</b> and <b>Watch Dogs</b>.
        <br />
        <br />
        My <span style={{ color: colors.purp }}>goal</span> is to always
        improve as a <span style={{ color: colors.yellow }}>programmer</span>{" "}
        and my intent is to apply the same drive I have for self-improvement to
        any projects I work on.
        <br />
        <br />
        On the frontend side, I mostly use{" "}
        <span style={{ color: colors.cyan }}>React</span>, Designing is mostly
        done in <b>Figma</b>. Backend wise, I tend to use{" "}
        <span style={{ color: colors.green }}>Node.js</span> with{" "}
        <b>MongoDB</b>.
      </div>
      <div className="mt-8 flex h-16 w-full items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="https://drive.google.com/file/d/1Y8xAGKCEfj8cNyaOChNbTiIsmxpljbLq/view?usp=sharing"
            target="_blank"
            className="m-0 block h-[3.2rem] rounded border-2 border-accent-violet bg-accent-violet p-[0.6rem] text-[1.18rem] font-medium shadow-resume transition-[box-shadow] duration-300 hover:shadow-resumeHover"
          >
            My Resume 📄
          </Link>
        </motion.div>
        <motion.div
          onClick={() => setIsActive((prev) => !prev)}
          className="flex h-[3.3rem] w-3/5 cursor-pointer items-center justify-between rounded border border-accent-violet bg-[#150a339a] p-[0.8rem]"
          whileHover={{ borderColor: "#9655fe" }}
          whileTap={{ scale: 0.98 }}
        >
          <ExpItem {...exp[exp.length - 1]} />
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Arrow className="ml-1 h-6 text-[#662eff]" />
          </motion.div>
        </motion.div>
        <AnimatePresence>{isActive && <ExpList exp={exp} />}</AnimatePresence>
      </div>
      <motion.div
        className="pointer-events-none absolute -bottom-48 -left-28 h-[200%] w-[200%]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.36, 0.5, 0.36],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1313 1117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_529_566)">
            <circle
              cx="656.5"
              cy="619.5"
              r="189.5"
              fill="#9555FE"
              fillOpacity="0.36"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_529_566"
              x="0"
              y="-37"
              width="1313"
              height="1313"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="233.5"
                result="effect1_foregroundBlur_529_566"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Board;
