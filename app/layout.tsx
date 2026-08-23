import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Technical Skills | Expertise",
  description:
    "Full Stack AI Developer building production-grade React, Next.js, Node.js, TypeScript, RAG, LLM, and agentic AI applications.",
  icons: {
    icon: "/images/projects/me.jpg",
    shortcut: "/images/projects/me.jpg",
    apple: "/images/projects/me.jpg",
  },
  keywords: [
    "Sarmad Siddique",
    "Full Stack AI Developer",
    "Full Stack AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Generative AI",
    "RAG",
    "AI Agents",
  ],
  openGraph: {
    title: "Technical Skills | Expertise",
    description:
      "Production-grade full-stack applications with AI capabilities, RAG, LLMs, and agentic workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills | Expertise",
    description:
      "Full Stack AI Developer focused on React, Next.js, Node.js, TypeScript, RAG, LLMs, and AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
