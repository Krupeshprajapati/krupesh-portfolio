"use client";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

export default function DemoPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult("");

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.sentiment);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Live AI Demo
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            A real-time sentiment analysis demo powered by FastAPI and an AI
            model. Type any text below to see how the system interprets it.
          </p>
        </motion.div>

        {/* DEMO CARD */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="
            mt-20
            rounded-[28px]
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-10
            shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)]
          "
        >
          {/* INPUT */}
          <label className="block text-sm text-white/60 mb-3">
            Enter text for analysis
          </label>

          <textarea
            rows={4}
            placeholder="Example: I really love building AI products"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="
              w-full rounded-2xl
              bg-black/30
              border border-white/10
              p-4
              text-white
              placeholder-white/30
              focus:outline-none
              focus:ring-1 focus:ring-white/20
              transition
            "
          />

          {/* ACTION */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={analyze}
              disabled={loading}
              className="
                inline-flex items-center gap-2
                rounded-full
                px-7 py-3
                text-sm font-medium
                border border-white/20
                bg-white/5
                hover:bg-white hover:text-black
                disabled:opacity-50
                transition-all duration-300
              "
            >
              {loading ? "Analyzing…" : "Analyze"}
            </button>

            <span className="text-sm text-white/40">
              FastAPI · AI Model
            </span>
          </div>

          {/* RESULT */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                mt-10
                rounded-2xl
                border border-white/10
                bg-black/30
                p-6
              "
            >
              <p className="text-sm text-white/50 mb-1">
                Model output
              </p>
              <p className="text-2xl font-medium">
                {result}
              </p>
            </motion.div>
          )}
        </motion.section>
      </main>
    </PageWrapper>
  );
}
