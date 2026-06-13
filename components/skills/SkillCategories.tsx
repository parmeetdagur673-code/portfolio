"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

interface Props {
  skills: Record<string, string[]>;
}

const categoryIcons: Record<string, string> = {
  Frontend: "⬡",
  Backend:  "⬡",
  Database: "⬡",
  Tools:    "⬡",
};

export default function SkillCategories({ skills }: Props) {
  return (
    <div className="space-y-7 sm:space-y-9">
      {Object.entries(skills).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Category label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-orange-500/50 text-xs font-mono select-none">{"//  "}</span>
            <span className="text-orange-400 font-mono text-sm tracking-wide">{category}</span>
            <span className="text-zinc-800 font-mono text-xs ml-1">
              [{items.length}]
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent ml-1" />
          </div>

          {/* Skill grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {items.map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show:   { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
