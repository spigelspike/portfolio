"use client";
// ============================================
// PixelButton — Reusable game-styled button
// ============================================
import { motion } from "framer-motion";

interface PixelButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "success" | "info";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function PixelButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  href,
  className = "",
}: PixelButtonProps) {
  const baseStyles =
    "pixel-font inline-flex items-center justify-center gap-3 rounded-xl transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#FF9800] text-[#111] hover:bg-[#FFB74D] border-4 border-[#111] shadow-[0_6px_0_0_#111,inset_0_4px_0_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.2)] active:translate-y-[6px]",
    secondary:
      "bg-game-panel text-game-white border-4 border-[#111] hover:bg-game-panel-light shadow-[0_6px_0_0_#111,inset_0_4px_0_0_rgba(255,255,255,0.1)] active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.4)] active:translate-y-[6px]",
    success:
      "bg-[#4CAF50] text-[#fff] hover:bg-[#81C784] border-4 border-[#111] shadow-[0_6px_0_0_#111,inset_0_4px_0_0_rgba(255,255,255,0.3)] active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.2)] active:translate-y-[6px] text-stroke-1",
    info:
      "bg-[#2196F3] text-[#fff] hover:bg-[#64B5F6] border-4 border-[#111] shadow-[0_6px_0_0_#111,inset_0_4px_0_0_rgba(255,255,255,0.3)] active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.2)] active:translate-y-[6px] text-stroke-1",
    ghost:
      "bg-transparent text-game-muted border-4 border-transparent hover:border-[#111] hover:bg-[#111] hover:text-game-white active:translate-y-[2px]",
  };

  const sizes = {
    sm: "text-[0.55rem] sm:text-[0.65rem] px-5 pt-3 pb-2",
    md: "text-[0.7rem] sm:text-[0.8rem] px-8 pt-5 pb-3 sm:px-10 sm:pt-6 sm:pb-4",
    lg: "text-[0.85rem] sm:text-[1rem] px-10 pt-6 pb-4 sm:px-12 sm:pt-7 sm:pb-5",
  };

  const Component = href ? "a" : "button";
  const linkProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
    : {};

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...linkProps}
      >
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </Component>
    </motion.div>
  );
}
