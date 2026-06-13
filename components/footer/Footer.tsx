"use client";

import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center text-center gap-5">

          {/* Logo + tagline */}
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-white/80 tracking-widest font-mono">PARMEET</span>
          </div>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-xs leading-relaxed">
            Building systems that help people —{" "}
            <span className="text-zinc-500">always disciplined, consistent, and future-ready.</span>
          </p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

          {/* Bottom row */}
          <div className="flex items-center justify-between w-full max-w-sm">
            <p className="text-zinc-700 text-xs">
              Designed &amp; Developed by{" "}
              <span className="text-orange-500/80 hover:text-orange-400 transition-colors cursor-default">
                Parmeet Dagur
              </span>
            </p>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg border border-zinc-800
                text-zinc-600
                transition-all duration-300
                hover:border-orange-500/40 hover:text-orange-400
                hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]
                hover:-translate-y-0.5
                active:scale-90
              "
            >
              <ArrowUp size={13} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
