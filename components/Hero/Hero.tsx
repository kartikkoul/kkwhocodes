"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { usePreloader } from "../UI/PreloaderContext";
import Headline from "./Headline";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isPreloading } = usePreloader();
  const inView = useInView(sectionRef, { amount: 0.08 });
  const sceneActive = isPreloading || inView;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-hero-gradient max-[500px]:h-[60vh]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 top-0"
        aria-hidden
      >
        <HeroScene active={sceneActive} />
      </div>
      <div className="relative z-10 h-full w-full">
        <Headline />
      </div>
    </section>
  );
};

export default Hero;
