import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Background = () => {
  return (
    <section
      id="background"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">

        {/* 📝 LEFT CONTENT */}
        <div className="max-w-md text-center md:text-left">

          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            EDUCATION
          </motion.h2>

          <motion.ul
            className="text-purple-300 text-4xl  space-y-2 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {[
              "National School of Sciences - Science",
              "Herald College Kathmandu - BSc (Hons) Computing",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                ➜ {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>

          <motion.ul
            className="text-purple-300 text-4xl space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {[
              "Angular Intern - IMS Software",
              "Django Intern - CodeQuant",
              "Django Developer - CodeQuant",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                ➜ {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* 🖼 RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ x: 80, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[#d6d4d0] blur-3xl opacity-30 rounded-full"></div>

          <img
            src={profile}
            alt="profile"
            className="w-96 h-96 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#6a89c8] relative"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Background;