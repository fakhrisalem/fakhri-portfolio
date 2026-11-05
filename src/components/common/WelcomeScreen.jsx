"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { WelcomeSphere3D } from "@/components/common/WelcomeSphere3D";
import { SpotlightBackground } from "@/components/common/SpotlightBackground";
import { FallingText } from "@/components/common/FallingText";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/fakhrisalem" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/monafakhri" },
  { icon: Mail, label: "Email", href: "mailto:monafakhri50@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201154926990" },
  { icon: Briefcase, label: "Portfolio", action: "enter" },
];

const celebrationColors = ["#F4D35E", "#9BD1FF", "#F1A6A6", "#7CCB95", "#D5B8FF"];
const iconColorCycles = [
  ["#67E8F9", "#A78BFA", "#67E8F9"],
  ["#F9A8D4", "#FCD34D", "#F9A8D4"],
  ["#86EFAC", "#67E8F9", "#86EFAC"],
  ["#C4B5FD", "#FDA4AF", "#C4B5FD"],
  ["#FCD34D", "#86EFAC", "#FCD34D"],
];
const confettiPieces = Array.from({ length: 42 }, (_, index) => ({
  side: index % 2 === 0 ? "left" : "right",
  startTop: `${(index % 7) * 1.5 - 3}vh`,
  endLeft: index % 2 === 0
    ? `${28 + ((index * 13) % 22)}%`
    : `${50 + ((index * 17) % 22)}%`,
  delay: (index % 14) * 0.04,
  duration: 1.8 + (index % 5) * 0.15,
  drift: ((index * 29) % 120) - 60,
  color: celebrationColors[index % celebrationColors.length],
  shape: index % 3 === 0 ? "50%" : "2px",
}));

