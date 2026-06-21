"use client";
import { motion } from "framer-motion";
function PremiumButton({
  children,
  onClick,
  href,
  variant = "gold",
  size = "md",
  className = "",
  disabled = false,
  external = false
}) {
  const baseClass = `
    font-semibold rounded-lg
    transition-all duration-300
    flex items-center justify-center
    gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }[size];
  const variantClass = {
    gold: "bg-[#D4AF37] text-black hover:bg-[#e8c547] shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    dark: "bg-[#1a1a1a] text-white border border-[rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
  }[variant];
  const Component = href ? "a" : "button";
  const props = href ? {
    href,
    target: external ? "_blank" : void 0,
    rel: external ? "noopener noreferrer" : void 0
  } : {
    onClick,
    disabled
  };
  return <motion.div
    whileHover={{ scale: disabled ? 1 : 1.05 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
  >
      <Component
    {...props}
    className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
  >
        {children}
      </Component>
    </motion.div>;
}
export {
  PremiumButton
};
