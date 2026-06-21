"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
const educationData = [
  {
    school: "Cairo University",
    degree: "Bachelor of Science in Computer Science",
    year: "Expected Jan 2026",
    gpa: "In Progress",
    achievements: [
      "Strong foundation in computer science fundamentals",
      "Coursework in algorithms and data structures",
      "Specialization in web development"
    ]
  },
  {
    school: "ITI (Information Technology Institute)",
    degree: "Front-End Developer Trainee",
    year: "Aug 2024 - Oct 2024",
    gpa: "Completed",
    achievements: [
      "Mastered HTML, CSS, JavaScript, Bootstrap",
      "Built responsive web applications",
      "Focused on UI/UX best practices"
    ]
  },
  {
    school: "NTI (National Telecom Institute)",
    degree: "Web Design & Development",
    year: "Oct 2024 - Dec 2024",
    gpa: "Completed",
    achievements: [
      "Advanced responsive design techniques",
      "Figma to code implementation",
      "User-centric design principles"
    ]
  }
];
function Education() {
  return <section className="py-20 relative z-10">
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
            <span className="text-white">Education</span>{" "}
            <span className="text-[#D4AF37]">& Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </motion.div>

        {
    /* Timeline */
  }
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="space-y-8"
  >
          {educationData.map((edu, index) => <motion.div
    key={index}
    variants={staggerItem}
    className="relative"
  >
              {
    /* Timeline connector */
  }
              {index !== educationData.length - 1 && <div className="absolute left-6 top-24 w-1 h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />}

              {
    /* Timeline dot */
  }
              <div className="absolute left-0 top-8 w-12 h-12 bg-[rgba(212,175,55,0.2)] border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full" />
              </div>

              {
    /* Content */
  }
              <GlassCard className="ml-24 p-8 border-l-4 border-[#D4AF37]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-[#D4AF37] font-semibold">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground-muted text-sm">{edu.year}</p>
                    <p className="text-[#D4AF37] font-semibold">{edu.gpa}</p>
                  </div>
                </div>

                {
    /* Achievements */
  }
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => <div key={i} className="flex items-center gap-2 text-foreground-muted">
                      <Award size={16} className="text-[#D4AF37] flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>)}
                </div>
              </GlassCard>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
export {
  Education
};
