"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/tech-stack";
import type { Technology } from "@/data/tech-stack";

/**
 * Get CSS classes for skill level badge based on proficiency level
 */
function getSkillLevelClasses(level: Technology["level"]): string {
  switch (level) {
    case "Expert": {
      return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
    }
    case "Advanced": {
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
    }
    case "Intermediate": {
      return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400";
    }
    case "Beginner": {
      return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
    }
    default: {
      return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
    }
  }
}

/**
 * Tech Stack tab component for the portfolio section
 * Displays technology categories with skill levels and experience
 */
export default function TechStackTab(): React.JSX.Element {
  return (
    <div className="space-y-12">
      {TECH_STACK.map((category) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelClasses(
                          tech.level
                        )}`}
                      >
                        {tech.level}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {tech.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
