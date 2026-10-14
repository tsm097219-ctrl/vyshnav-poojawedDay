// Centralized Wedding Invitation Configuration
// All wedding information is configurable in this one file

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: "Vyshnav",
    bride: "Pooja",
    namesFormatted: "Vyshnav & Pooja",
    auspiciousHeading: "Sreerastu Subhamastu",
    invitationGreeting: "TOGETHER WITH THEIR FAMILIES\nWE WARMLY INVITE YOU TO THE WEDDING OF",
    signatureText: "With love and blessings",
  },

  // Event Date & Time (Target: Sunday, December 13, 2026 at 6:00 AM IST)
  event: {
    dayOfWeek: "SUNDAY",
    dateFormatted: "13 DECEMBER 2026",
    timeFormatted: "6:00 AM – 7:00 AM",
    timeZone: "IST (Indian Standard Time)",
    // ISO string for Dec 13, 2026 06:00:00 +05:30
    targetDateISO: "2026-12-13T06:00:00+05:30",
    
    // Calendar Event Details (for Add to Calendar)
    title: "Wedding of Vyshnav & Pooja",
    description: "Join us in celebrating the wedding ceremony of Vyshnav and Pooja at Guruvayoor Ambalam, Thrissur, Kerala.",
    location: "Guruvayoor Ambalam, Guruvayoor, Thrissur, Kerala, India",
    startDateTimeISO: "20261213T003000Z", // 06:00 IST in UTC is 00:30 UTC
    endDateTimeISO: "20261213T013000Z",   // 07:00 IST in UTC is 01:30 UTC
  },

  // Venue Information
  venue: {
    name: "GURUVAYOOR AMBALAM",
    nameDisplay: "Guruvayoor Ambalam",
    location: "Guruvayoor, Thrissur, Kerala",
    fullAddress: "Guruvayur Temple Outer Ring Rd, Guruvayur, Kerala 680101",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Guruvayoor+Thrissur+Kerala",
  },

  // Story Section Details
  story: {
    sectionTitle: "OUR STORY",
    storyHeading: "Two Hearts, One Path",
    paragraphs: [
      "From the first moment we met, life felt a little more beautiful. Through every laugh, lesson and little moment, we found something rare – a best friend, a partner, and a home in each other.",
      "Now, we step into a new chapter, with your blessings and love."
    ]
  },

  // RSVP Contact Information
  rsvp: {
    heading: "RSVP",
    subheading: "Your presence will make our day even more special.",
    buttonText: "Let Us Know",
    // Configurable WhatsApp contact phone number (Leave empty or set actual international format number e.g. "919876543210")
    // If empty, the website prompts the guest to copy the RSVP message or enter the host's number
    whatsappNumber: "", 
    defaultHostName: "Vyshnav & Pooja",
  },

  // Background Music
  music: {
    audioSrc: "/audio/wedding_song.mp3",
    title: "Jeevamshamayi — Theevandi",
  },

  // Gallery Photos
  gallery: [
    {
      id: 1,
      src: "/assets/gallery_nilavilakku.jpg",
      title: "Sacred Nilavilakku",
      caption: "The traditional brass oil lamp whose gentle flame brings light, prosperity, and divine presence to the wedding mandapam.",
    },
    {
      id: 2,
      src: "/assets/gallery_temple.jpg",
      title: "Guruvayoor Ambalam",
      caption: "The sacred abode of Guruvayoorappan, steeped in timeless spiritual sanctity and traditional Kerala temple architecture.",
    },
    {
      id: 3,
      src: "/assets/gallery_jasmine.jpg",
      title: "Jasmine Garlands (Mulla Poo Mala)",
      caption: "Fragrant, freshly strung white jasmine garlands symbolizing purity, devotion, and auspicious beginnings.",
    },
    {
      id: 4,
      src: "/assets/gallery_uruli.jpg",
      title: "Uruli & Sacred Offerings",
      caption: "Traditional bell-metal Uruli filled with floating holy water, pink lotus petals, thulasi, and betel leaves for blessings.",
    },
  ],
};
