"use client";
// ============================================
// ProjectsCastle — Projects showcase
// ============================================
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PixelButton from "@/components/ui/PixelButton";
import { PROJECTS, SECTIONS } from "@/lib/constants";

export default function ProjectsCastle() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id={SECTIONS.projects}
      ref={sectionRef}
      className="game-panel w-full h-full flex flex-col relative group hover:border-game-accent transition-all duration-300 overflow-hidden"
    >
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#4a2e6b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Card Header */}
      <div className="text-center z-10 relative mb-6 pt-6">
        <h2 className="pixel-font text-xl sm:text-2xl tracking-[4px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-game-accent to-game-orange drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          PROJECTS
        </h2>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col relative group/carousel">
        {/* Left Scroll Button & Fade (Hidden on mobile) */}
        <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-game-panel via-game-panel/80 to-transparent z-10 pointer-events-none items-center justify-start pl-2">
          <button 
            onClick={() => scroll("left")}
            className="pointer-events-auto opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 bg-game-dark/90 text-game-accent w-10 h-10 flex items-center justify-center rounded-full border-2 border-game-border hover:border-game-accent hover:bg-game-accent hover:text-black hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
            aria-label="Scroll left"
          >
            ◀
          </button>
        </div>

        {/* Right Scroll Button & Fade (Hidden on mobile) */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-game-panel via-game-panel/80 to-transparent z-10 pointer-events-none items-center justify-end pr-2">
          <button 
            onClick={() => scroll("right")}
            className="pointer-events-auto opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 bg-game-dark/90 text-game-accent w-10 h-10 flex items-center justify-center rounded-full border-2 border-game-border hover:border-game-accent hover:bg-game-accent hover:text-black hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
            aria-label="Scroll right"
          >
            ▶
          </button>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group/bento flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col snap-center bg-[#12121f] border-2 border-game-border rounded-xl overflow-hidden shadow-[0_4px_0_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,215,0,0.2),_0_6px_0_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:border-game-accent transition-all duration-300"
            >
              {/* Thumbnail Header */}
              <div className="relative aspect-video w-full overflow-hidden border-b-2 border-game-border group-hover/bento:border-game-accent transition-colors">
                {project.thumbnail ? (
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 320px, 280px"
                    className="object-cover transition-transform duration-700 group-hover/bento:scale-110 filter group-hover/bento:brightness-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1c1c28] transition-transform duration-700 group-hover/bento:scale-110">
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                )}
                {/* Subtle Inner Shadow on Image */}
                <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-1 bg-gradient-to-b from-[#161623] to-[#0a0912]">
                 
                 {/* Title */}
                 <h3 className="pixel-font text-[0.8rem] text-game-accent drop-shadow-md mb-3">
                   {project.title}
                 </h3>

                 {/* Description */}
                 <p className="text-[0.65rem] text-game-white leading-relaxed line-clamp-4 mb-4 flex-1">
                   {project.description}
                 </p>
                 
                 {/* Tech Stack Pills */}
                 <div className="flex flex-wrap gap-1.5 mb-6">
                   {project.techStack.map(tech => (
                     <span key={tech} className="px-2 py-1 bg-[#1a1a2e] border border-game-border rounded text-[0.5rem] text-game-cyan pixel-font uppercase tracking-wider shadow-sm">
                       {tech}
                     </span>
                   ))}
                 </div>

                 {/* Actions */}
                 <div className="mt-auto flex gap-3 pt-4 border-t border-game-border/30">
                   {project.liveUrl && (
                     <PixelButton
                       variant="primary"
                       size="sm"
                       href={project.liveUrl}
                     >
                       PLAY
                     </PixelButton>
                   )}
                   <PixelButton
                     variant="secondary"
                     size="sm"
                     href={project.githubUrl}
                   >
                     GITHUB
                   </PixelButton>
                 </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
