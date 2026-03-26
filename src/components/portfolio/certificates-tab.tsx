"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

/**
 * Certificates tab component for the portfolio section
 * Displays certificate cards with achievements and credentials
 */
export default function CertificatesTab(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {CERTIFICATES.map((certificate) => (
        <motion.div
          key={certificate.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                {certificate.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                {certificate.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {certificate.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Credential</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
