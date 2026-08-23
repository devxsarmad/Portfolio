"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, Download, Github, Linkedin, Mail, Mouse, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarmad404",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/devxsarmad",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:sarmadsiddique555@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [showPortrait, setShowPortrait] = useState(true);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[linear-gradient(180deg,#fff8f3_0%,#fff_78%)] px-5 pb-10 pt-24 md:min-h-[720px] md:px-10 md:pb-12 md:pt-28 xl:min-h-[760px]"
    >
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-7 lg:grid-cols-[0.16fr_0.78fr_1.32fr_0.12fr]">
        <motion.div
          className="order-3 mx-auto flex items-center gap-3 lg:order-1 lg:flex-col"
          initial={{ opacity: 0, x: reduceMotion ? 0 : -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              data-cursor="magnetic"
              className="grid h-11 w-11 place-items-center rounded-[8px] bg-[var(--color-text)] text-[var(--color-accent)] shadow-lg shadow-orange-950/10 transition-transform duration-300 hover:-translate-y-1 md:h-12 md:w-12"
            >
              <social.icon size={20} strokeWidth={2.6} />
            </a>
          ))}
          <span className="hidden h-16 w-0.5 bg-[var(--color-accent)] lg:block" />
        </motion.div>

        <motion.div
          className="order-1 mx-auto lg:order-2"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="group relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                    rotate: [0, 1.2, -0.8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[42%_58%_48%_52%/44%_38%_62%_56%] bg-[#dedede] shadow-[0_0_48px_rgba(255,90,0,0.24)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      borderRadius: [
                        "42% 58% 48% 52% / 44% 38% 62% 56%",
                        "47% 53% 43% 57% / 50% 43% 57% 50%",
                        "42% 58% 48% 52% / 44% 38% 62% 56%",
                      ],
                    }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 rounded-[42%_58%_48%_52%/44%_38%_62%_56%] border-[5px] border-[#ffc2ad]" />
            <div className="absolute inset-[8%] overflow-hidden rounded-[40%_60%_50%_50%/46%_40%_60%_54%] bg-[linear-gradient(145deg,#eeeeee,#cfcfcf)] text-center">
              {showPortrait ? (
                <motion.img
                  src="/images/projects/me.jpg"
                  alt="Sarmad Siddique"
                  onError={() => setShowPortrait(false)}
                  className="h-full w-full object-cover object-[50%_28%] grayscale transition-[filter,transform] duration-500 ease-out group-hover:grayscale-0"
                  animate={reduceMotion ? undefined : { scale: [1.03, 1.08, 1.03] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <p className="text-[68px] font-black leading-none text-[#292929] sm:text-[92px] lg:text-[118px]">
                    SS
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,90,0,0.18),transparent_62%)] blur-xl" />
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 text-center lg:order-3 lg:text-left"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-[#ffc2ad] bg-[#fff1ea] px-5 py-2.5 text-base font-extrabold text-[var(--color-accent)] shadow-sm md:text-lg">
            Hello, I&apos;m
          </span>

          <h1 className="mt-5 text-balance text-[clamp(2.9rem,6.2vw,5.7rem)] font-black leading-[0.92] text-[var(--color-text)]">
            <span className="bg-[linear-gradient(90deg,#ff5a00_0%,#8a3d28_48%,#061548_100%)] bg-clip-text text-transparent drop-shadow-[0_8px_0_rgba(255,90,0,0.08)]">
              Sarmad Siddique
            </span>
          </h1>

          <div className="mx-auto mt-3 h-1 w-44 rounded-full bg-[#ffaf91] lg:mx-0" />

          <p className="mt-4 text-[clamp(1.15rem,1.85vw,1.7rem)] font-extrabold leading-tight text-[var(--color-text)]">
            Full Stack AI Developer
          </p>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[var(--color-muted)] lg:mx-0">
            I build intelligent, scalable web applications and AI-powered products using modern full-stack technologies, RAG, LLMs, and agentic workflows.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/images/projects/Sarmad_Full_Stack_AI.pdf"
              data-cursor="magnetic"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-[var(--color-accent)] bg-white px-5 text-base font-extrabold text-[var(--color-accent)] shadow-lg shadow-orange-950/10 transition-transform duration-300 hover:-translate-y-1"
            >
              Download Resume
              <Download size={17} />
            </a>
            <Link
              href="#about"
              data-cursor="magnetic"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-[var(--color-accent)] px-6 text-base font-extrabold text-white shadow-xl shadow-orange-600/25 transition-transform duration-300 hover:-translate-y-1"
            >
              About Me
              <UserRound size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="order-4 mx-auto hidden flex-col items-center gap-3 text-[var(--color-accent)] lg:flex"
          initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          aria-label="Scroll down"
        >
          <Mouse size={28} strokeWidth={2.8} />
          <span className="font-mono text-sm font-bold tracking-[0.22em] [writing-mode:vertical-rl]">
            Scroll Down
          </span>
          <ArrowDownToLine size={18} />
        </motion.a>
      </div>
    </section>
  );
}
