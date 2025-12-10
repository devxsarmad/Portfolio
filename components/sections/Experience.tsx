"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Team Lead – Front-End Developer",
    company: "Texas Lab",
    location: "Lahore, Punjab, Pakistan",
    period: "Jun 2025 - Present",
    duration: "7 months",
    type: "Full-time · On-site",
    responsibilities: [
      "Set up the front-end architecture and codebase from scratch using React, TypeScript, and Tailwind CSS",
      "Developed a scalable healthcare platform that streamlines lab operations and enables clinics, providers, and patients to manage medical records, tests, and insurance data efficiently",
      "Integrated Rest APIs for secure, real-time communication between the platform and Texas-based lab systems",
      "Leading a front-end team, ensuring clean code practices, performance optimization, and a seamless user experience",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Healthcare Systems",
    ],
    achievements: [
      "Built healthcare platform from scratch",
      "Established frontend architecture and best practices",
      "Led frontend team successfully",
    ],
  },
  {
    title: "Frontend Developer",
    company: "UltraShip TMS",
    location: "California, United States (Remote)",
    period: "Dec 2024 - Jun 2025",
    duration: "7 months",
    type: "Full-time · Remote",
    responsibilities: [
      "Building modern, scalable web applications using Next.js, TypeScript, and GraphQL",
      "Implementing seamless integrations with backend systems for optimized performance",
      "Leveraging cutting-edge CSS frameworks like Shadcn to create responsive, user-friendly interfaces",
      "Collaborating with a global team to deliver high-quality software solutions",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    achievements: [
      "Delivered scalable web applications for TMS platform",
      "Successfully collaborated with global remote team",
      "Implemented modern UI/UX patterns",
    ],
  },
  {
    title: "JavaScript Developer",
    company: "Utecho",
    location: "Faisalabad, Punjab, Pakistan",
    period: "Apr 2023 - Dec 2024",
    duration: "1 yr 9 months",
    type: "Full-time",
    responsibilities: [
      "Skilled in React.js, Tailwind CSS, and React Bootstrap for building responsive, user-friendly web applications",
      "Adept at integrating APIs to enhance functionality and user experience",
      "Strong focus on creating clean, maintainable code",
      "Collaborated with cross-functional teams to deliver projects on time",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Bootstrap",
      "Next.js",
      "Redux.js",
      "API Integration",
    ],
    achievements: [
      "Developed multiple client-facing applications",
      "Established expertise in modern React ecosystem",
      "Delivered projects consistently on schedule",
    ],
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  if (!mounted) {
    return null;
  }

  const exp = experiences[currentIndex];

  return (
    <section id="experience" className="py-20 bg-[#0F172A]">
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        {/* Timeline Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#06B6D4] w-12 h-3"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E293B] px-3 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none">
                {experience.company}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E293B] rotate-45"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Experience Card */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="w-full"
            >
              <div className="bg-[#020617] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#06B6D4]/50 transition-colors duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#06B6D4]/10 to-[#0891B2]/10 p-8 border-b border-gray-800">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#06B6D4]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-7 h-7 text-[#06B6D4]" />
                      </div>
                      <span className="px-4 py-1.5 bg-[#06B6D4]/10 text-[#06B6D4] text-xs rounded-full font-semibold border border-[#06B6D4]/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-2xl text-[#06B6D4] font-semibold mb-4">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#06B6D4]" />
                      <span>{exp.period} · {exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#06B6D4]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-bold text-[#06B6D4] mb-4 uppercase tracking-wider">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-gray-400 text-sm flex gap-3 leading-relaxed"
                            >
                              <span className="text-[#06B6D4] mt-1.5 text-xs">●</span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Achievements */}
                      {exp.achievements && (
                        <div>
                          <h4 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-wider">
                            Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className="text-gray-400 text-sm flex gap-3 leading-relaxed"
                              >
                                <span className="text-green-400 mt-1 text-xs">✓</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold text-[#22D3EE] mb-4 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 + 0.5 }}
                              className="px-3 py-1.5 bg-[#1E293B] text-gray-300 text-xs rounded-md border border-gray-700 hover:border-[#06B6D4] transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Showing {currentIndex + 1} of {experiences.length} experiences
          </p>
        </div>
      </div>
    </section>
  );
}