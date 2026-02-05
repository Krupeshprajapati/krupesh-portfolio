"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
  onClick={() => setDark(!dark)}
  className="relative z-10 rounded-full border px-4 py-2 text-sm
  hover:bg-white hover:text-black
  dark:hover:bg-white dark:hover:text-black
  transition-all duration-300"
>

      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
