"use client";

import React from "react";
import {Download} from "lucide-react";

/**
 * Download CV button component
 * Currently downloads a local PDF.
 * TODO: Strapi should be applied for CMS in the future to fetch CV data.
 */
export default function DownloadCVButton(): React.JSX.Element {
    // TODO: Re-enable Strapi fetching when CMS is ready
    // Fetch CV data from Strapi (using file ID 12 as specified)
    // const { cvData, isLoading, error } = useCVData(13);

    const localPdfUrl = "/documents/CV/cv-jimmy.pdf";

    /**
     * Get the appropriate text for the download button based on current state
     */

    return (
        <a
            href={localPdfUrl}
            download="cv-jimmy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform"
        >
            <Download className="mr-2 h-4 w-4"/>
            Download CV
        </a>
    );
}
