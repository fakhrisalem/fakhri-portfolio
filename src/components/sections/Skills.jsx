import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { staggerContainer, staggerItem } from "@/lib/animations";

const skillsData = {
  "Programming Languages": [
    { name: "Python", percentage: 78 },
    { name: "C++", percentage: 74 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 82 },
    { name: "SQL", percentage: 70 },
  ],
  "CS Fundamentals": [
    { name: "Data Structures & Algorithms", percentage: 82 },
    { name: "Object-Oriented Programming", percentage: 86 },
    { name: "Problem Solving", percentage: 88 },
    { name: "Time & Space Complexity", percentage: 78 },
    { name: "Clean Code & SOLID", percentage: 82 },
  ],
  "Backend & Testing": [
    { name: "Node.js / Express.js", percentage: 82 },
    { name: "RESTful APIs", percentage: 84 },
    { name: "MongoDB / SQL", percentage: 76 },
    { name: "Jest / React Testing Library", percentage: 76 },
    { name: "Authentication & RBAC", percentage: 78 },
  ],
  "Web & DevOps": [
    { name: "React.js / Redux", percentage: 90 },
    { name: "HTML5 / CSS3", percentage: 92 },
    { name: "Git / GitHub", percentage: 90 },
    { name: "Docker / CI/CD", percentage: 72 },
    { name: "Agile / Code Review", percentage: 86 },
  ],
};

const competencies = [
  {
    title: "Problem Solving",
    description: "Solved 100+ algorithmic problems on LeetCode while practicing arrays, strings, hash tables, trees, recursion, and dynamic programming.",
  },
  {
    title: "Software Design",
    description: "Applying OOP, SOLID principles, clean code, design patterns, and modular architecture to practical projects.",
  },
  {
    title: "Backend Engineering",
    description: "Building APIs and backend services with Node.js, Express.js, databases, authentication, and role-based access control.",
  },
  {
    title: "Web Development",
    description: "Creating responsive applications with React, TypeScript, state management, reusable components, and accessible UI patterns.",
  },
  {
    title: "Testing & DevOps",
    description: "Writing unit tests and working with GitHub Actions, Docker, CI/CD workflows, and collaborative code reviews.",
  },
  {
    title: "Mentoring & Teaching",
    description: "Guiding junior developers and teaching programming fundamentals, algorithms, and clean coding practices.",
  },
];

function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Technical</span>{" "}
            <span className="text-[#D4AF37]">Skills</span>
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            A balanced toolkit covering computer science fundamentals, programming languages, software development, testing, DevOps, and modern web applications.
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={staggerItem}>
              <GlassCard className="h-full p-5 sm:p-8">
                <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">{category}</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <ProgressBar key={skill.name} label={skill.name} percentage={skill.percentage} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-8 text-3xl font-bold text-white">
            Core <span className="text-[#D4AF37]">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full p-6 hover:border-[rgba(212,175,55,0.3)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(212,175,55,0.1)]">
                    <div className="h-6 w-6 rounded-full border-2 border-[#D4AF37]" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">{competency.title}</h4>
                  <p className="text-sm leading-relaxed text-foreground-muted">{competency.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Skills };

