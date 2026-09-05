"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Info, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
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
    image: "/images/projects/mediscribe_AI.png",
    details:
      "Next.js and TypeScript product experience with AI chat, streaming responses, OpenAI-compatible workflows, and healthcare-oriented functionality.",
    tags: ["Next.js", "TypeScript", "AI Chat", "Streaming"],
    accent: "ai",
  },
  {
    title: "Tixora AI",
    subtitle: "AI-assisted ticket and project operations platform",
    liveUrl: "https://tixora-ai-iota.vercel.app/",
    image: "/images/projects/tixora_AI.png",

    details:
      "Full-stack project operations platform with organizations, project members, ticket boards, task assignment flows, activity tracking, AI-assisted workspace chat, secure cookie-based authentication, and PostgreSQL-backed workflows.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AI Chat"],
    accent: "ai",
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

function PreviewCanvas({
  children,
  large = false,
  className = "",
}: {
  children: ReactNode;
  large?: boolean;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute left-1/2 top-1/2 h-[520px] w-[920px] origin-center -translate-x-1/2 -translate-y-1/2 ${
          large ? "scale-[0.36] md:scale-[0.58]" : "scale-[0.32] md:scale-[0.43]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ProjectPreview({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.02]"
      />
    );
  }

  if (project.title === "Tixora AI") {
    return (
      <PreviewCanvas large={large} className="bg-[#f7f9fc] text-[#17233f]">
        <div className="grid h-full w-full grid-cols-[190px_1fr] bg-[#f7f9fc] text-[#17233f]">
          <aside className="border-r border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] border border-blue-100 bg-white text-3xl font-black text-blue-600 shadow-sm">
                  ▥
                </span>
                <p className="text-3xl font-black leading-none">Tixora-AI</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-slate-200 text-2xl text-slate-500">
                ‹
              </span>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-blue-50 text-xl font-black text-blue-600">
                T
              </span>
              <div>
                <p className="text-xl font-black">No organization</p>
                <p className="text-lg font-bold text-slate-500">Workspace</p>
              </div>
            </div>

            <p className="mt-10 text-sm font-black uppercase text-slate-500">Navigate</p>
            <nav className="mt-5 space-y-3 text-lg font-black text-slate-600">
              {["Board", "My tasks", "Calendar", "Activity", "Ask Tixora"].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-[8px] px-3 py-2">
                  <span className="h-5 w-5 rounded-[5px] border-2 border-slate-300" />
                  {item}
                </div>
              ))}
              <div className="flex items-center gap-4 rounded-[8px] border-l-4 border-blue-600 bg-blue-50 px-3 py-3 text-blue-600">
                <span className="h-5 w-5 rounded-[5px] border-2 border-blue-500" />
                Settings
              </div>
            </nav>

            <p className="mt-8 text-sm font-black uppercase text-slate-500">Projects</p>
            <div className="mt-4 rounded-[8px] border border-dashed border-slate-200 p-4 text-lg font-bold text-slate-500">
              No projects yet.
            </div>
          </aside>

          <main className="p-10">
            <div className="mx-auto max-w-[760px]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                <span className="mr-3 text-blue-600">●</span>
                Let&apos;s get you set up
              </p>
              <h4 className="mt-6 text-5xl font-black leading-tight text-[#17233f]">
                A home for your team&apos;s best work.
              </h4>
              <p className="mt-5 text-2xl font-semibold text-slate-500">
                A few details now. A more organized workday ahead.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-8">
                {[
                  ["1", "Organization", "Create your workspace"],
                  ["2", "Members", "Bring your team together"],
                  ["3", "Project", "Start something great"],
                ].map(([step, title, text], index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full border text-xl font-black ${
                        index === 0
                          ? "border-blue-100 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {step}
                    </span>
                    <div>
                      <p className="text-xl font-black">{title}</p>
                      <p className="text-base font-semibold text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-[14px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="grid h-16 w-16 place-items-center rounded-[12px] border border-blue-100 bg-blue-50 text-4xl font-black text-blue-600">
                      ▤
                    </span>
                    <h5 className="mt-6 text-4xl font-black">Create organization</h5>
                    <p className="mt-4 text-xl font-semibold text-slate-500">
                      Give your team a shared space for projects, people, and progress.
                    </p>
                  </div>
                  <p className="text-base font-bold text-slate-500">Step 1 of 3</p>
                </div>

                <div className="mt-8">
                  <p className="text-lg font-black">Organization name</p>
                  <div className="mt-3 rounded-[10px] border border-slate-200 px-5 py-4 text-xl font-semibold text-slate-400">
                    Example: Acme Operations
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <span className="rounded-[10px] bg-blue-600 px-9 py-4 text-xl font-black text-white shadow-lg shadow-blue-500/20">
                    Create organization →
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </PreviewCanvas>
    );
  }

  if (project.title === "Mediscribe AI") {
    return (
      <PreviewCanvas large={large} className="bg-[#050505] text-white">
        <div className="h-full w-full bg-[#050505] p-6 text-white">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex gap-3">
              <span className="rounded-[8px] bg-[#f5a400] px-4 py-2 text-xl font-black text-black">
                Medical Scribe AI
              </span>
              <span className="rounded-[8px] border border-white/20 px-4 py-2 text-xl font-bold text-white/70">
                PHI sanitized
              </span>
            </div>
            <h4 className="mt-4 text-4xl font-black leading-none">Clinical note workspace</h4>
          </div>
          <div className="min-w-[270px] rounded-[8px] border border-white/15 bg-white/5 px-5 py-3 text-xl font-bold text-white/80">
            Ayesha Khan (MS-10294)
          </div>
        </div>

        <div className="mt-7 grid grid-cols-4 gap-4">
          {["Patient", "MRN", "Age", "Visit"].map((item, index) => (
            <div key={item} className="rounded-[10px] bg-white/7 p-5">
              <p className="text-sm font-black uppercase text-white/45">{item}</p>
              <p className="mt-3 truncate text-xl font-black text-white/85">
                {["Ayesha Khan", "MS-10294", "34", "Primary care"][index]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-4 gap-4">
          {["Capture", "Transcript", "SOAP draft", "Review"].map((item, index) => (
            <div
              key={item}
              className={`rounded-[10px] border p-5 ${
                index === 0 ? "border-[#f5a400] bg-[#f5a400] text-black" : "border-white/15 bg-white/5 text-white/55"
              }`}
            >
              <p className="text-xl font-black">{index + 1} {item}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-[1fr_0.28fr] gap-6">
          <div className="rounded-[12px] border border-white/12 bg-white/7 p-6">
            <p className="text-2xl font-black">Recording</p>
            <div className="mt-4 grid h-40 place-items-center rounded-[10px] border border-dashed border-[#f5a400]/70 bg-black">
              <div className="text-center">
                <p className="text-5xl font-black">00:00</p>
                <p className="mt-3 text-xl text-white/55">Microphone ready</p>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] border border-white/12 bg-white/7 p-6">
            <p className="text-2xl font-black">Pipeline</p>
            <div className="mt-5 space-y-3">
              {["Recording", "Transcript", "SOAP"].map((item) => (
                <div key={item} className="rounded-[8px] border border-white/10 bg-black px-4 py-3 text-lg font-bold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (project.title === "LIS / Healthcare Platform") {
    return (
      <PreviewCanvas large={large} className="bg-[linear-gradient(135deg,#ffffff_0%,#f4efff_48%,#eadcff_100%)] text-[#111827]">
      <div className="h-full w-full bg-[linear-gradient(135deg,#ffffff_0%,#f4efff_48%,#eadcff_100%)] p-6 text-[#111827]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-[#5848f6] text-2xl font-black text-white shadow-lg shadow-violet-500/25">
              L
            </span>
            <span className="text-3xl font-black text-[#5848f6]">LIS</span>
          </div>
          <div className="flex gap-12 text-xl font-bold text-slate-600">
            <span>Features</span>
            <span>Integration</span>
            <span>Pricing</span>
          </div>
          <span className="rounded-[12px] bg-[#5848f6] px-8 py-4 text-xl font-black text-white">
            Sign In
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-[720px] text-center">
          <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-[22px] bg-[#5848f6] text-4xl font-black text-white shadow-xl shadow-violet-500/30">
            L
          </div>
          <h4 className="text-6xl font-black leading-[1.04] tracking-tight text-[#111827]">
            Modern <span className="text-[#5848f6]">Laboratory</span>
            <br />
            Information System
          </h4>
          <p className="mx-auto mt-8 max-w-2xl text-2xl font-semibold leading-tight text-slate-500">
            Streamline laboratory operations with order management, analyzer connectivity, and reporting.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <span className="rounded-[14px] bg-[#5848f6] px-12 py-5 text-2xl font-black text-white shadow-lg shadow-violet-500/20">
              Get Started
            </span>
            <span className="rounded-[14px] border border-violet-100 bg-white px-12 py-5 text-2xl font-black text-[#5848f6] shadow">
              Watch Demo
            </span>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-10 text-center">
            {["10K+", "50+", "99.9%"].map((item) => (
              <div key={item}>
                <p className="text-4xl font-black text-[#8b68ca]">{item}</p>
                <p className="mt-2 text-lg font-bold text-slate-500">
                  {item === "10K+" ? "Tests Managed" : item === "50+" ? "Integrations" : "Uptime"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </PreviewCanvas>
    );
  }

  if (project.title === "TaskForge") {
    return (
      <PreviewCanvas large={large} className="bg-[#f8fafc] text-[#111827]">
      <div className="h-full w-full bg-[#f8fafc] p-6 text-[#111827]">
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <div className="flex items-center gap-5">
            <span className="grid h-16 w-16 place-items-center rounded-[12px] bg-[#111827] text-3xl font-black text-white">
              ✓
            </span>
            <div>
              <p className="text-3xl font-black leading-none">TaskForge</p>
              <p className="mt-2 text-xl font-semibold text-slate-500">Hiring assessment dashboard</p>
            </div>
          </div>
          <span className="rounded-full bg-indigo-50 px-6 py-2 text-xl font-black text-indigo-600">
            Production-style build
          </span>
        </div>

        <div className="mt-10 flex items-end justify-between gap-8">
          <div>
            <h4 className="text-5xl font-black leading-none">Task dashboard</h4>
            <p className="mt-5 text-2xl font-semibold text-slate-500">
              Plan, prioritize, and ship work from a focused task manager.
            </p>
          </div>
          <span className="rounded-[12px] bg-[#111827] px-8 py-4 text-2xl font-black text-white">+ Add task</span>
        </div>

        <div className="mt-12 grid grid-cols-5 gap-5">
          {[
            ["Total tasks", "1"],
            ["Active tasks", "0"],
            ["Completed", "1"],
            ["Completion", "100%"],
            ["Weather", "21°C"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xl font-bold text-slate-500">{label}</p>
              <p className="mt-6 text-5xl font-black text-[#111827]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-[1fr_0.38fr_0.2fr] gap-5">
            <div className="rounded-[12px] border border-slate-200 px-5 py-4 text-2xl font-semibold text-slate-400">
              Search by title
            </div>
            <div className="grid grid-cols-3 rounded-[12px] bg-slate-100 p-1.5 text-center text-xl font-black text-slate-500">
              <span className="rounded-[9px] bg-white py-3 text-[#111827]">All</span>
              <span className="py-3">Active</span>
              <span className="py-3">Done</span>
            </div>
            <div className="rounded-[12px] border border-slate-200 px-4 py-4 text-xl font-black text-slate-600">
              Priority
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[14px] border border-emerald-200 bg-emerald-50 p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-2xl text-white">✓</span>
              <span className="text-3xl font-black text-slate-500 line-through">Test task</span>
            </div>
            <span className="text-xl font-black text-rose-500">delete</span>
          </div>
          <div className="mt-8 flex gap-4 text-xl font-black">
            <span className="rounded-full bg-amber-100 px-6 py-2 text-amber-700">medium</span>
            <span className="rounded-full bg-emerald-100 px-6 py-2 text-emerald-700">completed</span>
            <span className="px-3 py-2 text-slate-500">Jul 23, 2026</span>
          </div>
        </div>
      </div>
      </PreviewCanvas>
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

  useEffect(() => {
    document.body.classList.toggle("project-modal-open", Boolean(selectedProject));

    return () => {
      document.body.classList.remove("project-modal-open");
    };
  }, [selectedProject]);

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
                <div className="relative h-[170px] overflow-hidden border-b border-[#ffe1d1] bg-[#fff6f1] md:h-[235px]">
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
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
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
                    <ProjectPreview project={selectedProject} large />
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
