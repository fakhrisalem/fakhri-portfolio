"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Code2, ExternalLink } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
const projectsData = [
  {
    id: 1,
    title: "Flower and Plant E-commerce Website",
    description: "A React.js e-commerce application with dynamic product layouts, smooth navigation, and engaging UI experience. Features product browsing, shopping cart, and checkout functionality.",
    image: "/fl.jpg",
    features: [
      "Dynamic Product Listings",
      "Shopping Cart",
      "Product Filtering",
      "Smooth Navigation",
      "Responsive Design",
      "Mobile-Optimized",
      "Interactive UI",
      "User-Friendly Checkout"
    ],
    tech: ["React.js", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
    github: "https://github.com/MonaFakhri/flower-ecommerce",
    live: "https://flower-ecommerce-demo.app",
    featured: true
  },
 {
    id: 2,
    title: "HRX — Human Resources Management System",
    description: "HRX is a full-stack B2B SaaS platform designed to digitize and streamline all HR operations for companies in the MENA region. It replaces scattered spreadsheets and manual processes with a unified smart dashboard covering employee management, attendance tracking, payroll processing, leave requests, recruitment pipelines, and AI-driven performance evaluation through its built-in Performix engine. Built with React + TypeScript on the frontend and Node.js + Express on the backend, with MongoDB Atlas as the cloud database and JWT-based authentication for secure role-based access across four user types: Admin, HR Manager, Manager, and Employee.",
    image: "image/hr.png",
    features: [
      "Employee Management",
      "Attendance & Departure",
      "Payroll System",
      "Leave Requests",
      "Performix Performance Engine",
      "Recruitment Pipeline",
      "Analytics & Reports",
      "Role-Based Access (JWT)"
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Recharts", "shadcn/ui"],
    github: "https://github.com/esraa-magdy322/HRX",
    live: "",
    featured: false
  },
  {
    id: 3,
    title: "Children's Products Website",
    description: "Bootstrap-based user interface for browsing and shopping children's products. Built with focus on mobile-first design and usability for both parents and kids.",
    image: "image/ch.webp",
    features: [
      "Product Browse",
      "Mobile-First Design",
      "Shopping Interface",
      "Product Categories",
      "Responsive Layout",
      "Easy Navigation",
      "Bootstrap Components",
      "Cross-Browser Support"
    ],
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/MonaFakhri/kids-products",
    live: "https://kids-products-demo.app",
    featured: false
  },
 
  {
    id: 5,
    title: "Restaurant Website",
    description: "Responsive restaurant website built with HTML, CSS, and JavaScript. Optimized for fast loading and full cross-browser support with modern design aesthetics.",
    image: "image/re.png",
    features: [
      "Menu Display",
      "Responsive Design",
      "Fast Loading",
      "Cross-Browser Support",
      "Contact Form",
      "Location Integration",
      "Mobile-Friendly",
      "Image Optimization"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Optimized"],
    github: "https://github.com/MonaFakhri/restaurant-website",
    live: "https://restaurant-website-demo.app",
    featured: false
  }
];
function Projects() {
  return <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16"
  >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Featured</span>{" "}
            <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </motion.div>

        {/* Featured Project */}
        {projectsData[0] && <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16"
  >
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-xl"
  >
                  <img
    src={projectsData[0].image}
    alt={projectsData[0].title}
    width={500}
    height={400}
    className="w-full h-auto object-cover rounded-xl"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold text-sm">
                    Featured
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {projectsData[0].title}
                    </h3>
                    <p className="text-foreground-muted text-lg mb-6 leading-relaxed">
                      {projectsData[0].description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-[#D4AF37] font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {projectsData[0].features.map((feature, idx) => <div
    key={idx}
    className="text-sm text-foreground-muted flex items-center gap-2"
  >
                            <span className="text-[#D4AF37]">✓</span>
                            {feature}
                          </div>)}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projectsData[0].tech.map((tech) => <span
    key={tech}
    className="text-xs px-3 py-1 rounded-full bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border border-[rgba(212,175,55,0.2)]"
  >
                          {tech}
                        </span>)}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <PremiumButton
    variant="gold"
    href={projectsData[0].github}
    external
  >
                      <Code2 size={20} />
                      View Code
                    </PremiumButton>
                    <PremiumButton
    variant="outline"
    href={projectsData[0].live}
    external
  >
                      <ExternalLink size={20} />
                      Live Demo
                    </PremiumButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>}

        {/* Other Projects Grid */}
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
          {projectsData.slice(1).map((project) => <motion.div key={project.id} variants={staggerItem}>
              <GlassCard className="h-full flex flex-col p-6 overflow-hidden group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                  <motion.div
    whileHover={{ scale: 1.1 }}
    className="w-full h-full"
  >
                    <img
    src={project.image}
    alt={project.title}
    width={400}
    height={300}
    className="w-full h-full object-cover rounded-lg"
  />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => <span
    key={tech}
    className="text-xs px-2 py-1 rounded-full bg-[rgba(212,175,55,0.1)] text-[#D4AF37]"
  >
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <PremiumButton
    variant="gold"
    size="sm"
    href={project.github}
    external
  >
                    <Code2 size={16} />
                  </PremiumButton>
                  {project.live && <PremiumButton
    variant="outline"
    size="sm"
    href={project.live}
    external
  >
                    <ExternalLink size={16} />
                  </PremiumButton>}
                </div>
              </GlassCard>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
export {
  Projects
};
