import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, GraduationCap, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const highlightsData = [
  {
    icon: Users,
    eyebrow: "MENTORSHIP",
    title: "Front-End Mentor",
    description:
      "Mentored 50+ junior developers in React.js, TypeScript, Redux, and responsive design through technical guidance and code reviews.",
    stat: "50+",
    statLabel: "Junior Developers",
    achievements: [
      "Mentored 50+ junior developers",
      "Provided guidance in React.js and TypeScript",
      "Reviewed code and encouraged clean coding practices",
    ],
  },
  {
    icon: GraduationCap,
    eyebrow: "TEACHING",
    title: "Programming Instructor",
    description:
      "Taught programming fundamentals, problem-solving, and algorithmic thinking to learners with different skill levels.",
    stat: "3",
    statLabel: "Core Languages",
    achievements: [
      "Taught Python, C++, and JavaScript",
      "Explained programming fundamentals and algorithms",
      "Supported learners with different technical backgrounds",
    ],
  },
  {
    icon: Code2,
    eyebrow: "PROBLEM SOLVING",
    title: "Algorithms & Problem Solving",
    description:
      "Solved more than 100 algorithmic problems on LeetCode while strengthening data structures, algorithms, and problem-solving skills.",
    stat: "100+",
    statLabel: "LeetCode Problems",
    achievements: [
      "Solved 100+ LeetCode problems",
      "Practiced data structures and algorithms",
      "Covered trees, graphs, sorting, and dynamic programming",
    ],
  },
];

function FlipCard({ item, index, flipped, onFlip }) {
  const Icon = item.icon;
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setTimeout(() => {
      onFlip(index);
    }, 4300 + index * 850);

    return () => window.clearTimeout(timer);
  }, [flipped, index, isPaused, onFlip]);

  return (
    <motion.div
      variants={staggerItem}
      className="h-[390px] [perspective:1200px] sm:h-[365px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        aria-label={`Flip ${item.title} card`}
        onClick={() => onFlip(index)}
        className="group relative h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      >
        <div
          className={`relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <GlassCard className="relative flex h-full flex-col overflow-hidden border-t-2 border-[#D4AF37] p-5 transition-all duration-300 group-hover:border-[#e8c547] group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.16)] sm:p-7">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 shadow-[0_0_24px_rgba(212,175,55,0.08)]">
                  <Icon size={27} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37]/80">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-xl font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="relative my-6 flex-1 leading-relaxed text-foreground-muted">
                {item.description}
              </p>
              <div className="relative flex items-center justify-between border-t border-[#D4AF37]/10 pt-4 text-xs tracking-wide text-[#D4AF37]/80">
                <span>CLICK TO EXPLORE</span>
                <span className="text-lg">↻</span>
              </div>
            </GlassCard>
          </div>

          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <GlassCard className="relative flex h-full flex-col overflow-hidden border-b-2 border-[#D4AF37] bg-[#0f172a]/80 p-5 shadow-[0_20px_50px_rgba(212,175,55,0.12)] sm:p-7">
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-[#D4AF37]/10 blur-3xl" />
              <div className="relative mb-5 flex items-center justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37]/80">
                    KEY HIGHLIGHTS
                  </p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="text-right">
                  <strong className="block text-3xl font-bold text-[#D4AF37]">{item.stat}</strong>
                  <span className="text-[10px] text-foreground-muted">{item.statLabel}</span>
                </div>
              </div>
              <div className="relative flex-1 space-y-3">
                {item.achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start gap-2 text-foreground-muted">
                    <span className="mt-0.5 font-bold text-[#D4AF37]">✓</span>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
              <div className="relative border-t border-[#D4AF37]/10 pt-4 text-xs tracking-wide text-[#D4AF37]/80">
                CLICK TO RETURN
              </div>
            </GlassCard>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function Leadership() {
  const [flippedCards, setFlippedCards] = useState(() => highlightsData.map(() => false));

  const toggleCard = (index) => {
    setFlippedCards((current) =>
      current.map((isFlipped, cardIndex) => (cardIndex === index ? !isFlipped : isFlipped)),
    );
  };

  return (
    <section id="leadership" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-[#D4AF37]">
            PROFESSIONAL HIGHLIGHTS
          </p>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Professional</span>{" "}
            <span className="text-[#D4AF37]">Highlights</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {highlightsData.map((item, index) => (
            <FlipCard
              key={item.title}
              item={item}
              index={index}
              flipped={flippedCards[index]}
              onFlip={toggleCard}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Leadership };
export default Leadership;

