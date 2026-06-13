export default function BackgroundGlow() {
  return (
    <>
      {/* Primary center glow — larger, softer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] md:h-[560px] md:w-[560px] rounded-full bg-orange-500/15 blur-[140px]" />

      {/* Secondary ring — subtle halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] md:h-[320px] md:w-[320px] rounded-full bg-orange-400/10 blur-[80px]" />

      {/* Top-right accent */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[220px] w-[220px] md:h-[300px] md:w-[300px] rounded-full bg-orange-400/8 blur-[110px]" />

      {/* Bottom-left accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] md:h-[260px] md:w-[260px] rounded-full bg-orange-600/8 blur-[100px]" />

      {/* Subtle dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Vignette edges */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </>
  );
}
