/**
 * Custom hook for fetching CV data from Strapi
 */

import { useState, useEffect } from "react";
import { strapiCVService } from "../services/strapi-cv-service";
import type { CVFileData } from "../services/strapi-cv-service";

interface UseCVDataReturn {
  readonly cvData: CVFileData | null;
  readonly isLoading: boolean;
  readonly error: string | null;
}

/**
 * Hook to fetch CV file data from Strapi
 */
export function useCVData(fileId?: number): UseCVDataReturn {
  const [cvData, setCvData] = useState<CVFileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCVData(): Promise<void> {
      try {
        setIsLoading(true);
        setError(null);

        const data = fileId
          ? await strapiCVService.getCVFileById(fileId)
          : await strapiCVService.getLatestCVFile();

        if (data) {
          setCvData(data);
        } else {
          setError("CV file not found");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch CV data"
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchCVData();
  }, [fileId]);

  return {
    cvData,
    isLoading,
    error,
  };
}
