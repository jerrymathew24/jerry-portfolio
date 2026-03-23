"use client";

import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ParticlesWrapper />;
}

function ParticlesWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      const { tsParticles } = await import("@tsparticles/engine");
      const { loadSlim } = await import("@tsparticles/slim");
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00f0ff" },
            links: {
              color: "#00f0ff",
              distance: 160,
              enable: true,
              opacity: 0.04,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              outModes: { default: "out" },
            },
            number: {
              density: { enable: true },
              value: 30,
            },
            opacity: {
              value: { min: 0.05, max: 0.2 },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 1.5 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 120,
                links: { opacity: 0.15 },
              },
            },
          },
          detectRetina: true,
        },
      });
      setReady(true);
    }

    init();
  }, []);

  return (
    <div
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1.5s ease-in" }}
    />
  );
}
