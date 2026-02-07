"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Book Generator",
      desc: "Automatically generates structured books using AI models, including chapters, summaries, and metadata.",
      stack: "Python · FastAPI · AI",
    },
    {
      title: "Kids Story Generator",
      desc: "AI-powered system that creates age-based kids stories with illustrations and safe storytelling logic.",
      stack: "AI · MongoDB · API",
    },
  ];

  return (
    <PageWrapper>
      <main className="min-h-screen px-6 py-32 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Projects
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            A selection of AI-driven projects focused on solving real-world
            problems with clean architecture and scalable systems.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <section className="mt-24 grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="
                group
                glass-card
                rounded-[28px]
                p-10
              "
            >
              {/* TITLE */}
              <h3 className="text-2xl font-medium mb-4 tracking-tight">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/70 leading-relaxed mb-6">
                {p.desc}
              </p>

              {/* STACK */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">
                  {p.stack}
                </span>

                <span className="text-sm text-white/40 group-hover:text-white transition">
                  View →
                </span>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </PageWrapper>
  );
}
