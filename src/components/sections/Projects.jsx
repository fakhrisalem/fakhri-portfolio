import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Code2, ExternalLink, Filter, Github, Lightbulb } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software Engineering" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data & Machine Learning" },
];

const projectsData = [
  {
    id: "hrx",
    title: "HRX — Human Resources Management System",
    description:
      "Full-stack B2B SaaS HR platform designed to centralize employee management, attendance, payroll, leave requests, recruitment workflows, and AI-powered performance evaluation through the Performix engine.",
    image: "projects/hrx-project.png",
    categories: ["software", "web"],
    categoryLabel: "Software Engineering · Full Stack",
    features: [
      "React + TypeScript frontend",
      "Node.js + Express REST APIs",
      "MongoDB Atlas data layer",
      "JWT authentication",
      "Role-based access control",
      "Jest and React Testing Library",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
    github: "https://github.com/esraa-magdy322/HRX",
    live: "",
    featured: true,
  },
  {
    id: "book-reviews",
    title: "Online Book Review Application",
    description:
      "Backend-focused application organized around controllers, models, routes, services, middleware, utilities, tests, and Docker Compose. A strong example of maintainable API-oriented software structure.",
    image: "projects/book-review-api.png",
    categories: ["software", "web"],
    categoryLabel: "Backend · APIs · Testing",
    features: ["Structured API layers", "Models and services", "Middleware", "Automated tests", "Docker Compose"],
    tech: ["Node.js", "Express.js", "REST APIs", "Testing", "Docker"],
    github: "https://github.com/fakhrisalem/Online_Book_Review_Application-main",
    live: "",
  },
  {
    id: "github-monitor",
    title: "GitHub Activity Monitor",
    description:
      "Python automation tool that polls the GitHub API, stores the last known commit SHA, and alerts when new activity is detected. Demonstrates API integration, state management, JSON persistence, and monitoring logic.",
    image: "projects/github-monitor-project.png",
    categories: ["software"],
    categoryLabel: "Python · Automation · APIs",
    features: ["GitHub API integration", "JSON state persistence", "Periodic monitoring", "Commit activity alerts"],
    tech: ["Python", "GitHub API", "JSON", "Automation"],
    github: "https://github.com/fakhrisalem/GitHub-Activity-Monitor",
    live: "",
  },
  {
    id: "library-cpp",
    title: "Library Management System",
    description:
      "C++ system design project demonstrating object-oriented programming, class modeling, system workflows, and software documentation through class, sequence, and state diagrams.",
    image: "projects/library-cpp-project.png",
    categories: ["software"],
    categoryLabel: "C++ · OOP · Software Design",
    features: ["Object-oriented design", "Book and user workflows", "System modeling", "Class and state diagrams"],
    tech: ["C++", "OOP", "Data Structures", "System Design"],
    github: "https://github.com/fakhrisalem/Library-Management-System_3",
    live: "",
  },
  {
    id: "ecommerce",
    title: "Premium E-Commerce Website",
    description:
      "Responsive e-commerce application built with React and TypeScript, featuring product filtering, cart, wishlist, authentication, multilingual support, and dark/light mode.",
    image: "projects/ecommerce-project.png",
    categories: ["web"],
    categoryLabel: "Web Development · React",
    features: ["Product filtering", "Shopping cart", "Wishlist", "Authentication", "Arabic and English support", "Theme switching"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Vite"],
    github: "https://github.com/fakhrisalem/-E-Commerce-Website",
    live: "https://fakhrisalem.github.io/-E-Commerce-Website/",
  },
  {
    id: "plant-store",
    title: "Flower and Plant E-Commerce Website",
    description:
      "React.js shopping experience with dynamic product listings, filtering, cart functionality, responsive layouts, and mobile-friendly interactions.",
    image: "projects/plant-store-project.png",
    categories: ["web"],
    categoryLabel: "Web Development · UI",
    features: ["Dynamic product listings", "Shopping cart", "Filtering", "Responsive design", "Mobile optimization"],
    tech: ["React.js", "JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/fakhrisalem/Paradise-Nursery-Shopping-Application-",
    live: "https://fakhrisalem.github.io/Paradise-Nursery-Shopping-Application-/",
  },
  {
    id: "decision-tree",
    title: "Cardiovascular Risk Classification",
    description:
      "Machine learning notebook exploring decision-tree classification on a cardiovascular dataset, with data preparation, model training, and evaluation documented in the project files.",
    image: "projects/ml-project.png",
    categories: ["data"],
    categoryLabel: "Machine Learning · Python",
    features: ["Data preparation", "Decision-tree model", "Model evaluation", "Notebook-based analysis"],
    tech: ["Python", "Jupyter Notebook", "Pandas", "Machine Learning"],
    github: "https://github.com/fakhrisalem/DecisionTree_CVDs",
    live: "",
  },
  {
    id: "logistic-regression",
    title: "Cardiovascular Risk — Logistic Regression",
    description:
      "Python notebook project applying logistic regression to a cardiovascular dataset and documenting the analysis workflow and model results.",
    image: "projects/ml-project.png",
    categories: ["data"],
    categoryLabel: "Python · Data Analysis",
    features: ["Data analysis", "Logistic regression", "Model workflow", "Jupyter Notebook"],
    tech: ["Python", "Jupyter Notebook", "Pandas", "Logistic Regression"],
    github: "https://github.com/fakhrisalem/Logistic-Regression_CVDs.",
    live: "",
  },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

function ProjectCard({ project, featured = false }) {
  return (
    <GlassCard className={`h-full overflow-hidden ${featured ? "p-0" : "p-5 sm:p-6"}`}>
      <div className={featured ? "grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8" : "flex h-full flex-col"}>
        <div className={`relative overflow-hidden rounded-xl ${featured ? "min-h-[280px]" : "mb-5 h-48"}`}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={assetPath(project.image)}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {featured && (
            <div className="absolute top-4 right-4 rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black">
              Featured Project
            </div>
          )}
        </div>

        <div className={`flex flex-col ${featured ? "justify-between" : "flex-1"}`}>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              {project.categoryLabel}
            </p>
            <h3 className={`${featured ? "text-2xl sm:text-3xl" : "text-xl"} mb-3 font-bold text-white`}>
              {project.title}
            </h3>
            <p className={`${featured ? "text-base" : "text-sm"} mb-5 leading-relaxed text-foreground-muted`}>
              {project.description}
            </p>

            {featured && (
              <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <span className="text-[#D4AF37]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            )}

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.1)] px-3 py-1 text-xs text-[#D4AF37]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <PremiumButton variant="gold" size={featured ? "md" : "sm"} href={project.github} external>
                <Code2 size={featured ? 18 : 16} />
                <span>{featured ? "View Code" : "Code"}</span>
              </PremiumButton>
            )}
            {project.live && (
              <PremiumButton variant="outline" size={featured ? "md" : "sm"} href={project.live} external>
                <ExternalLink size={featured ? 18 : 16} />
                <span>{featured ? "Live Demo" : "Demo"}</span>
              </PremiumButton>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((project) => project.categories.includes(activeFilter));

  const featuredProject = projectsData.find((project) => project.featured);
  const showFeatured = featuredProject && visibleProjects.some((project) => project.id === featuredProject.id);
  const gridProjects = visibleProjects.filter((project) => !showFeatured || project.id !== featuredProject.id);

  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-3 text-[#D4AF37]">
            <Filter size={22} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Explore by focus</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Selected</span>{" "}
            <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            A cross-section of my work across software engineering, web development, Python, C++, data analysis, and machine learning.
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Project categories">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                  : "border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.05)] text-foreground-muted hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {activeFilter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col gap-4 rounded-2xl border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.06)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[rgba(212,175,55,0.14)] p-3 text-[#D4AF37]">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-white">Problem Solving</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  Solved <span className="font-semibold text-[#D4AF37]">100+ algorithmic problems</span> on LeetCode across arrays, strings, hash tables, trees, recursion, and dynamic programming.
                </p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/9ABpEpYnO9/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#D4AF37] transition-colors hover:text-[#e8c547]"
            >
              <Github size={18} />
              View profile
            </a>
          </motion.div>
        )}

        {showFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {gridProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="py-16 text-center text-foreground-muted">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

export { Projects };


