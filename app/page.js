"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-30 p-4 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* <button
            onClick={() => scrollToSection("about")}
            className="text-2xl font-bold text-gray-800"
          >
            Logo
          </button> */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["about", "education", "experience", "projects", "achievements"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 flex flex-col p-6 space-y-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* <button onClick={() => setIsOpen(false)} className="self-end text-gray-800">
                <X size={30} />
              </button> */}

              {["about", "education", "experience", "projects", "achievements"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 text-lg hover:text-gray-900 transition-all duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sections with Animations */}
      {[
        { id: "about", bg: "bg-gray-100", content: <About /> },
        { id: "education", bg: "bg-gray-200", content: <h1>Education Section</h1> },
        { id: "experience", bg: "bg-gray-300", content: <h1>Experience Section</h1> },
        { id: "projects", bg: "bg-gray-400", content: <h1>Projects Section</h1> },
        { id: "achievements", bg: "bg-gray-500", content: <h1>Achievements Section</h1> },
      ].map(({ id, bg, content }, index) => (
        <motion.section
          key={id}
          id={id}
          className={`h-screen flex items-center justify-center ${bg}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content}
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}
