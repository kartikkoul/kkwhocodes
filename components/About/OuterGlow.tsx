"use client";

import { useId } from "react";

const OUTER_PATH =
  "M343.186 673C247.095 673 0.00388933 386.975 0.00389154 336.5C0.00389375 286.025 247.095 1.49166e-05 343.186 1.91169e-05C439.277 2.33171e-05 604.004 286.025 604.004 336.5C604.004 386.975 439.277 673 343.186 673Z";

type OuterGlowProps = {
  className?: string;
};

/** Gradient diamond behind the frame — unique gradient id per instance (avoids SVGR id clashes). */
const OuterGlow = ({ className }: OuterGlowProps) => {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 605 673"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d={OUTER_PATH} fill={`url(#${gradientId})`} />
      <defs>
        <linearGradient
          id={gradientId}
          x1="604.004"
          y1="336.5"
          x2="0.00389154"
          y2="336.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5404FF" />
          <stop offset="0.348958" stopColor="#07E1FF" />
          <stop offset="0.682292" stopColor="#FF9900" />
          <stop offset="1" stopColor="#AD00FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OuterGlow;
