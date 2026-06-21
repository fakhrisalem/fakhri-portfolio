"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Users, Trophy, Zap } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
const leadershipData = [
  {
    icon: Users,
    title: "Graduation Project Team Lead",
    description: "Led a team of 5 developers in creating an innovative HR management system. Responsible for architecture decisions, code reviews, and project delivery.",
    achievements: [
      "Successfully delivered project on time",
      "Mentored 2 junior developers",
      "Implemented best practices and design patterns"
    ]
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Won multiple hackathon competitions, including TechMasters 2022 and Innovation Summit 2023 with innovative web solutions.",
    achievements: [
      "1st place - TechMasters Hackathon 2022",
      "2nd place - Innovation Summit 2023",
      "Developed winning project in 24 hours"
    ]
  },
  {
    icon: Award,
    title: "Volunteer Tech Mentor",
    description: "Actively volunteering to teach web development to underprivileged students. Conducting free workshops and providing mentorship.",
    achievements: [
      "Taught 50+ students programming basics",
      "Organized monthly tech workshops",
      "Helped 5 students land their first dev jobs"
    ]
  },
  {
    icon: Zap,
    title: "Open Source Contributor",
    description: "Active contributor to popular open-source projects with 200+ merged pull requests and 3K+ GitHub stars on personal projects.",
    achievements: [
      "200+ merged pull requests across projects",
      "3K+ stars on GitHub repositories",
      "Maintained 5 open-source libraries"
    ]
  }
];
function Leadership() {
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
            <span className="text-white">Leadership</span>{" "}
            <span className="text-[#D4AF37]">& Activities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </motion.div>

        {
    /* Leadership Grid */
  }
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
          {leadershipData.map((item, index) => {
    const Icon = item.icon;
    return <motion.div key={index} variants={staggerItem}>
                <GlassCard className="p-8 h-full border-t-2 border-[#D4AF37]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
                      <Icon size={28} className="text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, idx) => <div
      key={idx}
      className="flex items-start gap-2 text-foreground-muted"
    >
                        <span className="text-[#D4AF37] font-bold mt-0.5">✓</span>
                        <span className="text-sm">{achievement}</span>
                      </div>)}
                  </div>
                </GlassCard>
              </motion.div>;
  })}
        </motion.div>
      </div>
    </section>;
}
export {
  Leadership
};
