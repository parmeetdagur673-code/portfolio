"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", cmd: "whoami",          output: "Parmeet | Full Stack Developer" },
  { prompt: "$", cmd: "current_project", output: "StriveForge"                    },
  { prompt: "$", cmd: "focus",           output: ["Backend Development", "System Design", "Product Building"] },
  { prompt: "$", cmd: "status",          output: "Building The Future..."         },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 480);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div
      className="
        group w-full max-w-md lg:max-w-lg
        rounded-2xl border border-zinc-800/80
        bg-zinc-950/90 backdrop-blur-2xl shadow-2xl
        transition-all duration-500
        hover:border-orange-500/30
        hover:shadow-[0_0_60px_rgba(249,115,22,0.12)]
        animate-float
      "
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-800/80 px-4 py-3.5">
        <div className="group/dot h-3 w-3 rounded-full bg-red-500 transition-all duration-200 group-hover:bg-red-400 group-hover:shadow-[0_0_6px_#ef4444]" />
        <div className="group/dot h-3 w-3 rounded-full bg-yellow-500 transition-all duration-200 group-hover:bg-yellow-400 group-hover:shadow-[0_0_6px_#eab308]" />
        <div className="group/dot h-3 w-3 rounded-full bg-green-500 transition-all duration-200 group-hover:bg-green-400 group-hover:shadow-[0_0_6px_#22c55e]" />
        <span className="ml-3 text-xs text-zinc-600 font-mono tracking-wide">portfolio.sh</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-zinc-600 font-mono">live</span>
        </div>
      </div>

      <div className="space-y-3.5 p-5 font-mono text-sm md:p-6 md:text-base min-h-[220px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="animate-slide-in-up">
            {/* Command row */}
            <div className="flex items-center gap-1.5">
              <span className="text-orange-500 select-none">{line.prompt}</span>
              <span className="text-zinc-200">{line.cmd}</span>
            </div>

            {/* Output */}
            <div className="pl-4 mt-0.5">
              {line.cmd === "status" ? (
                <span className="flex items-center gap-2 text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  {line.output as string}
                </span>
              ) : Array.isArray(line.output) ? (
                <div className="space-y-0.5 text-zinc-300">
                  {(line.output as string[]).map((o) => (
                    <p key={o}>{o}</p>
                  ))}
                </div>
              ) : (
                <span className="text-zinc-300">{line.output as string}</span>
              )}
            </div>
          </div>
        ))}

        {/* Blinking cursor when still animating */}
        {visibleLines < lines.length && (
          <div className="flex items-center gap-1.5">
            <span className="text-orange-500">$</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
