"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "pointer-events-none fixed z-50 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl will-change-transform";
    glow.style.left = "0px";
    glow.style.top = "0px";
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      // Use transform directly for better performance vs top/left
      glow.style.transform = `translate(${e.clientX - 128}px, ${e.clientY - 128}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (document.body.contains(glow)) {
        document.body.removeChild(glow);
      }
    };
  }, []);

  return null;
}
