"use client";

import { FormEvent, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { motion } from "framer-motion";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-accent-teal/60 focus:ring-1 focus:ring-accent-teal/30";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const ContactForm = () => {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const resetTurnstile = () => {
    setTurnstileToken(null);
    turnstileRef.current?.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!turnstileToken) {
      setStatus("error");
      setError("Please complete the verification check.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
          turnstileToken,
        }),
      });

      const json = (await res.json()) as { error?: string; ok?: boolean };

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
      resetTurnstile();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      resetTurnstile();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] bg-black/40 p-6 sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
    >
      <motion.div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-[0.12] blur-[60px]"
        style={{ backgroundColor: "#9655fe" }}
        aria-hidden
      />

      <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-white/40">
        send(message);
      </p>

      <motion.div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden
      >
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </motion.div>

      <motion.div className="space-y-4">
        <motion.div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-[0.65rem] text-white/45">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            disabled={status === "sending"}
          />
        </motion.div>

        <motion.div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[0.65rem] text-white/45">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === "sending"}
          />
        </motion.div>

        <motion.div>
          <label
            htmlFor="message"
            className="mb-1.5 block font-mono text-[0.65rem] text-white/45"
          >
            message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="What's on your mind?"
            className={`${inputClass} resize-y min-h-[8rem]`}
            disabled={status === "sending"}
          />
        </motion.div>

        <motion.div>
          <p className="mb-2 font-mono text-[0.65rem] text-white/45">verification</p>
          {turnstileSiteKey ? (
            <Turnstile
              ref={turnstileRef}
              siteKey={turnstileSiteKey}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{ theme: "dark", size: "flexible" }}
            />
          ) : (
            <p className="font-mono text-xs text-red-400">
              Turnstile site key missing. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
            </p>
          )}
        </motion.div>
      </motion.div>

      {status === "success" && (
        <motion.p
          className="mt-4 font-mono text-xs text-accent-teal"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
        >
          Message sent✌🏻. I&apos;ll get back to you soon😎.
        </motion.p>
      )}

      {status === "error" && error && (
        <motion.p
          className="mt-4 font-mono text-xs text-red-400"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={status === "sending" || !turnstileToken || !turnstileSiteKey}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-accent-violetLight/80 bg-accent-violetLight/15 px-5 py-3 font-sans text-sm font-medium text-white transition-shadow duration-300 disabled:cursor-not-allowed disabled:opacity-50"
        style={{ boxShadow: "0 0 24px #9655fe33" }}
        whileHover={
          status === "sending" ? undefined : { scale: 1.02, boxShadow: "0 0 32px #9655fe55" }
        }
        whileTap={status === "sending" ? undefined : { scale: 0.98 }}
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
