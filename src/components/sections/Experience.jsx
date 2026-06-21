"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, MapPin } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
const experienceData = [
  {
    role: "Full-Stack Developer Trainee",
    company: "Digilians",
    location: "Cairo, Egypt",
    period: "Jan 2026 \u2013 June 2026",
    type: "Training",
    achievements: [
      "Architected and deployed scalable Full-Stack web applications by integrating React.js for dynamic front-end interfaces and Node.js for robust server-side logic",
      "Leveraged modern web technologies including HTML5, CSS3, and JavaScript (ES6+) to build responsive, user-centric designs following UI/UX best practices",
      "Implemented containerization strategies using Docker and Kubernetes to streamline application deployment and ensure environment consistency across the SDLC",
      "Managed source code and collaborative workflows using Git and GitHub, maintaining version control integrity within an Agile/Scrum team environment",
      "Developed and consumed RESTful APIs to facilitate seamless data communication between the client-side and server-side components"
    ]
  },
  {
    role: "Mentor \u2013 Front-End",
    company: "Instant Software Solutions",
    location: "Cairo, Egypt",
    period: "Mar 2025 - Present",
    type: "Full-time",
    achievements: [
      "Mentoring junior developers in front-end technologies and best practices",
      "Conducting code reviews and providing technical guidance",
      "Supporting real-world projects with React.js and modern web technologies",
      "Fostering knowledge-sharing and continuous learning culture"
    ]
  },
  {
    role: "Web Designer",
    company: "NTI (National Telecom Institute)",
    location: "Cairo, Egypt",
    period: "Oct 2024 - Dec 2024",
    type: "Training",
    achievements: [
      "Designed responsive user-friendly interfaces with focus on UX/UI",
      "Translated Figma prototypes into pixel-perfect web applications",
      "Collaborated with clients to align design with business requirements",
      "Mastered responsive design techniques and best practices"
    ]
  },
  {
    role: "React Front-End Trainee",
    company: "ITI (Information Technology Institute)",
    location: "Cairo, Egypt",
    period: "Aug 2024 - Oct 2024",
    type: "Training",
    achievements: [
      "Built responsive UIs with React.js using modern state management patterns",
      "Implemented dynamic and interactive interfaces with component architecture",
      "Applied UI/UX best practices in team projects",
      "Worked with Bootstrap and CSS frameworks for responsive design"
    ]
  },
  {
    role: "Instructor \u2013 Programming Fundamentals",
    company: "Academy, Helwan",
    location: "Cairo, Egypt",
    period: "Jan 2023 - Sep 2023",
    type: "Full-time",
    achievements: [
      "Taught programming fundamentals and coding standards using Python, C++, and JavaScript",
      "Guided learners with problem-solving techniques and logical thinking",
      "Developed curriculum and course materials for coding courses",
      "Mentored 50+ students in foundational programming concepts"
    ]
  }
];
function Experience() {
  return <section id="experience" className="py-20 relative z-10">
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
            <span className="text-white">Professional</span>{" "}
            <span className="text-[#D4AF37]">Experience</span>
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
          {experienceData.map((exp, index) => <motion.div
    key={index}
    variants={staggerItem}
    className="relative"
  >
              {
    /* Timeline connector */
  }
              {index !== experienceData.length - 1 && <div className="absolute left-6 top-24 w-1 h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />}

              {
    /* Timeline dot */
  }
              <div className="absolute left-0 top-8 w-12 h-12 bg-[rgba(212,175,55,0.2)] border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                <Briefcase size={20} className="text-[#D4AF37]" />
              </div>

              {
    /* Content */
  }
              <GlassCard className="ml-24 p-8 border-l-4 border-[#D4AF37]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-[#D4AF37] font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground-muted text-sm">{exp.period}</p>
                    <p className="text-[#D4AF37] text-sm font-medium">{exp.type}</p>
                  </div>
                </div>

                {
    /* Location */
  }
                <div className="flex items-center gap-1 text-foreground-muted text-sm mb-4">
                  <MapPin size={16} className="text-[#D4AF37]" />
                  {exp.location}
                </div>

                {
    /* Achievements */
  }
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => <div key={i} className="flex items-start gap-2 text-foreground-muted">
                      <span className="text-[#D4AF37] font-bold text-lg leading-none mt-1">•</span>
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
  Experience
};
