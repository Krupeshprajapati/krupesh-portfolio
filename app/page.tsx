"use client";
import { useSearchParams } from "next/navigation";

import ThemeToggle from "@/components/ThemeToggle";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent");
  const contactRef = useRef<HTMLDivElement>(null);

  
useEffect(() => {
  if (sent && contactRef.current) {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [sent]);

  return (
    <PageWrapper>
      <main className="min-h-screen px-6 relative">
        {/* NAV */}
        <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto">
          <h1 className="font-semibold text-xl tracking-tight">KRUPESH</h1>
          <ThemeToggle />
        </nav>

        {/* HERO */}
        <section className="max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              KRUPESH D. <br />
              <span className="text-white/80">PRAJAPATI</span>
            </h2>

            <p className="mt-6 text-lg text-white/70">
              AI Engineer helping startups turn ideas into production-ready AI products
            </p>

            <p className="mt-4 text-white/50 max-w-md">
              Focused on real-world AI systems — not just experiments or notebooks.
            </p>

            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              I design and build intelligent AI systems with a strong focus on
              clarity, performance, and real-world impact.
            </p>

            <span
  className="
    inline-block mt-6
    text-xs px-3 py-1 rounded-full
    bg-green-500/10 text-green-400
    border border-green-500/20
    hover:bg-green-500/20
    transition
  "
>
  Available for new projects · Remote · Worldwide
</span>


            <div className="flex gap-4 mt-10">
  <a
    href="#contact"
    className="
      inline-flex items-center
      rounded-full px-7 py-3 text-sm font-medium
      bg-white text-black
      hover:bg-white/90 transition
    "
  >
    Contact Me
  </a>

  {/* <a
    href="/Krupesh_Prajapati_Resume.pdf"
    download
    className="
      inline-flex items-center
      rounded-full px-7 py-3 text-sm font-medium
      border border-white/20
      bg-white/5
      hover:bg-white hover:text-black
      transition
    "
  >
    Download Resume
  </a> */}
</div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-14
              text-center
              hover:-translate-y-2
              transition-all duration-500
              shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]
            "
          >
            <p className="text-white/70 tracking-wide">
              AI Visual / Illustration 🤖
            </p>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto mt-40">
          <h3 className="text-4xl font-semibold tracking-tight mb-6">
            About Me
          </h3>
          <p className="max-w-3xl text-white/70 leading-relaxed text-lg">
            I’m an AI/ML Developer passionate about building intelligent,
            data-driven applications. I enjoy solving real-world problems
            involving automation, prediction, and smart systems using modern
            tools and frameworks.
          </p>
        </section>


        {/* SERVICES */}
<section className="max-w-6xl mx-auto mt-32">
  <h3 className="text-3xl font-semibold mb-6">
    Services I Offer
  </h3>

  <p className="max-w-2xl text-white/60 mb-12">
    I work with startups and businesses to design, build, and deploy
    AI-powered systems that solve real-world problems.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "Custom AI / ML Solutions",
        desc: "Design and development of tailored machine learning models based on your business needs.",
      },
      {
        title: "AI APIs & Backend Systems",
        desc: "Production-ready AI APIs using FastAPI, optimized for performance and scalability.",
      },
      {
        title: "NLP & Computer Vision",
        desc: "Text analysis, sentiment detection, document processing, image classification, and vision models.",
      },
      {
        title: "AI Product Prototyping",
        desc: "Rapid prototyping of AI ideas to validate concepts before full-scale development.",
      },
    ].map((service) => (
      <div
        key={service.title}
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-8
          transition-all
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)]
        "
      >
        <h4 className="text-xl font-medium mb-3">
          {service.title}
        </h4>
        <p className="text-white/60 leading-relaxed">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>


        {/* CTA / AVAILABILITY */}
