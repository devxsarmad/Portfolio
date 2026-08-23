"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Code2, Database, Layers, Server } from "lucide-react";

const groups = [
  {
    title: "AI / LLM",
    icon: BrainCircuit,
    skills: [
      "OpenAI APIs",
      "LLM APIs",
      "Prompt Engineering",
      "Generative AI",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
      "AI Agents",
      "Tool Calling",
      "Agentic Workflows",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Full Stack",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "NestJS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Vector Databases", "Pinecone"],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Hook Form", "Zod", "shadcn/ui"],
  },
  {
    title: "Backend / Infrastructure",
    icon: Server,
    skills: ["REST APIs", "GraphQL", "JWT Authentication", "Docker", "Git", "Vercel", "Render"],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative z-10 border-t border-[rgba(255,90,0,0.12)] bg-[rgba(255,225,209,0.74)] py-16 md:py-22">
      <div className="section-shell">
        <div className="mb-9 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow mb-3">02 Skill System</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
              AI first, full-stack underneath.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            A compact technical stack for building modern web products with LLM integrations, retrieval workflows, typed APIs, and polished user interfaces.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <motion.article
              key={group.title}
              className={`premium-border rounded-[8px] bg-[rgba(255,255,255,0.9)] p-4 transition-colors duration-300 hover:border-[rgba(255,90,0,0.42)] ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[rgba(255,90,0,0.1)] text-[var(--color-accent)]">
                    <group.icon size={16} />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <span className="font-mono text-xs text-[var(--color-muted)]">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[rgba(255,90,0,0.22)] bg-[rgba(255,255,255,0.7)] px-2.5 py-1 text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
