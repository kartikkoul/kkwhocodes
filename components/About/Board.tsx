"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../SVGs/About/arrow.svg";
import ExpItem, { ExpItemProps } from "./ExpItem";
import ExpList from "./ExpList";
import reducePeriodInMonths from "../Utils/date";
import { useReducedMotion } from "../Utils/useReducedMotion";

const colors = {
  cyan: "#00B2FF",
  green: "#21d83c",
  purp: "#8f8dfe",
  saffron: "#f7a501",
  yellow: "#fff500",
} as const;

const stack = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Figma"];

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
  const reducedMotion = useReducedMotion();

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
      period: formatPeriod(new Date(2021, 7, 1), new Date(2022, 3, 11)),
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
    <motion.article
      className="relative mt-14 flex w-full max-w-xl shrink-0 flex-col border border-[#32b4f511] bg-[#32b4f513] p-6 text-white shadow-board  md:min-h-[30rem] md:p-8"
      initial={reducedMotion ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              boxShadow: "0px 0px 2rem 12px #32b4f550",
              borderColor: "#32b4f533",
            }
      }
    >
      <div className="m-0 h-full text-[1.1rem] [&_span]:text-[1.2rem] [&_span]:font-semibold">
        Based out of <span style={{ color: colors.saffron }}>India</span>, I&apos;m
        an engineer with a passion for all things tech. I enjoy continually
        learning new concepts and staying up-to-date with the latest tech in
        this fast-paced environment. Apart from coding, I love to watch{" "}
        <b>Documentaries</b>, <b>War epics</b>, <b>Thrillers</b> and <b>Biopics</b> &amp; read/listen about&nbsp;
        <b>Philosophy</b> or <b>Pyschology</b>.
        <br />
        <br />
        My <span style={{ color: colors.purp }}>goal</span> is to always
        improve as a <span style={{ color: colors.yellow }}>programmer</span>{" "}
        and my intent is to apply the same drive I have for self-improvement to
        any projects I work on.
        <br />
        <br />
        On the frontend side, I mostly use{" "}
        <span style={{ color: colors.cyan }}>React</span> & <span style={{ color: colors.cyan }}>NextJS</span>, while in Backend, I tend to use{" "}
        <span style={{ color: colors.green }}>Node.js</span>.
        <br/>
        <br/>
        I also create <span style={{ color: colors.purp }}>AI</span> powered systems including{" "}
        <span style={{ color: colors.purp }}>RAG</span> & <span style={{ color: colors.purp }}>Agentic AI</span>.
      </div>

      <div className="mt-8 flex min-h-16 w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="https://drive.google.com/file/d/1Y8xAGKCEfj8cNyaOChNbTiIsmxpljbLq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 inline-flex h-[3.2rem] items-center rounded border-2 border-accent-violet bg-accent-violet px-4 text-[1rem] font-medium shadow-resume transition-[box-shadow] duration-300 hover:shadow-resumeHover md:text-[1.1rem]"
          >
            My Resume 📄
          </Link>
        </motion.div>

        <motion.div
          onClick={() => setIsActive((prev) => !prev)}
          className="relative flex h-[3.3rem] w-full cursor-pointer items-center justify-between rounded border border-accent-violet bg-[#150a339a] p-[0.8rem] sm:w-3/5"
          whileHover={{ borderColor: "#9655fe" }}
          whileTap={{ scale: 0.98 }}
          role="button"
          tabIndex={0}
          aria-expanded={isActive}
          aria-label="Toggle work experience list"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsActive((prev) => !prev);
            }
          }}
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

      <div
        className={`pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#9555FE]/35 blur-[90px] ${
          reducedMotion ? "" : "about-glow-pulse"
        }`}
        aria-hidden
      />
    </motion.article>
  );
};

export default Board;
