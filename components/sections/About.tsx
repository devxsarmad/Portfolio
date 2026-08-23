"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Headphones, Send, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Experience",
    value: "3 years+",
    icon: Sparkles,
  },
  {
    label: "Completed",
    value: "14+ Projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "AI Focused",
    value: "RAG + Agents",
    icon: Trophy,
  },
  {
    label: "Support",
    value: "Everyday",
    icon: Headphones,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative z-10 bg-white py-14 md:py-18">
      <div className="section-shell">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-[#ffb99f]" />
            <p className="text-base font-extrabold text-[var(--color-text)] md:text-lg">Introducing myself</p>
            <span className="h-px w-12 bg-[#ffb99f]" />
          </div>

          <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">
            <span className="bg-[linear-gradient(90deg,#ff5a00_0%,#8a3d28_48%,#171936_100%)] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-[#ff9f7c]" />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="min-h-[135px] rounded-[14px] border-2 border-r-[#a9a9a9] border-t-[#a9a9a9] border-b-[#a9a9a9] border-l-[#f2f2f2] bg-white p-5 text-center shadow-xl shadow-slate-950/5"
            >
              <stat.icon className="mx-auto text-[var(--color-accent)]" size={28} strokeWidth={2.4} />
              <h3 className="mt-4 text-lg font-black text-black">{stat.label}</h3>
              <p className="mt-4 text-base font-extrabold text-[var(--color-text)]">{stat.value}</p>
            </article>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-5xl text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="text-2xl font-black text-black md:text-3xl">Who I am</h3>
          <p className="mx-auto mt-6 max-w-4xl text-balance text-base font-medium leading-8 text-black md:text-xl md:leading-9">
            I am a Full Stack AI Developer focused on building intelligent, production-ready web applications with React, Next.js, Node.js, TypeScript, LLM APIs, RAG, and agentic workflows. My work spans healthcare software, productivity platforms, logistics systems, dashboards, APIs, and database-backed product workflows. I care about scalable architecture, clean user experiences, reliable backend systems, and practical AI features that solve real product problems.
          </p>

          <Link
            href="#contact"
            data-cursor="magnetic"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] bg-[var(--color-accent)] px-7 text-lg font-black text-white shadow-xl shadow-orange-600/25 transition-transform duration-300 hover:-translate-y-1"
          >
            Hire Me
            <Send size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
