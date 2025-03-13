"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fair Share",
    description:
      "A mobile application designed to make splitting bills among friends easy and efficient. Built with React Native, Node.js, Firebase, and OpenAI.",
    techStack: "React Native | Node JS | Firebase | Open AI",
    gitlink:"https://github.com/sanjay872/FairShare",
    viewlink: "https://youtu.be/UkIMWfLS02g?si=uz39oI60r287wtq2",
  },
  {
    title: "Chicago Food Network",
    description:
      "Developed an application to improve the food shortage in Chicago. With our application Excess food leftover at any place can find its way to people who need it.",
    techStack: "React | Spring Boot | Postman",
    gitlink:"https://github.com/sanjay872/chicago-food-network",
    viewlink: "",
  },
  {
    title: "Minerva",
    description:
      "We have created an online learning platform using web3. The users can upload educational videos. And can view what others have uploaded through the platform.",
    techStack: "Nextjs | Hardhat | Moralis | web3.storage",
    gitlink:"https://github.com/sanjay872/Minerva",
    viewlink: "https://www.loom.com/embed/9b84dad7e9d84bfcaa89f26a8ab06c27?sid=eee1f5a3-a030-47ab-82a1-6a29bc7e9c2c",
  },
  {
    title: "Dyscalculia Helper App",
    description:
      "A full-stack application that helps users with Dyscalculia by providing voice-recognition-based number recognizing.",
    techStack: "Angular | Flask | Spring Boot | MySQL",
    gitlink:"https://github.com/sanjay872/DyscalculiaHelperApp",
    viewlink:""
  },
  {
    title: "Interstellar Investigator",
    description:
      "An action shooting game built with Pygame and MongoDB, won 'Best Use of MongoDB Atlas' in a hackathon.",
    techStack: "Python | Pygame | MongoDB",
    gitlink:"https://github.com/sanjay872/interstellar-investigator",
    viewlink: "https://youtu.be/0wJjGnJcJk0?si=7y_66DFZdQRiDpXg",
  },
  {
    title: "GadgetHive",
    description:
      "Designed a tech gadget information portal using Angular and Spring Boot, increasing load handling and modularity.",
    techStack: "Angular | Spring Boot | AWS",
    gitlink:"https://github.com/sanjay872/GadgetHive",
    viewlink: "",
  },
  {
    title: "Skywatch",
    description:
      "SkyWatch is a user-friendly weather app that provides accurate and up-to-date weather forecasts tailored to your location.",
    techStack: "Next.js | Serpapi API",
    gitlink:"https://github.com/sanjay872/SkyWatch",
    viewlink: "https://youtu.be/PwkjuF-IXKo",
  },
  {
    title: "Inventory Management",
    description:
      "Build Inventory management app",
    techStack: "NextJS | Material UI | Firebase",
    gitlink:"https://github.com/sanjay872/inventory_management",
    viewlink: "https://youtu.be/PwkjuF-IXKo",
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
