"use client";

import { useEffect, useRef } from "react";

export default function WebGPUBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // browser check
    if (!("gpu" in navigator)) {
      console.warn("WebGPU not supported");
      return;
    }

    async function init() {
      const canvas = canvasRef.current!;

      // 👇 yaha baad me tumhara TypeGPU code jayega
      // abhi sirf base ready rakho
      console.log("WebGPU canvas ready", canvas);
    }

    init();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute inset-0
        w-full h-full
        -z-10
        opacity-30
        pointer-events-none
      "
    />
  );
}
