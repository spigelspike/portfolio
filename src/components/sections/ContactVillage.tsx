"use client";
import { useRef } from "react";
import { PERSONAL, SECTIONS } from "@/lib/constants";
import { LAYOUT } from "@/lib/layout";
import { Mail, Phone, MapPin, ChevronRight, Heart } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ContactCard = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => {
  const inner = (
    <div className="flex items-center gap-4 bg-[#11111a] p-4 rounded-xl border border-[#2a2a4a]/80 hover:border-[#FFD700]/50 transition-colors w-full group">
      <div className="bg-[#1a1a2e] w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-[#FFD700] group-hover:scale-110 transition-transform border border-[#2a2a4a]/50">
        {icon}
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-[0.95rem] font-semibold text-[#f0f0f0] mb-0.5">{title}</span>
        <span className="text-[0.8rem] text-[#8892b0] truncate">{value}</span>
      </div>
    </div>
  );
  return href ? <a href={href} className="w-full block">{inner}</a> : <div className="w-full block">{inner}</div>;
};

const SocialCard = ({ icon, title, href }: { icon: React.ReactNode, title: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#11111a] p-4 rounded-xl border border-[#2a2a4a]/80 hover:border-[#FFD700]/50 transition-colors w-full group">
    <div className="bg-[#1a1a2e] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#FFD700] group-hover:scale-110 transition-transform border border-[#2a2a4a]/50">
      {icon}
    </div>
    <span className="text-[0.95rem] font-semibold text-[#f0f0f0] flex-1">{title}</span>
    <ChevronRight className="text-[#8892b0] group-hover:text-[#FFD700] transition-colors w-4 h-4 flex-shrink-0" />
  </a>
);

export default function ContactVillage() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id={SECTIONS.contact}
      ref={sectionRef}
      className="w-full flex flex-col relative justify-center items-center p-4 sm:p-6 md:p-8 mt-4"
    >
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#337cbd]/10 to-transparent pointer-events-none rounded-t-[1.5rem]" />

      {/* Main Bounding Box */}
      <div className={`${LAYOUT.container} ${LAYOUT.padding} bg-[#0a0a12] border border-[#2a2a4a] rounded-[1.5rem] shadow-2xl relative`}>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          {/* Left: Video */}
          <div className="w-full rounded-xl overflow-hidden border border-[#2a2a4a] bg-[#0f0e17] shadow-xl relative aspect-video lg:aspect-auto flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="none"
              className="w-full h-full object-cover lg:object-contain"
            >
              <source src="/assets/contact_me.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(10,10,18,0.8)] pointer-events-none" />
          </div>

          {/* Right: Contact Box Container */}
          <div className="w-full flex flex-col justify-center rounded-xl border border-[#2a2a4a] bg-[#0f0e17] shadow-xl p-6 md:p-8">
            <div className="flex flex-col gap-5">
              <ContactCard icon={<Mail size={20} strokeWidth={2.5} />} title="Email" value={PERSONAL.email} href={`mailto:${PERSONAL.email}`} />
              <ContactCard icon={<Phone size={20} strokeWidth={2.5} />} title="Phone" value={PERSONAL.phone} />
              <ContactCard icon={<MapPin size={20} strokeWidth={2.5} />} title="Location" value={PERSONAL.location} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SocialCard icon={<GithubIcon className="w-5 h-5" />} title="GitHub" href={PERSONAL.github} />
                <SocialCard icon={<InstagramIcon className="w-5 h-5" />} title="Instagram" href={(PERSONAL as any).instagram} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
