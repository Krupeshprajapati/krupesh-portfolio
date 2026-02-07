"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      title: "How Machine Learning Works (Simple Guide)",
      desc: "A beginner-friendly explanation of ML with real examples.",
    },
    {
      title: "Building AI Products with FastAPI",
      desc: "How I design scalable AI backends using FastAPI.",
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
            AI Blog
          </h1>
          <p className="max-w-2xl text-white/60 text-lg">
            Thoughts, explainers, and experiments around AI, Machine Learning,
            and building real-world intelligent systems.
          </p>
        </motion.div>

        {/* POSTS */}
        <section className="mt-24 grid md:grid-cols-2 gap-10">
          {posts.map((p, i) => (
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
                glass-card
                rounded-[28px]
                p-10
              "
            >
              <h2 className="text-2xl font-medium mb-4">
                {p.title}
              </h2>

              <p className="text-white/70 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-white/40">
                  Coming soon
                </span>
                <span className="text-sm text-white/40">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </PageWrapper>
  );
}
