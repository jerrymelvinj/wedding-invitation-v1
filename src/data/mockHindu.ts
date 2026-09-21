import { WeddingInviteData } from "./types";

export const mockHindu: WeddingInviteData = {
  slug: "venkat-shobha",
  themeId: "kerala-kasavu", // We can keep the same theme colors (cream/gold) for Hindu
  couple: {
    initials: "V & S",
    partnerOne: "Venkat",
    partnerTwo: "Shobha",
    weddingDate: "15th January 2027",
    sealText: "OPEN",
    heroImage: "/temple-sky.jpg",
    heroVariant: "cutout",
    blessingText: "With the grace of the Almighty & the love of our families",
    invitationNote: "Two lives, two hearts, joined together in friendship, united forever in love. We joyfully request the pleasure of your presence and prayers as we exchange vows and begin our new journey.",
  },
  events: [
    {
      id: "haldi",
      title: "The Haldi & Mehendi",
      date: "Thursday, 11th Dec 2030",
      time: "10:00 AM – 1:00 PM",
      venueName: "The Courtyard Villa, Orchid Lawns",
      attireTitle: "Vibrant Florals & Sunshine Hues",
      attireColors: ["#F5A623", "#708238", "#FDFBF7"],
    },
    {
      id: "sangeet",
      title: "Sangeet & Musical Evening",
      date: "Thursday, 11th Dec 2030",
      time: "6:30 PM Onwards",
      venueName: "Grand Ballroom, The Leela Palace",
      attireTitle: "Evening Glamour & Indo-Western",
      attireColors: ["#1A2238", "#D4AF37", "#C08081"],
    },
    {
      id: "wedding",
      title: "The Wedding Ceremony",
      date: "Friday, 12th Dec 2030",
      time: "9:30 AM – 11:30 AM",
      venueName: "Grand Ballroom, The Leela Palace",
      attireTitle: "Traditional Silk & Elegant Formals",
      attireColors: ["#F7F5EE", "#C5A059", "#4A121A"],
    },
    {
      id: "reception",
      title: "The Reception & Dinner",
      date: "Friday, 12th Dec 2030",
      time: "7:00 PM Onwards",
      venueName: "The Grand Emerald Pavilion",
      attireTitle: "Black Tie & Regal Elegance",
      attireColors: ["#1C1917", "#0F4C3A", "#EFECE6"],
    }
  ],
  links: {
    whatsappNumber: "910000000000",
    rsvpCustomMessage: "Hello! We would love to attend.",
    googleMapsUrl: "https://maps.google.com",
    calendar: {
      title: "Venkat & Shobha Wedding",
      startDate: "2027-01-15T04:00:00Z",
      endDate: "2027-01-15T12:00:00Z",
      description: "Wedding Ceremony",
    },
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3",
  }
};
