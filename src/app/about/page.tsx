"use client";
import GameHUD from "@/components/hud/GameHUD";
import GameFooter from "@/components/hud/GameFooter";
import { PERSONAL } from "@/lib/constants";
import { MEDIA_LINKS, MUSIC, MOVIES, TV_SHOWS, ANIME, GAMES } from "@/lib/media";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { LAYOUT } from "@/lib/layout";
import { Star, MapPin, Film, Tv, Play, Pause, Gamepad2, Briefcase, Zap, ExternalLink, Mail, Music, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

// Social SVG Icons to bypass lucide-react version export mismatch
const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function AboutPage() {

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes eq-bar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .animate-eq-bar {
          animation: eq-bar 1.2s ease-in-out infinite;
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-40px) translateX(20px) scale(1.1); }
        }
        .animate-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
      `}} />

      <GameHUD />
      <main className="bg-[#050816] min-h-screen pb-40 w-full overflow-x-hidden relative font-sans text-white">

        {/* Subtle Animated Background Particles */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-[#00F5D4]/20 animate-particle" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-[#8B5CF6]/25 animate-particle" style={{ animationDelay: '2s', animationDuration: '12s' }} />
        <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#3B82F6]/20 animate-particle" style={{ animationDelay: '4s', animationDuration: '7s' }} />
        <div className="absolute bottom-[15%] right-[30%] w-2 h-2 rounded-full bg-[#00F5D4]/25 animate-particle" style={{ animationDelay: '1s', animationDuration: '10s' }} />

        {/* Dynamic Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[50vw] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[50vw] rounded-full bg-[#3B82F6]/5 blur-[150px] pointer-events-none" />

        {/* Content wrapper with proper nav clearance */}
        <div className="w-full flex justify-center relative z-10" style={{ paddingTop: '100px' }}>
          <div className={`${LAYOUT.container} ${LAYOUT.padding}`}>

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-[200px] right-0 w-96 h-96 bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />

            {/* ── HERO SECTION ── */}
            <div className="relative z-10 w-full mb-16 lg:mb-24">
              {/* Dynamic Ambient Background Glows */}
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#3B82F6]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

              {/* UNIFIED DASHBOARD CARD (HORIZONTAL PROFILE) */}
              <div 
                className="relative rounded-[2.5rem] bg-[#0c0c1d]/60 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.7)] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 p-8 sm:p-10 lg:p-16 relative z-10"
                style={{ maxWidth: '1152px', overflow: 'hidden', isolation: 'isolate', marginBottom: '80px' }}
              >
                
                {/* LEFT: TEXT & DETAILS */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0 order-2 lg:order-1 w-full">
                  <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
                    <span className="text-white">Mohamed</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mt-3 inline-block">Shereef</span>
                  </h1>

                  <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-xl font-medium mb-10">
                    Computer Science Student & Developer passionate about building impactful digital experiences.
                  </p>

                  {/* Available Pill */}
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-[#94A3B8] hover:bg-white/[0.12] transition-all cursor-pointer w-fit shadow-sm mb-12">
                    <span className="w-2.5 h-2.5 bg-[#00F5D4] rounded-full shadow-[0_0_8px_rgba(0,245,212,0.8)] animate-pulse"></span>
                    Available for opportunities <span className="ml-2 opacity-70">&gt;</span>
                  </div>

                  {/* BOTTOM ROW: SOCIALS & STATS */}
                  <div className="flex flex-col xl:flex-row justify-start items-center lg:items-start gap-8 w-full pt-8 border-t border-white/[0.05]">
                    
                    {/* SOCIAL CONNECT */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 shrink-0">
                      <div className="text-xs font-bold text-[#8B5CF6] tracking-widest uppercase">CONNECT</div>
                      <div className="flex justify-center gap-4 shrink-0">
                        <SocialIcon href={PERSONAL.github} icon={<GithubIcon size={18} />} />
                        <SocialIcon href={PERSONAL.linkedin} icon={<LinkedinIcon size={18} />} />
                        <SocialIcon href={`mailto:${PERSONAL.email}`} icon={<Mail size={18} />} />
                        <SocialIcon href={PERSONAL.instagram} icon={<InstagramIcon size={18} />} />
                      </div>
                    </div>

                    {/* STATUS & LOCATION */}
                    <div className="flex flex-row justify-center gap-8 shrink-0">
                      <DataChip icon={<Briefcase size={18} />} label="EXP" value="FRESHER" />
                      <div className="w-px h-10 bg-white/[0.05]"></div>
                      <DataChip icon={<MapPin size={18} />} label="LOCATION" value="KERALA" />
                      <div className="w-px h-10 bg-white/[0.05]"></div>
                      <DataChip icon={<Zap size={18} />} label="STATUS" value="BUILDING" />
                    </div>
                  </div>
                </div>

                {/* RIGHT: AVATAR */}
                <div className="relative shrink-0 order-1 lg:order-2" style={{ width: '280px', height: '280px' }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#3B82F6] to-[#00F5D4] p-[4px] animate-spin-slow">
                    <div className="w-full h-full bg-[#0A0D17] rounded-full overflow-hidden relative shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                      <Image src="/assets/pfpj.jpg" alt="Profile" fill className="object-cover animate-spin-reverse-slow" unoptimized />
                    </div>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-5 right-5 w-8 h-8 bg-[#00F5D4] rounded-full border-[5px] border-[#0A0D17] shadow-[0_0_20px_rgba(0,245,212,0.8)]"></div>
                </div>

              </div>
            </div>

{/* ══════════════════════════════════════════
              MEDIA HUB (Restore old layout with 4 categories)
              ══════════════════════════════════════════ */}
            <div className="mb-10 w-full pt-4 lg:pt-8">
              
              {/* Header */}
              <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="pixel-font text-2xl sm:text-3xl font-extrabold tracking-widest text-white mb-2 uppercase">
                  MEDIA HUB
                </h2>
                <span className="text-sm sm:text-base font-semibold tracking-widest text-[#00F5D4] uppercase">
                  Curated Favorites
                </span>
              </div>

              {/* List of 4 Categories Stacked Vertically */}
              <div className="flex flex-col gap-8 lg:gap-12 w-full">

                <MediaCard title="Cinema" icon={<Film size={20} />} iconColor="#e5383b" link={MEDIA_LINKS.letterboxd} linkText="Letterboxd">
                  <MediaGridList items={MOVIES} />
                </MediaCard>

                <MediaCard title="Series" icon={<Tv size={20} />} iconColor="#4361ee" link={MEDIA_LINKS.letterboxd} linkText="Letterboxd">
                  <MediaGridList items={TV_SHOWS} />
                </MediaCard>

                <MediaCard title="Anime" icon={<Play size={20} />} iconColor="#f72585" link={MEDIA_LINKS.myanimelist} linkText="MyAnimeList">
                  <MediaGridList items={ANIME} />
                </MediaCard>

                <MediaCard title="Gaming" icon={<Gamepad2 size={20} />} iconColor="#fca311" link={MEDIA_LINKS.steam} linkText="Steam">
                  <MediaGridList items={GAMES} />
                </MediaCard>

              </div>
            </div>

          </div>
        </div>
      </main>
      <GameFooter />
    </>
  );
}

// ── SUBCOMPONENTS ──

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-[0.85rem] bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-all duration-300 shrink-0"
    >
      {icon}
    </a>
  );
}

function DataChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 min-w-0">
      <div className="text-[#8B5CF6]">{icon}</div>
      <div className="flex flex-col text-center md:text-left justify-center min-w-0">
        <span className="text-[0.6rem] font-semibold tracking-widest text-[#94A3B8] uppercase leading-none mb-1.5">{label}</span>
        <span className="text-xs sm:text-sm font-extrabold text-white leading-none truncate">{value}</span>
      </div>
    </div>
  );
}

function MediaCard({ title, icon, iconColor, link, linkText, children }: { title: string; icon: React.ReactNode; iconColor: string; link: string; linkText: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-[2rem] overflow-hidden group/card hover:scale-[1.01] transition-transform duration-500 bg-[#0c0c1d]/40 backdrop-blur-2xl border border-white/[0.05] shadow-[0_15px_35px_rgba(0,0,0,0.6)] w-full">
      <div className="relative z-10 p-5 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${iconColor}15`, color: iconColor }}>
              {icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h3>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/35 hover:text-white/70 transition-colors">
            {linkText}
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Grid */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function MediaGridList({ items }: { items: { title: string; rating: number; image: string; year?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
      {items.slice(0, 4).map((item, i) => (
        <div key={i} className="group/item relative rounded-2xl overflow-hidden bg-[#0c0c1d]/80 border border-white/[0.05] hover:border-[#00F5D4]/40 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all duration-500 hover:-translate-y-1.5">
          <div className="w-full aspect-[3/4] relative overflow-hidden bg-[#111]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover/item:scale-110"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none" />

            {/* Year Badge */}
            {item.year && (
              <div className="absolute top-2 right-2 z-20 px-1.5 py-0.5 rounded bg-[#050816]/80 backdrop-blur-md border border-white/[0.08] text-[0.55rem] font-bold text-[#00F5D4] uppercase tracking-wider shadow-md">
                {item.year}
              </div>
            )}

            {/* Title + Rating */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 flex flex-col gap-1.5">
              <h4 className="text-white text-xs sm:text-sm font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)] line-clamp-2">
                {item.title}
              </h4>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${j < item.rating ? "text-[#00F5D4]" : "text-white/15"}`} fill={j < item.rating ? "#00F5D4" : "transparent"} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
