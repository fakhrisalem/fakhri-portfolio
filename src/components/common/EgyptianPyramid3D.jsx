import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const photos = [
  { src: "image/PY.webp", alt: "Pyramids of Giza", label: "PYRAMIDS / EGYPT", tone: "gold" },
  { src: "image/CAI.webp", alt: "Cairo University", label: "CAIRO / 2026", tone: "violet" },
  { src: "image/MS.jfif", alt: "Istanbul Obelisk", label: "TRAVEL / NOTES", tone: "blue" },
  { src: "image/LA.jpg", alt: "Laptop", label: "CODE / WORKSPACE", tone: "teal" },
];

const POSITIONS = [0, 90, 180, 270];

function polarToXY(angleDeg, radiusX = 38, radiusY = 32) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: 50 + radiusX * Math.cos(rad),
    y: 50 + radiusY * Math.sin(rad),
  };
}

function EgyptianPyramid3D() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((current) => current + 90);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-photo-orbit" aria-hidden="true">
      <div className="hero-photo-orbit__halo hero-photo-orbit__halo--outer" />
      <div className="hero-photo-orbit__halo hero-photo-orbit__halo--inner" />

      {photos.map((photo, index) => {
        const currentAngle = POSITIONS[index] + rotation;
        const { x, y } = polarToXY(currentAngle);
        const depth = Math.abs(Math.sin((currentAngle * Math.PI) / 180));
        const scale = 0.72 + depth * 0.2;
        const opacity = 0.48 + depth * 0.42;
        const zIndex = Math.round(scale * 10);

        return (
          <motion.div
            key={photo.src}
            className={`hero-photo-orbit__card hero-photo-orbit__card--${photo.tone}`}
            animate={{ left: `${x}%`, top: `${y}%`, scale, opacity }}
            transition={{ duration: 2.1, ease: [0.22, 0.8, 0.2, 1] }}
            style={{ zIndex }}
          >
            <motion.div
              className="hero-photo-orbit__frame"
              animate={{ rotate: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-photo-orbit__image-wrap">
                <img src={photo.src} alt={photo.alt} />
                <span className="hero-photo-orbit__shine" />
              </div>
              <span className="hero-photo-orbit__label">{photo.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export { EgyptianPyramid3D };
export default EgyptianPyramid3D;
