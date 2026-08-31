"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      <TypedDialogue key={`${text}-${speed}`} text={text} speed={speed} onComplete={onComplete} />
    </motion.div>
  );
}

function TypedDialogue({ text, speed, onComplete }: Pick<DialogueBoxProps, "text" | "speed" | "onComplete">) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(text.length === 0);

  useEffect(() => {
    if (!text) {
      const completion = window.setTimeout(() => onComplete?.(), 0);
      return () => window.clearTimeout(completion);
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        setIsComplete(true);
        onComplete?.();
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <>
      <p className="text-game-white text-sm leading-relaxed font-light mt-1">
        {displayedText}
        {!isComplete && <span className="inline-block w-2 h-4 bg-game-accent ml-1 animate-pulse" />}
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
    </>
  );
}
