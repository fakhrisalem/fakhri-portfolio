"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = ""
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1e3 / 60);
    return () => clearInterval(interval);
  }, [isVisible, end, duration]);
  return <div ref={ref} className={className}>
      <motion.div
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold text-gold"
  >
        {prefix}
        {count}
        {suffix}
      </motion.div>
    </div>;
}
export {
  AnimatedCounter
};
