"use client";
import { motion } from "framer-motion";

export function FallingText({
  text = "",
  className,
  style,
  delay = 0,
  colors = ["#D4AF37", "#F3E9D2", "#E6D0A3", "#edaa0d", "#c3f206"],
  dropIndices = [1, 5, 10, 16, 22, 28],
}) {
  const letters = [...text].map((char, index) => ({
    char,
    key: `${char}-${index}`,
    color: colors[index % colors.length],
    fall: dropIndices.includes(index),
    drop: 60 + (index % 4) * 20,
    rotate: index % 2 === 0 ? -12 : 8,
  }));

  return (
    <motion.h1
      className={className}
      style={{ ...style, display: "inline-block" }}
      aria-label={text}
    >
      {letters.map((letter, index) => {
        const isFalling = letter.fall;

        return (
          <motion.span
            key={letter.key}
            aria-hidden="true"
            style={{
              display: "inline-block",
              color: letter.color,
              whiteSpace: "pre",
              textShadow: "0 6px 18px rgba(0,0,0,0.55)",
            }}
            initial={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
            animate={isFalling ? {
              y: [0, 0, 18, 80],
              opacity: [1, 1, 1, 0],
              rotate: [0, 0, 4, 12],
              filter: ["blur(0px)", "blur(0px)", "blur(0px)", "blur(4px)"],
              scale: [1, 1, 1, 0.9],
            } : { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
            transition={isFalling ? {
              duration: 2.2,
              delay: delay + index * 0.16,
              ease: "easeInOut",
              times: [0, 0.2, 0.7, 1],
            } : { duration: 0.4 }}
          >
            {letter.char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

export default FallingText;