"use client";

import { useEffect, useState, type ReactNode } from "react";
import PreLoaderPage, { PRELOADER_MIN_MS } from "./PreLoaderPage";

interface PreLoaderGateProps {
  children: ReactNode;
}

const PreLoaderGate = ({ children }: PreLoaderGateProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let minElapsed = false;
    let pageLoaded = document.readyState === "complete";

    const finish = () => {
      if (minElapsed && pageLoaded) {
        setIsLoading(false);
        document.body.style.overflow = "";
      }
    };

    document.body.style.overflow = "hidden";

    const minTimer = setTimeout(() => {
      minElapsed = true;
      finish();
    }, PRELOADER_MIN_MS);

    const onLoad = () => {
      pageLoaded = true;
      finish();
    };

    if (!pageLoaded) {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <PreLoaderPage
        show={isLoading}
        onExitComplete={() => setShowContent(true)}
      />
      {showContent ? children : null}
    </>
  );
};

export default PreLoaderGate;
