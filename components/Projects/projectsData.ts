export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
  year: string;
  /** Upload to public/assets/videos/projects/ — muted loop .webm */
  video: string;
};

export const projects: Project[] = [
  {
    id: "myknowledgebase",
    title: "My Knowledgebase",
    tagline: "Personalise a chatbot with your own PDFs and ask questions answered strictly from your documents.",
    description: "My Knowledgebase is a full-stack Retrieval-Augmented Generation (RAG) based AI-powered application that lets users upload PDF documents to build a personal knowledge base, then ask questions that are answered grounded from the uploaded content only.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "LangChain", "Pinecone", "PostgreSQL", "Prisma", "OpenRouter", "Docker", "AWS", "Vercel"],
    href: "https://github.com/kartikkoul/rag-pdf-qna",
    accent: "#9655fe",
    year: "2026",
    video: "/assets/videos/projects/my-knowledge-base.webm",
  },
  {
    id: "sketchmates",
    title: "SketchMates",
    tagline: "Draw what you imagine with your mates in real-time 😜",
    description:
      "Sketchmates lets you draw whatever you imagine: together, in real time. Perfect for just goofing around with friends.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fabric.js", "Framer Motion", "Node.js", "Express", "WebSockets", "Prisma", "PostgreSQL", "Turborepo", "AWS", "Railway"],
    href: "https://github.com/kartikkoul/sketchmates",
    accent: "#00B2FF",
    year: "2026",
    video: "/assets/videos/projects/sketchmates.webm",
  }
];
