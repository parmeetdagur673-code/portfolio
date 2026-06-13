"use client";

import { motion } from "framer-motion";
import { Boxes, Layers3, Lightbulb } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building complete applications from frontend to backend using modern technologies and best practices.",
    icon: Layers3,
    accent: "from-blue-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Designing scalable architectures, APIs, and databases that can grow with users and products.",
    icon: Boxes,
    accent: "from-orange-500/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    number: "03",
    title: "Product Thinking",
    description:
      "Focusing on solving real problems and creating products that provide long-term value.",
    icon: Lightbulb,
    accent: "from-yellow-500/10 to-transparent",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-4 sm:px-6 md:py-32 lg:px-8"
    >
      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ── Heading ──────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm text-orange-400 backdrop-blur-sm">
            <span className="font-mono text-orange-600">$</span>
            <span className="font-mono">why_hire_me</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Building Products That
            <span className="block text-orange-500 mt-1">Solve Real Problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base lg:text-lg">
            I combine development, system design, and product thinking to build
            software that is{" "}
            <span className="text-zinc-200 font-medium">scalable, maintainable,</span>{" "}
            and built for the real world.
          </p>
        </motion.div>

        {/* ── Cards ────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-zinc-800/80 bg-zinc-900/40
                  p-6 sm:p-8 backdrop-blur-sm cursor-default
                  transition-all duration-400
                  hover:border-orange-500/30
                  hover:shadow-[0_8px_40px_rgba(249,115,22,0.1)]
                "
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-400 group-hover:opacity-100`} />

                {/* Corner accent line */}
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-orange-500/60 to-transparent transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg} transition-all duration-300 group-hover:scale-110`}>
                      <Icon size={22} className={`${card.iconColor} transition-colors duration-300`} />
                    </div>
                    <span className="font-mono text-3xl font-bold text-zinc-800 transition-colors duration-300 group-hover:text-zinc-700 sm:text-4xl select-none">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-white sm:mt-7 sm:text-lg">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
