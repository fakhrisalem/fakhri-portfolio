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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
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
                I&apos;m a Computer Science student and Software Engineering Intern candidate with hands-on experience across software development, backend APIs, databases, testing, automation, and full-stack web applications. I work with Python, C++, JavaScript, and TypeScript and enjoy building reliable solutions through problem solving and clean code.
              </p>

              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                My projects include a full-stack HR platform, backend services, Python automation tools, C++ systems, data analysis notebooks, and responsive React applications. I apply data structures, algorithms, object-oriented programming, SOLID principles, unit testing, Git, Docker, and Agile practices to practical software projects.
              </p>

              <p className="text-lg text-foreground-muted leading-relaxed">
                Alongside software development, I mentor junior developers and teach programming fundamentals. I am continuously strengthening my algorithmic problem-solving skills, including solving 100+ problems on LeetCode, while learning how to design maintainable systems across different technical domains.
              </p>
            </GlassCard>

            {
    /* Career Objective */
  }
            <GlassCard className="p-8 border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-white mb-4">Career Objective</h3>
              <p className="text-foreground-muted leading-relaxed">
                To contribute as a Software Engineering Intern in a collaborative environment where I can apply my foundations in algorithms, programming, backend and frontend development, testing, and software design while continuing to grow as a well-rounded engineer.
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
    src="profile.jpg"
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
    { number: 8, suffix: "+", label: "Featured Projects" },
    { number: 4, suffix: "+", label: "Programming Languages" },
    { number: 100, suffix: "+", label: "LeetCode Problems" }
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
      title: "Software Engineering",
      description: "Building reliable software through data structures, algorithms, object-oriented programming, clean code, and practical project work."
    },
    {
      title: "Python & C++",
      description: "Applying Python and C++ to automation, data structures, object-oriented design, and systems-oriented projects."
    },
    {
      title: "Backend & APIs",
      description: "Designing RESTful APIs and backend services with Node.js, Express.js, databases, authentication, and testing."
    },
    {
      title: "Web Development",
      description: "Creating responsive, user-centered applications with React.js, TypeScript, state management, and modern web practices."
    },
    {
      title: "Testing & DevOps",
      description: "Working with Jest, React Testing Library, Docker, GitHub Actions, CI/CD, Git, and Agile collaboration."
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

