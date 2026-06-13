"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Reviews",  href: "#reviews"  },
];

export default function Navbar() {
  const [isOpen,        setIsOpen]        = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Track scroll ─────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const ids = ["home", "about", "skills", "projects", "reviews", "contact"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close on desktop resize ──────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Close on outside click ──────────── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const header = document.getElementById("main-header");
      if (header && !header.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`
        fixed top-0 z-50 w-full
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "border-b border-white/8 bg-black/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-black/30 backdrop-blur-sm"
        }
      `}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-2 font-bold text-white transition-colors duration-200 hover:text-orange-400"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]">
            <Code2 className="h-5 w-5 text-orange-500" />
          </div>
          <span className="tracking-wider text-sm sm:text-base">PARMEET</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${isActive
                    ? "text-orange-400 bg-orange-500/8"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
          className="
            hidden md:block
            rounded-xl border border-orange-500/60 px-5 py-2
            text-sm font-medium text-orange-400
            transition-all duration-300
            hover:bg-orange-500 hover:text-black hover:border-orange-500
            hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]
            active:scale-95
          "
        >
          Connect
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="
            md:hidden flex h-9 w-9 items-center justify-center
            rounded-lg border border-zinc-800 text-zinc-300
            transition-all duration-200
            hover:border-orange-500/50 hover:text-orange-400
            active:scale-90
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-350 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="border-t border-white/8 bg-black/95 backdrop-blur-2xl">
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`
                    relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? "bg-orange-500/10 text-orange-400"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-orange-500" />
                  )}
                  {item.label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="
                mt-2 rounded-xl border border-orange-500/50 px-4 py-3
                text-center text-sm font-semibold text-orange-400
                transition-all duration-300
                hover:bg-orange-500 hover:text-black
                hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]
                active:scale-95
              "
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
