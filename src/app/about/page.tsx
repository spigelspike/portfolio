"use client";
import GameHUD from "@/components/hud/GameHUD";
import GameFooter from "@/components/hud/GameFooter";
import { PERSONAL } from "@/lib/constants";
import { MEDIA_LINKS, MOVIES, TV_SHOWS, ANIME, GAMES } from "@/lib/media";
import React from "react";
import Image from "next/image";
import { LAYOUT } from "@/lib/layout";
import {
  Star,
  MapPin,
  Film,
  Tv,
  Play,
  Gamepad2,
  Briefcase,
  Zap,
  ExternalLink,
  Mail,
  User,
} from "lucide-react";

/* ─────────────────────────────────────────────────
   INLINE SVG ICONS  (bypass lucide-react mismatch)
───────────────────────────────────────────────── */
const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ─────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* Keyframes injected once at the top */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-particle {
            0%,100% { transform: translateY(0) translateX(0) scale(1); opacity:.5; }
            50%      { transform: translateY(-40px) translateX(20px) scale(1.12); opacity:1; }
          }
          .ap-particle { animation: float-particle ease-in-out infinite; }

          @keyframes spin-ring  { to { transform: rotate(360deg); } }
          .ap-spin-ring { animation: spin-ring 10s linear infinite; }

          @keyframes glow-breathe {
            0%,100% { opacity:.4; transform: scale(.95); }
            50%      { opacity:.85; transform: scale(1.05); }
          }
          .ap-glow-breathe { animation: glow-breathe 4s ease-in-out infinite; }

          @keyframes online-ripple {
            0%,100% { box-shadow: 0 0 0 0 rgba(0,245,212,.65), 0 0 18px rgba(0,245,212,.85); }
            55%      { box-shadow: 0 0 0 7px rgba(0,245,212,0),  0 0 26px rgba(0,245,212,.6);  }
          }
          .ap-online { animation: online-ripple 2.2s ease-out infinite; }

          @keyframes fade-up {
            from { opacity:0; transform:translateY(18px); }
            to   { opacity:1; transform:translateY(0);    }
          }
          .ap-fade-up-1 { animation: fade-up .55s ease both .1s; }
          .ap-fade-up-2 { animation: fade-up .55s ease both .22s; }
          .ap-fade-up-3 { animation: fade-up .55s ease both .34s; }
          .ap-fade-up-4 { animation: fade-up .55s ease both .46s; }
          .ap-fade-up-5 { animation: fade-up .55s ease both .58s; }
        `
      }} />

      <div className="block md:hidden">
        <GameHUD />

        <main className="bg-[#050816] min-h-screen pb-40 w-full overflow-x-hidden relative text-white"
        style={{ fontFamily: 'var(--font-game-body, Inter, sans-serif)' }}>

        {/* ── Floating Particles ── */}
        <div className="absolute top-[20%] left-[10%]  w-2   h-2   rounded-full bg-[#00F5D4]/20 ap-particle" style={{ animationDelay: '0s',  animationDuration: '8s'  }} />
        <div className="absolute top-[40%] right-[15%] w-3   h-3   rounded-full bg-[#8B5CF6]/25 ap-particle" style={{ animationDelay: '2s',  animationDuration: '12s' }} />
        <div className="absolute bottom-[30%] left-[25%]  w-1.5 h-1.5 rounded-full bg-[#3B82F6]/20 ap-particle" style={{ animationDelay: '4s',  animationDuration: '7s'  }} />
        <div className="absolute bottom-[15%] right-[30%] w-2   h-2   rounded-full bg-[#00F5D4]/25 ap-particle" style={{ animationDelay: '1s',  animationDuration: '10s' }} />

        {/* ── Global ambient gradients (fixed = no scroll repaints) ── */}
        <div className="fixed top-0 left-0 w-[45vw] h-[55vw] rounded-full pointer-events-none -z-10"
          style={{ background: 'rgba(139,92,246,.04)', filter: 'blur(160px)' }} />
        <div className="fixed bottom-0 right-0 w-[45vw] h-[55vw] rounded-full pointer-events-none -z-10"
          style={{ background: 'rgba(59,130,246,.04)', filter: 'blur(160px)' }} />

        {/* ════════════════════════════════════════════════════════
            MAIN CONTENT
            ════════════════════════════════════════════════════════ */}
        {/*
          FIX 1 ── removed `flex justify-center` from this wrapper.
          That turned the div into a flex row, making LAYOUT.container
          a flex *item* that sized to content instead of its explicit
          `w-full`.  A plain block wrapper lets `mx-auto` on
          LAYOUT.container do the centering job it was already doing.
        */}
        <div className="w-full relative z-10" style={{ paddingTop: '96px' }}>
          <div className={`${LAYOUT.container} ${LAYOUT.padding} relative`}>

            {/* Section ambient glows */}
            <div className="absolute top-0    left-0  w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'rgba(139,92,246,.07)', filter: 'blur(120px)' }} />
            <div className="absolute top-48  right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'rgba(59,130,246,.07)', filter: 'blur(120px)' }} />

            {/* ──────────────────────────────────────────────
                HERO DASHBOARD
                ────────────────────────────────────────────── */}
            <section className="relative z-10 w-full mb-20">

              {/*
                FIX 2 ── card is now a BLOCK-LEVEL element that owns
                the background + border.  The flex row is a *separate*
                inner div.  This means the card's width is determined
                by its own `w-full` (block width = parent width), not
                by the intrinsic size of its flex children.
              */}
              <div
                className="w-full mx-auto rounded-[2.5rem] border border-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,.75)]"
                style={{
                  maxWidth: '1152px',
                  /* Explicit background instead of bg-[...]/60 so the
                     opacity is applied to the color, not the element — avoids
                     stacking-context issues with backdrop-filter + overflow. */
                  background: 'rgba(12,12,29,.65)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                }}
              >
                {/* INNER FLEX ROW — layout only, no background */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 p-8 sm:p-10 lg:p-16">

                  {/* ─────────────────────────────────
                      LEFT  ·  Text content
                      ───────────────────────────────── */}
                  <div
                    className="flex flex-col items-center text-center order-2 lg:order-1"
                    /* minWidth:0 prevents text overflow from blowing out the flex item's width */
                    style={{ minWidth: 0, maxWidth: '600px' }}
                  >

                    {/* Top badge */}
                    <div
                      className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-[.18em] uppercase mb-8 select-none ap-fade-up-1"
                      style={{
                        padding: '6px 16px',
                        background: 'rgba(139,92,246,.1)',
                        border: '1px solid rgba(139,92,246,.28)',
                        color: '#a78bfa',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
                      B.Tech IT · Fresher
                    </div>

                    {/* Name */}
                    <h1
                      className="font-black leading-[1.0] tracking-tight mb-6 select-none ap-fade-up-2"
                      style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4rem)' }}
                    >
                      <span className="block text-white">Mohamed</span>
                      <span
                        className="block mt-2"
                        style={{
                          backgroundImage: 'linear-gradient(135deg,#3B82F6 0%,#818CF8 50%,#8B5CF6 100%)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        Shereef
                      </span>
                    </h1>

                    {/* Bio */}
                    <p
                      className="text-base sm:text-[1.05rem] leading-relaxed font-medium mb-10 ap-fade-up-3"
                      style={{ color: '#94A3B8', maxWidth: '42ch' }}
                    >
                      Recent IT Graduate &amp; Developer passionate about building
                      impactful digital experiences.
                    </p>

                    {/* Availability pill */}
                    <a
                      href={PERSONAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full text-sm font-medium transition-all duration-300 w-fit mb-12 group hover:text-white ap-fade-up-4"
                      style={{
                        padding: '10px 22px',
                        background: 'rgba(255,255,255,.03)',
                        border: '1px solid rgba(255,255,255,.08)',
                        color: '#94A3B8',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.background = 'rgba(255,255,255,.07)';
                        el.style.borderColor = 'rgba(255,255,255,.18)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.background = 'rgba(255,255,255,.03)';
                        el.style.borderColor = 'rgba(255,255,255,.08)';
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full ap-online shrink-0"
                        style={{ background: '#00F5D4' }}
                      />
                      Available for opportunities
                      <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span>
                    </a>

                    {/* Bottom row: Socials + Stats */}
                    <div
                      className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-10 w-full pt-8 ap-fade-up-5"
                      style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
                    >
                      {/* Social links */}
                      <div className="flex items-center gap-4 shrink-0">
                        <span
                          className="text-[.6rem] font-bold tracking-[.22em] uppercase shrink-0"
                          style={{ color: 'rgba(139,92,246,.85)' }}
                        >
                          CONNECT
                        </span>
                        <div className="flex gap-2.5">
                          <SocialIcon href={PERSONAL.github}               icon={<GithubIcon    size={17} />} />
                          <SocialIcon href={PERSONAL.linkedin}             icon={<LinkedinIcon  size={17} />} />
                          <SocialIcon href={`mailto:${PERSONAL.email}`}    icon={<Mail          size={17} />} />
                          <SocialIcon href={PERSONAL.instagram}            icon={<InstagramIcon size={17} />} />
                        </div>
                      </div>

                      {/* xl divider */}
                      <div className="hidden xl:block w-px h-10 self-center shrink-0"
                        style={{ background: 'rgba(255,255,255,.05)' }} />

                      {/* Stat chips */}
                      <div className="flex flex-row gap-5 sm:gap-8 shrink-0">
                        <DataChip icon={<Briefcase size={15} />} label="EXP"      value="FRESHER"  accent="#8B5CF6" />
                        <div className="w-px h-10 self-center" style={{ background: 'rgba(255,255,255,.05)' }} />
                        <DataChip icon={<MapPin    size={15} />} label="LOCATION" value="KERALA"   accent="#3B82F6" />
                        <div className="w-px h-10 self-center" style={{ background: 'rgba(255,255,255,.05)' }} />
                        <DataChip icon={<Zap       size={15} />} label="STATUS"   value="BUILDING" accent="#00F5D4" />
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────
                      RIGHT  ·  Avatar
                      ─────────────────────────────────
                      FIX 3 ── explicit flexShrink:0 + minWidth/minHeight
                      so the flex algorithm can never compress the avatar.
                      Avatar content uses stacked `absolute` layers inside
                      a `relative` 280 × 280 box — all layers stay within
                      that box, so overflow:hidden is no longer needed on
                      the card to contain them.
                  */}
                  <div
                    className="relative order-1 lg:order-2 shrink-0"
                    style={{
                      width: 'clamp(200px, 50vw, 280px)',
                      height: 'clamp(200px, 50vw, 280px)',
                    }}
                  >
                    {/* Layer 0 — outer ambient glow (purely decorative, allowed to bleed) */}
                    <div
                      className="absolute rounded-full ap-glow-breathe pointer-events-none"
                      style={{
                        inset: '-28px',
                        background: 'radial-gradient(circle,rgba(139,92,246,.35) 0%,rgba(59,130,246,.25) 40%,transparent 70%)',
                        filter: 'blur(22px)',
                      }}
                    />

                    {/* Layer 1 — spinning conic-gradient ring */}
                    <div
                      className="absolute inset-0 rounded-full ap-spin-ring"
                      style={{
                        background: 'conic-gradient(from 0deg,#8B5CF6,#3B82F6,#00F5D4,#8B5CF6)',
                      }}
                    />

                    {/* Layer 2 — dark fill that creates the visible ring gap */}
                    <div
                      className="absolute rounded-full"
                      style={{ inset: '4px', background: '#0A0D17' }}
                    />

                    {/* Layer 3 — the actual photo (static, not spinning) */}
                    <div
                      className="absolute rounded-full overflow-hidden"
                      style={{ inset: '4px' }}
                    >
                      <Image
                        src="/assets/pfpj.jpg"
                        alt="Mohamed Shereef"
                        fill
                        className="object-cover object-center"
                        unoptimized
                        priority
                      />
                    </div>

                    {/* Layer 4 — online indicator dot */}
                    <div
                      className="absolute z-10 rounded-full ap-online"
                      style={{
                        bottom: '14px',
                        right: '14px',
                        width: '26px',
                        height: '26px',
                        background: '#00F5D4',
                        border: '4px solid #0A0D17',
                      }}
                    />
                  </div>

                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════════
                MEDIA HUB
                ══════════════════════════════════════════════ */}
            <div className="mb-10 w-full pt-4 lg:pt-8 relative z-10">

              {/* Header */}
              <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="pixel-font text-2xl sm:text-3xl font-extrabold tracking-widest text-white mb-3 uppercase">
                  MEDIA HUB
                </h2>
                <span
                  className="text-sm font-semibold tracking-[.25em] uppercase"
                  style={{ color: '#00F5D4' }}
                >
                  CURATED FAVORITES
                </span>
              </div>

              {/* Category cards stacked */}
              <div className="flex flex-col gap-8 lg:gap-10 w-full">
                <MediaCard title="Cinema" icon={<Film     size={20} />} iconColor="#e5383b" link={MEDIA_LINKS.letterboxd}  linkText="Letterboxd">
                  <MediaGridList items={MOVIES}   />
                </MediaCard>
                <MediaCard title="Series" icon={<Tv       size={20} />} iconColor="#4361ee" link={MEDIA_LINKS.letterboxd}  linkText="Letterboxd">
                  <MediaGridList items={TV_SHOWS} />
                </MediaCard>
                <MediaCard title="Anime"  icon={<Play     size={20} />} iconColor="#f72585" link={MEDIA_LINKS.myanimelist} linkText="MyAnimeList">
                  <MediaGridList items={ANIME}    />
                </MediaCard>
                <MediaCard title="Gaming" icon={<Gamepad2 size={20} />} iconColor="#fca311" link={MEDIA_LINKS.steam}       linkText="Steam">
                  <MediaGridList items={GAMES}    />
                </MediaCard>
              </div>
            </div>

          </div>
        </div>
      </main>

      <GameFooter />
      </div>

      <div className="hidden md:flex flex-col min-h-screen bg-[#050816] text-white relative">
        <GameHUD />
        
        {/* Global ambient gradients */}
        <div className="absolute top-0 left-0 w-[45vw] h-[55vw] rounded-full pointer-events-none"
          style={{ background: 'rgba(139,92,246,.04)', filter: 'blur(160px)' }} />
        <div className="absolute bottom-0 right-0 w-[45vw] h-[55vw] rounded-full pointer-events-none"
          style={{ background: 'rgba(59,130,246,.04)', filter: 'blur(160px)' }} />
          
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 pt-16">
          <div className="w-24 h-24 mb-8 rounded-full border border-white/[0.08] shadow-[0_0_30px_rgba(0,245,212,0.15)] flex items-center justify-center" style={{ background: 'rgba(12,12,29,.65)' }}>
            <User size={32} style={{ color: '#00F5D4' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Mobile Only Experience
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            The detailed About dashboard is designed exclusively for mobile screens. 
            Please visit this page on your mobile device for the full experience.
          </p>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────── */

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10 rounded-xl flex items-center justify-center
        text-[#94A3B8] transition-all duration-300
        hover:text-white hover:-translate-y-0.5
      "
      style={{
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.06)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = 'rgba(255,255,255,.08)';
        el.style.borderColor = 'rgba(255,255,255,.15)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = 'rgba(255,255,255,.03)';
        el.style.borderColor = 'rgba(255,255,255,.06)';
      }}
    >
      {icon}
    </a>
  );
}

function DataChip({
  icon, label, value, accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start gap-1.5 select-none">
      <div style={{ color: accent }}>{icon}</div>
      <div className="flex flex-col gap-1">
        <span
          className="text-[.55rem] font-semibold tracking-[.18em] uppercase leading-none"
          style={{ color: '#94A3B8' }}
        >
          {label}
        </span>
        <span className="text-xs font-extrabold text-white leading-none">{value}</span>
      </div>
    </div>
  );
}

function MediaCard({
  title, icon, iconColor, link, linkText, children,
}: {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  link: string;
  linkText: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative w-full rounded-[2rem] overflow-hidden
        transition-transform duration-500 hover:scale-[1.01]
        border border-white/[0.05] shadow-[0_15px_35px_rgba(0,0,0,.6)]
      "
      style={{
        background: 'rgba(12,12,29,.45)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="relative z-10 p-5 sm:p-6 lg:p-8">

        {/* Card header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${iconColor}18`, color: iconColor }}
            >
              {icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,.3)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,.75)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.3)'; }}
          >
            {linkText}
            <ExternalLink size={12} />
          </a>
        </div>

        {children}
      </div>
    </div>
  );
}

