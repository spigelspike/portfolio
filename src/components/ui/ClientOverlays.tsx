"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);

const PixelClick = dynamic(
  () => import("@/components/ui/PixelClick"),
  { ssr: false }
);

const RagCompanion = dynamic(
  () => import("@/components/chat/RagCompanion"),
  { ssr: false }
);

export default function ClientOverlays() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        e.preventDefault();
      }
    };
    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <>
      <CustomCursor />
      <PixelClick />
      <RagCompanion />
    </>
  );
}
