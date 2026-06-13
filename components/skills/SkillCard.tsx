"use client";

import { motion } from "framer-motion";

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.07,
        y: -3,
        boxShadow: "0 0 22px rgba(249, 115, 22, 0.28), 0 4px 20px rgba(0,0,0,0.4)",
      }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
      className="
        group relative
        px-3 py-2.5 sm:px-4 sm:py-3
        rounded-lg border border-white/8 bg-white/4
        text-center text-xs sm:text-sm text-zinc-400
        cursor-default select-none overflow-hidden
        hover:border-orange-500/40 hover:text-white
        transition-colors duration-200
      "
    >
      {/* Top shimmer line on hover */}
      <span className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-orange-500/70 to-transparent transition-all duration-300 group-hover:w-full" />
      {/* Subtle inner glow */}
      <span className="absolute inset-0 rounded-lg bg-orange-500/0 transition-all duration-300 group-hover:bg-orange-500/5" />
      <span className="relative z-10">{skill}</span>
    </motion.div>
  );
}
