"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import PreLoaderPage, { PRELOADER_MIN_MS } from "./PreLoaderPage";
import PreloaderContext from "./PreloaderContext";

/** Preloader is tied to the hero 3D scene: only run on the home page. */
function useIsHomePage() {
  const pathname = usePathname();
  return pathname === "/";
}

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
  const isHome = useIsHomePage();
  const [isLoading, setIsLoading] = useState(isHome);
  const [ready, setReady] = useState({
    minElapsed: false,
    pageLoaded: false,
    heroSceneReady: false,
  });

  useEffect(() => {
    if (!isHome) {
      setIsLoading(false);
    }
  }, [isHome]);

  const notifyHeroSceneReady = useCallback(() => {
    setReady((prev) =>
      prev.heroSceneReady ? prev : { ...prev, heroSceneReady: true }
    );
  }, []);

  useEffect(() => {
    if (!isHome || !isLoading) return;

    lockPageScroll();
    return () => unlockPageScroll();
  }, [isHome, isLoading]);

  useEffect(() => {
    if (!isHome) return;

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
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const { minElapsed, pageLoaded, heroSceneReady } = ready;
    if (minElapsed && pageLoaded && heroSceneReady) {
      setIsLoading(false);
    }
  }, [ready, isHome]);

  const showPreloader = isHome && isLoading;

  const contextValue = useMemo(
    () => ({ isPreloading: showPreloader, notifyHeroSceneReady }),
    [showPreloader, notifyHeroSceneReady]
  );

  return (
    <PreloaderContext.Provider value={contextValue}>
      {children}
      <PreLoaderPage show={showPreloader} />
    </PreloaderContext.Provider>
  );
};

export default PreLoaderGate;
