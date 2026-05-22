import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Layout from "../components/Layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Koul | Software Engineer",
  description: "Portfolio of Kartik Koul - Software Engineer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
