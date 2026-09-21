"use client";

import { motion } from "framer-motion";
import { WeddingInviteData } from "@/data/types";

interface ItineraryProps {
  events: WeddingInviteData["events"];
  bgClass?: string;
  cardBgClass?: string;
  textClass?: string;
  accentClass?: string;
  dividerClass?: string;
}

export default function Itinerary({ 
  events,
  bgClass = "bg-cream",
  cardBgClass = "bg-sandstone",
  textClass = "text-kumkum",
  accentClass = "text-gold",
  dividerClass = "bg-gold/50"
}: ItineraryProps) {
  return (
    <section className={`${bgClass} pt-10 pb-32 px-6`}>
      <div className="text-center mb-16">
        <h3 className={`font-display text-3xl ${textClass} mb-4`}>Festivities</h3>
        <p className={`font-sans text-xs tracking-widest uppercase ${textClass}/60`}>
          Join us in the celebrations
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`sticky top-20 ${cardBgClass} rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(62,23,27,0.15)] border border-black/5`}
            style={{ top: `calc(5rem + ${index * 1.5}rem)` }}
          >
            <div className="flex flex-col gap-6 text-center">
              <div>
                <h4 className={`font-script text-4xl ${accentClass} mb-2`}>{event.title}</h4>
                <p className={`font-sans text-xs tracking-widest uppercase ${textClass}/70 font-semibold`}>
                  {event.date} • {event.time}
                </p>
              </div>

              <div className={`w-8 h-[1px] mx-auto ${dividerClass}`}></div>

              <p className={`font-display text-sm ${textClass}`}>{event.venueName}</p>

              <div className={`${bgClass} rounded-xl p-4 flex flex-col items-center gap-3`}>
                <p className={`font-sans text-[10px] tracking-widest uppercase ${textClass}/60`}>Dress Code</p>
                <p className={`font-display text-sm ${textClass}`}>{event.attireTitle}</p>
                <div className="flex gap-2 mt-1">
                  {event.attireColors.map((color, i) => (
                    <div 
                      key={i} 
                      className="w-5 h-5 rounded-full border border-black/10 shadow-inner"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
