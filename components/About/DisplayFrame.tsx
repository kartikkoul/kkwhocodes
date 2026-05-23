"use client";

import { motion } from "framer-motion";
import Outer from "../SVGs/About/DisplayFrame/Outer.svg";
import Inner from "../SVGs/About/DisplayFrame/Inner.svg";
import { useReducedMotion } from "../Utils/useReducedMotion";
import Image from "next/image";
import { useId } from "react";

const INNER_PATH =
  "M303.921 596C218.824 596 0.00383023 342.7 0.00383219 298C0.00383414 253.3 218.824 0.000108254 303.921 0.000111974C389.018 0.000115694 534.898 253.3 534.898 298C534.898 342.7 389.018 596 303.921 596Z";

const INNER_VIEWBOX = { width: 535, height: 596 };
/** Photo inset inside the white shape (~white rim width). */
const PHOTO_SCALE = 0.9;
/** Photo framing — % on the wrapper; `fill` images cannot set width/height in style. */
const PHOTO = {
  objectPosition: "50% 28%",
  left: "-40%",
  top: "-4%",
  zoom: 1.8,
} as const;

const frameSize =
  "h-48 w-48 md:h-80 md:w-80 lg:h-[28rem] lg:w-[28rem]";

const DisplayFrame = () => {
  const reducedMotion = useReducedMotion();
  const clipId = useId();

  return (
    <motion.div
      className="relative flex w-full max-w-md items-center justify-center py-8 md:max-w-lg md:py-0 xl:max-w-none"
      initial={reducedMotion ? false : { opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      <div
        className={`absolute right-8 z-10 md:right-16 lg:right-24 xl:right-32 ${
          reducedMotion ? "" : "about-frame-spin"
        }`}
      >
        <Outer className="h-56 w-56 md:h-[22rem] md:w-[22rem] lg:h-[30rem] lg:w-[30rem]" />
      </div>

      <div
        className={`absolute right-10 z-20 md:right-20 lg:right-28 xl:right-36 ${
          reducedMotion ? "" : "about-frame-float"
        }`}
      >
        <div className={`relative ${frameSize}`}>
          <Inner className="h-full w-full" aria-hidden />

          <svg className="absolute h-0 w-0" aria-hidden>
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path
                  d={INNER_PATH}
                  transform={`scale(${1 / INNER_VIEWBOX.width}, ${1 / INNER_VIEWBOX.height}) translate(0.5 0.5) scale(${PHOTO_SCALE}) translate(-0.5 -0.5)`}
                />
              </clipPath>
            </defs>
          </svg>
          <div
            className="absolute inset-0 left-10 top-10"
            style={{ clipPath: `url(#${clipId})` }}
          >
            <div
              className="absolute"
              style={{
                left: PHOTO.left,
                top: PHOTO.top,
                width: `${PHOTO.zoom * 100}%`,
                height: `${PHOTO.zoom * 100}%`,
              }}
            >
              <Image
                src="/assets/images/about_image.JPEG"
                alt="Your photo here"
                fill
                sizes="(max-width: 768px) 12rem, (max-width: 1024px) 20rem, 28rem"
                className="object-cover"
                style={{ objectPosition: PHOTO.objectPosition }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayFrame;
