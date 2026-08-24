"use client";

import { BriefcaseBusiness, Code2, Home, Send, UserRound, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TerminalMode from "@/components/TerminalMode";

type DockItem = {
  id: string;
  label: string;
  Icon: LucideIcon;
};

const dockItems: DockItem[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "projects", label: "Projects", Icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "about", label: "About", Icon: UserRound },
  { id: "contact", label: "Contact", Icon: Send },
];

export default function Navbar() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportLine = window.scrollY + window.innerHeight * 0.38;
      const current = dockItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)
        .reduce<HTMLElement | null>((active, section) => {
          if (!section) return active;
          return section.offsetTop <= viewportLine ? section : active;
        }, null);

      if (current?.id) setActiveSection(current.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between">
          <Link
            href="#home"
            className="rounded-full border border-[rgba(255,90,0,0.28)] bg-[#ffe7db] px-5 py-2.5 text-sm font-extrabold text-[var(--color-accent)] shadow-lg shadow-orange-950/10 transition-transform duration-300 hover:-translate-y-0.5 md:text-base"
            aria-label="Sarmad home"
          >
            sarmad.dev
          </Link>

          <button
            onClick={() => setTerminalOpen(true)}
            data-cursor="magnetic"
            className="rounded-full border border-[rgba(255,90,0,0.28)] bg-[#ffe7db] px-4 py-2.5 text-sm font-extrabold text-[var(--color-accent)] shadow-lg shadow-orange-950/10 transition-transform duration-300 hover:-translate-y-0.5 md:px-5 md:text-base"
            aria-haspopup="dialog"
            aria-expanded={terminalOpen}
          >
            &lt;/terminal mode&gt;
          </button>
        </div>
      </nav>

      <nav
        aria-label="Section navigation"
        className="fixed bottom-4 left-1/2 z-[80] w-full -translate-x-1/2 px-4 sm:bottom-6"
      >
        <div className="mx-auto flex w-fit max-w-[calc(100vw-5.5rem)] items-center gap-1.5 rounded-full border border-black/5 bg-white/90 px-3 py-2.5 shadow-2xl shadow-orange-950/15 backdrop-blur-xl sm:max-w-none sm:gap-5 sm:px-7 sm:py-3">
          {dockItems.map(({ id, label, Icon }) => {
            const active = activeSection === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                aria-label={label}
                title={label}
                data-cursor="magnetic"
                className={`group relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-[var(--color-text)] transition-all duration-300 sm:h-12 sm:w-12 ${
                  active
                    ? "bg-[var(--color-accent)] text-white shadow-xl shadow-orange-600/30"
                    : "hover:bg-[#fff0e8] hover:text-[var(--color-accent)]"
                }`}
              >
                <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={active ? 2.7 : 2.45} />
                <span className="pointer-events-none absolute bottom-full mb-3 hidden rounded-[6px] bg-[var(--color-text)] px-2.5 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
