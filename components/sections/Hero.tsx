"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Sarmad</span>
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-6">
              <span className="text-[#06B6D4]">Frontend Developer</span>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Building modern, responsive web applications with React, TypeScript, 
              and Next.js. Specialized in creating seamless user experiences and 
              scalable frontend architectures.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-[#06B6D4]">2.5+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#06B6D4]">15+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#06B6D4]">5+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="#projects"
                className="px-8 py-3 bg-[#06B6D4] text-white rounded-lg font-semibold hover:bg-[#0891B2] transition-all duration-300 glow-effect"
              >
                View My Work
              </Link>
             <a
                href="/Sarmad Siddique-CV.pdf"
                download="Sarmad-Siddique-CV.pdf"
                className="px-8 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/devxsarmad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-400 hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sarmad404"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-400 hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sarmadsiddique555@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-400 hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-[#1E293B] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`const developer = {
  name: "Sarmad",
  role: "Frontend Developer",
  location: "Lahore, Pakistan",
  experience: "2.5+ years",
  
  expertise: {
    primary: [
      "React", 
      "TypeScript",
      "Next.js",
      "Tailwind CSS"
    ],
    expanding: [
      "NestJS",
      "GraphQL", 
      "Prisma",
      "PostgreSQL"
    ]
  },
  
  currentFocus: "Building LIS",
  availableFor: "New Opportunities",
  
  contact: {
    email: "sarmadsiddique555@gmail.com",
    linkedin: "https://www.linkedin.com/in/sarmad404/"
  }
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-[#06B6D4]" size={32} />
      </motion.div>
    </section>
  );
}