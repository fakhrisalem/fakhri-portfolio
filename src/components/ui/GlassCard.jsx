"use client";
import { motion } from "framer-motion";
function GlassCard({
  children,
  className = "",
  hover = true,
  gradient = false
}) {
  return <motion.div
    whileHover={hover ? { y: -5, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)" } : {}}
    transition={{ duration: 0.3 }}
    className={`
        relative rounded-2xl overflow-hidden
        bg-[rgba(15,23,42,0.4)]
        backdrop-blur-xl
        border border-[rgba(212,175,55,0.1)]
        ${gradient ? "bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-transparent" : ""}
        ${className}
      `}
  >
      {
    /* Glow effect on hover */
  }
      {hover && <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-transparent rounded-2xl" />
        </div>}
      {children}
    </motion.div>;
}
export {
  GlassCard
};
