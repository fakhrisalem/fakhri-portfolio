"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  { label: "Dreams", href: "#dreams" }
];
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "about", "education", "experience", "projects", "skills", "leadership", "certifications", "contact", "dreams"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(0,0,0,0.8)] backdrop-blur-md border-b border-[rgba(212,175,55,0.1)]" : "bg-transparent"}`}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {
    /* Logo */
  }
          <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 text-2xl font-bold"
  >
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo-mona.png`}
                alt="Mona Fakhri logo"
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />
              <span>
                <span className="text-white">Mona</span>{" "}
                <span className="text-[#D4AF37]">Fakhri</span>
              </span>
            </a>
          </motion.div>

          {
    /* Desktop Navigation */
  }
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => <motion.a
    key={item.href}
    href={item.href}
    onClick={(e) => handleNavClick(e, item.href)}
    whileHover={{ color: "#D4AF37" }}
    className={`text-sm font-medium transition-colors ${activeSection === item.href.replace("#", "") ? "text-[#D4AF37]" : "text-foreground-muted hover:text-[#D4AF37]"}`}
  >
                {item.label}
              </motion.a>)}
          </div>

          {
    /* Mobile menu button */
  }
          <div className="md:hidden">
            <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setIsOpen(!isOpen)}
    className="text-[#D4AF37] hover:text-[#e8c547] transition-colors"
  >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {
    /* Mobile Navigation */
  }
        <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{
      opacity: isOpen ? 1 : 0,
      height: isOpen ? "auto" : 0
    }}
    transition={{ duration: 0.3 }}
    className="md:hidden overflow-hidden"
  >
          <div className="mt-2 rounded-2xl border border-[rgba(212,175,55,0.18)] bg-[rgba(10,10,12,0.88)] backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.45)] px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => <motion.a
    key={item.href}
    href={item.href}
    onClick={(e) => handleNavClick(e, item.href)}
    whileHover={{ x: 8 }}
    className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === item.href.replace("#", "") ? "text-[#D4AF37] bg-[rgba(212,175,55,0.12)]" : "text-white hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.06)]"}`}
  >
                {item.label}
              </motion.a>)}
          </div>
        </motion.div>
      </div>
    </motion.nav>;
}
export {
  Navigation
};
