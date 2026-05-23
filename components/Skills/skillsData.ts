export type SkillCategory = {
  id: string;
  label: string;
  /** Code-style identifier shown in the card header */
  symbol: string;
  accent: string;
  /** Tailwind grid placement on large screens */
  span?: "wide" | "tall" | "default";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    symbol: "programming",
    accent: "#9655fe",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    id: "development",
    label: "Development",
    symbol: "development",
    accent: "#59BEB8",
    span: "wide",
    items: [
      "React",
      "Redux",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "WebSockets",
      "REST APIs"
    ],
  },
  {
    id: "ui",
    label: "UI Design",
    symbol: "uiDesign",
    accent: "#c53683",
    items: ["Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    id: "databases",
    label: "Databases / ORM",
    symbol: "dataLayer",
    accent: "#00b2ff",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Prisma", "Redis"],
  },
  {
    id: "devops",
    label: "DevOps",
    symbol: "devOps",
    accent: "#f7a501",
    items: ["Docker", "AWS", "GCP", "Turborepo", "CI/CD", "Vercel"],
  },
  {
    id: "tools",
    label: "Tools",
    symbol: "tooling",
    accent: "#8f8dfe",
    span: "wide",
    items: [
      "Bash",
      "VS Code",
      "Cursor",
      "Git",
      "GitHub",
      "npm",
      "Postman",
      "Linux",
    ],
  },
  {
    id: "ai",
    label: "AI",
    symbol: "ai",
    accent: "#21d83e",
    items: ["Generative AI", "Multimodal", "RAG", "Agentic AI"],
  },
  {
    id: "ai-frameworks",
    label: "AI Frameworks",
    symbol: "aiFrameworks",
    accent: "#4734c1",
    items: ["LangChain", "LangGraph"],
  },
];
