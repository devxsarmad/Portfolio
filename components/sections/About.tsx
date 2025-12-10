"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding creative solutions to complex challenges",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F172A]">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate frontend developer with a focus on building exceptional digital experiences
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#06B6D4]">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Frontend Developer with <strong>2.5+ years of experience</strong> specializing 
                in building modern web applications. Currently working at a medical billing company, 
                where I'm developing a comprehensive Laboratory Information System (LIS) using React, 
                TypeScript, and Next.js.
              </p>
              <p>
                My expertise lies in creating <strong>responsive, user-friendly interfaces</strong> with 
                a strong focus on performance and scalability. I'm passionate about clean code architecture 
                and building reusable component libraries.
              </p>
              <p>
                I'm also expanding my skill set into <strong>full-stack development</strong>, learning 
                backend technologies like NestJS, GraphQL, Prisma, and PostgreSQL to become a more 
                versatile developer.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#06B6D4]">What I Bring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1E293B] p-6 rounded-lg border border-gray-700 hover:border-[#06B6D4] transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-[#06B6D4] mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom - Current Status
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#06B6D4]/10 to-[#0891B2]/10 border border-[#06B6D4]/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Currently Open to <span className="text-gradient">New Opportunities</span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm looking for exciting opportunities at innovative companies where I can contribute 
            to impactful projects and continue growing as a developer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-[#1E293B] rounded-full text-sm border border-gray-700">
              🚀 Available: January 2026
            </span>
            <span className="px-4 py-2 bg-[#1E293B] rounded-full text-sm border border-gray-700">
              📍 Location: Lahore, Pakistan
            </span>
            <span className="px-4 py-2 bg-[#1E293B] rounded-full text-sm border border-gray-700">
              💼 Open to: Remote/Hybrid
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}