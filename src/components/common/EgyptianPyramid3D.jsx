"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * EgyptianPyramid3D
 * 4 photos rotating in a circular carousel in the background.
 * Each photo sits at a fixed position on a virtual circle and the whole
 * group rotates continuously so every image visits every position.
 */

const photos = [
  { src: "image/PY.webp",  alt: "Pyramids of Giza"    },
  { src: "image/CAI.webp", alt: "Cairo University"     },
  { src: "image/MS.jfif",  alt: "Istanbul Obelisk"     },
  { src: "image/LA.jpg",   alt: "Laptop"               },
];

// Positions on the circle (in degrees): top, right, bottom, left
const POSITIONS = [0, 90, 180, 270];

// Convert polar angle to x/y percent relative to center
function polarToXY(angleDeg, radiusX = 38, radiusY = 32) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: 50 + radiusX * Math.cos(rad),
    y: 50 + radiusY * Math.sin(rad),
  };
}

export function EgyptianPyramid3D() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 90);          // jump 90° every 2.5s
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {photos.map((photo, i) => {
        // Each photo starts at its own base angle, then the whole ring rotates
        const baseAngle = POSITIONS[i];
        const currentAngle = baseAngle + rotation;
        const { x, y } = polarToXY(currentAngle);

        // Scale: photos at "top" (y small) and "bottom" (y large) are smaller;
        // photos at sides are bigger — gives 3D depth illusion
        const normalizedY = y / 100;          // 0..1
        const scale = 0.55 + 0.3 * Math.abs(Math.sin((currentAngle * Math.PI) / 180));
        const opacity = 0.45 + 0.55 * scale;
        const zIndex = Math.round(scale * 10);

        return (
          <motion.div
            key={i}
            animate={{
              left: `${x}%`,
              top:  `${y}%`,
              scale,
              opacity,
            }}
            transition={{
              duration: 1.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex,
              width: 160,
              height: 110,
            }}
          >
            <motion.div
              animate={{ rotateY: [0, 8, 0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "100%", height: "100%", transformStyle: "preserve-3d" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "2px solid rgba(212,175,55,0.4)",
                  boxShadow:
                    "0 6px 30px rgba(212,175,55,0.2), 0 2px 12px rgba(0,0,0,0.6)",
                  display: "block",
                }}
              />
              {/* gold gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 14,
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 55%, rgba(0,0,0,0.4) 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default EgyptianPyramid3D;