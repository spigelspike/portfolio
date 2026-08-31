"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CharacterSprite, { CharacterEmotion } from "./CharacterSprite";
import ChatModal from "./ChatModal";
import styles from "./RagCompanion.module.css";

// Sequential emotion step cycle: pointing -> idle -> blink -> look -> smile -> loop
const EMOTION_STEPS: { emotion: CharacterEmotion; durationMs: number }[] = [
  { emotion: "point", durationMs: 1400 },
  { emotion: "idle", durationMs: 1200 },
  { emotion: "blink", durationMs: 400 },
  { emotion: "look", durationMs: 1100 },
  { emotion: "smile", durationMs: 1300 },
];


export default function RagCompanion() {
  const [currentEmotion, setCurrentEmotion] = useState<CharacterEmotion>("point");
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const stepIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation cycle loop: point -> idle -> blink -> look -> smile -> loop
  useEffect(() => {
    if (isChatOpen) return;

    const runStep = () => {
      const step = EMOTION_STEPS[stepIndexRef.current];
      if (!isHovered) {
        setCurrentEmotion(step.emotion);

        // If cycling back to pointing and bubble wasn't manually dismissed, show bubble
        if (step.emotion === "point" && !bubbleDismissed) {
          setShowSpeechBubble(true);
        }
      }

      timeoutRef.current = setTimeout(() => {
        stepIndexRef.current = (stepIndexRef.current + 1) % EMOTION_STEPS.length;
        runStep();
      }, step.durationMs);
    };

    runStep();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isChatOpen, isHovered, bubbleDismissed]);

  // Initial speech bubble display (fades out after 8.5 seconds on initial load if not clicked)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!bubbleDismissed && !isChatOpen) {
        setShowSpeechBubble(false);
      }
    }, 8500);

    return () => clearTimeout(timer);
  }, [bubbleDismissed, isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setShowSpeechBubble(false);
    setBubbleDismissed(true);
    setCurrentEmotion("smile");
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setCurrentEmotion("idle");
  };

  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSpeechBubble(false);
    setBubbleDismissed(true);
  };

  return (
    <>
      {/* Floating NPC Companion Widget */}
      <aside aria-label="Ask Shareef AI Assistant" className={styles.companionContainer}>
        {/* Retro Pixel Speech Bubble Pop-up Matching Reference Design */}
        <AnimatePresence>
          {showSpeechBubble && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={handleOpenChat}
              className={styles.speechPopup}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleOpenChat();
              }}
            >
              {/* Dismiss Button */}
              <button
                type="button"
                onClick={handleDismissBubble}
                className={styles.closeBtn}
                aria-label="Dismiss speech bubble"
              >
                ✕
              </button>

              {/* Top Question Mark Badge */}
              <div className={styles.questionBadge} aria-hidden="true">
                ?
              </div>

              {/* Main Headline */}
              <div className={styles.headline}>
                Hey! 👋<br />
                Ask me <span className={styles.highlightText}>anything</span><br />
                about myself!
              </div>

              {/* Subtitle Description */}
              <p className={styles.subtext}>
                I&apos;m here to help you know more about me and my work.
              </p>

              {/* Pointer Notch pointing towards character */}
              <div className={styles.pointerNotch} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character Sprite Button with Visual Ambient Effects */}
        <motion.button
          type="button"
          onClick={handleOpenChat}
          onMouseEnter={() => {
            setIsHovered(true);
            if (!isChatOpen) setCurrentEmotion("smile");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            if (!isChatOpen) {
              setCurrentEmotion(EMOTION_STEPS[stepIndexRef.current].emotion);
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className={styles.charButton}
          aria-label="Open Ask Shareef AI Chatbot"
        >
          {/* Atmospheric Glowing Aura Layer behind character */}
          <div className={styles.characterAura} aria-hidden="true" />

          {/* Ground Contact Floor Shadow & Neon Pedestal Ring */}
          <div className={styles.groundShadow} aria-hidden="true" />
          <div className={styles.groundRim} aria-hidden="true" />

          {/* Ambient Cyber / Magic Sparkles */}
          <span className={`${styles.sparkle} ${styles.sparkle1}`} aria-hidden="true">✦</span>
          <span className={`${styles.sparkle} ${styles.sparkle2}`} aria-hidden="true">✦</span>
          <span className={`${styles.sparkle} ${styles.sparkle3}`} aria-hidden="true">✦</span>

          {/* Sprite Rendering (Static position, crisp contrast) */}
          <div className={styles.spriteWrapper}>
            <CharacterSprite
              emotion={isHovered ? "smile" : currentEmotion}
              size={112}
              priority
            />
          </div>
        </motion.button>
      </aside>

      {/* Chat Dialogue Modal */}
      <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  );
}
