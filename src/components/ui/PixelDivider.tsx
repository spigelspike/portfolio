import Image from "next/image";
import { LAYOUT } from "@/lib/layout";
import dividerImage from "../../../public/assets/divider.webp";

export default function PixelDivider() {
  return (
    <div className="w-full flex items-center justify-center py-6 sm:py-8 opacity-90">
      <Image
        src={dividerImage}
        alt="Divider" 
        sizes="100vw"
        className={`${LAYOUT.container} ${LAYOUT.padding} object-contain pixel-render drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]`} 
      />
    </div>
  );
}
