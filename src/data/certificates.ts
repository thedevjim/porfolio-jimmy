/**
 * Certificates and achievements data
 */

export interface Certificate {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly date: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly credentialUrl?: string;
  readonly skills: readonly string[];
}

export const CERTIFICATES: readonly Certificate[] = [
  {
    id: "cert-1",
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Comprehensive certification demonstrating expertise in developing and maintaining applications on AWS platform.",
    imageUrl: "/images/certificates/aws-developer.jpg",
    credentialUrl: "https://aws.amazon.com/certification/",
    skills: ["AWS", "Lambda", "DynamoDB", "S3", "EC2"],
  },
  {
    id: "cert-2",
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    description:
      "In-depth course covering React fundamentals, hooks, state management, and modern development practices.",
    imageUrl: "/images/certificates/react-complete.jpg",
    credentialUrl: "https://udemy.com/certificate/",
    skills: ["React", "Redux", "Context API", "Hooks", "TypeScript"],
  },
  {
    id: "cert-3",
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    description:
      "Comprehensive full-stack development certification covering frontend and backend technologies.",
    imageUrl: "/images/certificates/fullstack-fcc.jpg",
    credentialUrl: "https://freecodecamp.org/certification/",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    id: "cert-4",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2023",
    description:
      "Advanced JavaScript concepts, algorithms, and data structures for efficient problem-solving.",
    imageUrl: "/images/certificates/js-algorithms.jpg",
    credentialUrl: "https://freecodecamp.org/certification/",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: "cert-5",
    title: "Next.js & React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    description:
      "Master Next.js framework for building production-ready React applications with SSR and SSG.",
    imageUrl: "/images/certificates/nextjs-complete.jpg",
    credentialUrl: "https://udemy.com/certificate/",
    skills: ["Next.js", "SSR", "SSG", "API Routes", "Deployment"],
  },
  {
    id: "cert-6",
    title: "TypeScript - The Complete Developer's Guide",
    issuer: "Udemy",
    date: "2023",
    description:
      "Comprehensive TypeScript course covering type safety, advanced features, and best practices.",
    imageUrl: "/images/certificates/typescript-guide.jpg",
    credentialUrl: "https://udemy.com/certificate/",
    skills: ["TypeScript", "Type Safety", "Generics", "Decorators", "OOP"],
  },
] as const;
