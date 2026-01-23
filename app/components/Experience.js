"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Teaching Assistant - UI/UX",
    company: "Illinois Institute of Technology",
    year: "Feb 2025 - Dec 2025",
    description:
      "Guided 130+ students in UI/UX fundamentals by leading labs, reviewing assignments, and applying structured rubrics. Improved assignment quality and design clarity by ~30% while reinforcing user-centered design and usability principles.",
    icon: <GraduationCap size={24} className="text-white" />,
  },
  {
    title: "Build Student Consultant",
    company: "Build Fellowship",
    year: "Jul 2025 - Nov 2025",
    description:
      "Built interactive, real-time web applications using React and Socket.io, including a multiplayer Tic-Tac-Toe game. Applied event-driven design and WebSockets to deliver low-latency, synchronized user interactions.",
    icon: <Briefcase size={24} className="text-white" />,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Colorado Resilience",
    year: "Oct 2025 - Dec 2025",
    description:
      "Worked on a cloud-native React and Flask platform supporting family court and child welfare systems. Containerized services with Docker, integrated Keycloak authentication, deployed multi-service stacks via Kubernetes and Helm, and provisioned AWS infrastructure using Terraform—reducing environment setup time by 50% and improving deployment reliability.",
    icon: <Code size={24} className="text-white" />,
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter",
    year: "Jul 2024 - Sept 2024",
    description:
      "Developed multiple AI-powered applications using Next.js and OpenAI APIs, including flashcards, weather dashboards, and inventory systems. Gained hands-on experience building user-facing AI features, prompt workflows, and production-ready frontend integrations.",
    icon: <Briefcase size={24} className="text-white" />,
  },
  {
    title: "Software Developer",
    company: "Driven to Develop",
    year: "May 2024 - Jul 2024",
    description:
      "Built a prototype inventory management application tracking 100+ retail products. Integrated Supabase triggers for automated email alerts and notifications, reducing manual tracking effort and improving operational visibility for online retail workflows.",
    icon: <Code size={24} className="text-white" />,
  },
  {
    title: "Java Full Stack Developer",
    company: "LTIMindtree",
    year: "Dec 2021 - Dec 2023",
    description:
      "Modernized enterprise risk and reporting systems by replacing Excel-based workflows with Spring Boot REST APIs and Angular dashboards, reducing report generation from hours to seconds across 10K+ records. Optimized frontend API usage to cut response times by 20–30%, automated daily schedulers processing 10K+ projects, and improved service reliability through JUnit and Mockito testing.",
    icon: <Code size={24} className="text-white" />,
  },
  {
    title: "Trainee Software Engineer",
    company: "LTIMindtree",
    year: "Aug 2021 - Dec 2021",
    description:
      "Designed and deployed full-stack CRUD applications using Java, Spring Boot, Angular, and MySQL. Built role-based authentication, deployed services on AWS (EC2, S3, RDS), and accelerated delivery by ~40% through end-to-end ownership from development to deployment.",
    icon: <Code size={24} className="text-white" />,
  },
];



export default function Experience() {
  return (
    <section
    id="experience"
    className="py-16 px-6 flex flex-col items-center bg-gray-100 w-full mt-12"
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      {/* Timeline Wrapper */}
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8 w-full px-4 md:px-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full group-hover:scale-110 transition-transform shadow-lg">
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-white p-6 shadow-lg rounded-lg text-center w-full mt-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  {exp.title}
                </h2>
                <p className="text-gray-500">{exp.company}</p>
                <span className="text-blue-600 font-medium">{exp.year}</span>
                <p className="mt-3 text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
