"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
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
