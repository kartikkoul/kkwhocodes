"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useLenis } from "./LenisContext";
import { usePreloader } from "./PreloaderContext";

/** Show after ~one wheel tick */
const SHOW_AT = 96;
/** Hide slightly above top to avoid flicker */
const HIDE_AT = 24;

export default function ScrollToTop() {
  const lenis = useLenis();
  const { isPreloading } = usePreloader();
  const [visible, setVisible] = useState(false);

  const getScrollY = useCallback(() => {
    if (lenis) return lenis.scroll;
    return document.documentElement.scrollTop;
  }, [lenis]);

  useEffect(() => {
    const update = () => {
      const y = getScrollY();
      setVisible((prev) => {
        if (y <= HIDE_AT) return false;
        if (y >= SHOW_AT) return true;
        return prev;
      });
    };

    if (lenis) {
      lenis.on("scroll", update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    update();

    return () => {
      if (lenis) {
        lenis.off("scroll", update);
      } else {
        window.removeEventListener("scroll", update);
      }
    };
  }, [getScrollY, lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldShow = visible && !isPreloading;

  return (
    <AnimatePresence>
      {shouldShow ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          data-cursor="hover"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.92 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-[0_0_24px_rgba(150,85,254,0.35)] backdrop-blur-md sm:bottom-8 sm:right-8"
          whileHover={{
            scale: 1.08,
            borderColor: "rgba(89, 190, 184, 0.55)",
            boxShadow: "0 0 28px rgba(89, 190, 184, 0.45)",
          }}
          whileTap={{ scale: 0.94 }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(89,190,184,0.35) 0%, transparent 55%), radial-gradient(circle at 70% 80%, rgba(150,85,254,0.4) 0%, transparent 50%)",
            }}
            aria-hidden
          />
          <svg
            viewBox="0 0 24 24"
            className="relative h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
