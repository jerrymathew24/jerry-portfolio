"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl pointer-events-none" />
      <div className="relative flex justify-center mt-4 md:mt-6 px-4 pb-3">
        <div className="card px-6 py-3 rounded-full flex items-center justify-between gap-4 md:gap-8 w-full max-w-3xl">
          <span className="md:hidden font-bold tracking-widest text-white text-sm">&lt;JM /&gt;</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-foreground/50 hover:text-accent transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1 text-foreground/70 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 card rounded-2xl p-6 flex flex-col gap-5 md:hidden items-center shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground/60 hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
