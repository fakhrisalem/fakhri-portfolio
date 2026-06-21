"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";
const dreamsData = [
  {
    title: "Work at Google",
    description: "One of my biggest professional dreams is to join Google — a company that represents innovation, excellence, and global impact. I aspire to contribute to world-class products, collaborate with brilliant minds, and grow in an environment that pushes the boundaries of technology every single day.",
    image: "image/google.png"
  },
  {
    title: "Perform Hajj & Umrah",
    description: "A deeply personal and spiritual dream — to stand before the Kaaba in Mecca and experience the profound peace of Hajj and Umrah. This journey represents faith, gratitude, and a meaningful connection to something far greater than myself. It is a dream I hold close to my heart.",
    image: "image/pilgrimage.jpg"
  },
  {
    title: "Give Back Through Charity",
    description: "I believe that true success is measured by how much we give back. I dream of actively contributing to charitable causes — whether through volunteering, organizing community initiatives, or using my tech skills to support non-profits and organizations that make a real difference in people's lives.",
    image: "image/charitable works.jpg"
  },
  {
    title: "Travel the World",
    description: "Travel opens the mind and feeds the soul. I dream of exploring different cultures, cities, and landscapes across the globe — from the historic streets of Amsterdam to the vibrant corners of the world. Every journey is a new perspective, a new story, and a new source of inspiration.",
    image: "image/traval.jpg"
  }
];
function Dreams() {
  return <section id="dreams" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16 text-center"
  >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">My</span>{" "}
            <span className="text-[#D4AF37]">Dreams & Vision</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Beyond code and design, I carry dreams that shape who I am — professionally, spiritually, and personally.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Dreams Grid */}
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
          {dreamsData.map((dream, index) => <motion.div key={index} variants={staggerItem}>
              <GlassCard className="h-full overflow-hidden hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20">
                {/* Dream Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
    src={dream.image}
    alt={dream.title}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                </div>

                {/* Dream Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{dream.title}</h3>

                  {/* Description */}
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                    {dream.description}
                  </p>

                  {/* Decorative accent */}
                  <div className="pt-6 border-t border-[#D4AF37]/10">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Personal Goal
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>)}
        </motion.div>

        {/* Motivation Statement */}
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
    className="mt-16"
  >
          <GlassCard className="p-12 border-l-4 border-[#D4AF37] text-center">
            <p className="text-lg text-foreground-muted leading-relaxed">
              <span className="text-[#D4AF37] font-semibold">Dreams are the fuel that keep me going.</span> Whether it&apos;s building a career at a company that inspires the world, fulfilling a spiritual calling, giving back to my community, or simply seeing the beauty this world has to offer — I hold every dream with intention and work every day to make them real.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>;
}
export {
  Dreams
};
