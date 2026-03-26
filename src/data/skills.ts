/**
 * Skills and technologies data
 */

interface Skill {
  readonly name: string;
  readonly level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  readonly category: "Frontend" | "Backend" | "Database" | "Tools" | "Other";
  readonly iconUrl?: string;
}

export const SKILLS: readonly Skill[] = [
  {
    name: "JavaScript",
    level: "Expert",
    category: "Frontend",
    iconUrl: "/images/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    iconUrl: "/images/icons/typescript.svg",
  },
  {
    name: "React",
    level: "Expert",
    category: "Frontend",
    iconUrl: "/images/icons/react.svg",
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    iconUrl: "/images/icons/nextjs.svg",
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    iconUrl: "/images/icons/nodejs.svg",
  },
  {
    name: "Express",
    level: "Advanced",
    category: "Backend",
    iconUrl: "/images/icons/express.svg",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    category: "Database",
    iconUrl: "/images/icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
    iconUrl: "/images/icons/postgresql.svg",
  },
  {
    name: "Git",
    level: "Advanced",
    category: "Tools",
    iconUrl: "/images/icons/git.svg",
  },
  {
    name: "Docker",
    level: "Intermediate",
    category: "Tools",
    iconUrl: "/images/icons/docker.svg",
  },
] as const;

export const SKILL_CATEGORIES: readonly string[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Other",
] as const;
