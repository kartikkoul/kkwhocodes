"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "projects()" },
  { href: "/", label: "skills()" },
  { href: "/", label: "blogs()" },
  { href: "/#about", label: "about()" },
  { href: "/", label: "contact()" },
];

const navVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

const Header = () => {
  return (
    <header className="mx-auto mt-2 flex w-[90%] bg-transparent items-end justify-between font-righteous text-white max-[500px]:flex-col-reverse max-[500px]:items-center max-[500px]:justify-center">
      <nav>
        <motion.ul
          className="flex w-96 justify-between p-0 max-[500px]:w-80"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map(({ href, label }) => (
            <motion.li
              key={label}
              variants={itemVariants}
              className="cursor-pointer list-none text-[0.9rem] font-extralight max-[500px]:text-[0.8rem]"
              whileHover={{
                scale: 1.12,
                color: "#59BEB8",
                textShadow: "0 0 8px #59BEB8",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={href}>{label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <motion.div
        className="text-[1.8rem] font-semibold tracking-[0.2rem]"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.5 }}
        whileHover={{
          scale: 1.2,
          color: "#9655fe",
          textShadow: "0 0 16px #9655fe",
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4 },
        }}
      >
        k.
      </motion.div>
    </header>
  );
};

export default Header;
