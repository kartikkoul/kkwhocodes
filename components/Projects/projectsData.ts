export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
  year: string;
  /** Upload to public/assets/images/projects/ — e.g. portfolio.webp */
  image: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "kkwhocodes",
    tagline: "This cosmic portfolio",
    description:
      "A Next.js portfolio with smooth scroll, custom cursor, 3D hero scene, and motion-driven sections — built to feel interactive, not static.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    href: "https://github.com/kkwhocodes/kkwhocodes",
    accent: "#9655fe",
    year: "2025",
    image: "/assets/images/projects/portfolio.webp",
  },
  {
    id: "rag-agent",
    title: "RAG Agent",
    tagline: "Docs → answers pipeline",
    description:
      "An agentic RAG system that ingests documents, retrieves context, and answers with grounded responses — LangChain orchestration with streaming UI.",
    tags: ["Python", "LangChain", "FastAPI", "React"],
    href: "https://github.com/kkwhocodes",
    accent: "#59BEB8",
    year: "2025",
    image: "/assets/images/projects/rag-agent.webp",
  },
  {
    id: "realtime-app",
    title: "Pulse Chat",
    tagline: "Realtime rooms",
    description:
      "Multi-room chat with WebSockets, presence indicators, and optimistic UI — designed for low-latency collaboration.",
    tags: ["Node.js", "Socket.io", "MongoDB", "Redux"],
    href: "https://github.com/kkwhocodes",
    accent: "#00B2FF",
    year: "2024",
    image: "/assets/images/projects/realtime-app.webp",
  },
  {
    id: "devtool",
    title: "API Forge",
    tagline: "Mock & test APIs",
    description:
      "Spin up mock REST endpoints, inspect payloads, and export OpenAPI specs — speeds up frontend integration.",
    tags: ["Express", "TypeScript", "PostgreSQL"],
    href: "https://github.com/kkwhocodes",
    accent: "#c53683",
    year: "2024",
    image: "/assets/images/projects/devtool.webp",
  },
];
