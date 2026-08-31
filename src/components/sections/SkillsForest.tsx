"use client";
// ============================================
// SkillsForest — Interactive skills display
// ============================================
import { useRef } from "react";
import Image from "next/image";
import PixelButton from "@/components/ui/PixelButton";
import { SECTIONS } from "@/lib/constants";

// The custom logos added by the user in public/assets/logo
const LOGOS = [
  // Original Custom Logos
  { name: "Python", src: "/assets/logo/python-logo.webp" },
  { name: "JavaScript", src: "/assets/logo/JS.webp" },
  { name: "HTML", src: "/assets/logo/HTML.webp" },
  { name: "CSS", src: "/assets/logo/CSS.webp" },
  { name: "Java", src: "/assets/logo/JAVA.webp" },
  { name: "C", src: "/assets/logo/C.webp" },
  
  // Newly Added Tech Stack (Using Devicon CDN)
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
];

// Duplicate the array so we can scroll it seamlessly
const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function SkillsForest() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id={SECTIONS.skills}
      ref={sectionRef}
      className="game-panel w-full h-full flex flex-col relative group hover:border-game-accent transition-all duration-300"
    >
      {/* Background Image with Dark Overlay - clipped to panel shape */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[5px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/assets/LOG0_BG.jpeg')" }}
        />
        <div className="absolute inset-0 z-0 bg-[#0a0912]/80" />

        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-game-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      </div>

      {/* Sleeping mascot perched on the panel top border */}
      <Image
        src="/assets/sleepy_cat.webp"
        alt=""
        width={2048}
        height={860}
        sizes="(max-width: 640px) 130px, (max-width: 1024px) 190px, 260px"
        className="absolute top-0 -translate-y-[76%] right-3 sm:right-6 lg:right-10 z-30 w-32 sm:w-44 md:w-52 lg:w-64 h-auto pixel-render pointer-events-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]"
      />

      {/* Card Header */}
      <div className="text-center z-20 relative mb-6 pt-6">
        <h2 className="pixel-font text-xl sm:text-2xl tracking-[4px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-game-accent to-game-orange drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          SKILLS
        </h2>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center relative">
        {/* Shadow overlays for smooth fade at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#161623] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#161623] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="w-full overflow-hidden flex items-center py-6">
          <div className="flex gap-20 sm:gap-32 pr-20 sm:pr-32 w-max animate-marquee-x">
            {marqueeLogos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={logo.src} 
                  alt={logo.name} 
                  width={80}
                  height={80}
                  sizes="(max-width: 640px) 64px, 80px"
                  className={`max-w-full max-h-full object-contain drop-shadow-lg ${logo.invert ? 'invert brightness-0 invert-[1]' : ''}`} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto flex justify-center border-t border-game-border/30 pt-4 z-20">
          <PixelButton
            variant="secondary"
            size="sm"
            href="#all-skills"
          >
            EXPLORE MORE
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
