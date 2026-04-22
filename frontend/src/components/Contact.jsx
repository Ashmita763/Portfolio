import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-2">LET'S CONNECT</h2>
      <p className="text-yellow-400 mb-10 text-center">
        Building digital bridges to connect and collaborate.
      </p>

      {/* Cards */}
      <div className="flex gap-8 flex-wrap justify-center">
        
        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          whileHover={{ scale: 1.1, y: -8 }}
          className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center gap-4 w-36 cursor-pointer border border-gray-700 hover:shadow-[0_0_20px_rgba(255,200,100,0.3)]"
        >
          <FaLinkedin size={40} className="text-blue-500" />
          <p className="text-sm font-semibold">LINKEDIN</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/your-username"
          target="_blank"
          whileHover={{ scale: 1.1, y: -8 }}
          className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center gap-4 w-36 cursor-pointer border border-gray-700 hover:shadow-[0_0_20px_rgba(255,200,100,0.3)]"
        >
          <FaGithub size={40} />
          <p className="text-sm font-semibold">GITHUB</p>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:your@email.com"
          whileHover={{ scale: 1.1, y: -8 }}
          className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center gap-4 w-36 cursor-pointer border border-gray-700 hover:shadow-[0_0_20px_rgba(255,200,100,0.3)]"
        >
          <MdEmail size={40} className="text-red-400" />
          <p className="text-sm font-semibold">EMAIL</p>
        </motion.a>

      </div>

      {/* QR Code (optional) */}
      <div className="mt-10 text-center">
        <p className="text-yellow-400 mb-4">Scan to save my contact:</p>
        <img
          src="/qr.png" // put your QR in public folder
          alt="QR Code"
          className="w-32 h-32 mx-auto"
        />
      </div>
    </section>
  );
};

export default Contact;