'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import About from './components/About';


export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => scrollToSection('about')} className="text-2xl font-bold text-gray-800">
            Logo
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}> 
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900">
              About
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900">
              Education
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900">
              Projects
            </button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-600 hover:text-gray-900">
              Achievements
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <About></About>
      </section>
      <section id="education" className="h-screen flex items-center justify-center bg-gray-300">
        <h1>Education Section</h1>
      </section>
      <section id="experience" className="h-screen flex items-center justify-center bg-gray-300">
        <h1>Experience Section</h1>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-400">
        <h1>Projects Section</h1>
      </section>
      <section id="achievements" className="h-screen flex items-center justify-center bg-gray-400">
        <h1>Achievements Section</h1>
      </section>
    
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}
