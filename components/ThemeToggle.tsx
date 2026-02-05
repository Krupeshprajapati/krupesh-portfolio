"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
