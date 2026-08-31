"use client";
// ============================================
// GameFooter — Bottom bar with game stats
// ============================================
import { PERSONAL } from "@/lib/constants";

export default function GameFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-game-darker border-t-2 border-game-border py-4 sm:py-6 w-full overflow-hidden mt-16 md:mt-24">
      <div className="w-full px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Thank you message */}
        <div className="flex-1 flex justify-start w-full md:w-auto">
          <button
            onClick={scrollToTop}
            className="flex items-center text-game-muted hover:text-game-accent transition-colors group z-10"
          >
            <span className="pixel-font text-[0.45rem] md:text-[0.55rem] leading-relaxed text-left">
              THANKS FOR VISITING!<br className="md:hidden" /> PRESS ↑ TO GO BACK TO TOP
            </span>
          </button>
        </div>

        {/* Center: Copyright */}
        <div className="flex-1 flex justify-center order-3 md:order-none mt-4 md:mt-0 w-full md:w-auto">
          <span className="text-[0.4rem] pixel-font text-game-border text-center">
            © {new Date().getFullYear()} {PERSONAL.name} — Built with pixels
          </span>
        </div>

        {/* Right: Space to maintain center alignment */}
        <div className="flex-1 hidden md:block w-full md:w-auto mt-4 md:mt-0">
        </div>
      </div>
    </footer>
  );
}
