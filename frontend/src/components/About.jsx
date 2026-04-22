import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col justify-center items-center bg-black text-center"
    >
      <h2 className="text-5xl font-bold mb-6 text-teal-200
        animate-fadeIn transition-all duration-500 hover:scale-110 hover:text-orange-400">
        About Me
      </h2>

      <p className="max-w-3xl text-purple-500 text-xl leading-relaxed 
        animate-fadeIn delay-300 transition-all duration-500 
        hover:text-white hover:scale-105">
        I am a Frontend Developer with experience in building dynamic web
        applications using the MERN stack. I love creating intuitive UI and
        clean, efficient backend systems. My goal is to deliver high-quality
        projects and improve user experiences.
      </p>
    </section>
  );
};

export default About;