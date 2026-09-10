import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import skillsData from "@/data/skills.json";

const leafPositions = [
  { x: 11, y: 31, side: "left" }, { x: 23, y: 20, side: "left" },
  { x: 77, y: 20, side: "right" }, { x: 89, y: 31, side: "right" },
  { x: 50, y: 16, side: "center" },
];

function playLeafSound(kind = "leaf") {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(kind === "modal" ? 660 : 520, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(kind === "modal" ? 880 : 620, context.currentTime + 0.09);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.16);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.18);
  oscillator.addEventListener("ended", () => context.close(), { once: true });
}

function OrganicTree({ category, index, onSkillClick, activeSkill }) {
  const average = Math.round(category.skills.reduce((sum, skill) => sum + skill.percentage, 0) / category.skills.length);
  const [light, setLight] = useState({ x: 50, y: 45 });
  const moveLight = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    setLight({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 });
  };
  return (
    <motion.article className="organic-tree" onPointerMove={moveLight} style={{ "--tree-color": category.color, "--tree-accent": category.accent, "--light-x": `${light.x}%`, "--light-y": `${light.y}%` }} initial={{ opacity: 0, y: 35, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .12 }}>
      <header className="organic-tree__header"><div className="organic-tree__title-row"><h3>{category.title}</h3><span className="organic-tree__average" title="Average skill level">AVG {average}%</span></div><span>{category.subtitle}</span></header>
      <svg className="organic-tree__svg" viewBox="0 0 600 380" aria-hidden="true"><path className="organic-tree__trunk" d={index % 2 ? "M300 355 C316 300 288 250 304 205 C317 165 344 132 370 100" : "M300 355 C286 300 305 252 298 208 C291 165 268 132 245 103"} /><path className="organic-tree__branch" d="M300 265 C252 222 205 184 143 153" /><path className="organic-tree__branch" d="M300 235 C350 185 400 145 465 112" /><path className="organic-tree__branch" d="M300 213 C300 160 300 125 300 82" /><path className="organic-tree__twig" d="M143 153 C119 136 106 125 91 111 M143 153 C138 176 137 190 139 207 M465 112 C486 96 500 84 516 69 M465 112 C472 134 476 150 477 166 M300 82 C280 61 272 50 263 36 M300 82 C321 61 330 51 340 38" />{[...Array(8)].map((_, leafIndex) => <ellipse key={leafIndex} className="organic-tree__leaf" cx={[87,139,518,477,263,340,105,498][leafIndex]} cy={[108,207,67,166,36,38,125,88][leafIndex]} rx="22" ry="12" />)}</svg>
      {category.skills.map((skill, skillIndex) => { const position = leafPositions[skillIndex]; const intensity = skill.percentage >= 90 ? "high" : skill.percentage >= 75 ? "medium" : "soft"; const active = activeSkill?.name === skill.name; return <motion.button type="button" key={skill.name} className={`organic-tree__skill organic-tree__skill--${position.side} organic-tree__skill--${intensity} ${active ? "is-active" : ""}`} style={{ left: `${position.x}%`, top: `${position.y}%` }} onClick={() => { playLeafSound("leaf"); onSkillClick(skill, category); }} initial={{ opacity: 0, scale: .5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .12 + skillIndex * .1 }} whileHover={{ scale: 1.08, y: -5, rotate: position.side === "left" ? -3 : 3 }} whileTap={{ scale: .96 }} aria-label={`Open details for ${skill.name}`}><span>{skill.name}</span><b>{skill.percentage}%</b></motion.button>; })}
      <div className="organic-tree__base"><strong>{category.title}</strong><small>{category.tagline}</small></div>
    </motion.article>
  );
}

function SkillModal({ skill, category, onClose }) {
  useEffect(() => { const handler = (event) => event.key === "Escape" && onClose(); document.body.style.overflow = "hidden"; window.addEventListener("keydown", handler); return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); }; }, [onClose]);
  return <div className="skill-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><motion.div className="skill-modal" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title" initial={{ opacity: 0, scale: .88, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .88, y: 20 }} style={{ "--modal-color": category.color }}><button className="skill-modal__close" onClick={onClose} aria-label="Close skill details">×</button><span className="skill-modal__eyebrow">{category.title} · {skill.percentage}%</span><h3 id="skill-modal-title">{skill.name}</h3><div className="skill-modal__meter"><span style={{ width: `${skill.percentage}%` }} /></div><div className="skill-modal__body"><div><b>Experience</b><p>{skill.experience}</p></div><div><b>Related Projects</b><p>{skill.projects}</p></div><div><b>Tools &amp; Concepts</b><p>{skill.tools}</p></div></div><button className="skill-modal__done" onClick={() => { playLeafSound("modal"); onClose(); }}>Back to the tree</button></motion.div></div>;
}

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return <section id="skills" className="skills-forest-section relative z-10 py-20"><div className="skills-fireflies" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><motion.header className="skills-forest-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span>THE SKILLS FOREST</span><h2>Grow Through <em>Code</em></h2><p>Four living branches of my technical journey.</p></motion.header><div className="organic-tree-grid">{skillsData.categories.map((category, index) => <OrganicTree key={category.id} category={category} index={index} activeSkill={selectedSkill?.category.id === category.id ? selectedSkill.skill : null} onSkillClick={(skill, group) => setSelectedSkill({ skill, category: group })} />)}</div><p className="skills-forest-hint">HOVER A SKILL TO WAKE THE BRANCH · CLICK A SKILL FOR PROJECT DETAILS</p><motion.div className="mt-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h3 className="mb-8 text-3xl font-bold text-white">Core <span className="text-[#D4AF37]">Competencies</span></h3><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{skillsData.competencies.map((item) => <GlassCard key={item.title} className="p-6 h-full"><div className="mb-4 h-3 w-3 rounded-full bg-[#86ddd0] shadow-[0_0_16px_#86ddd0]" /><h4 className="mb-2 text-lg font-bold text-white">{item.title}</h4><p className="text-sm leading-relaxed text-foreground-muted">{item.description}</p></GlassCard>)}</div></motion.div></div>{selectedSkill && <SkillModal skill={selectedSkill.skill} category={selectedSkill.category} onClose={() => setSelectedSkill(null)} />}</section>;
}

export { Skills };


