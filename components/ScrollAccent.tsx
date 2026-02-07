"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAccent() {
  const { scrollYProgress } = useScroll();

  // subtle movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0.2]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="
        pointer-events-none
        absolute inset-0
        z-0
      "
    >
      <div
        className="
          absolute
          left-[-20%]
          top-[10%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
      />
      <div
        className="
          absolute
          right-[-20%]
          bottom-[10%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      />
    </motion.div>
  );
}
