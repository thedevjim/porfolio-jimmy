"use client";

import React from "react";
import { Eye } from "lucide-react";
import { useCVData } from "../../hooks/use-cv-data";

/**
 * Download CV button component that fetches CV data from Strapi
 * Opens CV document in a new tab
 */
export default function DownloadCVButton(): React.JSX.Element {
  // Fetch CV data from Strapi (using file ID 12 as specified)
  const { cvData, isLoading, error } = useCVData(13);
  /**
   * Get the appropriate text for the download button based on current state
   */
  // const getDownloadButtonText = (): string => {
  //   if (isLoading) {
  //     return "Loading CV...";
  //   }
  //   if (error) {
  //     return "CV Unavailable";
  //   }
  //   return "View CV";
  // };
  return (
    <a
      href={cvData?.downloadUrl ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform ${
        isLoading || !cvData ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={(e) => {
        if (isLoading || !cvData) {
          e.preventDefault();
        }
      }}
    >
      <Eye className="mr-2 h-4 w-4" />
      View CV
    </a>
  );
}
