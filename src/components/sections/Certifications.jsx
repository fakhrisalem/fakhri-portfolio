"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Calendar, Building2 } from "lucide-react";
const certificationsData = [
  {
    id: 11,
    title: "Python for Data Science, AI & Development",
    provider: "IBM — via Coursera",
    date: "Jun 30, 2024",
    description: "Comprehensive IBM certificate covering Python programming for data science, AI, and application development with practical hands-on learning in data analysis and automation.",
    image: "image/11.jpeg",
    skills: ["Python", "Data Science", "AI", "Machine Learning", "Pandas", "Data Analysis"]
  },
  {
    id: 14,
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    provider: "Udemy",
    date: "Aug 13, 2026",
    description: "Complete JavaScript learning journey covering fundamentals, modern ES6+, DOM manipulation, asynchronous programming, and practical real-world project development.",
    image: "image/14.jpg",
    skills: ["JavaScript", "ES6+", "DOM", "Async", "Projects", "Web Development"]
  },
  {
    id: 1,
    title: "Meta Front-End Developer",
    provider: "Meta — via Coursera (9 Courses)",
    date: "May 11, 2026",
    description: "Professional Certificate covering the full front-end stack: HTML, CSS, JavaScript, React Basics, Advanced React, Version Control, UX/UI Principles, Front-End Capstone, and Coding Interview Preparation.",
    image: "image/1.jpg",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "UX/UI Design", "Version Control"]
  },
  {
    id: 3,
    title: "Introduction to Software Engineering",
    provider: "IBM — via Coursera",
    date: "Oct 16, 2024",
    description: "Foundations of software engineering including SDLC, agile methodologies, cloud computing basics, and hands-on introduction to programming concepts and tools.",
    image: "image/3.jpg",
    skills: ["SDLC", "Agile", "Cloud Computing", "Software Design", "Problem Solving"]
  },
  {
    id: 7,
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    provider: "IBM — via Coursera",
    date: "Jun 25, 2024",
    description: "Practical introduction to web development fundamentals, building responsive pages with HTML structure, CSS styling, and JavaScript interactivity.",
    image: "image/7.jpg",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"]
  },
  {
    id: 8,
    title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
    provider: "Proper Dot Institute — via Udemy",
    date: "Sept 13, 2025",
    description: "Completion certificate covering modern web development fundamentals with practical training in CSS, Bootstrap responsive layouts, JavaScript interactivity, and core React patterns.",
    image: "image/10.png",
    skills: ["CSS", "Bootstrap", "JavaScript", "React", "Responsive Layouts"]
  },
  {
    id: 9,
    title: "Web Designer — Digital Egypt Youth Program",
    provider: "NTI / Digital Egypt Youth",
    date: "Oct 10, 2024",
    description: "Certificate for successful completion of the Digital Egypt Youth program with a focus on web design, UI principles, freelancing skills, and digital communication tools.",
    image: "image/9.jpg",
    skills: ["Web Design", "UI/UX", "Freelancing", "Digital Communication", "Project Delivery"]
  },
  {
    id: 10,
    title: "Interactivity with JavaScript",
    provider: "University of Michigan — via Coursera",
    date: "May 18, 2026",
    description: "Focused course on making web pages dynamic and interactive using JavaScript, covering DOM events, animations, and creating engaging user experiences.",
    image: "image/8.jpg",
    skills: ["JavaScript", "DOM Events", "Animations", "Interactivity", "UX"]
  },
  {
    id: 12,
    title: "Developing Front-End Apps with React",
    provider: "IBM — via Coursera",
    date: "Sep 1, 2024",
    description: "Hands-on learning path focused on building modern front-end applications with React, component architecture, state management, and responsive UI development.",
    image: "image/12.jpeg",
    skills: ["React", "Front-End", "Components", "State Management", "UI Development", "JavaScript"]
  },
  {
    id: 13,
    title: "Developing Back-End Apps with Node.js and Express",
    provider: "IBM — via Coursera",
    date: "Aug 7, 2026",
    description: "Course focused on server-side development with Node.js and Express, covering APIs, routing, middleware, authentication basics, and backend application architecture.",
    image: "image/13.png",
    skills: ["Node.js", "Express", "REST APIs", "Back-End", "Middleware", "Server-side Development"]
  }
];
function Certifications() {
  return <section id="certifications" className="min-h-screen py-20 px-4 md:px-8 lg:px-12 relative">
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4 px-6 py-2 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-full">
            <Award size={20} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and specialized training programs.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:border-[#D4AF37]/40">
                <div className="flex flex-col h-full">
                  {/* Certificate Image with Title Overlay */}
                  <div className="relative w-full overflow-hidden rounded-t-xl" style={{ height: "220px" }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Certificate name on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold rounded-full backdrop-blur-sm mb-2">
                        <Award size={12} />
                        Certificate
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="absolute top-4 right-4 text-[#D4AF37]/80 text-sm font-bold tracking-[0.2em] uppercase">
                      {cert.id}
                    </div>
                    {/* Provider & Date */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 text-foreground-muted">
                        <Building2 size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <span className="text-sm">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground-muted">
                        <Calendar size={16} className="text-[#D4AF37] flex-shrink-0" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground-muted text-sm mb-5 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs rounded-full hover:bg-[#D4AF37]/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 glass-effect-strong rounded-2xl border border-[#D4AF37]/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
          <p className="text-foreground-muted leading-relaxed mb-4">
            I am dedicated to continuous professional development and staying current with industry trends. These certifications represent my commitment to mastering modern web development technologies, design principles, and best practices.
          </p>
          <p className="text-foreground-muted leading-relaxed">
            Each certification has equipped me with practical skills and knowledge that I apply daily in building high-quality, responsive, and user-friendly web applications.
          </p>
        </motion.div>
      </div>
    </section>;
}
export {
  Certifications
};