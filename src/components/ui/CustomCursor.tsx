"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices where fine pointer is used
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over a clickable element
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.15, // fast but smooth follow
      }}
      style={{
        // Align the tip of the cursor exactly to the mouse coordinates
        translateX: "-4px",
        translateY: "-4px",
      }}
    >
      {/* 
        A huge, chunky pixelated cursor drawn using precise SVG polygons. 
        It is colored golden yellow, and turns brighter with a red outline on hover.
      */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="40" 
        height="40" 
        viewBox="0 0 32 32" 
        shapeRendering="crispEdges"
      >
        <path 
          fill={isHovering ? "#FFF3B0" : "#FFD700"} 
          stroke={isHovering ? "#FF4757" : "#111111"} 
          strokeWidth="2" 
          d="M4 4 v20 l6 -6 l4 9 l4 -2 l-4 -9 l7 -1 Z" 
        />
      </svg>
    </motion.div>
  );
}
