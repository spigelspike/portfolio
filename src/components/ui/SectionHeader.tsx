"use client";
// ============================================
// SectionHeader — Arcade-style section title
// ============================================
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="inline-block">
        <h2 className="game-panel-header text-[0.7rem] sm:text-[0.8rem] tracking-[3px]">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-game-muted text-sm mt-3 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
