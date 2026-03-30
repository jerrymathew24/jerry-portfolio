"use client";

import { useState } from "react";
import Image from "next/image";

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
      <div className="relative flex justify-center mt-4 md:mt-6 px-4 pb-3 z-50">
        <div className="card px-6 py-3 rounded-full flex items-center justify-between gap-4 md:gap-8 w-full max-w-3xl">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Jerry Mathew Logo" 
              width={32} 
              height={32} 
              className="rounded-lg shadow-lg border border-accent/20"
            />
          </div>

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

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-4 right-4 z-50 md:hidden transition-all duration-300 transform ${
          isOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="card rounded-2xl p-8 flex flex-col gap-6 items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/70 hover:text-accent transition-colors w-full text-center py-2"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            className="mt-4 w-full py-4 rounded-xl bg-accent/10 border border-accent/20 text-accent font-semibold hover:bg-accent/20 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
