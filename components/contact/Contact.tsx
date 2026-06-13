"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub, FiLinkedin, FiInstagram,
  FiMail, FiPhone, FiCopy, FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { useState } from "react";

const contacts = [
  {
    name: "GitHub",
    value: "github.com/parmeet",
    icon: FiGithub,
    link: "https://github.com/",
    copy: false,
    color: "hover:border-zinc-500/50 hover:shadow-zinc-500/10",
    iconColor: "text-zinc-300",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/parmeet",
    icon: FiLinkedin,
    link: "https://linkedin.com/",
    copy: false,
    color: "hover:border-blue-500/40 hover:shadow-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Instagram",
    value: "@parmeet",
    icon: FiInstagram,
    link: "https://instagram.com/",
    copy: false,
    color: "hover:border-pink-500/40 hover:shadow-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    name: "Email",
    value: "parmeetdagur673@gmail.com",
    icon: FiMail,
    link: "mailto:parmeetdagur673@gmail.com",
    copy: true,
    color: "hover:border-orange-500/40 hover:shadow-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    name: "Phone",
    value: "+91 78508 81103",
    copyValue: "7850881103",
    icon: FiPhone,
    link: "tel:+917850881103",
    copy: true,
    color: "hover:border-green-500/40 hover:shadow-green-500/10",
    iconColor: "text-green-400",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* Clipboard API blocked */ }
  };

  const handleClick = (c: (typeof contacts)[number]) => {
    if (c.copy) {
      handleCopy((c as { copyValue?: string }).copyValue ?? c.value, c.name);
    } else {
      window.open(c.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-black text-white flex justify-center">
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
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_4px_#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_4px_#eab308]" />
              <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_4px_#22c55e]" />
              <p className="ml-4 text-xs text-white/40 font-mono tracking-wider">contact.sh</p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-green-500/30 text-green-400 bg-green-500/8">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 md:p-10">
            <p className="text-green-400 font-mono text-sm sm:text-base mb-2">
              $ connect --open
            </p>

            {/* Toast */}
            <div className="h-7 mb-4">
              <AnimatePresence>
                {copied && (
                  <motion.p
                    key="toast"
                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5 text-green-400 text-xs font-mono"
                  >
                    <FiCheck size={11} />
                    <span className="text-green-300">{copied}</span>
                    <span className="text-green-500">copied to clipboard</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {contacts.map((c, index) => {
                const Icon = c.icon;
                const isCopied = copied === c.name;

                return (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.025, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleClick(c)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleClick(c)}
                    aria-label={c.copy ? `Copy ${c.name}` : `Open ${c.name}`}
                    className={`
                      group relative flex items-center gap-3
                      p-3 sm:p-4 rounded-xl cursor-pointer
                      border border-white/8 bg-white/[0.03]
                      transition-all duration-300 overflow-hidden
                      hover:shadow-lg
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                      select-none
                      ${c.color}
                    `}
                  >
                    {/* Subtle bg shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 transition-all duration-300 group-hover:scale-110 ${c.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0 flex-1 relative z-10">
                      <p className="text-white text-xs sm:text-sm font-medium leading-tight">{c.name}</p>
                      <p className="text-zinc-600 text-[10px] sm:text-xs truncate mt-0.5 group-hover:text-zinc-500 transition-colors duration-300">
                        {c.value}
                      </p>
                    </div>

                    <span className="ml-auto shrink-0 text-zinc-700 group-hover:text-zinc-400 transition-colors duration-300 relative z-10">
                      {c.copy
                        ? isCopied
                          ? <FiCheck size={13} className="text-green-400" />
                          : <FiCopy size={13} />
                        : <FiArrowUpRight size={13} />
                      }
                    </span>
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
