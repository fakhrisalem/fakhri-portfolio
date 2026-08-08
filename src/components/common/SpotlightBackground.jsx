"use client";
import { useEffect, useRef } from "react";

export function SpotlightBackground({ image, radius = 220 }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    const setSpot = (x, y) => {
      const gradient = `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.97) 100%)`;
      overlay.style.maskImage = gradient;
      overlay.style.webkitMaskImage = gradient;
    };

    setSpot(-9999, -9999);

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const point = e.touches ? e.touches[0] : e;
      setSpot(point.clientX - rect.left, point.clientY - rect.top);
    };
    const onLeave = () => setSpot(-9999, -9999);

    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    container.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      container.removeEventListener("touchmove", onMove);
    };
  }, [radius]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src={image}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ transition: "mask-image 0.06s linear" }}
      />
    </div>
  );
}

export default SpotlightBackground;