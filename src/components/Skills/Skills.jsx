// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-2 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                className="group relative flex items-center justify-center space-x-2 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 relative z-10"
                  />
                </motion.div>
                <motion.span 
                  className="text-xs sm:text-sm text-gray-300 relative z-10"
                  initial={{ color: "#D1D5DB" }}
                  whileHover={{ 
                    color: "#FFFFFF",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
                  }}
                >
                  {skill.name}
                </motion.span>
                
                {/* Subtle floating animation */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;