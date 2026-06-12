import sys

with open('src/app/about/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

start_marker = 'HERO SECTION'
end_marker = 'MEDIA HUB'

if start_marker not in content or end_marker not in content:
    print('Markers not found')
    sys.exit(1)

# Find the start of the comment block containing HERO SECTION
start_idx = content.rfind('{/* ', 0, content.find(start_marker))
# Find the start of the comment block containing MEDIA HUB
end_idx = content.rfind('{/* ', 0, content.find(end_marker))

if start_idx == -1 or end_idx == -1:
    print('Comment blocks not found')
    sys.exit(1)

new_hero_section = """{/* ── HERO SECTION ── */}
            <div className="relative z-10 w-full mb-16 lg:mb-24">
              {/* Dynamic Ambient Background Glows */}
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#3B82F6]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

              {/* UNIFIED DASHBOARD CARD (FLEXBOX REFACTOR) */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0c0c1d]/60 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.7)] w-full flex flex-col lg:flex-row">
                
                {/* LEFT: PROFILE SECTION */}
                <div className="flex-1 flex flex-col justify-between p-8 sm:p-10 lg:p-14 relative z-10">
                  
                  {/* TOP: PROFILE HERO */}
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 lg:gap-8 w-full">
                    
                    {/* Avatar */}
                    <div className="relative w-40 h-40 lg:w-48 lg:h-48 shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#3B82F6] to-[#00F5D4] p-[2px] animate-spin-slow">
                        <div className="w-full h-full bg-[#0A0D17] rounded-full overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                          <Image src="/assets/pfpj.jpg" alt="Profile" fill className="object-cover animate-spin-reverse-slow" unoptimized />
                        </div>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#00F5D4] rounded-full border-[3px] border-[#0A0D17] shadow-[0_0_15px_rgba(0,245,212,0.8)]"></div>
                    </div>

                    {/* Text Column */}
                    <div className="flex flex-col items-center md:items-start min-w-0 grow md:mt-2">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
                        <span className="text-white">Mohamed</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mt-2 inline-block">Shereef</span>
                      </h1>

                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-md font-medium mb-8">
                        Computer Science Student & Developer passionate about building impactful digital experiences.
                      </p>

                      {/* Available Pill */}
                      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[0.75rem] text-[#94A3B8] hover:bg-white/[0.12] transition-all cursor-pointer w-fit shadow-sm">
                        <span className="w-2 h-2 bg-[#00F5D4] rounded-full shadow-[0_0_8px_rgba(0,245,212,0.8)] animate-pulse"></span>
                        Available for opportunities <span className="ml-2 opacity-70">&gt;</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer to push the bottom row down so it always aligns beautifully */}
                  <div className="grow min-h-[3rem] lg:min-h-[4rem]"></div>

                  {/* BOTTOM ROW: SOCIALS & STATS */}
                  <div className="flex flex-col xl:flex-row justify-between items-center gap-8 w-full border-t border-white/[0.05] pt-8">
                    
                    {/* SOCIAL CONNECT */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0">
                      <div className="text-[0.7rem] font-bold text-[#8B5CF6] tracking-widest uppercase">CONNECT</div>
                      <div className="flex justify-center gap-3 shrink-0">
                        <SocialIcon href={PERSONAL.github} icon={<GithubIcon size={16} />} />
                        <SocialIcon href={PERSONAL.linkedin} icon={<LinkedinIcon size={16} />} />
                        <SocialIcon href={`mailto:${PERSONAL.email}`} icon={<Mail size={16} />} />
                        <SocialIcon href={PERSONAL.instagram} icon={<InstagramIcon size={16} />} />
                      </div>
                    </div>

                    {/* STATUS & LOCATION */}
                    <div className="flex flex-row justify-center gap-6 shrink-0">
                      <DataChip icon={<Briefcase size={16} />} label="EXP" value="FRESHER" />
                      <div className="w-px h-8 bg-white/[0.05]"></div>
                      <DataChip icon={<MapPin size={16} />} label="LOCATION" value="KERALA" />
                      <div className="w-px h-8 bg-white/[0.05]"></div>
                      <DataChip icon={<Zap size={16} />} label="STATUS" value="BUILDING" />
                    </div>
                  </div>

                </div>

                {/* RIGHT: MUSIC SECTION (FIXED WIDTH) */}
                <div className="w-full lg:w-[380px] shrink-0 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/[0.05] p-8 sm:p-10 lg:p-14 flex flex-col justify-center items-center relative z-10">
                  
                  {/* Album Art */}
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden mb-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] shrink-0 group">
                    <Image src={MUSIC.currentTrack.albumArt} alt="Album Art" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                  </div>

                  {/* Title/Artist */}
                  <div className="text-center mb-8 w-full max-w-[240px]">
                    <h3 className="text-xl font-bold text-white mb-2 truncate leading-snug">{MUSIC.currentTrack.title}</h3>
                    <p className="text-sm text-[#94A3B8] truncate font-medium">{MUSIC.currentTrack.artist}</p>
                  </div>

                  {/* Playback Controls & Progress */}
                  <div className="flex flex-col items-center w-full max-w-[280px]">
                    <div onClick={togglePlay} className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.3)] shrink-0">
                      {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full">
                      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden mb-3 relative cursor-pointer hover:bg-white/[0.1] transition-colors">
                        <div className="absolute top-0 left-0 h-full bg-[#8B5CF6] w-[45%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                      </div>
                      <div className="flex justify-between text-[0.65rem] text-[#94A3B8] font-bold tracking-wider">
                        <span>1:45</span>
                        <span>3:50</span>
                      </div>
                    </div>
                    <audio ref={audioRef} src={MUSIC.currentTrack.songUrl} loop />
                  </div>

                </div>
              </div>
            </div>

"""

new_content = content[:start_idx] + new_hero_section + content[end_idx:]

with open('src/app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Success')
