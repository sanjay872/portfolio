"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Teaching Assistant - UI/UX",
    company: "Illinois Institute of Technology",
    year: "Feb 2025 - Present",
    description:
      "Collaborate with two Teaching Assistants to guide 80 students in user-centered design principles, improving practical application skills and contributing to a 90%+ overall class score in assignments.",
    icon: <GraduationCap size={24} className="text-white" />,
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter",
    year: "Jul 2024 – Sept 2024",
    description:
      "Developed AI applications, including a Flash Card, Weather App, and Inventory Management System, utilizing Next.js and OpenAI, boosting automation, user interaction, and gained hands-on experience in AI integration.",
    icon: <Briefcase size={24} className="text-white" />,
  },
  {
    title: "Software Developer",
    company: "Driven to Develop",
    year: "May 2024 – Jul 2024",
    description:
      "Constructed a prototype app to streamline tracking of 100+ retail products, increasing online retail management efficiency by integrating automatic email and alert notifications with Supabase triggers.",
    icon: <Code size={24} className="text-white" />,
  },
  {
    title: "Software Engineer",
    company: "LTIMindtree",
    year: "Aug 2021 – Dec 2023",
    description:
      "Optimized front-end code to reduce API calls, improving response time by 20-30% and enhancing user experience. Maintained a 10,000+ line application for scalability and seamless updates. Automated data processing of 1,000+ records with a Spring Boot mailing trigger, eliminating manual checks. Ensured backend reliability by testing service and controller layers with Mockito.",
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
