"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";

interface TypewriterEffectProps {
  readonly words: string[];
  readonly className?: string;
  readonly cursorClassName?: string;
  readonly typeSpeed?: number;
  readonly deleteSpeed?: number;
  readonly delayBetweenWords?: number;
  readonly loop?: boolean;
}

/**
 * Typewriter effect component that animates text as if being typed
 * Supports multiple words with smooth transitions and cursor animation
 */
export function TypewriterEffect({
  words,
  className = "",
  cursorClassName = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: TypewriterEffectProps): React.JSX.Element {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const cursorControls = useAnimationControls();

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Delete character
          setCurrentText(currentWord.substring(0, currentText.length - 1));

          if (currentText.length === 1) {
            setIsDeleting(false);
            if (loop || currentWordIndex < words.length - 1) {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        } else {
          // Add character
          setCurrentText(currentWord.substring(0, currentText.length + 1));

          if (currentText.length === currentWord.length - 1) {
            // Word complete, wait then start deleting (if looping or not last word)
            if (loop || currentWordIndex < words.length - 1) {
              setTimeout(() => setIsDeleting(true), delayBetweenWords);
            }
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop,
  ]);

  useEffect(() => {
    // Animate cursor blinking
    cursorControls.start({
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [cursorControls]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="text-blue-600 dark:text-blue-400">{currentText}</span>
      <motion.span
        animate={cursorControls}
        className={cn(
          "inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-400 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
}

interface TypewriterEffectSmoothProps {
  readonly words: Array<{
    readonly text: string;
    readonly className?: string;
  }>;
  readonly className?: string;
  readonly cursorClassName?: string;
}

/**
 * Smooth typewriter effect that animates each character individually
 * Similar to Aceternity UI's implementation but optimized for your use case
 */
export function TypewriterEffectSmooth({
  words,
  className = "",
  cursorClassName = "",
}: TypewriterEffectSmoothProps): React.JSX.Element {
  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  return (
    <div className={cn("text-2xl font-medium lg:text-4xl", className)}>
      {" "}
      <motion.div className="inline">
        {wordsArray.map((word, wordIdx) => (
          <div
            key={`word-${word.text.join("")}-${wordIdx}`}
            className="inline-block"
          >
            {word.text.map((char, charIdx) => (
              <motion.span
                key={`char-${char}-${wordIdx}-${charIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: wordIdx * 0.5 + charIdx * 0.1,
                  ease: "easeInOut",
                }}
                className={cn(
                  "text-blue-600 dark:text-blue-400",
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            {wordIdx < wordsArray.length - 1 && <span>&nbsp;</span>}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-1 h-10 lg:h-12 bg-blue-600 dark:bg-blue-400 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
}
