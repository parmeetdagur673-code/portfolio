"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    text: "Parmeet has a strong product mindset. His StriveForge concept shows real understanding of user discipline systems.",
    initial: "AS",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    text: "Clean execution and attention to detail. The way he structures systems is very production-oriented.",
    initial: "NV",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    name: "Rohit Mehta",
    role: "Full Stack Developer",
    text: "Solid backend thinking and very structured approach. His projects feel like real SaaS products.",
    initial: "RM",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "Karan Singh",
    role: "Tech Lead",
    text: "Good grasp on system design fundamentals for his level. StriveForge is a strong idea with real potential.",
    initial: "KS",
    accent: "from-green-500/20 to-transparent",
  },
  {
    name: "Ananya Gupta",
    role: "Product Analyst",
    text: "Impressive clarity in product thinking. He focuses more on solving problems than just building UI.",
    initial: "AG",
    accent: "from-yellow-500/20 to-transparent",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-20 md:py-28 bg-black text-white flex justify-center">
      <div className="w-full max-w-5xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="
            rounded-2xl border border-white/8
            bg-zinc-950/70 backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_4px_#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_4px_#eab308]" />
            <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_4px_#22c55e]" />
            <p className="ml-4 text-xs text-white/40 font-mono tracking-wider">testimonials.log</p>
            <div className="ml-auto text-[10px] text-zinc-700 font-mono">{reviews.length} entries</div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 md:p-10">
            <p className="text-green-400 font-mono text-sm sm:text-base mb-7">
              $ reviews --load --all
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {reviews.map((r, index) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`
                    group relative
                    p-4 sm:p-5 rounded-xl border border-white/8 bg-white/[0.03]
                    overflow-hidden
                    transition-all duration-300 cursor-default
                    hover:border-orange-500/35
                    hover:shadow-[0_8px_32px_rgba(249,115,22,0.1)]
                    ${reviews.length % 2 !== 0 && index === reviews.length - 1
                      ? "sm:col-span-2 sm:max-w-sm sm:mx-auto"
                      : ""
                    }
                  `}
                >
                  {/* Diagonal accent on hover */}
                  <div className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${r.accent} opacity-0 transition-opacity duration-400 blur-xl group-hover:opacity-100`} />

                  {/* Quote icon */}
                  <Quote size={14} className="text-orange-500/30 mb-3" />

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-300">
                    {r.text}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    {/* Avatar initials */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] font-bold text-orange-400 border border-orange-500/20 transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/20">
                      {r.initial}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs sm:text-sm leading-tight">{r.name}</p>
                      <p className="text-zinc-600 text-[10px] sm:text-xs mt-0.5">{r.role}</p>
                    </div>

                    {/* Star rating */}
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-orange-500/60 text-[10px]">★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
