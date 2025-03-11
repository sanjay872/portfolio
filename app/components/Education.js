"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master’s in Computer Science,",
    institution: "Illinois Institute of Technology, Chicago, IL",
    year: "Jan 2024 - Dec 2025",
    details:
      "Advance Database Organization, UI/UX design, Mobile App Development, Machine Learning",
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering,",
    institution: "St.Joseph’s Institute of Technology, Chennai, Tamil Nadu, India",
    year: "Aug 2017 - Apr 2021",
    details:
      "Data structures and Algorithms, Operating Systems, Object Oriented Programming.",
  },
];

export default function Education() {
  return (
    <section className="bg-gray-100 py-16 px-6 mt-10">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h1>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-700">{edu.degree}</h2>
              <p className="text-gray-500">{edu.institution}</p>
              <span className="text-blue-600 font-medium">{edu.year}</span>
              <p className="mt-3 text-gray-600">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
