"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
function ProgressBar({
  label,
  percentage,
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-medium text-gold">{percentage}%</span>
      </div>
      <div className="w-full bg-[#1a1a1a] rounded-full h-2 overflow-hidden border border-[rgba(212,175,55,0.1)]">
        <motion.div
    className="h-full bg-gradient-to-r from-gold to-[#e8c547] rounded-full"
    initial={{ width: 0 }}
    animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  />
      </div>
    </div>;
}
export {
  ProgressBar
};
