import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Django", icon: <SiDjango size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      {/* Title */}
      <h2 className="text-7xl font-bold mb-8 tracking-wide">
        MY SKILLS
      </h2>
      <div className="w-40 h-2 bg-purple-600 mb-12 rounded"></div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20  max-w-4xl">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.3,
              y: -8,
              boxShadow: "0px 0px 20px rgba(255, 200, 100, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer"
          >
            <div className="text-purple-600">{skill.icon}</div>
            <p className="text-sm font-semibold tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
};

export default Skills;