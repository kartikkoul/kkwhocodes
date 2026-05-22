"use client";

import { motion } from "framer-motion";
import JavaScript from "../SVGs/Skills/javascript.svg";
import NextJs from "../SVGs/Skills/nextjs.svg";
import Node from "../SVGs/Skills/nodejs.svg";
import Mongo from "../SVGs/Skills/mongodb.svg";
import Git from "../SVGs/Skills/git.svg";
import Figma from "../SVGs/Skills/figma.svg";
import Redux from "../SVGs/Skills/redux.svg";
import Express from "../SVGs/Skills/express.svg";

const skills = [
  { Icon: JavaScript, label: "JS" },
  { Icon: NextJs, label: "Next" },
  { Icon: Node, label: "Node" },
  { Icon: Mongo, label: "Mongo" },
  { Icon: Git, label: "Git" },
  { Icon: Figma, label: "Figma" },
  { Icon: Redux, label: "Redux" },
  { Icon: Express, label: "Express" },
];

const SkillBoard = () => {
  return (
    <div className="relative mx-auto mt-8 grid w-full max-w-3xl grid-cols-4 gap-6 px-4">
      {skills.map(({ Icon, label }, i) => (
        <motion.div
          key={label}
          className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 14,
            delay: i * 0.06,
          }}
          whileHover={{
            scale: 1.08,
            borderColor: "#59BEB8",
            boxShadow: "0 0 20px #59BEB844",
          }}
        >
          <Icon className="h-10 w-10" />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBoard;
