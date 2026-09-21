import { WeddingInviteData } from "./types";

export const mockRoyalMewar: WeddingInviteData = {
  slug: "royal-mewar-demo",
  themeId: "royal-mewar",
  couple: {
    initials: "V & R",
    partnerOne: "Vikram",
    partnerTwo: "Rhea",
    weddingDate: "22nd November 2026",
    sealText: "SHUBH VIVAH",
    heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000",
    blessingText: "With the blessings of Lord Ganesha",
    invitationNote: "We joyfully request the pleasure of your company as we tie the knot in the city of lakes.",
  },
  events: [
    {
      id: "sangeet",
      title: "Sangeet",
      date: "21st Nov 2026",
      time: "07:30 PM",
      venueName: "Taj Lake Palace, Udaipur",
      attireTitle: "Regal Evening Wear",
      attireColors: ["#0F172A", "#B38234", "#7C2D12"],
    },
    {
      id: "pheras",
      title: "Pheras",
      date: "22nd Nov 2026",
      time: "06:00 PM",
      venueName: "The Oberoi Udaivilas",
      attireTitle: "Classic Royal",
      attireColors: ["#4A121A", "#C5A059", "#F7F5EE"],
    }
  ],
  links: {
    whatsappNumber: "910000000000",
    rsvpCustomMessage: "We are thrilled to attend the Royal Mewar celebration!",
    googleMapsUrl: "https://maps.google.com",
    calendar: {
      title: "Vikram & Rhea Wedding",
      startDate: "2026-11-22T12:00:00Z",
      endDate: "2026-11-22T18:00:00Z",
      description: "Royal Wedding in Udaipur",
    },
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-spirit-of-the-ancients-632.mp3",
  }
};
