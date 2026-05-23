"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "./projectsData";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Rail thumbnails — letter only, no path copy */
  variant?: "default" | "compact";
};

const imageFileName = (src: string) => src.split("/").pop() ?? src;

const ProjectImage = ({
  project,
  priority = false,
  className = "object-cover",
  sizes = "(max-width: 1024px) 100vw, 55vw",
  variant = "default",
}: ProjectImageProps) => {
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const activeSrc = useRef(project.image);

  useEffect(() => {
    activeSrc.current = project.image;
    setLoadState("loading");
  }, [project.image]);

  const handleLoad = () => {
    if (activeSrc.current === project.image) {
      setLoadState("loaded");
    }
  };

  const handleError = () => {
    if (activeSrc.current === project.image) {
      setLoadState("error");
    }
  };

  if (loadState === "error") {
    if (variant === "compact") {
      return (
        <div
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
          title={`Add public${project.image}`}
        >
          <span
            className="font-montserrat text-2xl font-light opacity-50"
            style={{ color: project.accent }}
            aria-hidden
          >
            {project.title.charAt(0)}
          </span>
        </div>
      );
    }

    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4 text-center sm:p-6"
        style={{ borderColor: `${project.accent}44` }}
      >
        <span
          className="font-montserrat text-4xl font-light opacity-40"
          style={{ color: project.accent }}
        >
          {project.title.charAt(0)}
        </span>
        <p className="max-w-full px-2 font-mono text-[0.65rem] text-white/40">
          Add{" "}
          <span className="break-all text-white/60">
            public/assets/images/projects/{imageFileName(project.image)}
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {loadState === "loading" && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.04] to-white/[0.02]"
          aria-hidden
        />
      )}
      <Image
        key={project.image}
        src={project.image}
        alt={`${project.title} preview`}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ProjectImage;
