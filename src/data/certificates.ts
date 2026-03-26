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
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy",
    date: "2025",
    description:
      "Learned Dart programming from scratch and grasped fundamental concepts for Flutter development. Built Android and iOS apps from a single codebase using common UI components, multi-screen navigation, forms, and UX elements.",
    imageUrl: "/images/certificates/flutter-dart.jpg",
    credentialUrl: "https://www.udemy.com/certificate/UC-1790be6e-d932-465d-99fa-fb12910e59b4/",
    skills: ["Flutter", "Dart", "Mobile App Development", "Android", "iOS", "UI/UX", "State Management"],
  },
] as const;
