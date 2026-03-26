/**
 * Tech stack and skills data
 */

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
        level: "Expert",
        experience: "3+ years",
        description:
          "Building dynamic user interfaces with hooks, context, and modern patterns.",
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "▲",
        level: "Advanced",
        experience: "2+ years",
        description:
          "Full-stack React framework with SSR, SSG, and API routes.",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "📘",
        level: "Advanced",
        experience: "2+ years",
        description:
          "Type-safe JavaScript development with advanced type features.",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "🎨",
        level: "Expert",
        experience: "2+ years",
        description: "Utility-first CSS framework for rapid UI development.",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "🟨",
        level: "Expert",
        experience: "4+ years",
        description:
          "Modern ES6+ features, async programming, and DOM manipulation.",
      },
      {
        id: "html",
        name: "HTML5",
        icon: "🟧",
        level: "Expert",
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
        id: "nodejs",
        name: "Node.js",
        icon: "🟢",
        level: "Advanced",
        experience: "2+ years",
        description:
          "Server-side JavaScript runtime for scalable applications.",
      },
      {
        id: "java",
        name: "Java",
        icon: "☕",
        level: "Advanced",
        experience: "3+ years",
        description:
          "Object-oriented programming and enterprise application development.",
      },
      {
        id: "springboot",
        name: "Spring Boot",
        icon: "🍃",
        level: "Advanced",
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
      {
        id: "express",
        name: "Express.js",
        icon: "🚀",
        level: "Advanced",
        experience: "2+ years",
        description: "Fast, unopinionated web framework for Node.js.",
      },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    technologies: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: "🐘",
        level: "Advanced",
        experience: "2+ years",
        description:
          "Advanced relational database with complex queries and optimization.",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "🍃",
        level: "Intermediate",
        experience: "1+ years",
        description: "NoSQL document database for flexible data storage.",
      },
      {
        id: "redis",
        name: "Redis",
        icon: "🔴",
        level: "Intermediate",
        experience: "1+ years",
        description: "In-memory data store for caching and session management.",
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
        level: "Advanced",
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
        id: "aws",
        name: "AWS",
        icon: "☁️",
        level: "Intermediate",
        experience: "1+ years",
        description: "Cloud services, EC2, S3, Lambda, and deployment.",
      },
      {
        id: "figma",
        name: "Figma",
        icon: "🎨",
        level: "Intermediate",
        experience: "2+ years",
        description: "UI/UX design and prototyping for web applications.",
      },
      {
        id: "vscode",
        name: "VS Code",
        icon: "💙",
        level: "Expert",
        experience: "4+ years",
        description:
          "Primary development environment with extensions and customization.",
      },
    ],
  },
] as const;
