"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "QuantiLearn",
    description:
      "An AI-driven adaptive e-learning platform built with microservices to generate personalized learning paths in real time. Integrated OpenAI APIs with Kafka and Redis to process learning events at scale, achieving sub-1s API responses, 99.9% uptime, and 45% higher event throughput.",
    techStack: "Spring Boot | Kafka | Redis | OpenAI | AWS | Microservices",
    gitlink: "https://github.com/sanjay872/quantiLearn",
    viewlink: "",
  },
  {
    title: "ReliefConnect",
    description:
      "An AI-powered disaster relief management system that automates product recommendations, order tracking, and fraud detection during crises. Designed multi-agent workflows with LangGraph and ChromaDB and added human-in-the-loop review to ensure trust, transparency, and scalability.",
    techStack: "React | Node.js | MongoDB | FastAPI | LangGraph | GPT-4o-mini",
    gitlink: "https://github.com/sanjay872/reliefConnect",
    viewlink: "",
  },
  {
    title: "Contract Simplify",
    description:
      "An AI contract risk analysis platform that evaluates 500+ clauses using NLP-based risk scoring. Automated data ingestion and normalization to reduce manual vendor review time and improve classification accuracy by 25%.",
    techStack: "Python | OpenAI | NLP | REST APIs | Bright Data",
    gitlink: "https://github.com/sanjay872/Contract-Simplify",
    viewlink: "",
  },
  {
    title: "PowerAI Contract Agent",
    description:
      "An agentic AI system that automates contract generation, review, and version tracking. Built n8n-based workflows with Python services and OpenAI APIs to generate documents, create PDFs, and sync contract states in MongoDB.",
    techStack: "Python | OpenAI | n8n | MongoDB | REST Webhooks",
    gitlink: "https://github.com/sanjay872/PowerAI-Contract-AI-Agent",
    viewlink: "",
  },
  {
    title: "FinQuest",
    description:
      "A choose-your-own-adventure financial literacy game that simulates real-world money decisions. Built an interactive narrative engine with AI-generated scenarios to help users understand long-term financial consequences in an engaging format.",
    techStack: "Next.js | Node.js | Firebase | Gemini AI | Vercel",
    gitlink: "https://github.com/sanjay872/finquest",
    viewlink: "https://youtu.be/O2MtIjPL2hI?si=BTc4N75JDJjnHthw",
  },
  {
    title: "SafeLink",
    description:
      "An AI-powered healthcare platform that generates personalized patient safety checklists, manages consent workflows, and securely handles sensitive medical data to improve adherence to safety protocols.",
    techStack: "React Native | Node.js | Firebase | Gemini AI",
    gitlink: "https://github.com/sanjay872/SafeLink",
    viewlink: "https://youtu.be/QS6O6-11tpY?si=kd6nNziUffklFTkg",
  },
  {
    title: "Fair Share",
    description:
      "A mobile application that simplifies splitting bills among friends. Implemented analytics dashboards to visualize spending by month and year, improving financial transparency and user experience.",
    techStack: "React Native | Node.js | Firebase | OpenAI",
    gitlink: "https://github.com/sanjay872/FairShare",
    viewlink: "https://youtu.be/UkIMWfLS02g?si=uz39oI60r287wtq2",
  },
  {
    title: "Robot Vacuum Analytics",
    description:
      "A multi-agent AI analytics system that converts natural-language questions into SQL queries and visualizations. Built a schema-agnostic pipeline with PostgreSQL, LangGraph, and Streamlit to enable non-technical users to explore large datasets interactively.",
    techStack: "Python | PostgreSQL | LangChain | LangGraph | Streamlit",
    gitlink: "https://github.com/sanjay872/Robot-Vacuum-Depot",
    viewlink: "",
  },
  {
    title: "Dyscalculia Helper App",
    description:
      "A speech-guided learning application designed to support students with dyscalculia. Integrated voice recognition with step-by-step problem assistance to improve task completion rates by 35%.",
    techStack: "Angular | Flask | Spring Boot | MySQL",
    gitlink: "https://github.com/sanjay872/DyscalculiaHelperApp",
    viewlink: "",
  },
  {
    title: "Interstellar Investigator",
    description:
      "A Python-based action game featuring real-time scoring and persistent leaderboards. Won ‘Best Use of MongoDB Atlas’ for scalable game-state storage and leaderboard management.",
    techStack: "Python | Pygame | MongoDB",
    gitlink: "https://github.com/sanjay872/interstellar-investigator",
    viewlink: "https://youtu.be/0wJjGnJcJk0?si=7y_66DFZdQRiDpXg",
  },
  {
    title: "GadgetHive",
    description:
      "A tech gadget discovery platform with role-based access for buyers and vendors. Built microservices with Angular and Spring Boot and deployed on AWS using CI/CD pipelines to improve scalability and modularity.",
    techStack: "Angular | Spring Boot | MySQL | AWS",
    gitlink: "https://github.com/sanjay872/GadgetHive",
    viewlink: "",
  },
  {
    title: "Chicago Food Network",
    description:
      "A food donation platform designed to reduce food waste by connecting surplus food providers with people in need. Built scalable REST APIs and a responsive frontend to streamline food discovery and distribution.",
    techStack: "React | Spring Boot | MySQL | Postman",
    gitlink: "https://github.com/sanjay872/chicago-food-network",
    viewlink: "",
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
              href={project.gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center text-blue-600 font-semibold"
            >
              <ExternalLink className="mr-2" size={18} /> <Github /> Github
            </a>
            {
              project.viewlink?
              <a
              href={project.viewlink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center text-blue-600 font-semibold"
            >
              <ExternalLink className="mr-2" size={18} />View Project
            </a>
            :
            <></>
            }
          </motion.div>
        ))}
      </div>
    </section>
  );
}
