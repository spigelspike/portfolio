"use client";
// ============================================
// DialogueBox — RPG-style text box
// ============================================
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DialogueBoxProps {
  text: string;
  speaker?: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function DialogueBox({
  text,
  speaker,
  speed = 30,
  className = "",
  onComplete,
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        onComplete?.();
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <motion.div
      className={`game-panel p-4 sm:p-5 max-w-lg relative ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {speaker && (
        <div className="absolute -top-3 left-4">
          <span className="game-panel-header text-[0.5rem]">{speaker}</span>
        </div>
      )}
      <p className="text-game-white text-sm leading-relaxed font-light mt-1">
        {displayedText}
        {!isComplete && (
          <span className="inline-block w-2 h-4 bg-game-accent ml-1 animate-pulse" />
        )}
      </p>
      {isComplete && (
        <motion.span
          className="absolute bottom-2 right-3 text-game-accent text-xs"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ▼
        </motion.span>
      )}
    </motion.div>
  );
}
