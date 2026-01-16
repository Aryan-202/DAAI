// app/page.tsx
"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background boxes */}
      <Boxes className="absolute inset-0 z-0" />
    </div>
  );
}