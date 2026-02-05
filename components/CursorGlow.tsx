"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "pointer-events-none fixed z-50 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl";
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX - 64 + "px";
      glow.style.top = e.clientY - 64 + "px";
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
}
