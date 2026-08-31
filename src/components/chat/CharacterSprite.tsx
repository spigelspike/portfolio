"use client";

import Image from "next/image";

export type CharacterEmotion = "point" | "idle" | "blink" | "look" | "smile";

interface CharacterSpriteProps {
  emotion: CharacterEmotion;
  className?: string;
  size?: number;
  priority?: boolean;
}

export const SPRITE_PATHS: Record<CharacterEmotion, string> = {
  point: "/assets/rag_assets/point.webp",
  idle: "/assets/rag_assets/idle.webp",
  blink: "/assets/rag_assets/blink.webp",
  look: "/assets/rag_assets/look.webp",
  smile: "/assets/rag_assets/smile.webp",
};

export default function CharacterSprite({
  emotion = "idle",
  className = "",
  size = 180,
  priority = false,
}: CharacterSpriteProps) {
  const spriteSrc = SPRITE_PATHS[emotion] || SPRITE_PATHS.idle;

  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: Math.round(size * 1.8) }}
    >
      {/* Hidden preloads so all emotion frames switch instantly with zero lag */}
      <div className="hidden" aria-hidden="true">
        {Object.values(SPRITE_PATHS).map((src) => (
          <Image key={src} src={src} alt="" width={10} height={10} priority />
        ))}
      </div>

      <Image
        src={spriteSrc}
        alt={`Shareef AI - ${emotion}`}
        width={300}
        height={540}
        priority={priority}
        className="w-full h-full object-contain pixel-render drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}

