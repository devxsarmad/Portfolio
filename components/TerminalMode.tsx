"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BatteryCharging, Terminal, X } from "lucide-react";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

type TerminalLine = {
  type: "prompt" | "output" | "error";
  text: string;
};

const prompt = "root @ /d/sarmad404/portfolio (Macintosh)";

const helpCommands = [
  ["ABOUT", "Displays information about Sarmad Siddique."],
  ["BACK", "Closes terminal mode and returns to the portfolio."],
  ["CLEAR", "Clears the command data."],
  ["CONTACT", "Lists email, GitHub, LinkedIn, and resume links."],
  ["DATE", "Displays the current date and time."],
  ["EMAIL", "Opens an email draft."],
  ["GITHUB", "Opens GitHub profile."],
  ["HELP", "Displays this help message."],
  ["LINKEDIN", "Opens LinkedIn profile."],
  ["PROJECTS", "Displays selected projects."],
  ["RESUME", "Opens the resume PDF."],
  ["SKILLS", "Displays the technology stack."],
  ["WHOAMI", "Displays the current user."],
];

const initialLines: TerminalLine[] = [
  { type: "output", text: "Microsoft Windows [10.15.7]" },
  { type: "output", text: "(c) Microsoft Corporation. All rights reserved." },
  { type: "output", text: "" },
  { type: "output", text: "Type HELP to view available commands." },
];

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function TerminalMode({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const commands = useMemo(
    () => ({
      about: [
        "Sarmad Siddique is a Full Stack AI Developer.",
        "Focus: React, Next.js, Node.js, TypeScript, LLM APIs, RAG, and agentic AI workflows.",
        "Experience: 3+ years building full-stack production applications, including healthcare and product workflows.",
      ],
      contact: [
        "EMAIL => sarmadsiddique555@gmail.com",
        "GITHUB => github.com/devxsarmad",
        "LINKEDIN => linkedin.com/in/sarmad404",
        "RESUME => /images/projects/Sarmad_Full_Stack_AI.pdf",
      ],
      projects: [
        "MEDISCRIBE AI => AI-powered healthcare/productivity platform.",
        "LIS / HEALTHCARE PLATFORM => Laboratory and healthcare workflow software.",
        "TASKFORGE => Full-stack task and project management application.",
        "ULTRASHIP / SHIFTLY / DYNOMO / MASTRYHUB => Additional shipped full-stack work.",
      ],
      skills: [
        "AI / LLM => OpenAI APIs, LLM APIs, Prompt Engineering, Generative AI, RAG, Embeddings, Vector Databases, AI Agents, Tool Calling, LangChain, LangGraph.",
        "FULL STACK => TypeScript, JavaScript, React, Next.js, Node.js, Express.js, NestJS.",
        "DATABASES => PostgreSQL, MongoDB, Prisma, Mongoose, Pinecone.",
        "FRONTEND => Tailwind CSS, Redux Toolkit, React Hook Form, Zod, shadcn/ui.",
        "BACKEND / INFRA => REST APIs, GraphQL, JWT, Docker, Git, Vercel, Render.",
      ],
    }),
    []
  );

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose, open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const appendLines = (nextLines: TerminalLine[]) => {
    setLines((current) => [...current, ...nextLines]);
  };

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    const nextPrompt: TerminalLine = { type: "prompt", text: `${prompt}\n$ ${rawCommand}` };

    if (!command) {
      appendLines([nextPrompt]);
      return;
    }

    setHistory((current) => [rawCommand, ...current.filter((item) => item !== rawCommand)].slice(0, 20));
    setHistoryIndex(-1);

    if (command === "clear") {
      setLines(initialLines);
      return;
    }

    if (command === "back" || command === "exit") {
      appendLines([nextPrompt, { type: "output", text: "Closing terminal mode..." }]);
      window.setTimeout(onClose, 220);
      return;
    }

    if (command === "help") {
      appendLines([
        nextPrompt,
        ...helpCommands.map(([name, description]) => ({
          type: "output" as const,
          text: `${name} => ${description}`,
        })),
      ]);
      return;
    }

    if (command === "about" || command === "projects" || command === "skills" || command === "contact") {
      appendLines([nextPrompt, ...commands[command].map((text) => ({ type: "output" as const, text }))]);
      return;
    }

    if (command === "date") {
      appendLines([nextPrompt, { type: "output", text: new Date().toLocaleString() }]);
      return;
    }

    if (command === "whoami") {
      appendLines([nextPrompt, { type: "output", text: "sarmad404 - Full Stack AI Developer" }]);
      return;
    }

    if (command === "github") {
      appendLines([nextPrompt, { type: "output", text: "Opening GitHub profile..." }]);
      openExternal("https://github.com/devxsarmad");
      return;
    }

    if (command === "linkedin") {
      appendLines([nextPrompt, { type: "output", text: "Opening LinkedIn profile..." }]);
      openExternal("https://linkedin.com/in/sarmad404");
      return;
    }

    if (command === "email") {
      appendLines([nextPrompt, { type: "output", text: "Opening email client..." }]);
      window.location.href = "mailto:sarmadsiddique555@gmail.com";
      return;
    }

    if (command === "resume") {
      appendLines([nextPrompt, { type: "output", text: "Opening resume..." }]);
      openExternal("/images/projects/Sarmad_Full_Stack_AI.pdf");
      return;
    }

    appendLines([
      nextPrompt,
      {
        type: "error",
        text: `${rawCommand}: command not found. Type HELP to view available commands.`,
      },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!history.length) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(nextIndex);
      setInput(nextIndex === -1 ? "" : history[nextIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Terminal mode"
            className="flex h-[min(680px,82vh)] w-[min(1180px,94vw)] flex-col overflow-hidden rounded-[8px] border-2 border-white/80 bg-[#17223f] shadow-2xl shadow-black/35"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/40 bg-[#060912] px-5 text-white">
              <Terminal size={22} className="text-white/90" />
              <p className="truncate px-4 text-center text-xl font-bold md:text-2xl">
                root @ /d/sarmad404/portfolio
              </p>
              <div className="flex items-center gap-3">
                <span className="hidden items-center gap-1 text-sm text-white/90 sm:flex">
                  <BatteryCharging size={18} />
                  68%
                </span>
                <span className="h-7 w-7 rounded-full bg-[#14244c]" />
                <span className="h-7 w-7 rounded-full bg-[#14244c]" />
                <button
                  onClick={onClose}
                  className="grid h-7 w-7 place-items-center rounded-full bg-[#14244c] text-black transition-colors hover:bg-[var(--color-accent)]"
                  aria-label="Close terminal"
                >
                  <X size={17} />
                </button>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="min-h-0 flex-1 overflow-y-auto bg-[#17223f]/95 px-3 py-3 font-mono text-[15px] leading-7 text-white md:px-5 md:text-[19px] md:leading-9"
              onMouseDown={() => inputRef.current?.focus()}
            >
              {lines.map((line, index) => {
                if (line.type === "prompt") {
                  const [pathLine, commandLine] = line.text.split("\n");
                  return (
                    <div key={`${line.text}-${index}`} className="mb-1">
                      <p>
                        <span className="font-bold text-[#55df76]">root</span>{" "}
                        <span className="font-bold text-[#ffd84d]">@ /d/sarmad404/portfolio</span>{" "}
                        <span className="font-bold text-[#3f71ff]">(Macintosh)</span>
                      </p>
                      <p>
                        <span className="font-bold text-[#ffbf31]">$</span>{" "}
                        <span>{commandLine?.replace("$ ", "")}</span>
                      </p>
                      <span className="sr-only">{pathLine}</span>
                    </div>
                  );
                }

                return (
                  <p
                    key={`${line.text}-${index}`}
                    className={line.type === "error" ? "text-[#ff8b4a]" : "text-white/92"}
                  >
                    {line.text || "\u00a0"}
                  </p>
                );
              })}

              <form onSubmit={handleSubmit} className="mt-1">
                <p>
                  <span className="font-bold text-[#55df76]">root</span>{" "}
                  <span className="font-bold text-[#ffd84d]">@ /d/sarmad404/portfolio</span>{" "}
                  <span className="font-bold text-[#3f71ff]">(Macintosh)</span>
                </p>
                <label className="flex items-center gap-3">
                  <span className="font-bold text-[#ffbf31]">$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    spellCheck={false}
                    className="min-w-0 flex-1 bg-transparent text-white outline-none caret-white"
                    aria-label="Terminal command"
                  />
                </label>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
