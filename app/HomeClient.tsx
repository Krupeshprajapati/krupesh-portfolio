"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactSuccess from "@/components/ContactSuccess";
import dynamic from "next/dynamic";
import SystemPresence from "@/components/SystemPresence";
import ScrollAccent from "@/components/ScrollAccent";


const WebGPUBackground = dynamic(
  () => import("@/components/WebGPUBackground"),
  { ssr: false }
);

function HomeInner() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent");

  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {sent === "true" && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50
          rounded-full bg-green-500/10 text-green-400 px-6 py-2 text-sm">
          Message sent successfully 🚀
        </div>
      )}

      <PageWrapper>

          {/* NAVBAR */}
  <nav className="relative z-50">
    <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
      {/* LEFT */}
      <div className="leading-tight">
        <h1 className="text-sm font-semibold tracking-wide text-white">
          KRUPESH D. PRAJAPATI
        </h1>
        <p className="text-xs text-white/50">
          AI Engineer · Production Systems
        </p>
      </div>

      {/* CENTER */}
      <ul className="hidden md:flex items-center gap-10 text-sm text-white/60">
        {[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Work", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-white transition">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2 text-xs text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available
        </span>
        <ThemeToggle />
      </div>
    </div>
  </nav>

        <main className="min-h-screen px-6 relative">

         {/* HERO */}
<section className="min-h-screen pb-10 flex items-start">
        <SystemPresence />
        <ScrollAccent />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* NAME – MAIN ANCHOR */}
          <p className="text-sm text-white/60">
            Hi, I’m{" "}
            <span className="text-white font-medium">
              Krupesh Prajapati
            </span>{" "}
            — AI Engineer
          </p>

          {/* HEADLINE */}
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            I build AI systems
            <br />
            <span className="text-white/40">
              that actually ship.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            I help startups and businesses turn AI ideas into
            production-ready systems that scale reliably —
            <span className="text-white"> not demos, not experiments</span>.
          </p>

          <p className="mt-4 text-white/55 max-w-lg leading-relaxed">
            From LLM products and automation to robust AI backends,
            my focus is clarity, performance, and long-term reliability.
          </p>

          {/* AVAILABILITY BADGE */}
          <span className="inline-block mt-6 text-xs px-4 py-1.5 rounded-full
            bg-green-500/10 text-green-400 border border-green-500/20">
            Available for freelance · Remote · Worldwide
          </span>

          {/* CTA */}
          <div className="flex gap-4 mt-10">
            <a
              href="#contact"
              className="rounded-full px-8 py-4 text-sm font-medium
              bg-white text-black hover:bg-white/90 transition"
            >
              Book a Free Consultation
            </a>

            <a
              href="#projects"
              className="rounded-full px-8 py-4 text-sm font-medium
              border border-white/20 bg-white/5
              hover:bg-white hover:text-black transition"
            >
              View Case Studies
            </a>
          </div>

          {/* TRUST LINE */}
          <p className="mt-8 text-xs text-white/40">
            Trusted by founders building real products — not pitch decks.
          </p>
        </motion.div>

        {/* RIGHT – PHOTO */}
        <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="relative z-20 flex justify-center md:justify-end items-center"
>
  <div className="relative">
    <img
      src="/krupesh.png"
      alt="Krupesh Prajapati"
      className="
        h-[640px] md:h-[720px] lg:h-[780px]
        w-auto
        object-contain
        drop-shadow-[0_90px_160px_rgba(0,0,0,0.8)]
      "
    />

    {/* <div
      className="
        absolute bottom-6 left-1/2 -translate-x-1/2
        px-5 py-2 rounded-full text-xs
        bg-black/70 border border-white/10
        text-white/80 backdrop-blur
        pointer-events-none
      "
    >
      Production · Scale · Reliability
    </div> */}
  </div>
</motion.div>


      </div>
    </section>





{/* ABOUT – FULL WIDTH STORY */}
<section id="about" className="max-w-6xl mx-auto py-32 grid md:grid-cols-2 gap-20 items-start scroll-mt-16">
  {/* <section
  id="about"
  className="max-w-6xl mx-auto py-32 scroll-mt-[120px]"
> */}

  {/* LEFT — STORY */}
  <div>
    <p className="text-xs uppercase tracking-widest text-white/40">
      About Me
    </p>

    <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
      I don’t just build AI.
      <br />
      <span className="text-white/60">
        I take responsibility for what ships.
      </span>
    </h2>

    <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
      Hi, I’m <span className="text-white font-medium">Krupesh Prajapati</span>.
      I work with founders who want more than a demo —
      they want systems that survive real users, real traffic,
      and real business pressure.
    </p>

    <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
      I’ve seen great ideas fail not because the AI was weak,
      but because no one designed them for production.
      No monitoring. No fallback plans. No ownership.
    </p>

    <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
      That’s where I come in.
    </p>
  </div>

  {/* RIGHT — HOW YOU THINK */}
  <div className="space-y-6">
    {[
      {
        title: "I think in systems, not features",
        desc: "APIs, failure modes, scaling paths, and long-term maintainability come before polish.",
      },
      {
        title: "I build like I’ll maintain it myself",
        desc: "Clear architecture, clean code, and decisions that won’t hurt six months later.",
      },
      {
        title: "I care about the business, not just the model",
        desc: "Cost, latency, reliability, and user impact matter more than benchmarks.",
      },
      {
        title: "I communicate clearly",
        desc: "No AI jargon. No surprises. You always know what’s shipping and why.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="glass-card rounded-2xl p-6"
      >
        <h4 className="text-white font-medium">
          {item.title}
        </h4>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>




{/* WHY ME – STACKED REVEAL */}
<section className="max-w-5xl mx-auto py-32">
  <p className="text-center text-xs uppercase tracking-widest text-white/40">
    Why clients work with me
  </p>

  <h2 className="mt-4 text-center text-4xl md:text-5xl font-semibold tracking-tight">
    I think like a <span className="text-white/70">product owner</span>,
    <br className="hidden md:block" />
    not just a developer
  </h2>

  <div className="grid md:grid-cols-2 gap-10 mt-20">
    {/* LEFT */}
    <div className="glass-card rounded-3xl p-8">
      <p className="text-red-400 text-sm font-medium mb-4">
        What founders usually struggle with
      </p>
      <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
        <li>• AI demos that break with real users</li>
        <li>• Costs explode after launch</li>
        <li>• No monitoring, no fallback plans</li>
        <li>• “We’ll fix it later” engineering</li>
        <li>• Hard-to-maintain systems no one owns</li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="glass-card rounded-3xl p-8">
      <p className="text-green-400 text-sm font-medium mb-4">
        How I approach the same problems
      </p>
      <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
        <li>• Systems designed for production from day one</li>
        <li>• Cost-aware AI & API decisions</li>
        <li>• Monitoring, retries, and graceful failures</li>
        <li>• Clear ownership and maintainable architecture</li>
        <li>• Built to scale with users, not surprise them</li>
      </ul>
    </div>
  </div>

  {/* BOTTOM PUNCH */}
  <div className="text-center mt-20">
    <p className="text-xl font-medium text-white">
      I don’t ship features.
      <br className="hidden md:block" />
      <span className="text-white/60">I ship systems that stay alive.</span>
    </p>

    <p className="mt-4 text-sm text-white/40">
      This mindset is why clients trust me with production.
    </p>
  </div>
</section>




          {/* CTA / AVAILABILITY */}
          <section className="max-w-6xl mx-auto mt-32">
            <div
              className="
      glass-card
      rounded-[32px]
      p-12
      text-center
    "
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                Let’s build something intelligent
              </h3>

              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Looking to build or integrate AI into your product?
                I’m currently available for freelance and contract work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
  href="#contact"
  className="
    inline-flex items-center justify-center
    rounded-full
    px-8 py-4
    text-sm font-medium
    bg-white text-black
    transition
    hover:scale-[1.06]
    hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
    active:scale-[0.97]
  "
>
  Request a Free Consultation
</a>
                <span className="text-sm text-white/40">
                  Remote · International clients welcome
                </span>
              </div>
              <p className="mt-4 text-xs text-white/40">
  No upfront commitment · Quick response · Clear scope
</p>
            </div>
          </section>


{/* TRUST SIGNALS */}
<section className="max-w-6xl mx-auto py-32">
  <p className="text-xs uppercase tracking-widest text-white/40 text-center">
    Why clients choose me
  </p>

  <h3 className="mt-4 text-4xl md:text-5xl font-semibold text-center">
    I don’t work like a freelancer.
    <br />
    <span className="text-white/60">
      I think like a product owner.
    </span>
  </h3>

  <div className="grid md:grid-cols-3 gap-8 mt-20">
    {[
      {
        title: "I don’t ship demos",
        highlight: "I ship systems",
        desc: "Architecture, monitoring, retries, and scaling are planned from day one — not after things break.",
      },
      {
        title: "You’ll never be guessing",
        highlight: "what’s going on",
        desc: "Clear updates, honest trade-offs, and zero AI jargon. You always know what’s shipping and why.",
      },
      {
        title: "I care about your business",
        highlight: "not just the model",
        desc: "Latency, cost, reliability, and user impact matter more than benchmarks or hype.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="glass-card rounded-3xl p-8 hover:scale-[1.02] transition"
      >
        <h4 className="text-xl font-medium">
          {item.title}
          <br />
          <span className="text-white/60">
            {item.highlight}
          </span>
        </h4>

        <p className="mt-4 text-sm text-white/60 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  <p className="text-center text-white/40 mt-14">
    I usually respond within 24 hours · Clear scope before any commitment
  </p>
</section>



          <ContactSuccess sent={sent === "true"} />



          {/* CONTACT */}
         <section id="contact" className="max-w-4xl mx-auto mt-32 mb-24 scroll-mt-[120px]">

  <h3 className="text-3xl font-semibold mb-4 text-center">
    Let’s Talk About Your Project
  </h3>

  <p className="text-white/60 text-center mb-3 max-w-xl mx-auto">
    Tell me what you’re building, where you’re stuck, or what you want to improve.
    I’ll review it personally and get back to you within 24 hours.
  </p>

  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {[
      "Exploring an idea",
      "Building an MVP",
      "Scaling an existing product",
      "Not sure yet",
    ].map((item) => (
      <span
        key={item}
        className="
          text-xs px-4 py-2 rounded-full
          bg-white/5 border border-white/10
          text-white/60
          hover:bg-white/10 transition
        "
      >
        {item}
      </span>
    ))}
  </div>

  <form
    method="post"
    action="/api/contact"
    className="glass-card rounded-[32px] p-8 space-y-6"
  >
    <div className="grid md:grid-cols-2 gap-6">
      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder:text-white/30"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder:text-white/30"
      />
    </div>

    <input
      name="company"
      placeholder="Company (optional)"
      className="w-full rounded-xl bg-white/5 border border-white/10 p-4 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder:text-white/30"
    />

    <textarea
      name="message"
      rows={5}
      required
      placeholder="What are you trying to build? Timeline, goals, challenges — anything helps."
      className="w-full rounded-xl bg-white/5 border border-white/10 p-4 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder:text-white/30"
    />

    <button
      type="submit"
      className="
        w-full rounded-full bg-white text-black py-4 font-medium
        hover:bg-indigo-50 hover:scale-[1.02]
        active:scale-[0.98] transition-all
      "
    >
      Request a Free Consultation
    </button>

    <p className="text-center text-sm text-white/40 mt-2">
      You’ll hear directly from me — not an automated reply.
    </p>
  </form>
</section>


{/* SKILLS – HOW I BUILD */}
<section id="services" className="max-w-6xl mx-auto mt-40 scroll-mt-20">
  <div className="text-center mb-16">
    <h3 className="text-4xl font-semibold tracking-tight mb-4">
      How I Build AI Products
    </h3>
    <p className="text-white/60 max-w-2xl mx-auto">
      These aren’t just tools I know — this is how I combine them
      to design, build, and ship production-ready AI systems.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10">
    {/* COLUMN 1 */}
    <div className="space-y-6">
     <h4 className="text-xl font-medium text-white/80 mb-2">
  Core AI
</h4>
<div className="h-px w-12 bg-white/10 mb-4" />


      {[
        {
          name: "Machine Learning",
          desc: "Model selection, training, evaluation, and iteration based on real data.",
        },
        {
          name: "Deep Learning",
          desc: "Neural networks for complex patterns, vision, and language tasks.",
        },
        {
          name: "NLP",
          desc: "Text understanding, LLM workflows, and automation pipelines.",
        },
      ].map((skill) => (
        <div
          key={skill.name}
          className="
            group
            glass-card
            rounded-2xl
            p-5
            transition-all
            hover:-translate-y-1
          "
        >
          <p className="font-medium text-white">
            {skill.name}
          </p>
          <p className="
            text-sm text-white/0
            group-hover:text-white/60
            mt-2 transition-all
          ">
            {skill.desc}
          </p>
        </div>
      ))}
    </div>

    {/* COLUMN 2 */}
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-white/80 mb-2">
        Systems & APIs
</h4>
<div className="h-px w-12 bg-white/10 mb-4" />

      {[
        {
          name: "FastAPI",
          desc: "High-performance APIs designed for scale and reliability.",
        },
        {
          name: "Python",
          desc: "Clean, maintainable backend logic and data pipelines.",
        },
        {
          name: "MongoDB",
          desc: "Flexible data models for fast-moving products.",
        },
      ].map((skill) => (
        <div
          key={skill.name}
          className="
            group
            glass-card
            rounded-2xl
            p-5
            transition-all
            hover:-translate-y-1
          "
        >
          <p className="font-medium text-white">
            {skill.name}
          </p>
          <p className="
            text-sm text-white/0
            group-hover:text-white/60
            mt-2 transition-all
          ">
            {skill.desc}
          </p>
        </div>
      ))}
    </div>

    {/* COLUMN 3 */}
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-white/80 mb-2">
        Frontend & Delivery
</h4>
<div className="h-px w-12 bg-white/10 mb-4" />


      {[
        {
          name: "React",
          desc: "Interactive UIs for AI-powered products and dashboards.",
        },
        {
          name: "Tailwind CSS",
          desc: "Clean, scalable design systems with speed.",
        },
        {
          name: "Computer Vision",
          desc: "Image-based intelligence integrated into real workflows.",
        },
      ].map((skill) => (
        <div
          key={skill.name}
          className="
            group
            glass-card
            rounded-2xl
            p-5
            transition-all
            hover:-translate-y-1
          "
        >
          <p className="font-medium text-white">
            {skill.name}
          </p>
          <p className="
  text-sm text-white/0
  group-hover:text-white/60
  mt-3
  transition-all duration-300 ease-out
">
            {skill.desc}
          </p>
        </div>
      ))}
    </div>
  </div>

  <p className="text-center text-white/40 text-sm mt-16">
    Tools evolve. Principles don’t. I choose what fits the problem.
  </p>
</section>



          {/* PROJECTS – CASE STUDIES */}
<section id="projects" className="max-w-6xl mx-auto mt-40 scroll-mt-18">
  {/* <section id="projects" className="max-w-6xl mx-auto py-32 grid md:grid-cols-2 gap-20 items-start scroll-mt-18"> */}

  <div className="mb-16">
    <h3 className="text-4xl font-semibold tracking-tight mb-4">
      Selected Case Studies
    </h3>
    <p className="text-white/60 max-w-2xl">
      A few examples of how I’ve built and shipped real AI systems —
      focusing on real problems, real users, and real outcomes.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">
    {/* CASE 1 */}
    <div className="glass-card rounded-[28px] p-8 transition-all hover:-translate-y-2">
      <h4 className="text-2xl font-medium mb-4">
        AI Book Generator
      </h4>

      <div className="space-y-4 text-white/65">
        <p>
          <span className="text-white font-medium">Problem:</span>{" "}
          Creating structured books manually was slow, inconsistent,
          and difficult to scale.
        </p>

        <p>
          <span className="text-white font-medium">Solution:</span>{" "}
          Built an AI-powered system that generates complete,
          structured books automatically from minimal input.
        </p>

        <p>
          <span className="text-white font-medium">Impact:</span>{" "}
          Reduced content creation time dramatically and enabled
          rapid publishing workflows.
        </p>
      </div>

      <p className="mt-6 text-sm font-mono text-indigo-400/80">
        Python · FastAPI · AI
      </p>

      <div className="mt-8">
        <a
          href="#contact"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Build something similar →
        </a>
      </div>
    </div>

    {/* CASE 2 */}
    <div className="glass-card rounded-[28px] p-8 transition-all hover:-translate-y-2">
      <h4 className="text-2xl font-medium mb-4">
        Kids Story Generator
      </h4>

      <div className="space-y-4 text-white/65">
        <p>
          <span className="text-white font-medium">Problem:</span>{" "}
          Parents and educators needed age-appropriate stories
          with engaging visuals, generated quickly.
        </p>

        <p>
          <span className="text-white font-medium">Solution:</span>{" "}
          Designed an AI system that creates age-based stories
          along with illustration prompts.
        </p>

        <p>
          <span className="text-white font-medium">Impact:</span>{" "}
          Enabled instant story generation tailored to different
          age groups and learning needs.
        </p>
      </div>

      <p className="mt-6 text-sm font-mono text-indigo-400/80">
        AI · MongoDB · API
      </p>

      <div className="mt-8">
        <a
          href="#contact"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Discuss a similar idea →
        </a>
      </div>
    </div>
  </div>

  <p className="text-center text-white/40 text-sm mt-16">
    More projects available on request — happy to share relevant examples.
  </p>
</section>







          {/* FINAL CONTACT / FOOTER */}
<section className="max-w-6xl mx-auto mt-40 mb-24">
  <div className="glass-card rounded-[36px] p-14 text-center">

    <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
      Let’s Build Something That Actually Ships
    </h3>

    <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
      If you’re exploring an idea, building an MVP, or scaling an AI-powered
      product — I’d love to hear what you’re working on.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <a
        href="#contact"
        className="
          inline-flex items-center justify-center
          rounded-full px-8 py-4
          text-sm font-medium
          bg-white text-black
          hover:bg-white/90 transition
        "
      >
        Start a Conversation
      </a>

      <span className="text-white/40 text-sm">
        or connect with me here
      </span>

      <div className="flex gap-6 text-white/70">
        <a
          href="krupeshprajapati02@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
        <a
          href="https://github.com/Krupeshprajapati"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <p className="text-sm text-white/40">
      Built with clarity, performance, and real-world impact in mind.
    </p>
  </div>
</section>


        </main>
      </PageWrapper>
    </>
  );
}


/* ✅ THIS WAS MISSING */
export default function HomeClient() {
  return (
    <Suspense fallback={null}>
      <HomeInner />
    </Suspense>
  );
}