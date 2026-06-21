"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { staggerContainer, staggerItem } from "@/lib/animations";
const skillsData = {
  Frontend: [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript/TypeScript", percentage: 88 },
    { name: "HTML5 & CSS3", percentage: 95 },
    { name: "Bootstrap", percentage: 92 },
    { name: "Tailwind CSS", percentage: 88 },
    { name: "Vue.js", percentage: 75 }
  ],
  "Design & Tools": [
    { name: "Figma", percentage: 85 },
    { name: "Adobe XD", percentage: 80 },
    { name: "Git/GitHub", percentage: 90 },
    { name: "VS Code", percentage: 95 },
    { name: "Responsive Design", percentage: 92 },
    { name: "UI/UX Best Practices", percentage: 90 }
  ],
  Languages: [
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "C++", percentage: 70 },
    { name: "R", percentage: 65 },
    { name: "Prolog", percentage: 60 }
  ],
  Methodologies: [
    { name: "Agile/Scrum", percentage: 88 },
    { name: "Problem-Solving", percentage: 92 },
    { name: "Team Collaboration", percentage: 95 },
    { name: "Communication", percentage: 90 },
    { name: "Mentoring", percentage: 88 },
    { name: "Code Review", percentage: 85 }
  ]
};
function Skills() {
  return <section id="skills" className="py-20 relative z-10">
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
            <span className="text-white">Technical</span>{" "}
            <span className="text-[#D4AF37]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </motion.div>

        {
    /* Skills Grid */
  }
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
          {Object.entries(skillsData).map(([category, skills]) => <motion.div key={category} variants={staggerItem}>
              <GlassCard className="p-8 h-full">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => <ProgressBar
    key={skill.name}
    label={skill.name}
    percentage={skill.percentage}
  />)}
                </div>
              </GlassCard>
            </motion.div>)}
        </motion.div>

        {
    /* Additional Skills Section */
  }
        <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-16"
  >
          <h3 className="text-3xl font-bold text-white mb-8">
            Core <span className="text-[#D4AF37]">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
    {
      title: "Responsive Design",
      description: "Creating mobile-first, fully responsive interfaces that adapt seamlessly across all devices and screen sizes."
    },
    {
      title: "React Development",
      description: "Building dynamic, interactive UIs with React.js using hooks, state management, and component best practices."
    },
    {
      title: "UI/UX Best Practices",
      description: "Implementing user-centric design principles, accessibility standards, and seamless user experiences."
    },
    {
      title: "Figma to Code",
      description: "Translating design prototypes into pixel-perfect, production-ready web applications with attention to detail."
    },
    {
      title: "Mentoring & Teaching",
      description: "Guiding junior developers through code reviews, best practices, and professional development in collaborative environments."
    },
    {
      title: "Agile Methodologies",
      description: "Working effectively in agile teams, participating in sprints, and delivering high-quality software iteratively."
    }
  ].map((competency, index) => <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
                <GlassCard className="p-6 h-full hover:border-[rgba(212,175,55,0.3)]">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-4">
                    <div className="w-6 h-6 border-2 border-[#D4AF37] rounded-full" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {competency.title}
                  </h4>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {competency.description}
                  </p>
                </GlassCard>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}
export {
  Skills
};
