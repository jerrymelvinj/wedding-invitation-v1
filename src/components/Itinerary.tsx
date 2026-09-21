"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "The Haldi & Mehendi",
    time: "10:00 AM – 1:00 PM",
    date: "Thursday, 11th Dec 2030",
    venue: "The Courtyard Villa, Orchid Lawns",
    dressCode: "Vibrant Florals & Sunshine Hues",
    colors: ["#F5A623", "#708238", "#FDFBF7"],
  },
  {
    title: "Sangeet & Musical Evening",
    time: "6:30 PM Onwards",
    date: "Thursday, 11th Dec 2030",
    venue: "Grand Ballroom, The Leela Palace",
    dressCode: "Evening Glamour & Indo-Western",
    colors: ["#1A2238", "#D4AF37", "#C08081"],
  },
  {
    title: "The Wedding Ceremony",
    time: "9:30 AM – 11:30 AM",
    date: "Friday, 12th Dec 2030",
    venue: "St. Mary's Church, Vizhinjam",
    dressCode: "Traditional Silk & Elegant Formals",
    colors: ["#F7F5EE", "#C5A059", "#4A121A"],
  },
  {
    title: "The Reception & Dinner",
    time: "7:00 PM Onwards",
    date: "Friday, 12th Dec 2030",
    venue: "The Grand Emerald Pavilion",
    dressCode: "Black Tie & Regal Elegance",
    colors: ["#1C1917", "#0F4C3A", "#EFECE6"],
  },
];

export default function Itinerary() {
  return (
    <section className="bg-cream pt-10 pb-32 px-6">
      <div className="text-center mb-16">
        <h3 className="font-display text-3xl text-kumkum mb-4">Festivities</h3>
        <p className="font-sans text-xs tracking-widest uppercase text-kumkum/60">
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
            className="sticky top-20 bg-sandstone rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(62,23,27,0.15)] border border-gold/20"
            style={{ top: `calc(5rem + ${index * 1.5}rem)` }}
          >
            <div className="flex flex-col gap-6 text-center">
              <div>
                <h4 className="font-script text-4xl text-gold mb-2">{event.title}</h4>
                <p className="font-sans text-xs tracking-widest uppercase text-kumkum/70 font-semibold">
                  {event.date} • {event.time}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-gold/50 mx-auto"></div>

              <p className="font-display text-sm text-kumkum">{event.venue}</p>

              <div className="bg-cream rounded-xl p-4 flex flex-col items-center gap-3">
                <p className="font-sans text-[10px] tracking-widest uppercase text-kumkum/60">Dress Code</p>
                <p className="font-display text-sm text-kumkum">{event.dressCode}</p>
                <div className="flex gap-2 mt-1">
                  {event.colors.map((color, i) => (
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
