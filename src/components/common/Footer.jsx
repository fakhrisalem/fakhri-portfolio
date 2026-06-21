"use client";
import { motion } from "framer-motion";
import { Code2, Heart, Mail, Send } from "lucide-react";
const socialLinks = [
  { icon: Code2, href: "https://github.com", label: "GitHub" },
  { icon: Heart, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
  { icon: Send, href: "https://wa.me", label: "WhatsApp" }
];
function Footer() {
  return <footer className="bg-[#0a0e27] border-t border-[rgba(212,175,55,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {
    /* About */
  }
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              MONA<span className="text-[#D4AF37]">FAKHRI</span>
            </h3>
            <p className="text-foreground-muted text-sm">
              Full Stack Developer passionate about building beautiful, scalable web applications with modern technologies.
            </p>
          </div>

          {
    /* Quick Links */
  }
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => <li key={link}>
                  <a
    href={`#${link.toLowerCase()}`}
    className="text-foreground-muted hover:text-[#D4AF37] transition-colors text-sm"
  >
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {
    /* Social Links */
  }
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
    const Icon = link.icon;
    return <motion.a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, color: "#D4AF37" }}
      whileTap={{ scale: 0.9 }}
      className="text-foreground-muted hover:text-[#D4AF37] transition-colors"
      aria-label={link.label}
    >
                    <Icon size={20} />
                  </motion.a>;
  })}
            </div>
          </div>
        </div>

        {
    /* Divider */
  }
        <div className="border-t border-[rgba(212,175,55,0.1)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground-muted text-sm">
              © 2026 مني فخري . All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground-muted hover:text-[#D4AF37] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground-muted hover:text-[#D4AF37] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
