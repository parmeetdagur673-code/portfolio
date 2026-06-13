"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Archive } from "lucide-react";

const items = [
  {
    title: "StriveForge",
    type: "Main Project",
    status: "In Development",
    statusColor: "text-yellow-400",
    statusDot: "bg-yellow-400",
    description:
      "A student-focused self-improvement platform with task tracking, habit building, and discipline systems. Designed to help users stay consistent and build real momentum.",
    highlight: true,
    tag: "Upcoming",
    tagIcon: Clock,
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Coaching Platform",
    type: "Freelance Project",
    status: "Offline",
    statusColor: "text-zinc-600",
    statusDot: "bg-zinc-600",
    description:
      "A coaching website project that has been discontinued as per owner's decision. Built with a clean booking and content management flow.",
    highlight: false,
    tag: "Archived",
    tagIcon: Archive,
    tech: ["React", "Tailwind CSS"],
  },
];

export default function ProjectsExperience() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 bg-black text-white flex justify-center">
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
            <p className="ml-4 text-xs text-white/40 font-mono tracking-wider">projects &amp; experience</p>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 md:p-10">
            <p className="text-green-400 font-mono text-sm sm:text-base mb-7">
              $ experience --projects --show-tech
            </p>

            <div className="space-y-4 sm:space-y-5">
              {items.map((item, index) => {
                const TagIcon = item.tagIcon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.012, y: -2 }}
                    className={`
                      group relative p-4 sm:p-5 rounded-xl border overflow-hidden
                      transition-all duration-350 cursor-default
                      ${item.highlight
                        ? "border-orange-500/35 bg-orange-500/[0.04]"
                        : "border-white/8 bg-white/[0.03]"
                      }
                      hover:shadow-[0_8px_36px_rgba(249,115,22,0.12)]
                      hover:border-orange-500/40
                    `}
                  >
                    {/* Top accent line (highlight only) */}
                    {item.highlight && (
                      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/50 via-orange-400/30 to-transparent" />
                    )}

                    {/* Title row */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/35 font-mono">
                          <TagIcon size={9} />
                          {item.tag}
                        </span>
                      </div>
                      <span className={`flex items-center gap-1.5 text-xs font-mono ${item.statusColor}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${item.statusDot} ${item.highlight ? "animate-pulse" : ""}`} />
                        {item.status}
                      </span>
                    </div>

                    {/* Type */}
                    <p className="text-orange-400/80 text-xs mt-1 font-mono">{item.type}</p>

                    {/* Description */}
                    <p className="text-zinc-500 text-xs sm:text-sm mt-2.5 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-zinc-500 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
