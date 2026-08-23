"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Info, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

type Project = {
  title: string;
  subtitle: string;
  image?: string;
  liveUrl: string;
  details: string;
  tags: string[];
  accent: "ai" | "product" | "health" | "logistics" | "business" | "learning";
};

const projects: Project[] = [
  {
    title: "Mediscribe AI",
    subtitle: "AI-powered healthcare/productivity platform",
    liveUrl: "https://mediscribe-ai-client.vercel.app/",
    details:
      "Next.js and TypeScript product experience with AI chat, streaming responses, OpenAI-compatible workflows, and healthcare-oriented functionality.",
    tags: ["Next.js", "TypeScript", "AI Chat", "Streaming"],
    accent: "ai",
  },
  {
    title: "TaskForge",
    subtitle: "Task and project management application",
    liveUrl: "https://task-forge-murex.vercel.app/",
    details:
      "Modern full-stack productivity app focused on task workflows, project organization, scalable UI patterns, and product-grade user experience.",
    tags: ["React", "Next.js", "Node.js", "Product UX"],
    accent: "product",
  },
  {
    title: "Ultraship TMS",
    subtitle: "Transportation management system",
    image: "/images/projects/ultraship.png",
    liveUrl: "https://www.ultraship.ai/",
    details:
      "Logistics platform modules including dashboards, calendar scheduling, email campaign workflows, GraphQL services, and operational data handling.",
    tags: ["Next.js", "GraphQL", "MongoDB", "shadcn/ui"],
    accent: "logistics",
  },
  {
    title: "Shiftly",
    subtitle: "Shift management platform",
    image: "/images/projects/shiftly_.png",
    liveUrl: "#coming-soon",
    details:
      "Role-based workforce platform with scheduling flows, NestJS and GraphQL backend structure, Prisma, PostgreSQL, and Socket.IO notifications.",
    tags: ["Next.js", "NestJS", "Prisma", "Socket.IO"],
    accent: "product",
  },
  {
    title: "Dynomo",
    subtitle: "Multi-business management platform",
    image: "/images/projects/dynomo.png",
    liveUrl: "https://dynomo-landing.vercel.app/",
    details:
      "MERN platform for business registration, business-type workflows, restaurant menu management, CRUD operations, and secure backend APIs.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    accent: "business",
  },
  {
    title: "MastryHub",
    subtitle: "E-learning platform",
    image: "/images/projects/mastryhub.png",
    liveUrl: "https://masteryhub.net/",
    details:
      "Course browsing, enrollment flows, user dashboards, progress tracking, and API integrations for a production-facing learning platform.",
    tags: ["React", "Next.js", "Express", "MongoDB"],
    accent: "learning",
  },
  {
    title: "LIS / Healthcare Platform",
    subtitle: "Laboratory information workflows",
    liveUrl: "https://lis-landing.vercel.app/",
    details:
      "Healthcare software experience across laboratory modules, reporting, billing-oriented workflows, typed frontend/backend systems, and production delivery.",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    accent: "health",
  },
];

