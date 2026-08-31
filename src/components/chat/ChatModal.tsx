"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Send, X, MessageSquare, Minus, Smile } from "lucide-react";
import styles from "./ChatModal.module.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuickQuestion {
  icon: string;
  text: string;
  color?: string;
}

const QUICK_QUESTIONS: QuickQuestion[] = [
  { icon: "💻", text: "What projects has Shareef built?", color: "#00F5D4" },
  { icon: "🥞", text: "What is Shareef's tech stack?", color: "#A78BFA" },
  { icon: "⭐", text: "Tell me about Kallanum Policeum", color: "#FFD700" },
  { icon: "📖", text: "Tell me about Book2Vision", color: "#F472B6" },
  { icon: "💼", text: "Is Shareef available for hiring?", color: "#FB923C" },
  { icon: "🚀", text: "How can I contact him?", color: "#38BDF8" },
];

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen]);

  // Handle ESC key to close and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleResetChat = () => {
    setMessages([]);
    setInput("");
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: data.reply,
          },
        ]);
      } else {
        throw new Error(data.error || "Failed to get reply");
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content:
            "⚠️ I had trouble connecting to the server. You can also reach Shareef directly at **mhdshareefch@gmail.com**!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.statusDot} aria-hidden="true" />
            <MessageSquare size={16} className={styles.chatIcon} />
            <span className={styles.titleText}>
              ASK SHAREEF AI <span className={styles.titleSparkle}>✦</span>
            </span>
          </div>
          <div className={styles.headerActions}>
            <button
              className={styles.headerBtn}
              onClick={handleResetChat}
              title="Reset conversation"
              aria-label="Reset conversation"
            >
              <Minus size={14} />
            </button>
            <button
              className={`${styles.headerBtn} ${styles.closeButton}`}
              onClick={onClose}
              aria-label="Close chat"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Character Bio Header Card */}
        <div className={styles.bioCard}>
          {/* Decorative cyber grid in corner */}
          <div className={styles.cyberGridDecor} aria-hidden="true">
            <span /><span /><span /><span />
            <span /><span /><span /><span />
            <span /><span /><span /><span />
          </div>

          {/* Left Avatar Column */}
          <div className={styles.bioAvatarCol}>
            <Image
              src="/assets/rag_assets/head.webp"
              alt="MHD Shareef AI Portrait"
              width={58}
              height={58}
              className={styles.bioAvatarImage}
              priority
            />
          </div>

          {/* Right Info Column */}
          <div className={styles.bioContentCol}>
            <div className={styles.bioNameRow}>
              <span className={styles.bioName}>MHD SHAREEF (AI)</span>
              <span className={styles.verifiedBadge} title="Verified Official Companion">✓</span>
            </div>

            <div className={styles.bioTitle}>
              Software Engineer & AI Builder
            </div>

            <div className={styles.bioTagsRow}>
              <span className={styles.tagItem}>⚡ Problem Solver</span>
              <span className={styles.tagDivider}>|</span>
              <span className={styles.tagItem}>🤖 AI Enthusiast</span>
              <span className={styles.tagDivider}>|</span>
              <span className={styles.tagItem}>&lt;/&gt; Code. Build. Innovate.</span>
            </div>

            <div className={styles.geminiBadge}>
              <span className={styles.geminiBadgeSparkle}>✦</span>
              <span>POWERED BY GEMINI</span>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className={styles.chatBody}>
          <div className={styles.messageList}>
            {/* Show Welcome Card when no messages are sent yet */}
            {messages.length === 0 && (
              <div className={styles.welcomeCard}>
                <div className={styles.welcomeTextCol}>
                  <div className={styles.welcomeHeader}>
                    <span>👋</span> Hey there! <span>✦</span>
                  </div>
                  <div className={styles.welcomeSub1}>
                    I&apos;m <strong>Mohamed Shereef&apos;s</strong> AI companion.
                  </div>
                  <div className={styles.welcomeDivider} />
                  <div className={styles.welcomeSub2}>
                    Ask me anything about his projects, tech stack, AI research, or how to get in touch with him!
                  </div>
                </div>

                {/* Pixel Robot / Smiley Face */}
                <div className={styles.pixelBotFace} aria-hidden="true">
                  <div className={styles.pixelBotEyes}>
                    <span>■</span>
                    <span>■</span>
                  </div>
                  <div className={styles.pixelBotMouth} />
                </div>
              </div>
            )}

            {/* Conversation Messages */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.role === "user" ? styles.userMessage : styles.botMessage}
              >
                <FormattedContent content={m.content} />
              </div>
            ))}

            {isLoading && (
              <div className={styles.botMessage}>
                <span className={styles.loadingDots}>
                  Thinking<span>.</span><span>.</span><span>.</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (2-Column Grid matching reference) */}
          <div className={styles.quickPromptsGrid}>
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q.text}
                type="button"
                className={styles.quickQuestionCard}
                onClick={() => handleSend(q.text)}
                disabled={isLoading}
              >
                <span className={styles.questionIcon}>{q.icon}</span>
                <span>{q.text}</span>
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            className={styles.inputArea}
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <div className={styles.inputWrapper}>
              <input
                ref={inputRef}
                type="text"
                className={styles.inputField}
                placeholder="Ask about projects, stack, experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Smile size={18} className={styles.inputSmileyIcon} />
            </div>
            <button
              type="submit"
              className={styles.sendBtn}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={13} />
              <span>SEND</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Markdown parser for bolding, links, code, and lists
function FormattedContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <>
      {lines.map((line, idx) => {
        if (!line.trim()) return <br key={idx} />;

        const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
        const textContent = isBullet ? line.trim().substring(2) : line;

        // Parse markdown formatting
        const parsed = parseMarkdownSpans(textContent);

        if (isBullet) {
          return (
            <div key={idx} className="flex items-start gap-1.5 my-0.5">
              <span className="text-[#00F5D4] font-bold shrink-0">›</span>
              <span className="flex-1">{parsed}</span>
            </div>
          );
        }

        return (
          <p key={idx} className="my-0.5">
            {parsed}
          </p>
        );
      })}
    </>
  );
}

function parseMarkdownSpans(text: string) {
  // Regex to split by markdown links [text](url), bold **text**, and code `text`
  const regex = /(\[.*?\]\(https?:\/\/.*?\)|\*\*.*?\*\*|`.*?`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link [text](url)
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/^\[(.*?)\]\((https?:\/\/.*?)\)$/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00F5D4] underline font-medium hover:text-[#FFD700] transition-colors"
          >
            {match[1]}
          </a>
        );
      }
    }

    // Bold **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="text-[#00F5D4] font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Inline code `text`
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={index}
          className="bg-black/60 px-1 py-0.5 rounded text-[#00F5D4] text-xs font-mono border border-white/10"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}
