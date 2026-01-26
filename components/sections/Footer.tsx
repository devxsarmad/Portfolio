import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Sarmad</h3>
            <p className="text-gray-400 mb-4">
              Software Engineer crafting beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/devxsarmad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#06B6D4] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sarmad404"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#06B6D4] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sarmadsiddique555@gmail.com"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#06B6D4] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lahore, Punjab, Pakistan</li>
              <li>
                <a
                  href="mailto:sarmadsiddique555@gmail.com"
                  className="hover:text-[#06B6D4] transition-colors"
                >
                  sarmadsiddique555@gmail.com
                </a>
              </li>
              <li>Available for opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sarmad. All rights reserved.
          </p>
          {/* <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" fill="currentColor" /> using Next.js & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
}