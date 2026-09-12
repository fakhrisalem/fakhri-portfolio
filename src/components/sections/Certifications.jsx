"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, MapPin, X } from "lucide-react";
import "./certifications.css";

const certificationsData = [
  { id: 11, title: "Python for Data Science, AI & Development", provider: "IBM — via Coursera", date: "Jun 30, 2024", category: "Data & AI", image: "image/11.jpeg", description: "Python programming for data science, AI, application development, data analysis and automation.", skills: ["Python", "Data Science", "AI", "Pandas"], credential: "IBM-PY-2024-11" },
  { id: 14, title: "The Complete JavaScript Course 2025", provider: "Udemy", date: "Aug 13, 2026", category: "Development", image: "image/14.jpg", description: "Modern JavaScript, ES6+, DOM manipulation, asynchronous programming and practical projects.", skills: ["JavaScript", "ES6+", "DOM", "Async"], credential: "UDEMY-JS-2026-14" },
  { id: 1, title: "Meta Front-End Developer", provider: "Meta — via Coursera", date: "May 11, 2026", category: "Featured", image: "image/1.jpg", description: "Professional front-end certificate covering HTML, CSS, JavaScript, React, UX/UI and version control.", skills: ["React.js", "JavaScript", "HTML5", "CSS3"], credential: "META-FE-2026-01" },
  { id: 3, title: "Introduction to Software Engineering", provider: "IBM — via Coursera", date: "Oct 16, 2024", category: "Engineering", image: "image/3.jpg", description: "Software engineering foundations, SDLC, agile methodologies, cloud computing and programming concepts.", skills: ["SDLC", "Agile", "Cloud", "Software Design"], credential: "IBM-SE-2024-03" },
  { id: 7, title: "Introduction to Web Development", provider: "IBM — via Coursera", date: "Jun 25, 2024", category: "Development", image: "image/7.jpg", description: "Responsive web development fundamentals with HTML, CSS and JavaScript interactivity.", skills: ["HTML", "CSS", "JavaScript", "Responsive Design"], credential: "IBM-WEB-2024-07" },
  { id: 8, title: "Foundations of Web Development", provider: "Proper Dot Institute — via Udemy", date: "Sept 13, 2025", category: "Development", image: "image/10.png", description: "CSS, Bootstrap, JavaScript, responsive layouts and core React patterns.", skills: ["CSS", "Bootstrap", "JavaScript", "React"], credential: "PDI-WEB-2025-08" },
  { id: 9, title: "Web Designer — Digital Egypt Youth", provider: "NTI / Digital Egypt Youth", date: "Oct 10, 2024", category: "Design", image: "image/9.jpg", description: "Web design, UI principles, freelancing skills and digital communication tools.", skills: ["Web Design", "UI/UX", "Freelancing"], credential: "NTI-DESIGN-2024-09" },
  { id: 10, title: "Interactivity with JavaScript", provider: "University of Michigan — via Coursera", date: "May 18, 2026", category: "Development", image: "image/8.jpg", description: "DOM events, animations and creating engaging interactive user experiences.", skills: ["JavaScript", "DOM Events", "Animations", "UX"], credential: "UMICH-JS-2026-10" },
  { id: 12, title: "Developing Front-End Apps with React", provider: "IBM — via Coursera", date: "Sep 1, 2024", category: "Engineering", image: "image/12.jpeg", description: "React component architecture, state management and responsive UI development.", skills: ["React", "Components", "State Management"], credential: "IBM-REACT-2024-12" },
  { id: 13, title: "Developing Back-End Apps with Node.js", provider: "IBM — via Coursera", date: "Aug 7, 2026", category: "Engineering", image: "image/13.png", description: "Node.js, Express, APIs, routing, middleware and backend architecture.", skills: ["Node.js", "Express", "REST APIs"], credential: "IBM-NODE-2026-13" },
];

function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="passport-section">
      <div className="passport-section__inner">
        <header className="passport-header">
          <div><p className="passport-kicker">CERTIFICATES / LEARNING JOURNEY</p><h2>My Certificate<br /><em>Passport</em></h2><p>Every certificate is a destination in my continuous learning journey.</p></div>
          <div className="passport-compass">✧<span>EXPLORE<br />LEARN<br />GROW</span></div>
        </header>

        <div className="passport-workspace">
          <div className="passport-overview">
            <div className="passport-route" aria-hidden="true"><span className="route-line" /><span className="route-plane">✈</span></div>
            <div className="passport-grid">
              {certificationsData.map((certificate, index) => <PassportCard key={certificate.id} certificate={certificate} index={index} selected={selected?.id === certificate.id} onSelect={setSelected} />)}
            </div>
          </div>
          <div className="passport-live-preview">
            <PassportPanel certificate={selected || certificationsData[0]} certificates={certificationsData} onClose={() => setSelected(null)} onChange={setSelected} embedded />
          </div>
        </div>

        <footer className="passport-footer"><span>COLLECTED MILESTONES</span><span>{String(certificationsData.length).padStart(2, "0")} CERTIFICATES</span><span>KEEP GOING →</span></footer>
      </div>

    </section>
  );
}

