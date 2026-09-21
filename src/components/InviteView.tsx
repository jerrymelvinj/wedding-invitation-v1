"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { WeddingInviteData } from "@/data/types";
import EnvelopeCover from "./EnvelopeCover";
import Hero from "./Hero";
import TornPaper from "./TornPaper";
import Itinerary from "./Itinerary";
import QuickActionDock from "./QuickActionDock";
import MobileFrame from "./MobileFrame";

interface InviteViewProps {
  data: WeddingInviteData;
}

export default function InviteView({ data }: InviteViewProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Theme styling logic
  let themeStyles = {
    bg: "bg-sandstone",
    text: "text-kumkum",
    accent: "text-gold",
    sealBg: "bg-[#8b1820]",
    heroFrame: "border-cream shadow-[0_20px_40px_-15px_rgba(62,23,27,0.4)]",
    cardBg: "bg-sandstone",
    itineraryBg: "bg-cream",
    tornFill: "fill-cream",
    divider: "bg-gold/50"
  };

  if (data.themeId === "kerala-kasavu") {
    themeStyles = {
      bg: "bg-[#FDFBF7]", // Ivory
      text: "text-[#3B3A36]", // Soft Black
      accent: "text-[#C5A059]", // Antique Gold
      sealBg: "bg-[#C5A059]",
      heroFrame: "border-[#EFECE6] shadow-xl",
      cardBg: "bg-white",
      itineraryBg: "bg-[#F7F5EE]",
      tornFill: "fill-[#F7F5EE]",
      divider: "bg-[#C5A059]/50"
    };
  } else if (data.themeId === "royal-mewar") {
    themeStyles = {
      bg: "bg-[#FAF4ED]", // Sandstone
      text: "text-[#3E171B]", // Kumkum
      accent: "text-[#B38234]", // Gold Foil
      sealBg: "bg-[#8b1820]",
      heroFrame: "border-[#F1E5D8] shadow-2xl",
      cardBg: "bg-[#FAF4ED]",
      itineraryBg: "bg-[#F1E5D8]",
      tornFill: "fill-[#F1E5D8]",
      divider: "bg-[#B38234]/50"
    };
  } else if (data.themeId === "coastal-minimal") {
    themeStyles = {
      bg: "bg-[#F8FAFC]", // Sea salt / slate 50
      text: "text-[#0F172A]", // Slate 900
      accent: "text-[#64748B]", // Slate 500
      sealBg: "bg-[#334155]", // Slate 700
      heroFrame: "border-[#E2E8F0] shadow-sm",
      cardBg: "bg-white",
      itineraryBg: "bg-[#F1F5F9]",
      tornFill: "fill-[#F1F5F9]",
      divider: "bg-[#94A3B8]/30"
    };
  }

  return (
    <MobileFrame>
      <main className={`relative ${themeStyles.bg} selection:bg-black/10`}>
        <AnimatePresence>
          {!isUnlocked && (
            <EnvelopeCover 
              initials={data.couple.initials}
              date={data.couple.weddingDate}
              sealText={data.couple.sealText}
              onUnlock={() => setIsUnlocked(true)} 
              bgClass={themeStyles.bg}
              textClass={themeStyles.text}
              accentClass={themeStyles.accent}
              sealBgClass={themeStyles.sealBg}
            />
          )}
        </AnimatePresence>

        <div className={`${!isUnlocked ? "h-screen overflow-hidden" : ""}`}>
          <Hero 
            partnerOne={data.couple.partnerOne}
            partnerTwo={data.couple.partnerTwo}
            blessingText={data.couple.blessingText}
            invitationNote={data.couple.invitationNote}
            heroImage={data.couple.heroImage}
            textClass={themeStyles.text}
            accentClass={themeStyles.accent}
            frameClass={themeStyles.heroFrame}
          />
          
          <TornPaper 
            svgFillClass={themeStyles.tornFill}
            containerBgClass={themeStyles.itineraryBg}
          />

          <Itinerary 
            events={data.events} 
            bgClass={themeStyles.itineraryBg}
            cardBgClass={themeStyles.cardBg}
            textClass={themeStyles.text}
            accentClass={themeStyles.accent}
            dividerClass={themeStyles.divider}
          />
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
