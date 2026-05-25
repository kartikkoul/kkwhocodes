"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeModal from "../UI/ResumeModal";
import Arrow from "../SVGs/About/arrow.svg";
import ExpItem, { ExpItemProps } from "./ExpItem";
import ExpList from "./ExpList";
import reducePeriodInMonths from "../Utils/date";
import { useReducedMotion } from "../Utils/useReducedMotion";
import DisplayFrame from "./DisplayFrame";

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
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24) / 30,
    );
  } else {
    const presentDate = new Date();
    rightBound = "Present";
    period = Math.floor(
      Math.abs(presentDate.getTime() - date1.getTime()) /
        (1000 * 60 * 60 * 24) /
        30,
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
  const [resumeOpen, setResumeOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const exp: ExpItemProps[] = [
    {
      id: 1,
      title: "Web Developer",
      company: "Tech Table",
      period: formatPeriod(new Date(2021, 0, 1), new Date(2021, 6, 1)),
      imageUrl: "/assets/images/techtableicon.png",
    } ,
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
    }
  ];

  return (
    <motion.article
      className="relative flex w-full max-w-xl flex-col justify-between border border-[#32b4f511] bg-[#32b4f513] p-5 text-[0.95rem] leading-relaxed text-white shadow-board sm:p-6 sm:text-base md:min-h-[40rem] md:p-8 lg:shrink-0"
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
      <div className="m-0 h-full [&_span]:text-[1.05rem] [&_span]:font-semibold sm:[&_span]:text-[1.2rem]">
        <DisplayFrame
          variant="inline"
          className="about-board-frame-wrap float-right ml-3 mb-1 mt-0.5 lg:hidden"
        />
        Based in <span style={{ color: colors.saffron }}>India</span>, I&apos;m
        a software engineer passionate about building impactful technology and
        constantly exploring new ideas in the tech space. I enjoy learning
        emerging technologies and staying current in this ever-evolving
        industry.
        <br />
        <br />
        Beyond coding, I enjoy watching <b>Documentaries</b>, <b>War Epics</b>,{" "}
        <b>Thrillers</b>, and <b>Biopics</b>, while also reading and listening
        about <b>Philosophy</b> and <b>Psychology</b>.
        <br />
        <br />
        My <span style={{ color: colors.purp }}>goal</span> is to continuously
        grow as an <span style={{ color: colors.yellow }}>engineer</span> and
        apply that same mindset of improvement and curiosity to every project I
        work on.
        <br />
        <br />
        On the frontend, I primarily work with{" "}
        <span style={{ color: colors.cyan }}>React</span> and{" "}
        <span style={{ color: colors.cyan }}>Next.js</span>, while on the
        backend I mainly use{" "}
        <span style={{ color: colors.green }}>Node.js</span>.
        <br />
        <br />I also build{" "}
        <span style={{ color: colors.purp }}>AI-powered</span> systems,
        including <span style={{ color: colors.purp }}>RAG</span> pipelines and{" "}
        <span style={{ color: colors.purp }}>Agentic AI</span> applications.
      </div>

      <div className="mt-2 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="m-0 inline-flex h-[3.2rem] items-center rounded border-2 border-accent-violet bg-accent-violet px-4 text-[1rem] font-medium shadow-resume transition-[box-shadow] duration-300 hover:shadow-resumeHover md:text-[1.1rem]"
          >
            My Resume 📄
          </button>
        </motion.div>

        <div className="relative w-full sm:w-3/5">
          <motion.div
            onClick={() => setIsActive((prev) => !prev)}
            className="relative z-10 flex h-max cursor-pointer items-center justify-between rounded border border-accent-violet bg-[#150a339a] p-[0.8rem]"
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

          <AnimatePresence>
            {isActive && <ExpList exp={exp} />}
          </AnimatePresence>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#9555FE]/35 blur-[70px] sm:-bottom-32 sm:-left-24 sm:h-72 sm:w-72 sm:blur-[90px] ${
          reducedMotion ? "" : "about-glow-pulse"
        }`}
        aria-hidden
      />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </motion.article>
  );
};

export default Board;
