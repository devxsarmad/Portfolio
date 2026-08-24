"use client";

import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const contactCards = [
  {
    label: "Email",
    value: "sarmadsiddique555@gmail.com",
    href: "mailto:sarmadsiddique555@gmail.com",
    action: "Write a mail",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sarmad404",
    href: "https://linkedin.com/in/sarmad404",
    action: "Connect",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/devxsarmad",
    href: "https://github.com/devxsarmad",
    action: "View profile",
    icon: Github,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        "service_mzhk3ii",
        "template_iqtbms6",
        {
          from_name: form.name,
          from_email: form.email,
          subject: `Portfolio inquiry from ${form.name}`,
          message: form.project,
          to_email: "sarmadsiddique555@gmail.com",
        },
        "vGbhYfW4K2g6cn9jN"
      );

      if (result.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", project: "" });
        window.setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-[#f7f7f7] py-16 md:py-22">
      <div className="section-shell">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">
            <span className="bg-[linear-gradient(90deg,#ff5a00_0%,#8a3d28_48%,#171936_100%)] bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-[#ff9f7c]" />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-7 text-center">
              <h3 className="text-2xl font-black text-black md:text-3xl">Get in touch</h3>
              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[linear-gradient(90deg,#ff5a00_0%,#171936_100%)]" />
            </div>

            <div className="grid gap-4 lg:h-[448px] lg:grid-rows-3">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="magnetic"
                  className="group flex items-center gap-4 rounded-[14px] border border-[var(--color-accent)] bg-white p-4 text-left shadow-xl shadow-slate-950/5 transition-transform duration-300 hover:-translate-y-1 md:p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] bg-[#fff1ea] text-[var(--color-accent)] md:h-14 md:w-14">
                    <card.icon size={26} strokeWidth={2.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <h4 className="text-lg font-black text-black md:text-xl">{card.label}</h4>
                    <p className="mt-1 break-words text-sm font-semibold leading-5 text-[var(--color-text)] md:text-base">
                      {card.value}
                    </p>
                    <span className="mt-3 inline-flex min-h-9 items-center justify-center gap-1.5 rounded-[9px] bg-[var(--color-accent)] px-4 text-sm font-black text-white shadow-lg shadow-orange-600/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                      {card.action}
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-7 text-center">
              <h3 className="text-2xl font-black text-black md:text-3xl">Write me your project</h3>
              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[linear-gradient(90deg,#ff5a00_0%,#171936_100%)]" />
            </div>

            <form onSubmit={handleSubmit} className="grid gap-7">
              <label className="relative block">
                <span className="absolute -top-4 left-6 rounded-[8px] bg-white px-4 py-1.5 text-base font-black text-black shadow-lg shadow-slate-950/10">
                  Your Name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  disabled={status === "sending"}
                  className="h-16 w-full rounded-[12px] border-2 border-[#ffc9b5] bg-white px-6 pt-2 text-base font-medium text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text)]/75 focus:border-[var(--color-accent)] md:text-lg"
                  placeholder="Enter your name"
                />
              </label>

              <label className="relative block">
                <span className="absolute -top-4 left-6 rounded-[8px] bg-white px-4 py-1.5 text-base font-black text-black shadow-lg shadow-slate-950/10">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  disabled={status === "sending"}
                  className="h-16 w-full rounded-[12px] border-2 border-[#ffc9b5] bg-white px-6 pt-2 text-base font-medium text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text)]/75 focus:border-[var(--color-accent)] md:text-lg"
                  placeholder="Enter your email"
                />
              </label>

              <label className="relative block">
                <span className="absolute -top-4 left-6 rounded-[8px] bg-white px-4 py-1.5 text-base font-black text-black shadow-lg shadow-slate-950/10">
                  Project
                </span>
                <textarea
                  required
                  value={form.project}
                  onChange={(event) => setForm((current) => ({ ...current, project: event.target.value }))}
                  disabled={status === "sending"}
                  className="min-h-[180px] w-full resize-none rounded-[12px] border-2 border-[#ffc9b5] bg-white px-6 py-10 text-base font-medium text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text)]/75 focus:border-[var(--color-accent)] md:text-lg"
                  placeholder="Tell me about your project..."
                />
              </label>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-[10px] border border-green-500/25 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-700"
                >
                  <CheckCircle size={18} />
                  Message sent successfully. I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-[10px] border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-700"
                >
                  <AlertCircle size={18} />
                  Message failed to send. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                data-cursor="magnetic"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[12px] bg-[var(--color-accent)] px-7 text-lg font-black text-white shadow-xl shadow-orange-600/25 transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    Sending
                    <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
