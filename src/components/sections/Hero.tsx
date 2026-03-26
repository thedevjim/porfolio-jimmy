import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "../ui/badge";
import HeroChip from "../ui/hero-chip";
import { TypewriterEffect } from "../ui/animation-effects/typewriter-effect";

/**
 * Hero section component for the portfolio homepage
 * Contains main introduction and call-to-action with typewriter effect
 */
export default function Hero(): React.JSX.Element {
  // Define subtitle words for typewriter effect
  const subtitleWords = [
    "Full Stack Developer",
    "React Specialist",
    "JavaScript Expert",
    "Problem Solver",
    "Code Enthusiast",
  ];

  const badge = "✨ Full Stack Developer";
  const heading = "Jimmy Kharpatoe";
  const description =
    "I'm a passionate developer creating amazing digital experiences with modern technologies and best practices.";
  const image = {
    src: "/images/hero-section/hero-section-image.gif",
    alt: "Jimmy Kharpatoe - Full Stack Developer",
  };

  return (
    <section id="home" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-12 md:flex-row md:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left flex-1">
            {badge && (
              <Badge
                variant="outline"
                className="mb-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="mb-4 text-pretty text-4xl font-bold lg:text-6xl text-gray-900 dark:text-white">
              {heading}
            </h1>
            <div className="mb-6">
              <TypewriterEffect
                words={subtitleWords}
                className="text-pretty text-2xl font-medium lg:text-4xl"
              />
            </div>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <HeroChip>Java</HeroChip>
              <HeroChip>JavaScript</HeroChip>
              <HeroChip>React</HeroChip>
              <HeroChip>Next.js</HeroChip>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            {image?.src ? (
              <Image
                src={image.src}
                alt={image.alt || "Hero image"}
                width={800}
                height={600}
                className="w-full rounded-lg object-cover shadow-2xl"
                priority
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Image not available
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