<section className="max-w-6xl mx-auto mt-32">
  <div
    className="
      rounded-[32px]
      border border-white/10
      bg-white/[0.05]
      backdrop-blur-xl
      p-12
      text-center
      shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)]
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
          hover:bg-white/90
          transition
        "
      >
        Request a Free Consultation
      </a>

      <span className="text-sm text-white/40">
        Remote · International clients welcome
      </span>
    </div>
  </div>
</section>

        {/* TRUST SIGNALS */}
<section className="max-w-6xl mx-auto mt-32">
  <h3 className="text-3xl font-semibold mb-10 text-center">
    Why Work With Me
  </h3>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "Production-Ready Code",
        desc: "I focus on clean, scalable, and maintainable code that works in real production environments.",
      },
      {
        title: "Clear Communication",
        desc: "Regular updates, clear explanations, and honest timelines — no surprises.",
      },
      {
        title: "Business-Focused AI",
        desc: "I build AI systems to solve real business problems, not just research experiments.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-8
          text-center
        "
      >
        <h4 className="text-xl font-medium mb-3">
          {item.title}
        </h4>
        <p className="text-white/60 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  <p className="text-center text-white/40 mt-10">
    Open to remote freelance and contract work with international clients.
  </p>
</section>

        


        {sent && (
  <div
    className="
      max-w-4xl mx-auto mb-12
      rounded-2xl
      border border-green-500/20
      bg-green-500/10
      p-6 text-center text-green-300
    "
  >
    ✅ Thank you! Your message has been sent.
    <br />
    I’ll get back to you within 24 hours.
  </div>
)}


        {/* CONTACT */}
        <div ref={contactRef}>
<section id="contact" className="max-w-4xl mx-auto mt-32 mb-24 scroll-mt-[120px]">

  <h3 className="text-3xl font-semibold mb-4 text-center">
    Contact Me
  </h3>

  <p className="text-white/60 text-center mb-12">
    Tell me about your project and I’ll get back to you within 24 hours.
  </p>

  <form
    method="post"
    action="/api/contact"
    className="
      rounded-[32px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      p-10
      space-y-6
    "
  >
    <div className="grid md:grid-cols-2 gap-6">
      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-xl bg-black/30 border border-white/10 p-4 focus:outline-none"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-xl bg-black/30 border border-white/10 p-4 focus:outline-none"
      />
    </div>

    <input
      name="company"
      placeholder="Company (optional)"
      className="w-full rounded-xl bg-black/30 border border-white/10 p-4 focus:outline-none"
    />

    <textarea
      name="message"
      rows={5}
      required
      placeholder="Briefly describe your project or idea"
      className="w-full rounded-xl bg-black/30 border border-white/10 p-4 focus:outline-none"
    />

    <button
      type="submit"
      className="
        w-full
        rounded-full
        bg-white text-black
        py-4
        font-medium
        hover:bg-white/90
        transition
      "
    >
      Request a Free Consultation
    </button>
  </form>
</section>
</div>


        {/* SKILLS */}
        <section className="max-w-6xl mx-auto mt-40">
          <h3 className="text-4xl font-semibold tracking-tight mb-12">
            Skills
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  px-8 py-6
                  text-white/80
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)]
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="max-w-6xl mx-auto mt-40">
          <h3 className="text-4xl font-semibold tracking-tight mb-12">
            Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
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
                className="
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)]
                "
              >
                <h4 className="text-2xl font-medium mb-3">
                  {p.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {p.desc}
                </p>
                <p className="mt-5 text-sm text-white/40">
                  {p.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-6xl mx-auto mt-40 mb-24">
          <h3 className="text-4xl font-semibold tracking-tight mb-6">
            Contact
          </h3>
          <p className="text-white/60 mb-6">
            Let’s build something intelligent together.
          </p>

          <div className="flex gap-8 text-white/70">
            <a className="hover:text-white transition" href="#">
              Email
            </a>
            <a className="hover:text-white transition" href="#">
              GitHub
            </a>
            <a className="hover:text-white transition" href="#">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
