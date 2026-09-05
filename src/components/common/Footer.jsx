import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Heart, Linkedin, Mail, Send } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Code2, href: "https://github.com/fakhrisalem", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/monafakhri", label: "LinkedIn" },
  { icon: Mail, href: "mailto:monafakhri50@gmail.com", label: "Email" },
  { icon: Send, href: "https://wa.me/201154926990", label: "WhatsApp" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(212,175,55,0.16)] bg-[#050711]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-950/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-20">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-xl font-bold tracking-[0.18em] text-white">
              MONA<span className="text-[#D4AF37]">FAKHRI</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-foreground-muted">
              Software Engineering student and developer building thoughtful digital experiences,
              reliable software, and products that create meaningful impact.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#e8c547]"
            >
              Let&apos;s build something meaningful
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-muted transition-colors hover:translate-x-1 hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Let&apos;s connect</h3>
            <p className="mt-5 text-sm leading-6 text-foreground-muted">
              Open to software engineering internships, collaborations, and ambitious ideas.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground-muted transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Mona Fakhri. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & built with <Heart size={13} className="fill-[#D4AF37] text-[#D4AF37]" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

