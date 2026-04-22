import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-10"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">

        {/* 📝 TEXT */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-purple-300">
            HELLO, THIS IS <br /> ASHMITA BASNET
          </h1>

          <p className="text-purple-500 text-xl md:text-4xl mt-4">
            FRONTEND DEVELOPER
          </p>

          {/* ✅ CV DOWNLOAD BUTTON */}
          <a
            href="/Ashmita_CV.pdf"   // make sure file is in public folder
            download
            className="mt-6 inline-block px-6 py-3 bg-purple-300 text-black rounded-full hover:scale-105 transition"
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* 🖼 IMAGE */}
        <motion.img
          src={profile}
          alt="profile"
          className="w-80 h-80 md:w-96 md:h-96 rounded-lg object-cover border-4 border-primary"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;