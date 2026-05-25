"use client";

import { useEffect } from "react";
import StatusPage from "@/components/UI/StatusPage";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="ERR"
      monoLabel="unhandled exception"
      title="Something went wrong"
      description="This page hit an unexpected error. Try again, or head back home while I patch things up."
      onRetry={reset}
    />
  );
}
