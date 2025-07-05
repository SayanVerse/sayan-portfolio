// App.js – Cleaned & NJEY Style Hero Fix

import { useState, useEffect } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin,
  FaBars, FaFileDownload, FaHtml5, FaCss3Alt, FaJava, FaPython
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import "@fontsource/orbitron";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  const skills = [
    { name: "C", icon: <SiC className="text-blue-400" />, note: "Strong foundation in C for problem-solving and logic building." },
    { name: "Java", icon: <FaJava className="text-orange-500" />, note: "Good command on OOPs, Java basics, and backend logic." },
    { name: "Python", icon: <FaPython className="text-yellow-400" />, note: "Proficient in Python scripting, automation, and data tasks." },
    { name: "HTML", icon: <FaHtml5 className="text-red-500" />, note: "Experienced in semantic HTML for clean structure." },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, note: "Skilled in responsive layouts using Flexbox and Grid." },
  ];

  return (
    <div className={`${darkMode ? "dark" : "light"} font-orbitron`}>
      <Particles
        id="tsparticles"
        init={async (engine) => await loadLinksPreset(engine)}
        options={{ preset: "links" }}
        className="absolute inset-0 -z-10"
      />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/robo.png')",
          backgroundColor: "rgba(0,0,0,0.9)",
          backgroundBlendMode: "darken"
        }}
      >
        {/* Navbar */}
        <div className="flex justify-between items-center px-10 py-5 bg-black/70 backdrop-blur-md border-b border-white/10 text-sm uppercase tracking-widest">
          <h1 className="text-xl font-bold">SAYAN MAITI</h1>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
            <a href="/sayan_maiti_cv.pdf" download className="hover:text-yellow-400 flex items-center gap-1">
              <FaFileDownload /> CV
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl"><FaBars /></button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 bg-black/80 space-y-3 text-center backdrop-blur">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="/sayan_maiti_cv.pdf" download>Download CV</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border px-4 py-1 border-white rounded"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-10 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
            <p className="text-sm text-cyan-400 mb-2">HERE AND NOW</p>
            <h2 className="text-6xl font-extrabold mb-4">FUTURE</h2>
            <p className="text-white/80 max-w-md">
              People who think about the future and take action in this direction have a plan of action.
            </p>
            <button className="mt-6 border px-6 py-2 border-white hover:bg-white hover:text-black transition">LET’S GO</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/robot.png"
              alt="Robot"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </section>

        {/* Add More Sections (About, Skills, Projects, etc.) here as needed */}

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-xs border-t border-white/10 bg-black/90">
          &copy; {new Date().getFullYear()} Sayan Maiti | Futuristic Portfolio
        </footer>
      </div>
    </div>
  );
}
