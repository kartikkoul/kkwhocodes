import type { Metadata, Viewport } from "next";

import type { ReactNode } from "react";

import JsonLd from "@/components/SEO/JsonLd";

import Layout from "../components/Layout/Layout";

import { siteConfig, siteUrl } from "@/lib/site";

import { bricolage, ibmPlexMono, plusJakarta } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  applicationName: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,

    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${bricolage.variable} ${ibmPlexMono.variable}`}
    >
      <body className={`${plusJakarta.className} antialiased`}>
        <JsonLd />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