function MediaGridList({
  items,
}: {
  items: { title: string; rating: number; image: string; year?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
      {items.slice(0, 4).map((item, i) => (
        <div
          key={i}
          className="
            group/item relative rounded-2xl overflow-hidden
            border border-white/[0.05]
            transition-all duration-500 hover:-translate-y-1.5
          "
          style={{ background: 'rgba(12,12,29,.85)' }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(0,245,212,.4)';
            el.style.boxShadow   = '0 0 20px rgba(0,245,212,.14)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(255,255,255,.05)';
            el.style.boxShadow   = 'none';
          }}
        >
          {/* Poster */}
          <div className="w-full aspect-[3/4] relative overflow-hidden bg-[#111]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover/item:scale-110"
              unoptimized
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent z-10 pointer-events-none" />

            {/* Year badge */}
            {item.year && (
              <div
                className="absolute top-2 right-2 z-20 px-1.5 py-0.5 rounded text-[.55rem] font-bold uppercase tracking-wider shadow-md"
                style={{
                  background: 'rgba(5,8,22,.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,.08)',
                  color: '#00F5D4',
                }}
              >
                {item.year}
              </div>
            )}

            {/* Title + stars */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 flex flex-col gap-1.5">
              <h4 className="text-white text-xs sm:text-sm font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)] line-clamp-2">
                {item.title}
              </h4>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    style={{ color: j < item.rating ? '#00F5D4' : 'rgba(255,255,255,.15)' }}
                    fill={j < item.rating ? '#00F5D4' : 'transparent'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
