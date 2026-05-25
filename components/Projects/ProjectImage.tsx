"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "./projectsData";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Rail thumbnails — letter only, no path copy */
  variant?: "default" | "compact";
  /** When false, shows a static placeholder (saves decoders on inactive rail items). */
  playVideo?: boolean;
};

const videoFileName = (src: string) => src.split("/").pop() ?? src;

const ProjectImage = ({
  project,
  priority = false,
  className = "object-cover",
  variant = "default",
  playVideo = true,
}: ProjectImageProps) => {
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const activeSrc = useRef(project.video);

  useEffect(() => {
    activeSrc.current = project.video;
    setLoadState("loading");
  }, [project.video]);

  const handleLoad = () => {
    if (activeSrc.current === project.video) {
      setLoadState("loaded");
    }
  };

  const handleError = () => {
    if (activeSrc.current === project.video) {
      setLoadState("error");
    }
  };

  if (!playVideo) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
        aria-hidden
      >
        <span
          className={`font-sans font-light opacity-50 ${variant === "compact" ? "text-2xl" : "text-4xl"}`}
          style={{ color: project.accent }}
        >
          {project.title.charAt(0)}
        </span>
      </div>
    );
  }

  if (loadState === "error") {
    if (variant === "compact") {
      return (
        <div
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
          title={`Add public${project.video}`}
        >
          <span
            className="font-sans text-2xl font-light opacity-50"
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
          className="font-sans text-4xl font-light opacity-40"
          style={{ color: project.accent }}
        >
          {project.title.charAt(0)}
        </span>
        <p className="max-w-full px-2 font-mono text-[0.65rem] text-white/40">
          Add{" "}
          <span className="break-all text-white/60">
            public/assets/videos/projects/{videoFileName(project.video)}
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
      <video
        key={project.video}
        src={project.video}
        className={`absolute inset-0 h-full w-full ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={`${project.title} preview`}
        onLoadedData={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ProjectImage;