export function WelcomeScreen({ show, onEnter }) {
  const [leaving, setLeaving] = useState(false)

  const handleEnterClick = () => {
    if (leaving) return
    setLeaving(true)
  }

  useEffect(() => {
    if (!leaving) return undefined
    const timeout = window.setTimeout(onEnter, 5300)
    return () => window.clearTimeout(timeout)
  }, [leaving, onEnter])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-x-hidden overflow-y-auto bg-black sm:items-center"
        >
          <SpotlightBackground image="image/CAI.webp" radius={220} />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none" />

          <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:gap-6 sm:px-6">
            <div className="flex w-full flex-row flex-nowrap items-center justify-center gap-1 min-[360px]:gap-2 sm:gap-3 md:gap-5 xl:gap-10">
              {[socials.slice(0, 2), socials.slice(2)].map((group, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        delayChildren: groupIndex === 0 ? 0.55 : 1.12,
                        staggerChildren: 0.26,
                      },
                    },
                  }}
                  className={`flex shrink-0 flex-col items-center justify-center gap-7 sm:gap-8 md:gap-10 lg:gap-12 ${groupIndex === 0 ? "order-1" : "order-3"}`}
                >
                  {group.map((s, index) => {
                    const Icon = s.icon;
                    const isLeftGroup = groupIndex === 0;
                    const iconColors = iconColorCycles[(groupIndex * 2 + index) % iconColorCycles.length];
                    const entrance = index % 2 === 0
                      ? { x: isLeftGroup ? -36 : 36, y: 0 }
                      : { x: 0, y: -32 };
                    return (
                      <motion.div
                        key={s.label}
                        variants={{
                          hidden: { opacity: 0, ...entrance, scale: 0.82 },
                          show: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                        style={{ perspective: 700 }}
                      >
                        <motion.a
                          href={s.action === "enter" ? undefined : s.href}
                          onClick={s.action === "enter" ? handleEnterClick : undefined}
                          target={s.action === "enter" ? undefined : "_blank"}
                          rel={s.action === "enter" ? undefined : "noopener noreferrer"}
                          role={s.action === "enter" ? "button" : undefined}
                          aria-label={s.label}
                          title={s.label}
                          animate={{
                            y: [0, -4, 0],
                            rotateX: [0, 5, 0],
                            rotateY: [0, index % 2 === 0 ? -6 : 6, 0],
                            color: iconColors,
                            borderColor: iconColors,
                            backgroundColor: iconColors.map((color) => `${color}20`),
                          }}
                          transition={{
                            duration: 3.2 + index * 0.18,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.22,
                          }}
                          whileHover={{
                            scale: 1.12,
                            y: -7,
                            rotate: -4,
                            rotateX: 0,
                            rotateY: 0,
                            borderColor: "rgba(244,211,94,0.9)",
                            backgroundColor: "rgba(212,175,55,0.2)",
                            boxShadow: "0 12px 32px rgba(212,175,55,0.35), 0 0 20px rgba(244,211,94,0.24)",
                          }}
                          whileTap={{ scale: 0.94, rotate: 0 }}
                          className="group relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-white/[0.14] via-white/[0.05] to-[#D4AF37]/[0.12] text-white/80 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.2),inset_-2px_-3px_8px_rgba(0,0,0,0.35),0_10px_26px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 hover:text-[#F4D35E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D35E] min-[360px]:h-8 min-[360px]:w-8 min-[480px]:h-9 min-[480px]:w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 min-[480px]:h-[17px] min-[480px]:w-[17px] sm:h-5 sm:w-5 lg:h-[22px] lg:w-[22px]"
                            style={{ transform: "translateZ(8px)" }}
                          />
                          <span
                            className={`pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#11131b]/95 px-2.5 py-1.5 text-[10px] font-medium tracking-wide text-white shadow-xl opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100 md:top-1/2 md:-translate-y-1/2 md:group-hover:-translate-y-1/2 ${isLeftGroup ? "md:left-auto md:right-[calc(100%+10px)] md:translate-x-1 md:group-hover:translate-x-0" : "md:right-auto md:left-[calc(100%+10px)] md:-translate-x-1 md:group-hover:translate-x-0"}`}
                          >
                            {s.label}
                          </span>
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 22 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="order-2 mt-1 shrink-0"
              >
                <WelcomeSphere3D size={520} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-white/50 text-sm md:text-base tracking-wide">
                Mona Fakhri &nbsp;•&nbsp; Cairo, Egypt
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: leaving ? ["0% 50%", "100% 50%"] : "0% 50%",
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.9 },
                y: { duration: 0.8, delay: 0.9 },
                backgroundPosition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 38px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterClick}
              disabled={leaving}
              className="group relative z-20 mt-2 overflow-hidden rounded-full border border-white/30 px-10 py-4 text-sm font-bold tracking-[0.18em] text-[#11131b] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_10px_30px_rgba(212,175,55,0.2)]"
              style={{
                background: "linear-gradient(110deg, #D4AF37 0%, #FFE7A3 48%, #B9A2FF 100%)",
                backgroundSize: "220% 100%",
              }}
            >
              <motion.span
                aria-hidden="true"
                initial={{ x: "-130%", opacity: 0 }}
                animate={leaving ? { x: "130%", opacity: [0, 0.8, 0] } : { x: "-130%", opacity: 0 }}
                transition={{ duration: 0.72, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/75 to-transparent"
              />
              <span className="relative z-10">ENTER PORTFOLIO</span>
            </motion.button>
          </div>
        </motion.div>
      )}
      {show && leaving && (
        <motion.div
          key="celebration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-0 z-[110] overflow-hidden bg-[#080914]/80 backdrop-blur-[3px]"
          aria-hidden="true"
        >
          {confettiPieces.map((piece, index) => (
            <motion.span
              key={`confetti-${index}`}
              initial={{
                left: piece.side === "left" ? "-1%" : "101%",
                top: piece.startTop,
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                left: piece.endLeft,
                top: ["10vh", "34vh", "72vh", "108vh"],
                x: piece.side === "left" ? piece.drift : -piece.drift,
                rotate: index % 2 === 0 ? 620 : -620,
                opacity: [0, 1, 1, 1, 0],
                scale: [0.5, 1, 1, 0.85],
              }}
              transition={{
                delay: piece.delay,
                duration: piece.duration,
                top: { duration: piece.duration, ease: [0.12, 0.75, 0.35, 1] },
                left: { duration: piece.duration, ease: [0.2, 0.65, 0.35, 1] },
                ease: "linear",
              }}
              className="absolute h-3 w-2 shadow-[0_0_12px_currentColor]"
              style={{
                borderRadius: piece.shape,
                backgroundColor: piece.color,
                color: piece.color,
              }}
            />
          ))}

          {["left", "right"].map((side, index) => (
            <motion.div
              key={`party-popper-${side}`}
              initial={{ opacity: 0, scale: 0.4, rotate: side === "left" ? -35 : 35 }}
              animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 1.8] }}
              transition={{ delay: 0.12 + index * 0.16, duration: 0.8, ease: "easeOut" }}
              className={`absolute top-[4vh] h-16 w-16 rounded-full border border-[#F4D35E]/60 shadow-[0_0_35px_rgba(244,211,94,0.2)] ${side === "left" ? "left-[2vw]" : "right-[2vw]"}`}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 px-2 text-center sm:px-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#F4D35E]">
              Full Stack Developer
            </p>
            <FallingText
              text="Design. Build. Deliver."
              className="text-[clamp(2rem,8vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.02]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              delay={0.35}
              colors={["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#D4AF37", "#F9E6A6", "#9BD1FF", "#C7881B", "#8AB4F8", "#F1A6A6", "#F6D66D", "#7CCB95"]}
            />
            <p className="mt-3 text-white/50 text-sm md:text-base tracking-wide">
              Mona Fakhri &nbsp;•&nbsp; Cairo, Egypt
            </p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-2xl font-semibold tracking-wide text-white drop-shadow-[0_0_20px_rgba(155,209,255,0.35)] sm:text-3xl"
            >
              Let&apos;s explore
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeScreen;
