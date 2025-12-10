"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`${
            scrolled
              ? "bg-[#0F172A]/80 backdrop-blur-md shadow-lg shadow-[#06B6D4]/10"
              : "bg-transparent"
          } rounded-2xl border border-gray-800/50 transition-all duration-300`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <Link
              href="#home"
              className="text-2xl font-bold relative group"
            >
              <span className="text-gradient">S</span>
              <span className="text-white">armad</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 bg-[#1E293B]/50 rounded-full px-2 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-[#06B6D4] text-white"
                      : "text-gray-300 hover:text-white hover:bg-[#1E293B]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#06B6D4]/50 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1E293B] text-white hover:bg-[#06B6D4] transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-6">
          <div className="bg-[#0F172A]/95 backdrop-blur-md rounded-2xl border border-gray-800/50 p-6 shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-[#06B6D4] text-white"
                      : "text-gray-300 hover:bg-[#1E293B] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-[#06B6D4]/50 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}