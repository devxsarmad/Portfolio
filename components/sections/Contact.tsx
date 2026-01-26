"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        "service_mzhk3ii",      // Replace with your Service ID
        "template_iqtbms6",     // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sarmadsiddique555@gmail.com",
        },
        "vGbhYfW4K2g6cn9jN"        // Replace with your Public Key
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email me directly.");
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A]">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any inquiries or opportunities. I'm
              always open to discussing new projects and ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:sarmadsiddique555@gmail.com"
                    className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                  >
                    sarmadsiddique555@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+923287692886"
                    className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                  >
                    +92 328 7692886
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
           <div className="mt-8">
  <h4 className="font-semibold mb-4">Follow Me</h4>

  <div className="flex gap-4">
    <a
      href="https://github.com/devxsarmad"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center 
                 hover:bg-[#06B6D4] transition-colors"
      aria-label="GitHub"
    >
      <Github className="w-5 h-5 text-white" />
    </a>

    <a
      href="https://linkedin.com/in/sarmad404"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center 
                 hover:bg-[#06B6D4] transition-colors"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-5 h-5 text-white" />
    </a>

    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center 
                 hover:bg-[#06B6D4] transition-colors"
      aria-label="Twitter"
    >
      <Twitter className="w-5 h-5 text-white" />
    </a>
  </div>
</div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-[#06B6D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-[#06B6D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-[#06B6D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-[#06B6D4] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3 bg-[#06B6D4] text-white rounded-lg font-semibold hover:bg-[#0891B2] transition-all duration-300 flex items-center justify-center gap-2 glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}