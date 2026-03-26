/**
 * Strapi service for fetching CV file data
 */

interface StrapiFileResponse {
  readonly id: number;
  readonly documentId: string;
  readonly name: string;
  readonly alternativeText: string | null;
  readonly caption: string | null;
  readonly width: number | null;
  readonly height: number | null;
  readonly formats: Record<string, unknown> | null;
  readonly hash: string;
  readonly ext: string;
  readonly mime: string;
  readonly size: number;
  readonly url: string;
  readonly previewUrl: string | null;
  readonly provider: string;
  readonly provider_metadata: Record<string, unknown> | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly publishedAt: string;
}

interface CVFileData {
  readonly downloadUrl: string;
  readonly fileName: string;
  readonly fileSize: number;
}

class StrapiCVService {
  private readonly baseUrl: string =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  private readonly apiUrl: string = `${this.baseUrl}/api`;

  /**
   * Fetch CV file data by ID from Strapi
   */
  async getCVFileById(fileId: number): Promise<CVFileData | null> {
    try {
      const response = await fetch(`${this.apiUrl}/upload/files/${fileId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch CV file: ${response.status}`);
      }
      const fileData: StrapiFileResponse = await response.json();
      return this.transformFileData(fileData);
    } catch (error) {
      console.error("Error fetching CV file:", error);
      return null;
    }
  }

  /**
   * Fetch the latest CV file (assuming you have a specific naming pattern)
   */
  async getLatestCVFile(): Promise<CVFileData | null> {
    try {
      const response = await fetch(
        `${this.apiUrl}/upload/files?filters[name][$contains]=CV&sort=updatedAt:desc&pagination[limit]=1`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch latest CV file: ${response.status}`);
      }
      const data = await response.json();
      if (data.length === 0) {
        return null;
      }
      return this.transformFileData(data[0]);
    } catch (error) {
      console.error("Error fetching latest CV file:", error);
      return null;
    }
  }

  /**
   * Transform Strapi file response to our CV data format
   */
  private transformFileData(fileData: StrapiFileResponse): CVFileData {
    return {
      downloadUrl: `${this.baseUrl}${fileData.url}`,
      fileName: fileData.name,
      fileSize: fileData.size,
    };
  }
}

export const strapiCVService = new StrapiCVService();
export type { CVFileData, StrapiFileResponse };
