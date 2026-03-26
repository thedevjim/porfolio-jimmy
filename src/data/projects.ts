/**
 * Portfolio projects data
 */

interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly imageUrl: string;
  readonly projectUrl?: string;
  readonly githubUrl?: string;
  readonly featured: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description:
      "A description of the first project showcasing web development skills.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "",
    projectUrl: "",
    githubUrl: "https://github.com/username/project-one",
    featured: true,
  },
  {
    id: "project-2",
    title: "Project Two",
    description:
      "A description of the second project demonstrating full-stack capabilities.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    imageUrl: "",
    projectUrl: "https://project-two.example.com",
    githubUrl: "https://github.com/username/project-two",
    featured: true,
  },
  {
    id: "project-3",
    title: "Project Three",
    description:
      "A description of the third project showing mobile development skills.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    imageUrl: "",
    githubUrl: "https://github.com/username/project-three",
    featured: false,
  },
] as const;
