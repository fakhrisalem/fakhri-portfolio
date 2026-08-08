"use client";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "image/CAI.webp", alt: "Cairo University" },
  { src: "image/PY.webp", alt: "Pyramids of Giza" },
  { src: "image/google.png", alt: "Google" },
  { src: "image/hr.png", alt: "HR Dashboard Project" },
  { src: "image/re.png", alt: "Restaurant Project" },
  { src: "image/fl.jpg", alt: "Plant Store Project" },
  { src: "image/1.jpg", alt: "Meta Front-End Certificate" },
  { src: "image/3.jpg", alt: "IBM Certificate" },
  { src: "image/traval.jpg", alt: "Travel" },
  { src: "image/pilgrimage.jpg", alt: "Makkah" },
  { src: "image/charitable works.jpg", alt: "Volunteering" },
  { src: "image/8.jpg", alt: "City" },
];

function fibonacciSphere(samples) {
  const points = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push({ x, y, z });
  }
  return points;
}

const RADIUS = 240;
const points = fibonacciSphere(photos.length);

export function WelcomeSphere3D({ size = 560 }) {
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(-8);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.12, y: 0 });
  const frame = useRef();

  useEffect(() => {
    const tick = () => {
      if (!dragging.current) {
        setRotY((r) => r + velocity.current.x);
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    setRotY((r) => r + dx * 0.35);
    setRotX((r) => Math.max(-45, Math.min(45, r - dy * 0.35)));
    last.current = { x: e.clientX, y: e.clientY };
  };
  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      style={{
        width: size,
        height: size,
        perspective: 1000,
        touchAction: "none",
        cursor: "grab",
      }}
      className="mx-auto select-none"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        }}
      >
        {photos.map((photo, i) => {
          const p = points[i];
          const thetaY = (Math.atan2(p.x, p.z) * 180) / Math.PI;
          const thetaX = (-Math.asin(p.y) * 180) / Math.PI;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 108,
                height: 78,
                marginLeft: -54,
                marginTop: -39,
                transform: `rotateY(${thetaY}deg) rotateX(${thetaX}deg) translateZ(${RADIUS}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                  border: "2px solid rgba(212,175,55,0.55)",
                  boxShadow:
                    "0 4px 20px rgba(212,175,55,0.25), 0 2px 10px rgba(0,0,0,0.7)",
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WelcomeSphere3D;