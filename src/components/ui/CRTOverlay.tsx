export default function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-overlay hidden md:block">
      {/* Scanlines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"
      />
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] opacity-80"
      />

      {/* Screen Flicker */}
      <div className="absolute inset-0 bg-black/10 animate-flicker opacity-10" />
    </div>
  );
}
