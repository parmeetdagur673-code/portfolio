import { ArrowRight, Sparkles } from "lucide-react";
import Terminal from "./Terminal";
import BackgroundGlow from "./BackgroundGlow";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex min-h-[100svh] items-center
        overflow-hidden px-4 pt-24 pb-12
        sm:px-6 lg:px-8
      "
    >
      <BackgroundGlow />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* ── Left: Copy ─────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* Status badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/8 px-4 py-1.5 text-xs text-orange-400 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/12 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono tracking-wide">Full Stack Developer</span>
            <Sparkles size={11} className="text-orange-300" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            BUILDING
            <br />
            PRODUCTS,
            <br />
            <span className="shimmer-text">NOT JUST PROJECTS.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
            I build scalable web applications, clean architectures, and
            products that solve{" "}
            <span className="text-zinc-200 font-medium">real-world problems.</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="
                group flex items-center gap-2
                rounded-xl bg-orange-500 px-5 py-2.5
                text-sm font-semibold text-black
                transition-all duration-300
                hover:bg-orange-400 hover:scale-[1.04]
                hover:shadow-[0_0_24px_rgba(249,115,22,0.45)]
                active:scale-95
                sm:px-6 sm:py-3 sm:text-base
              "
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="
                rounded-xl border border-zinc-700 px-5 py-2.5
                text-sm font-semibold text-white
                transition-all duration-300
                hover:border-orange-500 hover:text-orange-400
                hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]
                active:scale-95
                sm:px-6 sm:py-3 sm:text-base
              "
            >
              Contact Me
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">
              Open to opportunities
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
        </div>

        {/* ── Right: Terminal ─────────────────────────── */}
        <div className="flex items-center justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
