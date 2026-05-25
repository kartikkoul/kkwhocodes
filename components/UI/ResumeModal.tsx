"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { resumePdfTitle, resumePdfUrl } from "@/lib/resume";
import { useLenis } from "./LenisContext";
import { useReducedMotion } from "../Utils/useReducedMotion";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const reducedMotion = useReducedMotion();
  const [showPdf, setShowPdf] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen) return;

    lenis?.stop();
    document.documentElement.classList.add("modal-open");

    return () => {
      document.documentElement.classList.remove("modal-open");
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    if (!isOpen) {
      setShowPdf(false);
      return;
    }

    if (reducedMotion) {
      setShowPdf(true);
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, reducedMotion]);

  const handleDialogAnimationComplete = () => {
    if (isOpen) {
      setShowPdf(true);
      closeRef.current?.focus({ preventScroll: true });
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 cursor-default bg-black/85"
            aria-label="Close resume viewer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex h-[min(90vh,52rem)] w-full max-w-4xl transform-gpu flex-col overflow-hidden rounded-lg border border-accent-violet/40 bg-[#0a0618] shadow-[0_0_3rem_#9655fe33] will-change-transform"
            initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.98 }
            }
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onAnimationComplete={handleDialogAnimationComplete}
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <h2
                id={titleId}
                className="font-mono text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm"
              >
                {resumePdfTitle}
              </h2>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={resumePdfUrl}
                  download
                  className="hidden rounded border border-white/15 px-3 py-1.5 font-mono text-[0.7rem] text-white/70 transition-colors hover:border-accent-violet/50 hover:text-white sm:inline-flex"
                >
                  download()
                </a>
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/15 px-3 py-1.5 font-mono text-[0.7rem] text-white/70 transition-colors hover:border-accent-teal/50 hover:text-accent-teal"
                >
                  open tab()
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/15 font-mono text-lg leading-none text-white/70 transition-colors hover:border-accent-violet hover:text-white"
                  aria-label="Close resume"
                >
                  ×
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 bg-black/50">
              {showPdf ? (
                <iframe
                  src={`${resumePdfUrl}#view=FitH`}
                  title={resumePdfTitle}
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-[0.2em] text-white/40"
                  aria-hidden
                >
                  Loading PDF…
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ResumeModal;
