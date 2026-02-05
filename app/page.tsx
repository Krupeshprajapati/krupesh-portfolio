import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen px-6">
      {/* NAV */}
      <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">KRUPESH</h1>
        <ThemeToggle />
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            KRUPESH D. <br /> PRAJAPATI
          </h2>
          <p className="mt-4 text-xl text-black/70 dark:text-white/70">
            AI / ML Developer
          </p>
          <p className="mt-6 max-w-md text-black/60 dark:text-white/60">
            Building intelligent systems with data, code, and creativity.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-10 backdrop-blur">
          <p className="text-center opacity-70">
            AI Visual / Illustration 🤖
          </p>
        </div>

        <a
  href="/Krupesh_Prajapati_Resume.pdf"
  download
  className="inline-block mt-6 rounded-full border px-6 py-3 hover:bg-black/5 dark:hover:bg-white/10"
>
  Download Resume
</a>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto mt-32">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="max-w-3xl text-black/70 dark:text-white/70 leading-relaxed">
          I’m an AI/ML Developer passionate about building intelligent,
          data-driven applications. I enjoy working on real-world problems
          involving automation, prediction, and smart systems using modern
          tools and frameworks.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto mt-32">
        <h3 className="text-3xl font-bold mb-10">Skills</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Python",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "Computer Vision",
            "FastAPI",
            "React",
            "Tailwind CSS",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-6 py-4 backdrop-blur hover:scale-[1.03] transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mt-32">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Book Generator",
              desc: "Automatically generates structured books using AI models.",
              tech: "Python · FastAPI · AI",
            },
            {
              title: "Kids Story Generator",
              desc: "Creates age-based kids stories with illustrations.",
              tech: "AI · MongoDB · API",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur"
            >
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="mt-3 text-black/70 dark:text-white/70">
                {p.desc}
              </p>
              <p className="mt-4 text-sm opacity-60">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto mt-32 mb-20">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="opacity-70 mb-4">
          Let’s build something intelligent together.
        </p>

        <div className="flex gap-6">
          <a className="underline" href="#">Email</a>
          <a className="underline" href="#">GitHub</a>
          <a className="underline" href="#">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
