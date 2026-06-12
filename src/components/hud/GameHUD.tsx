"use client";
// ============================================
// GameHUD — Sticky navigation bar
// Desktop: top bar with centred nav + XP bar
// Mobile: bottom tab bar with icons + labels
// ============================================
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { LAYOUT } from "@/lib/layout";
import { NAV_ITEMS, PERSONAL } from "@/lib/constants";
import { Home, User, Briefcase, Mail } from "lucide-react";

// Curated nav items for mobile bottom bar — only the essentials
const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "/#home", icon: <Home size={20} /> },
  { label: "About", href: "/#about", icon: <User size={20} /> },
  { label: "Projects", href: "/#projects", icon: <Briefcase size={20} /> },
  { label: "Contact", href: "/#contact", icon: <Mail size={20} /> },
  { 
    label: "Profile", 
    href: "/about", 
    icon: (
      <div className="w-5 h-5 rounded-full overflow-hidden border border-[#FFD700] shadow-[0_0_5px_rgba(255,215,0,0.5)]">
        <Image src="/assets/pfpj.jpg" alt="Profile" width={20} height={20} className="w-full h-full object-cover" unoptimized />
      </div>
    ) 
  },
];

export default function GameHUD() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [activeSection, setActiveSection] = useState(pathname === "/about" ? "about" : "home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      const activeItem = NAV_ITEMS.find(i => i.href === pathname);
      if (activeItem) setActiveSection(activeItem.href.replace("/", ""));
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle with rAF — only process once per frame
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((currentScrollY / maxScroll) * 100, 100);
        setScrollProgress(progress);

        // Smart hide: show on scroll up, hide on scroll down (desktop top bar only)
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollYRef.current = currentScrollY;

        // Determine active section
        if (pathname === "/") {
          const sections = NAV_ITEMS.filter(i => i.href.startsWith("/#")).map((item) => item.href.replace("/#", ""));
          let found = false;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.getBoundingClientRect().top <= 150) {
              setActiveSection(sections[i]);
              found = true;
              break;
            }
          }
          if (!found) setActiveSection("home");
        }
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP TOP NAV BAR (hidden on mobile)
          ══════════════════════════════════════════ */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex w-full justify-center bg-[#050816]/60 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={`${LAYOUT.container} ${LAYOUT.padding} flex items-center h-14 gap-2`}>

          {/* ── Left spacer ── */}
          <div className="flex-1 flex items-center min-w-0" />

          {/* ── Centre: desktop nav ── */}
          <nav className="flex items-center gap-1 lg:gap-2 xl:gap-4 shrink-0 overflow-hidden">
            {NAV_ITEMS.map((item, index) => {
              const isHash = item.href.startsWith("/#");
              const targetPath = isHash ? item.href.replace("/#", "") : item.href;
              const isActive = isHash 
                ? (pathname === "/" && activeSection === targetPath) 
                : (pathname === targetPath);
                
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-2 py-1 lg:px-3 pixel-font
                    text-[0.55rem] lg:text-[0.62rem] xl:text-[0.68rem]
                    transition-all duration-300 flex items-center gap-1.5 lg:gap-2
                    whitespace-nowrap ${index > 2 ? 'hidden xl:flex' : ''}
                    ${isActive
                      ? "text-[#00F5D4] scale-105 drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
                      : "text-[#94A3B8] hover:text-white hover:-translate-y-0.5 hover:scale-105"
                    }`}
                >
                  <span className="flex items-center text-[1.4em] drop-shadow-md">{item.icon}</span>
                  <span className={`tracking-wider ${isActive ? "drop-shadow-[0_2px_0_#111]" : ""}`}>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* ── Right: Profile & XP bar (XP bar at far right) ── */}
          <div className="flex-1 flex justify-end items-center gap-3 xl:gap-5">
            {/* Profile Button */}
            <button
              onClick={() => router.push("/about")}
              className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${pathname === "/about" ? "opacity-100 scale-105" : "opacity-80 hover:opacity-100"}`}
            >
              <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${pathname === "/about" ? "border-[#00F5D4] shadow-[0_0_10px_rgba(0,245,212,0.5)]" : "border-white/[0.08]"}`}>
                <Image src="/assets/pfpj.jpg" alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
              </div>
            </button>

            {/* Level / XP Bar */}
            <div className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-sm shrink-0">
              <span className="pixel-font text-[0.55rem] text-[#94A3B8]">LVL</span>
              <div className="xp-bar-track w-20 xl:w-24 bg-white/[0.02] border-white/[0.08]">
                <div className="xp-bar-fill bg-gradient-to-r from-[#8B5CF6] to-[#00F5D4]" style={{ width: `${scrollProgress}%` }} />
              </div>
              <span className="pixel-font text-[0.55rem] text-[#00F5D4] w-8 text-right drop-shadow-[0_0_4px_rgba(0,245,212,0.6)]">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="h-[2px] bg-white/[0.05]">
          <div
            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#00F5D4] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════
          MOBILE BOTTOM TAB BAR (hidden on desktop)
          ══════════════════════════════════════════ */}
      <nav className="fixed bottom-5 left-6 right-6 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="bg-[#0a0a18]/50 backdrop-blur-2xl border border-white/[0.08] rounded-2xl px-2 flex items-center justify-around h-[60px] shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]">
          {MOBILE_NAV_ITEMS.map((item) => {
            const isHash = item.href.startsWith("/#");
            const targetPath = isHash ? item.href.replace("/#", "") : item.href;
            const isActive = isHash 
              ? (pathname === "/" && activeSection === targetPath) 
              : (pathname === targetPath);

            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative flex flex-col items-center justify-center gap-1 py-2 px-3 transition-all duration-300 min-w-0
                  ${isActive
                    ? "text-[#FFD700] scale-110 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                    : "text-[#6b7394] active:scale-90"
                  }`}
              >
                <span className={`relative z-10 transition-all duration-300`}>
                  {item.icon}
                </span>
                <span className={`pixel-font text-[0.32rem] tracking-[0.15em] relative z-10 transition-all duration-300 ${isActive ? "text-[#FFD700] opacity-100" : "opacity-60"}`}>
                  {item.label.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}