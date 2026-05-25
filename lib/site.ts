import { socialLinks } from "@/components/Contact/contactData";

/** Production site URL — override with SITE_URL or NEXT_PUBLIC_SITE_URL in env. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://kartikkoul.com";

export const siteConfig = {
  url: siteUrl.replace(/\/$/, ""),
  name: "Kartik Koul",
  title: "Kartik Koul | Software Engineer",
  shortTitle: "Kartik Koul",
  description:
    "Software engineer building full-stack web apps, real-time systems, and AI-powered products with React, Next.js, and Node.js. Open to full-time roles and freelance projects.",
  jobTitle: "Software Engineer",
  locale: "en_US",
  twitterHandle: "@kkwhocodes",
  ogImageAlt: "Kartik Koul — Software Engineer portfolio",
  keywords: [
    "Kartik Koul",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "RAG",
    "AI",
    "Portfolio",
  ],
  sameAs: socialLinks.map((link) => link.href),
} as const;
