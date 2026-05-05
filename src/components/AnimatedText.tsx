import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="relative inline-block mx-[0.25em]">
            {word.split("").map((char, charIndex) => {
              // Calculate index across all characters
              const prevWordsLength = words
                .slice(0, wordIndex)
                .join("")
                .length;
              const charIdx = prevWordsLength + charIndex;
              const totalChars = text.replace(/\s/g, "").length;
              
              const start = charIdx / totalChars;
              const end = (charIdx + 1) / totalChars;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <span key={charIndex} className="relative inline-block">
                  <span className="opacity-20">{char}</span>
                  <motion.span
                    style={{ opacity }}
                    className="absolute inset-0"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
