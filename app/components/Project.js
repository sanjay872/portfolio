"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dyscalculia Helper App",
    description:
      "A full-stack application that helps users with Dyscalculia by providing voice-recognition-based calculations.",
    techStack: "Angular | Flask | Spring Boot | MySQL",
    link: "https://github.com/yourusername/DyscalculiaHelperApp",
  },
  {
    title: "Interstellar Investigator",
    description:
      "An action shooting game built with Pygame and MongoDB, won 'Best Use of MongoDB Atlas' in a hackathon.",
    techStack: "Python | Pygame | MongoDB",
    link: "https://github.com/yourusername/InterstellarInvestigator",
  },
  {
    title: "Inventory Management App",
    description:
      "A web-based inventory management system using Supabase, React, and automated email triggers.",
    techStack: "ReactJS | Supabase | Node.js",
    link: "https://github.com/yourusername/InventoryApp",
  },
  {
    title: "Shopping Portal",
    description:
      "A scalable e-commerce platform with microservices architecture and CI/CD deployment on AWS.",
    techStack: "Angular | Spring Boot | AWS",
    link: "https://github.com/yourusername/ShoppingPortal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 min-h-screen mt-10">
      <motion.h1
        className="text-4xl font-bold text-gray-800 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">{project.title}</h2>
              <p className="text-gray-500 mt-2">{project.description}</p>
              <p className="text-blue-600 font-medium mt-2">{project.techStack}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center text-blue-600 font-semibold"
            >
              <ExternalLink className="mr-2" size={18} /> View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
