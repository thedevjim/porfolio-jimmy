"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Award, Code } from "lucide-react";
import ProjectsTab from "@/components/portfolio/projects-tab";
import CertificatesTab from "@/components/portfolio/certificates-tab";
import TechStackTab from "@/components/portfolio/tech-stack-tab";

type TabType = "projects" | "certificates" | "techstack";

/**
 * Portfolio section component with tabbed interface
 * Displays projects, certificates, and tech stack with toggle functionality
 */
export default function Portfolio(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const tabs = [
    { id: "projects" as const, label: "Projects", icon: FolderOpen },
    { id: "certificates" as const, label: "Certificates", icon: Award },
    { id: "techstack" as const, label: "Tech Stack", icon: Code },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my work, achievements, and technical expertise through this
            comprehensive showcase of projects, certifications, and
            technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex space-x-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                      ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50"
                      }
                    `}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "certificates" && <CertificatesTab />}
            {activeTab === "techstack" && <TechStackTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
