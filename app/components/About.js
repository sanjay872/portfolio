"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const about = {
  name: "Sanjay Sakthivel",
  resumeLink: "https://drive.google.com/file/d/1X9d_vSkR3IdaHOgUfZGNf7tmaJANr5ne/view?usp=sharing",
  profileDescription: `Full-stack software engineer with a strong focus on building scalable, cloud-native systems using Java, Spring Boot, React, and AWS. 
  I've delivered production features across enterprise and startup environments, automating Excel-based workflows into RESTful services, 
  reducing report generation from hours to seconds across 10K+ records, and improving API and UI performance by up to 25%. 
  I enjoy working end-to-end on impactful systems, from AI-driven platforms and real-time applications to reliable, well-tested backend services.`,
  gitlink: "https://github.com/sanjay872",
  linkedin: "https://linkedin.com/in/sanjaysakthivel"
};


export default function About() {
    return (
        <section className="relative flex flex-row items-center text-center justify-center w-full p-10 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image 
                        src="/profile.jpg" 
                        alt="Profile Picture" 
                        width={350} 
                        height={350} 
                        className="rounded-full mb-4 shadow-lg"
                    />
                </motion.div>
                
                <motion.h1 
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                {about.name}
                </motion.h1>
                
                <div>

                <motion.p 
                    className="mt-4 max-w-2xl text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {about.profileDescription}
                </motion.p>
                
                {/* <motion.div 
                    className="mt-6 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md">
                        React
                    </span>
                    <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium shadow-md">
                        Spring Boot
                    </span>
                    <span className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium shadow-md">
                        AWS
                    </span>
                </motion.div> */}

                <motion.div 
                    className="mt-6 flex space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <a 
                        href={about.gitlink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-gray-900 text-lg font-medium transition duration-200"
                        aria-label="GitHub Profile"
                    >
                        GitHub
                    </a>
                    
                    <a 
                        href={about.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-gray-900 text-lg font-medium transition duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={about.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-gray-900 text-lg font-medium transition duration-200"
                    >
                    Download Resume
                    </a>
                </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
