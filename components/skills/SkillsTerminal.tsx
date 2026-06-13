"use client";

import { motion } from "framer-motion";
import TypingCommand from "./TypingCommand";
import SkillCategories from "./SkillCategories";

interface Props {
  skills: Record<string, string[]>;
}

export default function SkillsTerminal({ skills }: Props) {
  const totalSkills = Object.values(skills).flat().length;

  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-black text-white">
      <div className="w-full flex justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="
            w-full max-w-5xl rounded-2xl
            border border-white/8
            bg-zinc-950/70 backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            overflow-hidden
            transition-all duration-500
            hover:border-white/12
            hover:shadow-[0_20px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(249,115,22,0.06)]
          "
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_4px_#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_4px_#eab308]" />
            <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_4px_#22c55e]" />
            <p className="ml-4 text-xs text-white/40 font-mono tracking-wider">skills-terminal</p>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[10px] text-zinc-700 font-mono">{totalSkills} skills loaded</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 md:p-10">
            <TypingCommand />

            <p className="text-zinc-700 text-xs sm:text-sm mt-2 mb-8 font-mono">
              <span className="text-zinc-600">{"// "}</span>
              Categorized technical stack used in real-world systems
            </p>

            <SkillCategories skills={skills} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
