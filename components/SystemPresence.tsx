"use client";
import { useEffect, useState } from "react";

export default function SystemPresence() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #7c7cff, transparent 60%)",
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.3s ease, top 0.3s ease",
        }}
      />
    </div>
  );
}
