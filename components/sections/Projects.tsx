"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projectCategories = ["All", "Multi-Business", "E-Learning", "TMS", "Workforce System"];

const projects = [
  {
    title: "Dynomo - Multi-Business Management Platform",
    category: "Multi-Business",
    description:
      "A comprehensive web platform enabling different businesses (restaurants, salons, stores) to register, manage operations, and control their business digitally through customized dashboards.",
    image: "/images/projects/dynomo.png",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs"],
    features: [
      "Multi-business registration with type selection",
      "Dynamic dashboards based on business type",
      "Restaurant menu management system",
      "CRUD operations for business items",
      "Category and pricing management",
      "Real-time availability control",
    ],
    role: "Built the complete business registration flow, business type selection module, and restaurant-side features including menu management and CRUD operations.",
    liveUrl: "https://dynomo-landing.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "MastryHub - E-Learning Platform",
    category: "E-Learning",
    description:
      "An interactive e-learning platform where users can browse courses, enroll in programs, and track their learning progress through a personalized dashboard with comprehensive course management.",
    image: "/images/projects/mastryhub.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    features: [
      "User registration and authentication system",
      "Course browsing with detailed information",
      "One-click course enrollment system",
      "Personal learning dashboard",
      "Progress tracking and status monitoring",
      "Module and lesson management",
    ],
    role: "Developed the complete user flow including authentication, course listing pages, enrollment system, and user dashboard with progress tracking functionality.",
    liveUrl: "https://masteryhub.net/",
    githubUrl: "#",
  },
  {
    title: "Ultraship - Transportation Management System",
    category: "TMS",
    description:
      "A full-featured TMS platform connecting Shippers, Brokers, and Carriers to manage load posting, assignment, communication, and tracking throughout the shipping lifecycle.",
    image: "/images/projects/ultraship.png",
    technologies: ["Next.js", "TypeScript", "GraphQL", "shadcn/ui", "Tailwind CSS", "Calendar Integration"],
    features: [
      "Email campaign module with bulk sending",
      "Custom email templates and targeting",
      "Interactive calendar for load scheduling",
      "Real-time shipment timeline visualization",
      "Campaign status tracking",
      "Date-based filtering and scheduling",
    ],
    role: "Built the Email Campaign Module (bulk emails, templates, recipient targeting, API integration) and Calendar Module (scheduling UI, date filtering, shipment visualization).",
    liveUrl: "https://www.ultraship.ai/",
    githubUrl: "#",
  },
  {
    title: "Shiftly - Shift Management Platform",
    category: "Workforce System",
    description:
      "A comprehensive platform connecting delivery drivers with business owners for seamless shift management, featuring real-time notifications, role-based access, and intuitive scheduling interfaces.",
    image: "/images/projects/shiftly_.png",
    technologies: ["Next.js", "NestJS", "GraphQL", "Prisma", "PostgreSQL", "Socket.IO", "TypeScript"],
    features: [
      "Real-time Socket.IO notification system",
      "GraphQL API with NestJS backend",
      "Mobile-first responsive design",
      "Role-based access control (Drivers & Business Owners)",
      "Shift scheduling and application management",
      "Authentication and authorization flows",
    ],
    role: "Built the complete full-stack application including real-time notifications with Socket.IO, GraphQL APIs using NestJS and Prisma, authentication flows, and mobile-first responsive UI.",
    liveUrl: "#coming-soon",
    githubUrl: "#",
    status: "Coming Soon",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
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

  const project = filteredProjects[currentIndex];

  return (
    <section id="projects" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications I've built for production use
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#06B6D4] text-white shadow-lg shadow-[#06B6D4]/30"
                  : "bg-[#1E293B] text-gray-300 hover:bg-[#1E293B]/80 hover:text-white border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {filteredProjects.map((proj, index) => (
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
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E293B] px-3 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none z-10">
                {proj.title.split(' - ')[0]}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E293B] rotate-45"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Project Card */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentIndex}`}
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
                {/* Header with Project Image */}
                <div className="relative h-80 bg-gradient-to-br from-[#06B6D4]/10 to-[#0891B2]/10 overflow-hidden group">
                  {/* Project Screenshot */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 bg-[#06B6D4]/90 backdrop-blur-sm text-white text-xs rounded-full font-semibold border border-[#06B6D4]/20 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge - Show if Coming Soon */}
                  {project.status === "Coming Soon" && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1.5 bg-yellow-500/90 backdrop-blur-sm text-white text-xs rounded-full font-semibold border border-yellow-400/20 shadow-lg animate-pulse">
                        🚀 Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3 z-10">
                    {project.liveUrl !== "#coming-soon" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-5 h-5 text-[#06B6D4]" />
                      </a>
                    ) : (
                      <div className="w-10 h-10 bg-gray-600/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-not-allowed shadow-lg" title="Coming Soon">
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-[#06B6D4]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Features */}
                    <div>
                      <h4 className="text-sm font-bold text-[#06B6D4] mb-4 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-gray-400 text-sm flex gap-3 leading-relaxed"
                          >
                            <span className="text-[#06B6D4] mt-1.5 text-xs">●</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Role & Technologies */}
                    <div className="space-y-6">
                      {/* My Role */}
                      <div>
                        <h4 className="text-sm font-bold text-green-400 mb-3 uppercase tracking-wider">
                          My Role
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.role}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold text-[#22D3EE] mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 + 0.3 }}
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
            Showing {currentIndex + 1} of {filteredProjects.length} projects
          </p>
        </div>

        {/* View More GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/devxsarmad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-full font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}