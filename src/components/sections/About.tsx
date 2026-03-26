import React from "react";
import { ExternalLink } from "lucide-react";
import { ABOUT_STATS } from "@/data/about-stats";
import DownloadCVButton from "../ui/download-cv-button";

/**
 * About section component for the portfolio
 * Contains information about the developer
 */
export default function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: About Info */}
          <div className="bg-white/10 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 dark:border-gray-700/30 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle glow effect behind card content */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-10 relative z-10">
              I&apos;m a dedicated software developer with a passion for
              creating innovative digital solutions. With expertise in both
              frontend and backend technologies, I bring ideas to life through
              clean, efficient code and user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 mt-auto">
              <DownloadCVButton />
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-gray-600 dark:border-gray-500 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Stats */}
          <div className="bg-gradient-to-br from-blue-600/90 to-purple-700/90 dark:from-blue-900/80 dark:to-purple-900/80 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle glow effect to match left column */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700 pointer-events-none"></div>
            
            <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center relative z-10">Quick Stats</h4>
            <div className="space-y-4 relative z-10">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-5 flex items-center gap-5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
