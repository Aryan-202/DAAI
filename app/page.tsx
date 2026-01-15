// app/page.tsx
"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background boxes */}
      <Boxes className="absolute inset-0 z-0" />
      
      {/* Content container with pointer-events-none */}
      <div className="relative z-10 h-full w-full pointer-events-none">
        {/* Your actual content here - this div won't block hover */}
        <div className="h-full flex flex-col items-center justify-center text-center">
          {/* Add pointer-events-auto to elements that need interaction */}
          <div className="pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Daai
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              AI-powered spreadsheet solutions for modern data teams
            </p>
            <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}