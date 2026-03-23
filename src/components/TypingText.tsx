"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
}
