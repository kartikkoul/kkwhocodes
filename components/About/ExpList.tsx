"use client";

import { motion } from "framer-motion";
import ExpItem, { ExpItemProps } from "./ExpItem";

interface ExpListProps {
  exp: ExpItemProps[];
}

const ExpList = ({ exp }: ExpListProps) => {
  return (
    <motion.ul
      className="absolute bottom-full right-0 z-10 mb-2 flex w-full flex-col"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {exp.map((item, i) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
          className="relative z-100 mt-4 flex w-full list-none bg-[#4d25b9] p-4 shadow-[0_0_4px_1px_#ffffff1c] [&_h3]:text-[#c7c3d1] [&_p]:text-[#bcaae7] [&>div:nth-of-type(2)]:ml-4 [&>div:nth-of-type(2)]:flex [&>div:nth-of-type(2)]:h-10 [&>div:nth-of-type(2)]:w-10 [&>div:nth-of-type(2)]:items-center [&>div:nth-of-type(2)]:justify-center [&>div:nth-of-type(2)]:overflow-hidden [&>div:nth-of-type(2)]:rounded-full [&>div:nth-of-type(2)]:border-2 [&>div:nth-of-type(2)]:border-[#817997]"
          whileHover={{ scale: 1.03, x: -4 }}
        >
          <ExpItem {...item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ExpList;
