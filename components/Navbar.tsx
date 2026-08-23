"use client";

import Link from "next/link";
import { useState } from "react";
import TerminalMode from "@/components/TerminalMode";

export default function Navbar() {
  const [terminalOpen, setTerminalOpen] = useState(false);

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

      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
