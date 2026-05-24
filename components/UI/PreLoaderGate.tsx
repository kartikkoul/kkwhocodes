"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import PreLoaderPage, { PRELOADER_MIN_MS } from "./PreLoaderPage";
import PreloaderContext from "./PreloaderContext";

interface PreLoaderGateProps {
  children: ReactNode;
}

function lockPageScroll() {
  const html = document.documentElement;
  const { body } = document;
  const scrollY = window.scrollY;

  body.dataset.scrollLockY = String(scrollY);
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  html.style.overscrollBehavior = "none";
  body.style.touchAction = "none";
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
}

function unlockPageScroll() {
  const html = document.documentElement;
  const { body } = document;

  html.style.overflow = "";
  body.style.overflow = "";
  html.style.overscrollBehavior = "";
  body.style.touchAction = "";
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  delete body.dataset.scrollLockY;

  window.scrollTo(0, 0);
}

const PreLoaderGate = ({ children }: PreLoaderGateProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ready, setReady] = useState({
    minElapsed: false,
    pageLoaded: false,
    heroSceneReady: false,
  });

  const notifyHeroSceneReady = useCallback(() => {
    setReady((prev) =>
      prev.heroSceneReady ? prev : { ...prev, heroSceneReady: true }
    );
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    lockPageScroll();
    return () => unlockPageScroll();
  }, [isLoading]);

  useEffect(() => {
    if (document.readyState === "complete") {
      setReady((prev) => ({ ...prev, pageLoaded: true }));
    }

    const minTimer = setTimeout(() => {
      setReady((prev) => ({ ...prev, minElapsed: true }));
    }, PRELOADER_MIN_MS);

    const onLoad = () => {
      setReady((prev) => ({ ...prev, pageLoaded: true }));
    };

    if (document.readyState !== "complete") {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    const { minElapsed, pageLoaded, heroSceneReady } = ready;
    if (minElapsed && pageLoaded && heroSceneReady) {
      setIsLoading(false);
    }
  }, [ready]);

  const contextValue = useMemo(
    () => ({ isPreloading: isLoading, notifyHeroSceneReady }),
    [isLoading, notifyHeroSceneReady]
  );

  return (
    <PreloaderContext.Provider value={contextValue}>
      {children}
      <PreLoaderPage show={isLoading} />
    </PreloaderContext.Provider>
  );
};

export default PreLoaderGate;
