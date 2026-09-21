import { WeddingInviteData } from "./types";

export const mockKeralaKasavu: WeddingInviteData = {
  slug: "kerala-kasavu-demo",
  themeId: "kerala-kasavu",
  couple: {
    initials: "A & S",
    partnerOne: "Aditya",
    partnerTwo: "Shruti",
    weddingDate: "15th January 2027",
    sealText: "OPEN",
    heroImage: "https://images.unsplash.com/photo-1610174336214-388a101267f5?auto=format&fit=crop&q=80&w=1000",
    blessingText: "With the grace of our ancestors",
    invitationNote: "We invite you to witness the union of our families and celebrate our new journey together.",
  },
  events: [
    {
      id: "haldi",
      title: "Haldi",
      date: "14th Jan 2027",
      time: "10:00 AM",
      venueName: "Backwater Resort, Kumarakom",
      attireTitle: "Yellows & Whites",
      attireColors: ["#F5A623", "#FFFFFF", "#FDFBF7"],
    },
    {
      id: "muhurtham",
      title: "Muhurtham",
      date: "15th Jan 2027",
      time: "09:15 AM",
      venueName: "Sree Krishna Temple, Guruvayur",
      attireTitle: "Traditional Kasavu",
      attireColors: ["#F7F5EE", "#C5A059", "#000000"],
    }
  ],
  links: {
    whatsappNumber: "910000000000",
    rsvpCustomMessage: "Hello! We would love to attend.",
    googleMapsUrl: "https://maps.google.com",
    calendar: {
      title: "Aditya & Shruti Wedding",
      startDate: "2027-01-15T04:00:00Z",
      endDate: "2027-01-15T12:00:00Z",
      description: "Wedding Ceremony",
    },
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3",
  }
};
