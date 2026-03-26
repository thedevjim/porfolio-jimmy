// ./strapi_content_api.ts

// Define interfaces for type safety
interface StrapiErrorData {
  message?: string;
}

interface StrapiEntry {
  id: number;
  attributes: {
    CourseTitle: string;
    CourseDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    [key: string]: string; // Allow for additional fields
  };
}

interface StrapiResponse {
  data: StrapiEntry[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Function to retrieve entries
async function getEntries(): Promise<void> {
  const url: string = process.env.NEXT_PUBLIC_STRAPI_URL 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users` 
    : "http://localhost:1337/api/users";

  try {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData: StrapiErrorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }

    const jsonResponse: StrapiResponse = await response.json();
    const entries: StrapiEntry[] = jsonResponse.data; // Accessing the 'data' array
    console.log("Data retrieved:", entries);

    // retrieve specific collection fields
    /* 
    const courseTitles: string[] = entries.map((entry: StrapiEntry) => entry.attributes.CourseTitle);
    console.log('Course Titles:', courseTitles);
    */
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

getEntries();
