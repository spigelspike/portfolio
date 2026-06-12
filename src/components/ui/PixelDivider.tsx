import { LAYOUT } from "@/lib/layout";

export default function PixelDivider() {
  return (
    <div className="w-full flex items-center justify-center py-6 sm:py-8 opacity-90">
      <img 
        src="/assets/divider.webp" 
        alt="Divider" 
        className={`${LAYOUT.container} ${LAYOUT.padding} object-contain pixel-render drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]`} 
      />
    </div>
  );
}
