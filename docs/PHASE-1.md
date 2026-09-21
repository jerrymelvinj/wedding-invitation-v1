# Phase 1: Concierge Pilot & Validation Specification

## 1. Objective
Validate commercial interest and user engagement for interactive, mobile-first wedding & milestone web invites by bundling them with existing decor clients and testing standalone conversion via a dedicated showcase page. Turnaround will be managed manually (concierge model) using hardcoded data files before building an automated backend.

---

## 2. Scope & Key Deliverables

### A. Template Library (3 Distinct Prototypes)
Build three responsive 9:16 mobile-first web invite templates accessible at distinct demo routes:
1. `/demo/kerala-kasavu`: Ivory & gold kasavu palette, subtle temple arch framing, classical acoustic sitar/flute backing.
2. `/demo/royal-mewar`: Crimson & antique gold foil, carved sandstone jharokha motif, shehnai/royal dhol ambient audio.
3. `/demo/modern-minimalist`: Linen texture, sea-salt tones, deckled torn paper framing, contemporary acoustic score.

### B. Common Template Architecture
Each demo route must share the core tactile UX engine:
- **Viewport:** `width: 100vw; min-height: 100dvh` on mobile; centered `max-w-[430px]` phone shell with ambient drop shadow on desktop viewports.
- **Physics:** Inertial momentum scrolling using Lenis (`syncTouch: true`).
- **Tactile Canvas:** Fixed SVG grain texture overlay with `mix-blend-mode: multiply` at 3.5% opacity.
- **Hero Screen:** Fullscreen envelope cover with an interactive wax seal button. Clicking triggers an upward flap slide and autoplays the audio track.
- **Itinerary Section:** Staggered card sequence displaying event title, time, venue, attire label, and 3-color palette swatches.
- **Docked Actions:** Fixed bottom glassmorphism bar featuring:
  - 1-tap Google Maps redirection.
  - "Add to Calendar" (.ics trigger or Google Calendar link generator).
  - Ambient audio play/pause toggle with visual indicator.
- **RSVP Conversion:** Primary CTA button preloading a formatted WhatsApp text message with guest count placeholders.

### C. Showcase & Discovery Hub (`/invites`)
A standalone landing page to showcase the product offering:
- **Hero:** Value proposition framing interactive stationery as "Living Invitations" tailored to match real event decor styling.
- **Live Interactive Previews:** Interactive cards linking to each demo route with desktop QR codes for quick mobile previewing.
- **Value Comparison Matrix:** Visual comparison of static PDF/video invites vs. interactive web invites (RSVP tracking, live maps, music, calendar sync).
- **Concierge Inquiry Form:** Lightweight lead capture form connected to WhatsApp / email capturing:
  - Host / Couple Names
  - Event Type & Target Date
  - Desired Style / Decor Palette
  - Contact Number

---

## 3. Data Structure Contract (`src/data/types.ts`)

Every template will consume a uniform data interface to ensure easy transition to a dynamic database in Phase 2:

```typescript
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
```

## 4. Technical Stack Checklist
- Framework: Next.js (App Router)
- Styling: Tailwind CSS v3/v4
- Animation Engine: Framer Motion (useScroll, useTransform, AnimatePresence)
- Scroll Physics: lenis
- Iconography: lucide-react
- Fonts (Google Fonts): Cormorant Garamond (font-serif), Pinyon Script (font-script), Plus Jakarta Sans (font-sans)

## 5. Execution Steps (Checklist)
- [ ] Step 1: Create src/data/types.ts and set up mock data objects for Melvin & Nikitha.
- [ ] Step 2: Finalize the shared mobile wrapper layout (components/MobileFrame.tsx).
- [ ] Step 3: Implement the reusable envelope unfold animation (components/EnvelopeCover.tsx).
- [ ] Step 4: Build the sticky floating action dock (components/QuickActionDock.tsx).
- [ ] Step 5: Assemble the 3 demo pages (/demo/kerala-kasavu, /demo/royal-mewar, /demo/modern-minimalist).
- [ ] Step 6: Build the marketing showcase page at app/invites/page.tsx.
- [ ] Step 7: Run end-to-end mobile audits on iOS Safari and Android Chrome (verifying touch scroll and audio playback behavior).

## 6. Success Metrics for Phase 1
At least 5 prospective decor clients review the interactive demo.
Direct feedback captured on loading times and ease of WhatsApp RSVP.
Baseline pricing validation (assessing conversion between ₹2,499 and ₹4,999 standalone, or complimentary tier inclusion).
