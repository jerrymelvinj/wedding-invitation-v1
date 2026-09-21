import { WeddingInviteData } from "./types";

export const mockModernMinimalist: WeddingInviteData = {
  slug: "modern-minimalist-demo",
  themeId: "coastal-minimal",
  couple: {
    initials: "K & J",
    partnerOne: "Kabir",
    partnerTwo: "Jasmine",
    weddingDate: "5th March 2027",
    sealText: "RSVP",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    blessingText: "Together with their families",
    invitationNote: "Invite you to celebrate their marriage with an evening of dinner and dancing.",
  },
  events: [
    {
      id: "vows",
      title: "Exchange of Vows",
      date: "5th Mar 2027",
      time: "04:30 PM",
      venueName: "The Cliffhouse, Goa",
      attireTitle: "Coastal Chic",
      attireColors: ["#E2E8F0", "#94A3B8", "#0F172A"],
    },
    {
      id: "reception",
      title: "Cocktails & Reception",
      date: "5th Mar 2027",
      time: "06:30 PM",
      venueName: "The Cliffhouse Lawns",
      attireTitle: "Evening Cocktail",
      attireColors: ["#1E293B", "#F8FAFC", "#64748B"],
    }
  ],
  links: {
    whatsappNumber: "910000000000",
    rsvpCustomMessage: "Can't wait for the Goa wedding!",
    googleMapsUrl: "https://maps.google.com",
    calendar: {
      title: "Kabir & Jasmine Wedding",
      startDate: "2027-03-05T11:00:00Z",
      endDate: "2027-03-05T20:00:00Z",
      description: "Beachside Wedding",
    },
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3",
  }
};
