"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactHeadline from "./ContactHeadline";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col px-6 py-16 sm:px-12 lg:px-16"
    >
      <motion.p
        className="absolute left-6 top-8 z-10 m-0 text-[1.65rem] font-semibold text-white sm:left-12 sm:text-[2rem] lg:left-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 8, color: "#C53683" }}
      >
        contact();
      </motion.p>

      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full opacity-[0.1] blur-[90px]"
        style={{ backgroundColor: "#C53683" }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-[0.08] blur-[80px]"
        style={{ backgroundColor: "#4734C1" }}
        aria-hidden
      />

      <div className="mx-auto mt-24 flex w-full items-center max-w-6xl flex-col gap-12 lg:mt-28 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="flex-1">
          <ContactHeadline />
          <SocialLinks />
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
