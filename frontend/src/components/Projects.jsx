import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Dining Reservation System",
      desc: "A system to manage tables, orders, and reservation.",
      tech: "html, css, laravel, mysql",
      year: "2024",
    },
    {
      title: "E-commerce Grocery App",
      desc: "Full-stack web app for online grocery shopping.",
      tech: "MongoDB, Express, React, Node",
      year: "2025",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio to showcase skills and projects.",
      tech: "React, Tailwind CSS",
      year: "2025",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-6xl font-bold mb-5">ACADEMIC PROJECTS</h2>
      <div className="w-60 h-1 bg-purple-600 mb-8 rounded"></div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0px 0px 25px rgba(255, 200, 100, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col gap-3 cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-purple-400">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">{p.desc}</p>

            {/* Tech */}
            <p className="text-xs text-gray-500">
              <span className="text-white font-medium">Tech:</span> {p.tech}
            </p>

            {/* Year */}
            <p className="text-xs text-gray-500">
              <span className="text-white font-medium">Year:</span> {p.year}
            </p>
          </motion.div>
        ))}
      </div>

       {/* Project CTA */}
      <div className="mt-16 bg-gray-900 px-10 py-6 rounded-2xl text-center shadow-lg">
        <h3 className="text-lg text-purple-500 font-semibold mb-2">
          SEE MY PROJECTS
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Explore my work on GitHub for a closer look at what I've built.
        </p>
        <button className="bg-purple-950 px-6 py-2 rounded-lg font-medium hover:bg-purple-400 transition">
          VISIT MY GITHUB
        </button>
      </div>
    </section>
  );
};

export default Projects;