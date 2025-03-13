"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud, PenTool, SquareDashedBottomCode, Database } from "lucide-react";


const skills = [
    {
      category: "Programming Languages",
      icon: <Code  size={24} className="text-blue-500" />,
      technologies: ["Java", "Python", "JavaScript", "Solidity", "TypeScript", "HTML", "CSS", "SCSS"],
    },
    {
      category: "Frontend",
      icon: <SquareDashedBottomCode size={24} className="text-blue-500" />,
      technologies: ["Angular", "React.js", "React Native", "Next.js"],
    },
    {
      category: "Backend",
      icon: <Server size={24} className="text-green-500" />,
      technologies: ["Spring Boot", "Node.js", "Flask", "Hardhat"],
    },
    {
      category: "Databases",
      icon: <Database  size={24} className="text-orange-500" />,
      technologies: ["MongoDB", "MySQL", "Firebase", "Supabase", "Web3Storage"],
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud size={24} className="text-purple-500" />,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      category: "Tools",
      icon: <PenTool size={24} className="text-orange-500" />,  // Changed 'Tool' to 'PenTool'
      technologies: ["VS Code", "Intellij", "Git", "GitHub", "Postman", "Maven", "Sonarqube", "JMeter","Remix"],
    }
  ];
  

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-100 min-h-screen mt-10">
      <motion.h1
        className="text-4xl font-bold text-gray-800 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">{skill.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-700">{skill.category}</h2>
            <ul className="mt-3 text-gray-500">
              {skill.technologies.map((tech, i) => (
                <li key={i} className="mt-1">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
