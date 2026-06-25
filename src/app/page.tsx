// ============================================
// Main Page — Assembles all sections
// ============================================
import GameHUD from "@/components/hud/GameHUD";
import GameFooter from "@/components/hud/GameFooter";
import SpawnArea from "@/components/sections/SpawnArea";
import AboutSection from "@/components/sections/AboutSection";
import SkillsForest from "@/components/sections/SkillsForest";
import ProjectsCastle from "@/components/sections/ProjectsCastle";
import ContactVillage from "@/components/sections/ContactVillage";

import PixelDivider from "@/components/ui/PixelDivider";

export default function Home() {
  return (
    <>
      <GameHUD />
      <main className="bg-[#050A1F] min-h-screen pb-10 w-full overflow-x-hidden">
        <SpawnArea />

        {/* Dashboard Stack Container */}
        <div className="w-full px-2 sm:px-4 md:px-8 mt-6 flex flex-col gap-10">
          <AboutSection />
          <PixelDivider />
          <SkillsForest />
          <PixelDivider />
          <ProjectsCastle />
          <PixelDivider />
          <ContactVillage />
        </div>
      </main>
      <GameFooter />
    </>
  );
}
