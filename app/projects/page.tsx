export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "AI Book Generator",
            desc: "Generates full books using AI with structured chapters.",
          },
          {
            title: "Kids Story Generator",
            desc: "AI-powered story + illustration generator for kids.",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 opacity-70">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