const projectsPerPage = 4;

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <div className="absolute inset-x-8 top-5 text-center">
        <span className="mx-auto inline-flex rounded-full border border-[#ffd0bb] bg-[#fff6f1] px-3 py-1 text-[10px] font-bold text-[var(--color-accent)]">
          {project.accent === "ai" ? "AI Workflow" : project.accent === "health" ? "Healthcare System" : "Product Platform"}
        </span>
        <h3 className="mx-auto mt-3 max-w-md text-2xl font-black leading-tight text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[var(--color-muted)]">
          {project.subtitle}
        </p>
      </div>
      <div className="absolute bottom-5 left-1/2 grid w-[68%] -translate-x-1/2 gap-2">
        <div className="h-12 rounded-[8px] border border-[#ffd0bb] bg-[#fff6f1]" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-9 rounded-[8px] bg-[#ffe1d1]" />
          <div className="h-9 rounded-[8px] bg-[#fff1ea]" />
          <div className="h-9 rounded-[8px] bg-[#ffe1d1]" />
        </div>
      </div>
      <Sparkles className="absolute right-8 top-8 text-[var(--color-accent)]" size={22} />
    </div>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(page * projectsPerPage, page * projectsPerPage + projectsPerPage);

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 0), totalPages - 1));
  };

  return (
    <section id="projects" className="relative z-10 bg-[linear-gradient(180deg,#fff_0%,#fff8f3_100%)] py-14 md:py-20">
      <div className="section-shell">
        <motion.div
          className="mb-9 text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#ffb99f]" />
            <p className="text-sm font-bold text-[var(--color-text)]">Portfolio</p>
            <span className="h-px w-12 bg-[#ffb99f]" />
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight md:text-5xl">
            <span className="bg-[linear-gradient(90deg,#ff5a00_0%,#8a3d28_48%,#171936_100%)] bg-clip-text text-transparent">
              Recent Works and Projects
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#ff8b4a]" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid gap-6 lg:grid-cols-2"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {currentProjects.map((project, index) => (
              <motion.article
                key={project.title}
                data-cursor="magnetic"
                className="group overflow-hidden rounded-[12px] border border-[#ffc2ad] bg-white shadow-xl shadow-orange-950/10 transition-transform duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
              >
                <div className="relative h-[145px] overflow-hidden border-b border-[#ffe1d1] bg-[#fff6f1] md:h-[205px]">
                  <ProjectPreview project={project} />
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-black leading-tight text-[var(--color-text)] md:text-xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveUrl.startsWith("#") ? (
                      <span className="inline-flex min-h-10 items-center justify-center rounded-[8px] bg-[#e9edf5] px-4 text-sm font-black text-[#798094]">
                        Coming Soon
                      </span>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[8px] bg-[var(--color-accent)] px-4 text-sm font-black text-white shadow-lg shadow-orange-600/25 transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        Demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[8px] border-2 border-[var(--color-accent)] bg-white px-4 text-sm font-black text-[var(--color-accent)] shadow-lg shadow-orange-950/5 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Details
                      <Info size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[7px] bg-[#e9edf5] px-4 text-sm font-black text-[#7b8497] transition-colors enabled:hover:bg-[#dde3ee] disabled:opacity-70"
          >
            <ChevronLeft size={16} />
            Prev
          </button>
          <span className="rounded-[7px] bg-white px-5 py-2.5 text-sm font-black text-[var(--color-text)] shadow-lg shadow-orange-950/10">
            Page {page + 1} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages - 1}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[7px] bg-[#ff9f16] px-4 text-sm font-black text-white shadow-lg shadow-orange-600/20 transition-colors enabled:hover:bg-[var(--color-accent)] disabled:opacity-60"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {selectedProject &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
              className="relative max-h-[88vh] w-[min(1180px,96vw)] overflow-hidden rounded-[18px] bg-white shadow-2xl shadow-black/25"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-[#f0f1f4] text-[#9aa0ad] transition-colors hover:bg-[#ffe1d1] hover:text-[var(--color-accent)]"
                aria-label="Close project details"
              >
                <X size={24} strokeWidth={2.6} />
              </button>

              <div className="max-h-[88vh] overflow-y-auto p-6 md:p-8">
                <h3 className="pr-16 text-3xl font-black leading-tight text-[var(--color-text)] md:text-5xl">
                  {selectedProject.title}
                </h3>
                <div className="mt-6 h-px w-full bg-[var(--color-text)]" />

                <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1fr]">
                  <div className="relative h-[260px] overflow-hidden rounded-[10px] border border-[#ffd0bb] bg-[#fff6f1] shadow-xl shadow-orange-950/10 md:h-[360px]">
                    <ProjectPreview project={selectedProject} />
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--color-accent)]">
                      {selectedProject.subtitle}
                    </p>
                    <h4 className="mt-4 text-2xl font-black leading-tight text-black md:text-4xl">
                      {selectedProject.title}
                    </h4>
                    <p className="mt-5 text-lg leading-8 text-black md:text-2xl md:leading-10">
                      {selectedProject.details}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#ffd0bb] bg-[#fff8f3] px-3 py-1.5 text-sm font-semibold text-[var(--color-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-[var(--color-text)]" />

                <div className="mt-6 flex justify-end">
                  {selectedProject.liveUrl.startsWith("#") ? (
                    <span className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[#e9edf5] px-6 text-base font-black text-[#798094]">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-[#ff9f16] px-7 text-lg font-black text-white shadow-lg shadow-orange-600/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent)]"
                    >
                      Visit Project
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
