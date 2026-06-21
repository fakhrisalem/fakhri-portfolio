"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerItem } from "@/lib/animations";
function About() {
  return <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {
    /* Section Title */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16"
  >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">About</span>{" "}
            <span className="text-[#D4AF37]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </motion.div>

        {
    /* Main Content */
  }
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {
    /* Left - Description */
  }
          <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="lg:col-span-2 space-y-6"
  >
            <GlassCard className="p-8">
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I&apos;m a passionate Software Engineer specializing in Front-End Development with expertise in React.js and modern web technologies. My journey began with a love for UI/UX best practices, which has evolved into creating responsive, user-friendly applications that solve real-world problems.
              </p>

              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                With hands-on experience in HTML, CSS, JavaScript, and component-based architecture, I combine technical excellence with creative problem-solving. I&apos;m committed to writing clean, maintainable code and delivering exceptional user experiences through intuitive interface design.
              </p>

              <p className="text-lg text-foreground-muted leading-relaxed">
                Currently mentoring junior developers at Instant Software Solutions, I bring both technical expertise and a passion for knowledge-sharing. I&apos;m constantly learning new technologies and staying updated with the latest design patterns and best practices in web development.
              </p>
            </GlassCard>

            {
    /* Career Objective */
  }
            <GlassCard className="p-8 border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-white mb-4">Career Objective</h3>
              <p className="text-foreground-muted leading-relaxed">
                To leverage my Front-End expertise and passion for user-centric design to build innovative, responsive web applications that enhance user experiences. Seeking opportunities to contribute to growth-driven organizations where technical excellence, continuous learning, and agile methodologies are valued. Committed to mentoring junior developers and fostering a collaborative, knowledge-sharing culture.
              </p>
            </GlassCard>
          </motion.div>

          {
    /* Right - Profile Image with Stats */
  }
          <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
            {
    /* Profile Image */
  }
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 z-10" />
              <img
    src="/profile.jpg"
    alt="Mona Fakhri"
    width={400}
    height={500}
    className="w-full h-auto object-cover"
  />
            </div>

            {
    /* Stats */
  }
            <div className="space-y-4">
              {[
    { number: 10, suffix: "+", label: "Projects Completed" },
    { number: 12, suffix: "+", label: "Technologies Mastered" },
    { number: 8, suffix: "+", label: "Team & Mentoring Projects" }
  ].map((stat, index) => <motion.div
    key={index}
    variants={staggerItem}
    className="glass-effect rounded-xl p-4 text-center"
  >
                  <AnimatedCounter
    end={stat.number}
    suffix={stat.suffix}
    className="text-xl mb-1"
  />
                  <p className="text-foreground-muted text-xs font-medium">{stat.label}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>

        {
    /* Specialties */
  }
        <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
          <h3 className="text-3xl font-bold text-white mb-8">Specialties & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
    {
      title: "React.js Development",
      description: "Building dynamic, responsive user interfaces with modern React patterns, state management, and component architecture."
    },
    {
      title: "Responsive Design",
      description: "Creating mobile-first, fully responsive web applications with CSS3, Bootstrap, and Tailwind CSS frameworks."
    },
    {
      title: "UI/UX Best Practices",
      description: "Translating Figma designs into pixel-perfect, accessible interfaces with focus on user experience and accessibility."
    },
    {
      title: "JavaScript & TypeScript",
      description: "Writing clean, maintainable code with modern JavaScript ES6+, async programming, and type-safe development."
    },
    {
      title: "Design Tools & Prototyping",
      description: "Proficient in Figma and Adobe XD for design collaboration and converting prototypes into production code."
    },
    {
      title: "Mentoring & Teaching",
      description: "Guiding junior developers in coding standards, best practices, and helping them grow their technical skills."
    }
  ].map((specialty, index) => <motion.div
    key={index}
    variants={staggerItem}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
                <GlassCard className="p-6 h-full">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-3">{specialty.title}</h4>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </GlassCard>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}
export {
  About
};
