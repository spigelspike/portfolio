"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CharacterSprite, { CharacterEmotion } from "./CharacterSprite";
import ChatModal from "./ChatModal";
import styles from "./RagCompanion.module.css";

// Resting loop emotions (cycles naturally without repeating the pointing gesture)
const IDLE_STEPS: { emotion: CharacterEmotion; durationMs: number }[] = [
  { emotion: "idle", durationMs: 1600 },
  { emotion: "blink", durationMs: 400 },
  { emotion: "look", durationMs: 1400 },
  { emotion: "smile", durationMs: 1500 },
];

export default function RagCompanion() {
  const [currentEmotion, setCurrentEmotion] = useState<CharacterEmotion>("point");
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const stepIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initial pointing sequence for 2.2s, then seamless transition into natural idle loop
  useEffect(() => {
    if (isChatOpen) return;

    // Start with initial point pose, then cycle idle emotions
    const initialPointTimer = setTimeout(() => {
      const runIdleStep = () => {
        if (!isHovered) {
          const step = IDLE_STEPS[stepIndexRef.current];
          setCurrentEmotion(step.emotion);
        }

        timeoutRef.current = setTimeout(() => {
          stepIndexRef.current = (stepIndexRef.current + 1) % IDLE_STEPS.length;
          runIdleStep();
        }, IDLE_STEPS[stepIndexRef.current].durationMs);
      };

      runIdleStep();
    }, 2200);

    return () => {
      clearTimeout(initialPointTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isChatOpen, isHovered]);

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
    setCurrentEmotion("point");
    setShowSpeechBubble(false);
    setBubbleDismissed(true);
    setIsChatOpen(true);
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
              setCurrentEmotion(IDLE_STEPS[stepIndexRef.current].emotion);
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
