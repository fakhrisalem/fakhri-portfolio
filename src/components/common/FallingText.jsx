"use client";
import { motion } from "framer-motion";

export function FallingText({
  text = "",
  className,
  style,
  delay = 0,
  // updated refined palette: primary gold plus warm neutrals for a premium look
  colors = ["#D4AF37", "#F3E9D2", "#E6D0A3", "#B58B2B", "#6B5330"],
}) {
  const letters = [...text].map((char, index) => ({
    char,
    key: `${char}-${index}`,
    color: colors[index % colors.length],
    drop: index % 4 === 0 ? 92 : index % 3 === 0 ? 70 : 56,
    rotate: index % 2 === 0 ? -12 : 8,
  }));

  return (
    <motion.h1
      className={className}
      style={{ ...style, display: "inline-block" }}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.035, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {letters.map((letter) => (
        <motion.span
          key={letter.key}
          aria-hidden="true"
          style={{
            display: "inline-block",
            color: letter.color,
            whiteSpace: "pre",
            textShadow: "0 6px 18px rgba(0,0,0,0.55)",
          }}
          variants={{
            hidden: { y: -letter.drop, opacity: 0, rotate: letter.rotate },
            show: {
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { type: "spring", damping: 10, stiffness: 250, mass: 0.5 },
            },
          }}
        >
          {letter.char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default FallingText;