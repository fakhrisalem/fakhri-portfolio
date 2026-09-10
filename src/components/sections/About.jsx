"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { number: 8, label: "Featured Projects", className: "about-orbit-stat--projects" },
  { number: 4, label: "Programming Languages", className: "about-orbit-stat--languages" },
  { number: 100, label: "LeetCode Problems", className: "about-orbit-stat--leetcode" },
];

const specialties = [
  ["Software Engineering", "Building reliable software through data structures, algorithms, object-oriented programming, clean code, and practical project work."],
  ["Python & C++", "Applying Python and C++ to automation, data structures, object-oriented design, and systems-oriented projects."],
  ["Backend & APIs", "Designing RESTful APIs and backend services with Node.js, Express.js, databases, authentication, and testing."],
  ["Web Development", "Creating responsive, user-centered applications with React.js, TypeScript, state management, and modern web practices."],
  ["Testing & DevOps", "Working with Jest, React Testing Library, Docker, GitHub Actions, CI/CD, Git, and Agile collaboration."],
  ["Mentoring & Teaching", "Guiding junior developers in coding standards, best practices, and helping them grow their technical skills."],
];

function About() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const move = (event) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    setMouse({ x: (event.clientX - box.left) / box.width - 0.5, y: (event.clientY - box.top) / box.height - 0.5 });
  };
  const depth = (x, y = x) => ({ transform: `translate3d(${mouse.x * x}px, ${mouse.y * y}px, 0)` });

  return <section id="about" ref={ref} onMouseMove={move} onMouseLeave={() => setMouse({ x: 0, y: 0 })} className="about-orbit-section relative z-10 py-20">
    <div className="about-orbit-glow" style={depth(-18, -12)} />
    <div className="about-orbit-ring" style={depth(-7, -4)} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="about-orbit-topline"><span>MONA FAKHRI / PORTFOLIO</span><span>ABOUT / ME</span></div>
      <div className="about-orbit-stage">
        <motion.div className="about-orbit-title" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={depth(-4, -3)}>
          <div className="about-orbit-kicker">THE PERSON BEHIND THE CODE</div>
          <h2>About <span>Me</span></h2><div className="about-orbit-line" />
        </motion.div>
        <motion.div className="about-orbit-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={depth(2, 2)}>
          <p>I&apos;m a Computer Science student and Software Engineering Intern candidate with hands-on experience across software development, backend APIs, databases, testing, automation, and full-stack web applications. I work with Python, C++, JavaScript, and TypeScript and enjoy building reliable solutions through problem solving and clean code.</p>
          <p>My projects include a full-stack HR platform, backend services, Python automation tools, C++ systems, data analysis notebooks, and responsive React applications. I apply data structures, algorithms, object-oriented programming, SOLID principles, unit testing, Git, Docker, and Agile practices to practical software projects.</p>
        </motion.div>
        <motion.div className="about-orbit-objective" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={depth(3, 2)}><b>CAREER OBJECTIVE</b><p>To contribute as a Software Engineering Intern in a collaborative environment where I can apply my foundations in algorithms, programming, backend and frontend development, testing, and software design while continuing to grow as a well-rounded engineer.</p></motion.div>
        <motion.div className="about-orbit-photo" style={depth(14, 10)} whileHover={{ rotateY: -8, rotateX: 5, scale: 1.05 }}><img src="profile.jpg" alt="Mona Fakhri" /><div className="about-photo-meta"><span>PROFILE / 01</span><strong>Mona Fakhri</strong><small>Personal Photo · 2026</small></div><i>MONA / 2026</i></motion.div>
        {stats.map((stat, index) => <motion.div key={stat.label} className={`about-orbit-stat ${stat.className}`} style={depth(10 + index * 3, 7 + index * 2)} whileHover={{ rotateX: 8, rotateY: -10, y: -10, scale: 1.08 }}><AnimatedCounter end={stat.number} suffix="+" className="about-orbit-number" /><span>{stat.label}</span></motion.div>)}
        <div className="about-orbit-name" style={depth(5, 3)}>MONA FAKHRI · 2026</div>
      </div>
      <motion.div className="about-orbit-specialties" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h3>Specialties &amp; Expertise</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{specialties.map(([title, description], index) => <GlassCard key={title} className="about-specialty-card p-6" style={depth(2 + (index % 3) * 2, 2)}><h4 className="text-xl font-bold text-[#D4AF37] mb-3">{title}</h4><p className="text-foreground-muted text-sm leading-relaxed">{description}</p></GlassCard>)}</div></motion.div>
    </div>
  </section>;
}
export { About };


