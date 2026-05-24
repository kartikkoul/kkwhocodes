"use client";

import { createContext, useContext } from "react";

interface PreloaderContextValue {
  isPreloading: boolean;
  notifyHeroSceneReady: () => void;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  isPreloading: false,
  notifyHeroSceneReady: () => {},
});

export function usePreloader() {
  return useContext(PreloaderContext);
}

export default PreloaderContext;
