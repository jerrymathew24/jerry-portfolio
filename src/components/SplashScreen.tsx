"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const exitTimer = setTimeout(() => setPhase("exit"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (!isMounted || phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Logo / Initials */}
      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{
          opacity: phase === "loading" ? 1 : 0,
          transform: phase === "loading" ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.95)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-white">
          JM<span className="text-accent">.</span>
        </span>

        {/* Animated loading bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full"
            style={{
              width: phase === "loading" ? "100%" : "100%",
              transition: "width 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
              animation: "splash-bar 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>

        <p className="text-foreground/40 text-sm font-mono tracking-widest uppercase">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
