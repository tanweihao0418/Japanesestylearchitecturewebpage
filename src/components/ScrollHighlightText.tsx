import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ScrollHighlightTextProps {
  children: string;
  className?: string;
}

export function ScrollHighlightText({ children, className = "" }: ScrollHighlightTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollHighlightWords({ text }: { text: string }) {
  const words = text.split(" ");
  const ref = useRef(null);
  
  return (
    <div ref={ref} className="relative">
      {words.map((word, index) => {
        return (
          <Word key={index} index={index} word={word} totalWords={words.length} />
        );
      })}
    </div>
  );
}

function Word({ word, index, totalWords }: { word: string; index: number; totalWords: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });

  const progress = useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
    [0, 1]
  );

  const opacity = useTransform(progress, [0, 1], [0.2, 1]);
  const backgroundColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["rgba(201, 168, 106, 0)", "rgba(201, 168, 106, 0.15)", "rgba(201, 168, 106, 0)"]
  );

  return (
    <motion.span
      ref={ref}
      style={{ opacity }}
      className="inline-block mr-2 relative px-1"
    >
      <motion.span
        style={{ backgroundColor }}
        className="absolute inset-0 -z-10 rounded"
      />
      {word}
    </motion.span>
  );
}
