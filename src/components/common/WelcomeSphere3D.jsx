"use client";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "MF.jpeg", alt: "Mona Fakhri" },
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

function ringSphere(samples) {
  const points = [];
  const outerRingCount = Math.floor(samples / 3);
  const ringCounts = [
    outerRingCount,
    samples - outerRingCount * 2,
    outerRingCount,
  ];
  const latitudes = [Math.PI * 0.29, Math.PI / 2, Math.PI * 0.71];

  ringCounts.forEach((count, ringIndex) => {
    const latitude = latitudes[ringIndex];
    const phase = ringIndex % 2 === 0 ? 0 : Math.PI / count;

    for (let index = 0; index < count; index++) {
      const longitude = (index / count) * Math.PI * 2 + phase;
      points.push({
        x: Math.sin(latitude) * Math.sin(longitude),
        y: Math.cos(latitude),
        z: Math.sin(latitude) * Math.cos(longitude),
      });
    }
  });

  return points;
}

const points = ringSphere(photos.length);

export function WelcomeSphere3D({ size = 560 }) {
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(-8);
  const [responsiveSize, setResponsiveSize] = useState(size);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.12, y: 0 });
  const frame = useRef();

  const radius = responsiveSize * 0.35;
  const cardWidth = responsiveSize * 0.225;
  const cardHeight = cardWidth * 0.72;

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 360) setResponsiveSize(Math.min(size, 150));
      else if (width < 480) setResponsiveSize(Math.min(size, 190));
      else if (width < 640) setResponsiveSize(Math.min(size, 260));
      else if (width < 768) setResponsiveSize(Math.min(size, 320));
      else if (width < 1024) setResponsiveSize(Math.min(size, 400));
      else setResponsiveSize(Math.min(size, 520));
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);

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
  }

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      style={{
        width: responsiveSize,
        height: responsiveSize,
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
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
                transform: `rotateY(${thetaY}deg) rotateX(${thetaX}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${photo.src}`}
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