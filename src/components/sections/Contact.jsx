"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Code2, Heart, Mail, Send, Phone, MapPin, Download } from "lucide-react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3e3);
  };
  return <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {
    /* Section Title */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16 text-center"
  >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Let&apos;s Work</span>{" "}
            <span className="text-[#D4AF37]">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full mx-auto mb-4" />
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new front-end development opportunities and projects. Whether you have a question about React, web design, or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        {
    /* Contact Grid */
  }
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {
    /* Contact Info */
  }
          <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
            {
    /* Email */
  }
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
                  <Mail size={24} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a
    href="mailto:monafakhri50@gmail.com"
    className="text-foreground-muted hover:text-[#D4AF37] transition-colors"
  >
                    monafakhri50@gmail.com
                  </a>
                </div>
              </div>
            </GlassCard>

            {
    /* Phone */
  }
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
                  <Phone size={24} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a
    href="tel:+201154926990"
    className="text-foreground-muted hover:text-[#D4AF37] transition-colors"
  >
                    +20 115 492 6990
                  </a>
                </div>
              </div>
            </GlassCard>

            {
    /* Location */
  }
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
                  <MapPin size={24} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-foreground-muted">Cairo, Egypt</p>
                </div>
              </div>
            </GlassCard>

            {
    /* Social Links */
  }
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
    { icon: Code2, href: "https://github.com/MonaFakhri", label: "GitHub" },
    { icon: Heart, href: "https://linkedin.com/in/mona-fakhri", label: "LinkedIn" },
    { icon: Mail, href: "mailto:monafakhri50@gmail.com", label: "Email" },
    { icon: Send, href: "https://wa.me/201154926990", label: "WhatsApp" }
  ].map((social) => {
    const Icon = social.icon;
    return <motion.a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
      className="p-4 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center"
      aria-label={social.label}
    >
                      <Icon size={20} />
                    </motion.a>;
  })}
              </div>
            </div>

            {
    /* Download CV */
  }
            <PremiumButton
    variant="gold"
    size="lg"
    onClick={() => window.open("/resume.pdf")}
    className="w-full justify-center"
  >
              <Download size={20} />
              Download CV
            </PremiumButton>
          </motion.div>

          {
    /* Contact Form */
  }
          <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="lg:col-span-2"
  >
            <GlassCard className="p-8">
              {submitted ? <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center py-12"
  >
                  <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.2)] flex items-center justify-center mb-4">
                    <span className="text-4xl text-[#D4AF37]">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-foreground-muted text-center">
                    Thank you for your message. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
    /* Name */
  }
                    <div>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] text-white placeholder-foreground-muted focus:border-[#D4AF37] focus:outline-none transition-colors"
    placeholder="Your Name"
  />
                    </div>

                    {
    /* Email */
  }
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] text-white placeholder-foreground-muted focus:border-[#D4AF37] focus:outline-none transition-colors"
    placeholder="Your Email"
  />
                    </div>
                  </div>

                  {
    /* Subject */
  }
                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] text-white placeholder-foreground-muted focus:border-[#D4AF37] focus:outline-none transition-colors"
    placeholder="Subject"
  />
                  </div>

                  {
    /* Message */
  }
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={6}
    className="w-full px-4 py-3 rounded-lg bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] text-white placeholder-foreground-muted focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
    placeholder="Your Message"
  />
                  </div>

                  {
    /* Submit Button */
  }
                  <PremiumButton
    variant="gold"
    size="lg"
    onClick={() => handleSubmit({ preventDefault: () => {
    } })}
    className="w-full justify-center"
  >
                    Send Message
                  </PremiumButton>
                </form>}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Contact
};
