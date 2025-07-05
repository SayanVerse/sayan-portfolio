import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaFileDownload,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import "@fontsource/orbitron";
import CustomCursor from "./CustomCursor";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    { name: "C", icon: <SiC className="text-blue-400" />, note: "Strong foundation in C for problem-solving and logic building." },
    { name: "Java", icon: <FaJava className="text-orange-500" />, note: "Good command on OOPs, Java basics, and backend logic." },
    { name: "Python", icon: <FaPython className="text-yellow-400" />, note: "Proficient in Python scripting, automation, and data tasks." },
    { name: "HTML", icon: <FaHtml5 className="text-red-500" />, note: "Experienced in semantic HTML for clean structure." },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, note: "Skilled in modern responsive layouts using Flexbox and Grid." },
  ];

  return (
    <div className={`${darkMode ? "dark" : "light"} font-orbitron`}>
      <CustomCursor />

      <Particles
        id="tsparticles"
        init={async (engine) => {
          await loadLinksPreset(engine);
        }}
        options={{
          preset: "links",
        }}
        className="absolute inset-0 -z-10"
      />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-black/80 text-white"
        style={{
          backgroundImage: "url('/robo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar */}
        <div className="flex justify-between items-center px-10 py-5 bg-black/80 backdrop-blur-md border-b border-white/10 text-sm uppercase tracking-widest">
          <h1 className="text-xl font-bold">SAYAN MAITI</h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
            <a href="/sayan_maiti_cv.pdf" download className="hover:text-yellow-400 flex items-center gap-1">
              <FaFileDownload /> CV
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-lg"><FaBars /></button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-10 py-4 bg-black/80 space-y-2 text-center backdrop-blur">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="/sayan_maiti_cv.pdf" download>Download CV</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-2 border px-3 py-1 border-white rounded"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-10 gap-10"
        >
          <motion.div className="md:w-1/2">
            <p className="text-sm text-gray-300 mb-2">HERE AND NOW</p>
            <h2 className="text-6xl font-extrabold text-white mb-4">FUTURE</h2>
            <p className="text-white/80 max-w-md">
              People who think about the future and take action in this direction, have a plan of action.
            </p>
            <button className="mt-6 border px-6 py-2 border-white hover:bg-white hover:text-black transition">LET’S GO</button>
          </motion.div>

          <motion.div className="md:w-1/2">
            <img src="/robot.png" className="w-full max-w-md mx-auto" alt="robot" />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-6 text-center bg-black/80 backdrop-blur text-white"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-6">About Me</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm <strong>Sayan Maiti</strong>, a 2nd-year B.Tech CSE student at SVIST (MAKAUT), graduating in 2028. I love coding, futuristic UI design, and solving real-world problems using tech.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-6 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-cyan-400 mb-10">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveSkill(idx)}
                className="cursor-pointer bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-400/30 transition"
              >
                <div className="text-4xl mb-2 animate-pulse">{skill.icon}</div>
                <p className="font-bold text-cyan-100">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          {activeSkill !== null && (
            <div className="mt-8 bg-black/30 text-white text-center py-4 px-6 rounded-xl max-w-xl mx-auto border border-white/10">
              {skills[activeSkill].note}
            </div>
          )}
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-6 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-pink-400 mb-10">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl bg-white/10 p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Portfolio Website</h4>
              <p className="text-gray-400 text-sm">React + Tailwind futuristic portfolio for CSE students.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl bg-white/10 p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Student Result System</h4>
              <p className="text-gray-400 text-sm">Java console app for result management.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-xs border-t border-white/10 bg-black/90">
          &copy; {new Date().getFullYear()} Sayan Maiti | Futuristic Portfolio
        </footer>
      </div>
    </div>
  );
}

