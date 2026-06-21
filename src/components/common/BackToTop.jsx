"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <AnimatePresence>
      {isVisible && <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 0.3 }}
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow"
    aria-label="Back to top"
  >
          <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
            <ArrowUp size={24} />
          </motion.div>
        </motion.button>}
    </AnimatePresence>;
}
export {
  BackToTop
};
