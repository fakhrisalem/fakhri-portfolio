"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail, Briefcase } from "lucide-react";
import { WelcomeSphere3D } from "@/components/common/WelcomeSphere3D";
import { SpotlightBackground } from "@/components/common/SpotlightBackground";
import { FallingText } from "@/components/common/FallingText";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/fakhrisalem" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/monafakhri" },
  { icon: Mail, label: "Email", href: "mailto:monafakhri50@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201154926990" },
  { icon: Briefcase, label: "Portfolio", action: "enter" }, // clicking this enters the site, like the button below
];

import { useRef, useState } from "react";

export function WelcomeScreen({ show, onEnter }) {
  const enterRef = useRef(null)
  const [leaving, setLeaving] = useState(false)
  const [origin, setOrigin] = useState(null)

  const handleEnterClick = () => {
    const el = enterRef.current
    if (!el) return onEnter()
    const rect = el.getBoundingClientRect()
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: rect.width, h: rect.height })
    setLeaving(true)
  }

  const onOverlayComplete = () => {
    // after the overlay finished expanding, call onEnter to remove welcome screen
    onEnter()
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Hidden photo, revealed by the cursor as a "flashlight" */}
          <SpotlightBackground image="image/CAI.webp" radius={220} />

          {/* thin gold vignette so the UI stays readable even when the spotlight passes behind it */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <WelcomeSphere3D size={420} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-[#D4AF37] text-xs md:text-sm font-semibold tracking-[0.35em] uppercase">
                Full Stack Developer
              </p>
              <FallingText
                text="Design. Build. Deliver."
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.02]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                delay={0.35}
                colors={["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#D4AF37", "#F9E6A6", "#9BD1FF", "#C7881B", "#8AB4F8", "#F1A6A6", "#F6D66D", "#7CCB95"]}
              />
              <p className="text-white/50 text-sm md:text-base tracking-wide">
                Mona Fakhri &nbsp;•&nbsp; Cairo, Egypt
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
              }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
            >
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  // outer: handles the one-time staggered entrance
                  <motion.div
                    key={s.label}
                    variants={{
                      hidden: { opacity: 0, y: 16, scale: 0.7 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                  >
                    {/* middle: continuous idle float, offset per icon so they don't move in sync */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.25,
                      }}
                    >
                      <motion.a
                        href={s.action === "enter" ? undefined : s.href}
                        onClick={s.action === "enter" ? onEnter : undefined}
                        target={s.action === "enter" ? undefined : "_blank"}
                        rel={s.action === "enter" ? undefined : "noopener noreferrer"}
                        role={s.action === "enter" ? "button" : undefined}
                        aria-label={s.label}
                        whileHover={{
                          scale: 1.15,
                          boxShadow: "0 0 24px rgba(212,175,55,0.6)",
                          borderColor: "rgba(212,175,55,0.9)",
                        }}
                        whileTap={{ scale: 0.92 }}
                        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer"
                        style={{
                          background: "rgba(212,175,55,0.08)",
                          border: "1px solid rgba(212,175,55,0.35)",
                        }}
                      >
                        {/* soft pulsing ring behind the icon */}
                        <motion.span
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{ background: "rgba(212,175,55,0.35)" }}
                          animate={{ opacity: [0, 0.35, 0], scale: [0.6, 1.6, 1.6] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut",
                          }}
                        />
                        <Icon
                          size={20}
                          className="relative z-10 text-white/80 group-hover:text-[#D4AF37] transition-colors"
                        />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 32px rgba(212,175,55,0.55)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterClick}
              ref={enterRef}
              className="mt-2 px-10 py-4 rounded-full font-bold tracking-widest text-sm relative z-20"
              style={{
                background: "linear-gradient(90deg, #D4AF37 0%, #F4D35E 28%, #FFDFA3 52%, #D4AF37 100%)",
                color: "#0a0a0a",
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              ENTER PORTFOLIO
            </motion.button>
            {/* expanding overlay transition */}
            {leaving && origin && (
              <motion.div
                initial={{ scale: 0, opacity: 0.95 }}
                animate={{ scale: 60, opacity: 1 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'fixed',
                  left: origin.x,
                  top: origin.y,
                  width: origin.w,
                  height: origin.h,
                  transform: 'translate(-50%, -50%)',
                  borderRadius: 9999,
                  zIndex: 110,
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 12%), linear-gradient(90deg,#D4AF37 0%,#F4D35E 28%,#FFDFA3 52%,#D4AF37 100%)',
                  boxShadow: '0 30px 80px rgba(212,175,55,0.28)',
                }}
                onAnimationComplete={onOverlayComplete}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeScreen;
