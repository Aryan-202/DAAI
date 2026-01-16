// app/page.tsx
"use client";

import DarkVeil from "@/components/DarkVeil";
import HeroSection from "@/components/layout/hero";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* DarkVeil background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={20}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={1.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/10 via-background/5 to-background/20 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
}