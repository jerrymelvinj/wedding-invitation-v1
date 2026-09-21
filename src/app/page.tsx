"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeCover from "@/components/EnvelopeCover";
import Hero from "@/components/Hero";
import TornPaper from "@/components/TornPaper";
import Itinerary from "@/components/Itinerary";
import QuickActionDock from "@/components/QuickActionDock";
import MobileFrame from "@/components/MobileFrame";
import { mockInviteData } from "@/data/mockData";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const data = mockInviteData;

  return (
    <MobileFrame>
      <main className="relative bg-sandstone selection:bg-gold/30">
        <AnimatePresence>
          {!isUnlocked && (
            <EnvelopeCover 
              initials={data.couple.initials}
              date={data.couple.weddingDate}
              sealText={data.couple.sealText}
              onUnlock={() => setIsUnlocked(true)} 
            />
          )}
        </AnimatePresence>

        <div className={`${!isUnlocked ? "h-screen overflow-hidden" : ""}`}>
          <Hero />
          <TornPaper />
          <Itinerary />
        </div>

        <QuickActionDock 
          isUnlocked={isUnlocked}
          whatsappNumber={data.links.whatsappNumber}
          rsvpCustomMessage={data.links.rsvpCustomMessage}
          googleMapsUrl={data.links.googleMapsUrl}
          calendar={data.links.calendar}
          audioUrl={data.links.audioUrl}
        />
      </main>
    </MobileFrame>
  );
}
