"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, GraduationCap, MapPin, MessageCircle } from "lucide-react";
import { EgyptianPyramid3D } from "@/components/common/EgyptianPyramid3D";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e27] to-black z-0" />

      <EgyptianPyramid3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
            style={{ perspective: 800 }}
          >
            <motion.h1
              animate={{ rotateY: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3.2rem, 9vw, 7rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                transformStyle: "preserve-3d",
                textShadow: `2px 2px 12px rgba(0,0,0,0.45), 0 0 40px rgba(255,255,255,0.15)`,
                background: "linear-gradient(120deg, #FFE8B5 0%, #FFFFFF 18%, #B8E6FF 36%, #FFD6E8 54%, #FFFFFF 72%, #C9F2D8 88%, #FFE8B5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mona Fakhri
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="space-y-2"
          >
            <TypingTitle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="hero-meta-text flex flex-col md:flex-row items-center justify-center gap-4 text-foreground-muted text-lg"
          >
            <span className="flex items-center gap-2">
              <GraduationCap size={18} className="text-[#D4AF37]" />
              Cairo University - Computer Science
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-[#D4AF37]" />
              Cairo, Egypt
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <span className="hero-training-label text-foreground-muted text-sm">Trained at:</span>
            {["ITI", "NTI", "Digilians"].map((company) => (
              <span key={company} className="hero-training-company text-white text-sm font-medium">
                {company}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex w-full max-w-[560px] flex-col sm:flex-row items-stretch justify-center gap-4 pt-8"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.07, boxShadow: "0 0 32px rgba(212,175,55,0.55)" }}
              whileTap={{ scale: 0.96 }}
              className="hero-cta hero-cta--primary group relative flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 sm:px-8 rounded-xl font-bold text-sm sm:text-base overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <Briefcase size={20} className="relative z-10" />
              <span className="relative z-10">Explore My Work</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.07, boxShadow: "0 0 28px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.96 }}
              className="hero-cta hero-cta--secondary group relative flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 sm:px-8 rounded-xl font-bold text-sm sm:text-base overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(212,175,55,0.12)" }}
              />
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Get in Touch</span>
            </motion.button>
          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#D4AF37]"
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}

function TypingTitle() {
  const fullText = "Software Engineer | Full Stack Developer";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 45);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="hero-specialization text-[#D4AF37] text-lg md:text-xl font-semibold tracking-widest uppercase min-h-[2rem]">
      {displayed}
      {displayed.length < fullText.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="inline-block w-[2px] h-5 bg-[#D4AF37] ml-1 align-middle"
        />
      )}
    </div>
  );
}

export { Hero };
