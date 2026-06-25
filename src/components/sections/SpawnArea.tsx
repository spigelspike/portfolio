"use client";
// ============================================
// SpawnArea — Hero Section
// ============================================
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayIcon, DocIcon, ChatIcon } from "@/components/ui/PixelIcons";
import { PERSONAL, SECTIONS } from "@/lib/constants";

export default function SpawnArea() {
  const containerRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Safari and iOS do not support webm alpha channel well, so we provide a webp fallback
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(ua) || 
                            /ipad|iphone|ipod/i.test(ua) || 
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsSafari(isSafariBrowser);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={SECTIONS.home}
      ref={containerRef}
      className="relative min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Sky Background ── */}
      {/*
        Removed scale-[1.3] origin-top on mobile — it was cropping the sky
        and making the terrain overlap awkwardly on small viewports.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/assets/animated_bg.mp4?v=2" type="video/mp4" />
      </video>

      {/* ── Ground ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 z-0">
        <Image
          src="/assets/terrain.webp"
          alt="Terrain"
          fill
          sizes="100vw"
          className="object-cover pixel-render"
        />
      </div>

      {/* ── Character on Terrain (Left) ── */}
      <motion.div
        className="absolute bottom-10 sm:bottom-16 lg:bottom-20
                   left-0 sm:-left-4 lg:left-0
                   w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
                   z-10 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full h-full relative">
          
          {/* Magical Aura/Glow behind character */}
          <div className="absolute inset-0 bg-game-accent/20 blur-[50px] rounded-full animate-pulse-slow" />
          
          {isSafari ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain pixel-render"
            >
              <source src="/assets/idle/idle_animation.mov?v=3" type='video/quicktime' />
            </video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain pixel-render"
            >
              <source src="/assets/idle/idle_animation.webm?v=2" type="video/webm" />
            </video>
          )}
        </div>
      </motion.div>

      {/* ── Content ──
          - justify-center on the section keeps this block vertically centred
          - pb-28 sm:pb-32 reserves space at the bottom so the centred block
            never descends into the character/terrain zone on any screen size
          - lg:pl-[200px] xl:pl-[300px] offsets right to avoid the large desktop character
      */}
      <div className="relative z-30 text-center px-4 pb-28 sm:pb-32 lg:pl-[200px] xl:pl-[300px] flex flex-col items-center w-full pointer-events-none">
        <div className="pointer-events-auto">


          {/* Custom Header Image */}
          <motion.div
            className="mb-8 sm:mb-12 flex justify-center w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Image
              src="/assets/header.webp"
              alt="MHD SHAREEF Header"
              width={900}
              height={200}
              preload
              className="w-[95%] sm:w-auto max-w-full sm:max-w-2xl lg:max-w-4xl object-contain pixel-render drop-shadow-[0_6px_0_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Tagline removed as per request */}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full px-6 sm:px-0 gap-3 sm:gap-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollToSection(SECTIONS.about)}
              className="focus:outline-none"
            >
              <img
                src="/assets/startjourney.webp?v=3"
                alt="Start Journey"
                className="h-14 sm:h-20 lg:h-24 w-auto pixel-render drop-shadow-xl"
              />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none"
            >
              <img
                src="/assets/resume.webp?v=3"
                alt="Resume"
                className="h-14 sm:h-20 lg:h-24 w-auto pixel-render drop-shadow-xl"
              />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollToSection(SECTIONS.contact)}
              className="focus:outline-none"
            >
              <img
                src="/assets/contactme.webp?v=3"
                alt="Contact"
                className="h-14 sm:h-20 lg:h-24 w-auto pixel-render drop-shadow-xl"
              />
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="pixel-font text-[0.4rem] text-game-muted block mb-1">
          Scroll to explore
        </span>
        <span className="text-game-accent text-lg">⌄</span>
      </motion.div>
    </section>
  );
}