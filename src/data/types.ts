export interface WeddingInviteData {
  slug: string;
  themeId: "kerala-kasavu" | "royal-mewar" | "coastal-minimal";
  couple: {
    initials: string;
    partnerOne: string;
    partnerTwo: string;
    weddingDate: string;
    sealText: string;
    heroImage: string;
    blessingText: string;
    invitationNote: string;
  };
  events: Array<{
    id: string;
    title: string;
    date: string;
    time: string;
    venueName: string;
    venueAddress?: string;
    attireTitle: string;
    attireColors: string[];
  }>;
  links: {
    whatsappNumber: string;
    rsvpCustomMessage: string;
    googleMapsUrl: string;
    calendar: {
      title: string;
      startDate: string; // ISO format
      endDate: string;   // ISO format
      description: string;
    };
    audioUrl: string;
  };
}
