"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WaxSealOverlay from "@/components/WaxSealOverlay";
import Hero from "@/components/Hero";
import TornPaper from "@/components/TornPaper";
import Itinerary from "@/components/Itinerary";
import FloatingNav from "@/components/FloatingNav";
import MobileFrame from "@/components/MobileFrame";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <MobileFrame>
      <main className="relative bg-sandstone selection:bg-gold/30">
      <AnimatePresence>
        {!isUnlocked && (
          <WaxSealOverlay onUnlock={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      <div className={`${!isUnlocked ? "h-screen overflow-hidden" : ""}`}>
        <Hero />
        <TornPaper />
        <Itinerary />
      </div>

      {isUnlocked && <FloatingNav />}
    </main>
    </MobileFrame>
  );
}