function PassportCard({ certificate, index, selected, onSelect }) {
  const kind = index % 4 === 0 ? "cover" : index % 4 === 1 ? "ticket" : index % 4 === 2 ? "stamp" : "ticket ticket-light";
  return <motion.button type="button" className={`passport-card passport-card--${kind} ${selected ? "is-selected" : ""}`} onClick={() => onSelect(certificate)} whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }} transition={{ duration: .25 }}>
    <div className="passport-card__art">{kind === "cover" ? <><span className="passport-card__globe">◎</span><strong>MY<br />CERTIFICATE<br />PASSPORT</strong><small>LEARNING JOURNEY</small></> : kind === "stamp" ? <><span className="passport-stamp">✈<br /><b>{certificate.category}</b><br />EXPLORE</span><strong>{certificate.title}</strong></> : <><span className="passport-ticket-route">✈ ────── ✈</span><strong>{certificate.title}</strong><small>{certificate.provider}</small></>}</div>
    <div className="passport-card__caption"><span>{String(index + 1).padStart(2, "0")}</span><b>{certificate.category}</b></div>
  </motion.button>;
}

function PassportPanel({ certificate, certificates, onClose, onChange, embedded = false }) {
  const index = certificates.findIndex((item) => item.id === certificate.id);
  const change = (direction) => onChange(certificates[(index + direction + certificates.length) % certificates.length]);
  return <motion.div className={`passport-panel-backdrop ${embedded ? "passport-panel-backdrop--embedded" : ""}`} initial={embedded ? false : { opacity: 0 }} animate={embedded ? false : { opacity: 1 }} exit={embedded ? undefined : { opacity: 0 }} onClick={embedded ? undefined : onClose}>
    <motion.aside className={`passport-panel ${embedded ? "passport-panel--embedded" : ""}`} initial={embedded ? false : { x: "100%" }} animate={embedded ? false : { x: 0 }} exit={embedded ? undefined : { x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 240 }} onClick={(event) => event.stopPropagation()}>
      {!embedded && <button type="button" className="passport-panel__close" onClick={onClose} aria-label="Close certificate details"><X size={21} /></button>}
      <div className="passport-panel__heading"><span className="passport-panel__compass">✧</span><div><span>MY</span><h3>CERTIFICATE<br />PASSPORT</h3></div></div>
      <motion.div className="passport-spread" key={certificate.id} initial={{ opacity: 0, scale: .97, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}>
        <div className="passport-page passport-page--details">
          <p className="page-label">CERTIFICATE DETAILS</p><h4>{certificate.title}</h4><p className="page-description">{certificate.description}</p>
          <div className="page-meta"><span><CalendarDays size={14} /> Issued on<strong>{certificate.date}</strong></span><span><MapPin size={14} /> Category<strong>{certificate.category}</strong></span></div>
          <p className="page-label page-label--skills">SKILLS</p><div className="page-skills">{certificate.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          <button type="button" className="certificate-image-button" onClick={() => window.open(certificate.image, "_blank", "noopener,noreferrer")}><img src={certificate.image} alt={`${certificate.title} certificate`} /><span>VIEW CERTIFICATE <ExternalLink size={13} /></span></button>
        </div>
        <div className="passport-page passport-page--provider">
          <p className="page-label">ISSUED BY</p><div className="provider-seal">✧</div><h4>{certificate.provider.split(" — ")[0]}</h4><p className="provider-via">{certificate.provider.includes(" — ") ? `— ${certificate.provider.split(" — ")[1]} —` : "— Official Certificate —"}</p><div className="provider-divider" /><p className="provider-copy">This certificate recognizes the successful completion of the program and the skills developed along the learning journey.</p><div className="provider-info"><span>ISSUE DATE<strong>{certificate.date}</strong></span><span>CREDENTIAL ID<strong>{certificate.credential}</strong></span></div><div className="verified-stamp">✈ VERIFIED<br />CERTIFICATE</div>
        </div>
      </motion.div>
      <div className="passport-panel__navigation"><button type="button" onClick={() => change(-1)}><ArrowLeft size={16} /> PREVIOUS</button><span>{String(index + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span><button type="button" onClick={() => change(1)}>NEXT <ArrowRight size={16} /></button></div>
    </motion.aside>
  </motion.div>;
}

export { Certifications };
export { certificationsData };
