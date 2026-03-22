"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [role="button"]') || window.getComputedStyle(target).cursor === "pointer") {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className="hidden lg:flex fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/50 pointer-events-none z-[9999] transition-transform duration-75 ease-out items-center justify-center mix-blend-screen"
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.5 : 1})`,
        opacity: isHidden ? 0 : 1,
      }}
    >
      <div 
        className="w-1.5 h-1.5 bg-accent rounded-full transition-all duration-200"
        style={{
          transform: `scale(${isPointer ? 0.2 : 1})`,
          opacity: isPointer ? 0.2 : 1
        }}
      />
    </div>
  );
}
