"use client";

import { motion } from "framer-motion";
import Inner from "../SVGs/About/DisplayFrame/Inner.svg";
import OuterGlow from "./OuterGlow";
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

const sizePresets = {
  standalone: {
    shell:
      "h-52 w-52 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[24rem] lg:w-[24rem] xl:h-[32rem] xl:w-[32rem]",
    frame:
      "h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-[30rem] xl:w-[30rem]",
    outer:
      "h-52 w-52 sm:h-60 sm:w-60 md:h-[19rem] md:w-[19rem] lg:h-[23rem] lg:w-[23rem] xl:h-[32rem] xl:w-[32rem]",
    imageSizes:
      "(max-width: 640px) 10rem, (max-width: 1024px) 10rem, 28rem" as const,
  },
  inline: {
    shell: "h-[13rem] w-[14rem] sm:h-64 sm:w-68",
    frame: "h-[13rem] w-[13rem] sm:h-60 sm:w-60",
    outer: "h-[14rem] w-[14rem] sm:h-[16rem] sm:w-[16rem]",
    imageSizes: "(max-width: 640px) 6rem, 8rem" as const,
  },
} as const;

type DisplayFrameProps = {
  variant?: keyof typeof sizePresets;
  className?: string;
};

const DisplayFrame = ({
  variant = "standalone",
  className = "",
}: DisplayFrameProps) => {
  const reducedMotion = useReducedMotion();
  const clipId = useId();
  const { shell, frame, outer, imageSizes } = sizePresets[variant];
  const isInline = variant === "inline";

  return (
    <motion.div
      className={`relative flex shrink-0 items-center justify-center overflow-visible ${
        isInline
          ? "w-auto"
          : "w-full py-2 sm:py-4 lg:w-auto lg:py-0"
      } ${className}`}
    >
      <div
        className={`relative flex items-center justify-center overflow-visible ${shell}`}
      >
        <div
          className={`absolute z-0 flex items-center justify-center overflow-visible ${
            isInline ? "-inset-[10%]" : "-inset-[14%]"
          } ${reducedMotion ? "" : "about-frame-spin"}`}
          aria-hidden
        >
          <OuterGlow className={`${outer} shrink-0`} />
        </div>

        <div
          className={`relative z-10 ${frame} ${
            reducedMotion ? "" : "about-frame-float"
          }`}
        >
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
            className={
              isInline
                ? "absolute inset-0 left-[12%] top-[12%]"
                : "absolute inset-0 left-[12%] top-[12%] sm:left-[14%] sm:top-[14%] md:left-10 md:top-10"
            }
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
                sizes={imageSizes}
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
