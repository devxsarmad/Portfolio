"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Texas Digital Hub",
    location: "Lahore, Punjab, Pakistan",
    period: "Jun 2025 - Present",
    duration: "Current",
    type: "Full-time · On-site",
    responsibilities: [
      "Developed scalable full-stack healthcare solutions using React.js, TypeScript, Node.js, Express.js, and MongoDB",
      "Built and maintained secure RESTful APIs for handling medical records, lab tests, insurance data, and patient workflows",
      "Designed responsive and reusable frontend components using React.js and Tailwind CSS",
      "Integrated frontend applications with backend services and third-party healthcare systems",
      "Optimized application performance by reducing unnecessary API calls and improving component rendering",
      "Collaborated with backend developers, UI/UX designers, and QA teams in Agile workflows",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Agile/Scrum",
    ],
    achievements: [
      "Delivered secure healthcare workflows with scalable full-stack architecture",
      "Improved performance and reliability across patient and lab systems",
      "Contributed to architecture planning, debugging, deployment support, and code reviews",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Ultraship TMS (Remote-US-Based)",
    location: "California, United States (Remote)",
    period: "Dec 2024 - Jun 2025",
    duration: "7 months",
    type: "Full-time · Remote",
    responsibilities: [
      "Worked on a logistics management platform using Next.js, Node.js, Express.js, GraphQL, and MongoDB",
      "Developed backend APIs and integrated frontend modules for dashboards, calendars, and email campaign systems",
      "Implemented role-based access control and authentication workflows",
      "Contributed to the Master Module for managing commodities, charge types, and operational data",
      "Built scalable and responsive user interfaces using TypeScript and shadcn/ui",
      "Improved maintainability through modular architecture and reusable components",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "GraphQL",
      "MongoDB",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    achievements: [
      "Delivered integrated frontend and backend modules for transportation workflows",
      "Implemented secure access control and authentication flows",
      "Improved maintainability with modular and reusable architecture",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Utecho",
    location: "Faisalabad, Punjab, Pakistan",
    period: "Apr 2023 - Nov 2024",
    duration: "1 yr 8 months",
    type: "Full-time",
    responsibilities: [
      "Led frontend development using React.js, Material UI, Ant Design, and Tailwind CSS",
      "Assisted in backend API integration and database communication using Node.js and Express.js",
      "Developed reusable UI components and integrated secure RESTful APIs",
      "Worked closely with backend teams to ensure smooth frontend-backend communication",
      "Participated in debugging, testing, Git-based version control, and deployment activities",
      "Improved application performance and UI consistency across multiple projects",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    achievements: [
      "Led frontend delivery across multiple client projects",
      "Improved consistency and responsiveness of production interfaces",
      "Strengthened frontend-backend collaboration and integration quality",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Xavier-tech",
    location: "Faisalabad, Punjab, Pakistan",
    period: "Feb 2023 - Apr 2023",
    duration: "3 months",
    type: "Full-time",
    responsibilities: [
      "Developed responsive web pages and reusable React components",
      "Converted UI/UX designs into functional frontend interfaces",
      "Improved responsiveness, accessibility, and cross-browser compatibility",
      "Collaborated with senior developers to enhance frontend performance and code quality",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    achievements: [
      "Delivered reusable frontend components for rapid product iteration",
      "Improved interface accessibility and browser compatibility",
      "Contributed to frontend quality through close team collaboration",
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