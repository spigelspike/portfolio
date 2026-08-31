"use client";
// ============================================
// AboutSection — Character introduction
// ============================================
import { useRef } from "react";
import { PERSONAL, SECTIONS } from "@/lib/constants";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id={SECTIONS.about}
      ref={sectionRef}
      className="game-panel w-full flex flex-col relative group hover:border-game-accent transition-all duration-300 overflow-hidden min-h-[400px] sm:min-h-[450px]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/assets/aboutme.mp4" 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
        />
      </div>

      {/* Half Vignette Gradient Overlay (Dark at bottom, transparent at top) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0912] via-[#0a0912]/80 to-transparent pointer-events-none" />

      {/* Decorative top gradient (Game panel standard) */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-game-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

      {/* Content Container (Pushed to bottom) */}
      <div className="relative z-10 p-4 sm:p-6 flex-1 flex flex-col justify-end items-center text-center">
        
        {/* Card Header */}
        <div className="mb-4">
          <h2 className="pixel-font text-xl sm:text-2xl tracking-[4px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-game-accent to-game-orange drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            ABOUT ME
          </h2>
        </div>

        {/* Text */}
        <p className="pixel-font text-game-white text-[0.55rem] sm:text-[0.65rem] leading-[2] mb-6 max-w-4xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          {PERSONAL.summary}
        </p>


      </div>
    </section>
  );
}
