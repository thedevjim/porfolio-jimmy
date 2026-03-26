/**
 * Tech stack and skills data
 * 
 * Skill Level Color Mapping (rendered in tech-stack-tab.tsx):
 * - Expert: Green (bg-green-100 / text-green-600)
 * - Advanced: Blue (bg-blue-100 / text-blue-600)
 * - Intermediate: Yellow (bg-yellow-100 / text-yellow-600)
 * - Beginner: Gray (bg-gray-100 / text-gray-600)
 */
// TODO: add real icons for the tech stacks
export interface TechCategory {
  readonly id: string;
  readonly name: string;
  readonly technologies: readonly Technology[];
}

export interface Technology {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  readonly experience: string;
  readonly description: string;
}

export const TECH_STACK: readonly TechCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    technologies: [
      {
        id: "react",
        name: "React",
        icon: "⚛️",
        level: "Beginner",
        experience: "1+ year",
        description:
          "Building dynamic user interfaces with hooks, context, and modern patterns.",
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "▲",
        level: "Intermediate",
        experience: "1+ year",
        description:
          "Full-stack React framework with SSR, SSG, and API routes.",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "📘",
        level: "Intermediate",
        experience: "2+ years",
        description:
          "Type-safe JavaScript development with advanced type features.",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "🎨",
        level: "Intermediate",
        experience: "1+ year",
        description: "Utility-first CSS framework for rapid UI development.",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "🟨",
        level: "Intermediate",
        experience: "4+ years",
        description:
          "Modern ES6+ features, async programming, and DOM manipulation.",
      },
      {
        id: "html",
        name: "HTML5",
        icon: "🟧",
        level: "Intermediate",
        experience: "4+ years",
        description:
          "Semantic markup, accessibility, and modern web standards.",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    technologies: [

      {
        id: "java",
        name: "Java",
        icon: "☕",
        level: "Intermediate",
        experience: "2+ years",
        description:
          "Object-oriented programming and enterprise application development.",
      },
      {
        id: "springboot",
        name: "Spring Boot",
        icon: "🍃",
        level: "Intermediate",
        experience: "2+ years",
        description:
          "Java framework for building microservices and web applications.",
      },
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        level: "Intermediate",
        experience: "1+ years",
        description: "Scripting, automation, and backend development.",
      },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    technologies: [
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "🍃",
        level: "Intermediate",
        experience: "1+ years",
        description: "NoSQL document database for flexible data storage.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: "🔥",
        level: "Intermediate",
        experience: "1+ years",
        description: "Real-time database and authentication platform.",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    technologies: [
      {
        id: "git",
        name: "Git",
        icon: "📝",
        level: "Intermediate",
        experience: "3+ years",
        description:
          "Version control, branching strategies, and collaboration.",
      },
      {
        id: "docker",
        name: "Docker",
        icon: "🐳",
        level: "Intermediate",
        experience: "1+ years",
        description: "Containerization and deployment automation.",
      },
      {
        id: "figma",
        name: "Figma",
        icon: "🎨",
        level: "Intermediate",
        experience: "2+ years",
        description: "UI/UX design and prototyping for web applications.",
      },
    ],
  },
] as const;
