"use client";

import { motion } from "framer-motion";
import "./dreams.css";

const dreamsData = [
  {
    title: "Work in Global Companies",
    description:
      "One of my biggest professional dreams is to work with leading global companies that represent innovation, excellence, and worldwide impact. I aspire to contribute to world-class products, collaborate with talented teams, and grow in an environment that pushes the boundaries of technology.",
    image: "image/global-companies.jpg",
  },
  {
    title: "Help People Learn Programming Easily",
    description:
      "I dream of helping many people learn programming in a simple and accessible way. I want to share practical knowledge, explain difficult concepts clearly, and encourage beginners to build confidence and create useful projects with technology.",
    image: "image/programming-education.jpg",
  },
  {
    title: "Travel the World",
    description:
      "Travel opens the mind and feeds the soul. I dream of exploring different cultures, cities, and landscapes across the globe — from the historic streets of Amsterdam to the vibrant corners of the world. Every journey is a new perspective, a new story, and a new source of inspiration.",
    image: "image/traval.jpg",
  },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const cardsVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.45,
    },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: -90,
    rotate: index === 0 ? -6 : index === 1 ? 2 : 6,
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.75,
      type: "spring",
      stiffness: 90,
      damping: 13,
    },
  },
};

function updateCardLight(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const rotateY = ((x / bounds.width) - 0.5) * 5;
  const rotateX = ((y / bounds.height) - 0.5) * -5;

  card.style.setProperty("--card-mouse-x", `${x}px`);
  card.style.setProperty("--card-mouse-y", `${y}px`);
  card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
  card.style.setProperty("--card-rotate-y", `${rotateY}deg`);
}

function resetCardLight(event) {
  const card = event.currentTarget;
  card.style.setProperty("--card-mouse-x", "50% ");
  card.style.setProperty("--card-mouse-y", "50% ");
  card.style.setProperty("--card-rotate-x", "0deg");
  card.style.setProperty("--card-rotate-y", "0deg");
}

function updateSectionLight(event) {
  const section = event.currentTarget;
  const bounds = section.getBoundingClientRect();
  section.style.setProperty("--section-mouse-x", `${event.clientX - bounds.left}px`);
  section.style.setProperty("--section-mouse-y", `${event.clientY - bounds.top}px`);
}

function Dreams() {
  return (
    <section
      id="dreams"
      className="dreams-section relative z-10 overflow-hidden py-20"
      onMouseMove={updateSectionLight}
    >
      <div className="dreams-grid-overlay" aria-hidden="true" />
      <div className="dreams-mouse-light" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="dreams-heading"
        >
          <div>
            <p className="dreams-eyebrow">BEYOND CODE AND DESIGN</p>
            <h2 className="dreams-title">
              <span>Dreams</span> <strong>&amp; Vision</strong>
            </h2>
          </div>
          <p className="dreams-intro">
            Beyond code and design, I carry dreams that shape who I am — professionally, spiritually, and personally.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.15, delay: 0.35, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="dreams-rope"
          aria-hidden="true"
        />

        <motion.div
          className="dreams-cards"
          role="list"
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {dreamsData.map((dream, index) => (
            <motion.article
              key={dream.title}
              role="listitem"
              className={`dream-card dream-card-${index + 1}`}
              custom={index}
              variants={cardVariants}
              onMouseMove={updateCardLight}
              onMouseLeave={resetCardLight}
            >
              <span className="dream-card-string" aria-hidden="true" />
              <span className="dream-card-clip" aria-hidden="true" />
              <div className="dream-card-paper">
                <div className="dream-card-image-wrap">
                  <img src={assetPath(dream.image)} alt={dream.title} className="dream-card-image" />
                </div>
                <div className="dream-card-meta">
                  <span>0{index + 1} / PERSONAL GOAL</span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{dream.title}</h3>
                <p>{dream.description}</p>
                <span className="dream-card-arrow" aria-hidden="true">↗</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="dreams-footer"
        >
          <span>HOVER TO EXPLORE EACH DREAM</span>
          <span>THE FUTURE IS STILL UNWRITTEN</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
          className="dreams-motivation"
        >
          <p>
            <span>Dreams are the fuel that keep me going.</span> Whether it&apos;s building a career at a company that inspires the world, fulfilling a spiritual calling, giving back to my community, or simply seeing the beauty this world has to offer — I hold every dream with intention and work every day to make them real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { Dreams };



