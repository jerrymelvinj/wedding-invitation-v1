import { WeddingInviteData } from "./types";

export const mockInviteData: WeddingInviteData = {
  slug: "melvin-jona",
  themeId: "kerala-kasavu", // Using Kerala Kasavu for their template
  couple: {
    initials: "M & N",
    partnerOne: "Melvin",
    partnerTwo: "Jona",
    weddingDate: "12th December 2030",
    sealText: "OPEN",
    heroImage: "/hero-image.jpg",
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
    whatsappNumber: "918248604075",
    rsvpCustomMessage: "Hi Melvin & Nikitha! We received your invitation and would love to attend the wedding. Guest count: [2]",
    googleMapsUrl: "https://aadisaktthiresorts.com/",
    calendar: {
      title: "Wedding Celebration of Melvin & Nikitha",
      startDate: "2030-12-12T04:00:00Z", // 09:30 IST
      endDate: "2030-12-12T17:30:00Z",   // 23:00 IST
      description: "Join us to celebrate the union of Melvin and Nikitha!",
    },
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
  }
};
