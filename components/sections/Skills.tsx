"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Server,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#06B6D4",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    color: "#22D3EE",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "shadcn/ui", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "CSS-in-JS", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "#0891B2",
    skills: [
      { name: "NestJS", level: 30 },
      { name: "GraphQL", level: 40 },
      { name: "Prisma", level: 45 },
      { name: "PostgreSQL", level: 39 },
      { name: "REST APIs", level: 60 },
    ],
  },
  {
    title: "State Management",
    icon: Server,
    color: "#06B6D4",
    skills: [
      { name: "Redux Toolkit", level: 85 },
      { name: "React Query", level: 80 },
      { name: "Zustand", level: 75 },
      { name: "Context API", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "#22D3EE",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "React Hook Form", level: 88 },
      { name: "Zod Validation", level: 85 },
      { name: "Socket.IO", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
];

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < skillCategories.length) {
      setDirection(newDirection);
      setCurrentPage(newPage);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const category = skillCategories[currentPage];

  return (
    <section id="skills" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Book Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Book Spine Effect */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-linear-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-sm shadow-2xl"></div>

          {/* Page Counter */}
          <div className="text-center relative z-9 mb-8">
            <span className="text-gray-400 text-sm z-9">
              Page {currentPage + 1} of {skillCategories.length}
            </span>
            <div className="flex justify-center gap-2 mt-2">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-[#06B6D4] w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Book Pages */}
          {/* Book Pages */}
          <div
            className="relative h-[600px] md:h-[600px]"
            style={{ perspective: "1000px" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { duration: 0.6, ease: "easeInOut" },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Mobile View - Single Card */}
                <div className="md:hidden h-full">
                  <div className="h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl shadow-2xl border border-gray-800 p-6">
                    <div className="h-full flex flex-col">
                      {/* Category Icon & Title */}
                      <div className="mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <category.icon
                            className="w-7 h-7"
                            style={{ color: category.color }}
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {category.title}
                        </h3>
                        <div
                          className="w-16 h-1 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                      </div>

                      {/* Skills List */}
                      <div className="flex-1 space-y-4 overflow-y-auto">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-300 font-medium text-sm">
                                {skill.name}
                              </span>
                              <span
                                className="font-bold text-sm"
                                style={{ color: category.color }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: idx * 0.1 + 0.4,
                                }}
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(to right, ${category.color}, #22D3EE)`,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View - Book Pages */}
                <div className="hidden md:block h-full">
                  {/* Left Page */}
                  <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-l-2xl shadow-2xl border border-r-0 border-gray-800 p-8">
                    <div className="h-full flex flex-col">
                      {/* Category Icon & Title */}
                      <div className="mb-8">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <category.icon
                            className="w-8 h-8"
                            style={{ color: category.color }}
                          />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">
                          {category.title}
                        </h3>
                        <div
                          className="w-20 h-1 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                      </div>

                      {/* Decorative Lines */}
                      <div className="flex-1 opacity-10">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="h-8 border-b border-gray-700"
                          ></div>
                        ))}
                      </div>

                      {/* Page Number */}
                      <div className="text-right text-gray-600 text-sm mt-4">
                        {currentPage * 2 + 1}
                      </div>
                    </div>
                  </div>

                  {/* Right Page */}
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-[#0F172A] to-[#1E293B] rounded-r-2xl shadow-2xl border border-l-0 border-gray-800 p-8">
                    <div className="h-full flex flex-col">
                      {/* Skills List */}
                      <div className="flex-1 space-y-6">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-300 font-medium">
                                {skill.name}
                              </span>
                              <span
                                className="font-bold"
                                style={{ color: category.color }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: idx * 0.1 + 0.4,
                                }}
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(to right, ${category.color}, #22D3EE)`,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Page Number */}
                      <div className="text-right text-gray-600 text-sm mt-4">
                        {currentPage * 2 + 2}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => paginate(-1)}
              disabled={currentPage === 0}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentPage === 0
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-[#1E293B] text-white hover:bg-[#06B6D4]"
              }`}
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Previous
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={currentPage === skillCategories.length - 1}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentPage === skillCategories.length - 1
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-[#1E293B] text-white hover:bg-[#06B6D4]"
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tech Stack Icons Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "NestJS",
              "GraphQL",
              "Prisma",
              "PostgreSQL",
              "Redux",
              "Git",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 bg-[#1E293B] rounded-lg border border-gray-700 hover:border-[#06B6D4] transition-all duration-300 cursor-default"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
