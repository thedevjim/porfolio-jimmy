/**
 * Testimonials and reviews data
 */

interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly message: string;
  readonly rating: number;
  readonly imageUrl?: string;
  readonly date: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "testimonial-1",
    name: "John Smith",
    role: "Project Manager",
    company: "Tech Solutions Inc",
    message:
      "Jimmy delivered exceptional work on our web application. His attention to detail and technical expertise made the project a great success.",
    rating: 5,
    imageUrl: "/images/profile/client-1.jpg",
    date: "2024-12-15",
  },
  {
    id: "testimonial-2",
    name: "Sarah Johnson",
    role: "CEO",
    company: "StartupXYZ",
    message:
      "Working with Jimmy was a pleasure. He understood our requirements perfectly and delivered a beautiful, functional website that exceeded our expectations.",
    rating: 5,
    imageUrl: "/images/profile/client-2.jpg",
    date: "2024-11-28",
  },
  {
    id: "testimonial-3",
    name: "Michael Brown",
    role: "CTO",
    company: "Digital Agency",
    message:
      "Jimmy's full-stack development skills are impressive. He helped us build a robust application that handles our growing user base efficiently.",
    rating: 4,
    imageUrl: "/images/profile/client-3.jpg",
    date: "2024-10-10",
  },
] as const;
