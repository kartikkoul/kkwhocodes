import type { Metadata } from "next";
import StatusPage from "@/components/UI/StatusPage";

export const metadata: Metadata = {
  title: "404 — Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      monoLabel="404 not found"
      title="Page not found"
      description="This route doesn't exist on kartikkoul.com — maybe it moved, or it never shipped."
    />
  );
}
