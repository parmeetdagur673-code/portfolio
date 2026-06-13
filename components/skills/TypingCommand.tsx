"use client";

import { useEffect, useRef, useState } from "react";

const FULL_TEXT = "$ skills --list --verbose";

export default function TypingCommand() {
  const [display, setDisplay] = useState("");
  const [done,    setDone]    = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current <= FULL_TEXT.length) {
        setDisplay(FULL_TEXT.slice(0, indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-green-400 font-mono text-sm sm:text-base flex items-center gap-0.5">
      {display}
      <span
        className={`
          inline-block w-[2px] h-[1.1em] bg-green-400 ml-0.5 align-middle rounded-sm
          ${done ? "animate-cursor-blink" : "opacity-100"}
        `}
      />
    </p>
  );
}
