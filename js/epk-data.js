// ---------------------------------------------------------------
// Neon Belly: EPK (Electronic Press Kit) content.
//
// Everything the /epk page renders dynamically lives in this one
// object. To update the page, edit the arrays/fields below; no HTML
// or JS elsewhere needs to change. js/script.js reads this object and
// builds the video, artist-tag, highlight, photo, and download
// sections from it.
//
// Paths are relative to epk/index.html (one folder below the site
// root), matching the rest of the site's member-page convention.
// ---------------------------------------------------------------
var EPK_DATA = {
  bandName: "Neon Belly",
  location: "Franklin / Nashville, Tennessee",
  tagline: "90s & 2000s Hard Rock, Metal & Grunge",
  bookingEmail: "neonbellytn@gmail.com",

  socials: {
    website: "https://neonbellyband.com/",
    instagram: "https://www.instagram.com/neonbelly_band",
    facebook: "https://www.facebook.com/neonbellyTN"
  },

  // First entry is the large featured video. Anything after it renders
  // as smaller cards below. Each needs only a YouTube video ID (the
  // part after "v=" in a youtube.com/watch?v=... URL) and a title.
  // Short highlight clips only, not the full-length set: a 2-3 minute
  // song gets watched by a promoter, a 2-hour set doesn't.
  videos: [
    { id: "8cIlNQkQ5_c", title: "Everlong, Live at Kimbro's" },
    { id: "71FY261ZnFA", title: "Say It Ain't So, Live at Kimbro's" },
    { id: "aw7M0C_NbMg", title: "Plush, Live at Kimbro's" }
  ],

  // Plain-text only, no logos or album art, per band policy. This is
  // musical territory, not a claim of affiliation; the page prints an
  // explicit non-affiliation note under this list.
  artists: [
    "Alice in Chains", "Metallica", "Nirvana", "Stone Temple Pilots",
    "Tool", "Soundgarden", "Foo Fighters", "AC/DC", "Pearl Jam", "Judas Priest"
  ],

  // Short, factual booking highlights only, nothing here should be
  // added unless it is independently verifiable. No "sold out",
  // no invented attendance/press/awards.
  //
  // featured:true highlights render as a bigger callout above the
  // regular grid, reserved for whatever's most persuasive to a
  // promoter right now (currently: real turnout with no prior fanbase,
  // and a venue asking the band back). Everything else renders in the
  // plain grid below.
  highlights: [
    { value: "70+", label: "Attendees at debut show, The Pond (no prior fanbase)", featured: true },
    { value: "Invited Back", label: "The Pond re-booked Neon Belly after the debut", featured: true },
    { value: "Franklin / Nashville, TN", label: "Home market" },
    { value: "Up to 3 Hours", label: "Headline / bar set length" },
    { value: "Kimbro's & The Pond", label: "Franklin, TN venues played" }
  ],

  // Verbatim venue/press quotes only, with the real source named.
  // Add an href only when there is a real link to the post.
  quotes: [
    { text: "Neon Belly tore it up, the bar was packed wall to wall.", source: "The Pond, on Instagram" }
  ],

  // Real, existing site photography only. alt text should describe
  // what's in the shot for accessibility.
  photos: [
    { src: "../images/optimized/blog/pond-band-1280.webp", alt: "Neon Belly, the full lineup, on stage at The Pond" },
    { src: "../images/optimized/blog/kimbros-live-1100.webp", alt: "Neon Belly performing live at Kimbro's" },
    { src: "../images/optimized/fans/DSC03768-2.jpg", alt: "Neon Belly live on stage, stage lighting" },
    { src: "../images/optimized/fans/IMG_1844.jpg", alt: "Neon Belly performing live" },
    { src: "../images/optimized/fans/IMG_1845.jpg", alt: "Neon Belly performing live" },
    { src: "../images/optimized/fans/IMG_1850.jpg", alt: "Neon Belly performing live" }
  ],

  // The printable one-page booking sheet, in its own section with a
  // preview thumbnail per version so a promoter can see which one
  // they're getting before they download it.
  onesheets: [
    { label: "Color", note: "Full brand colors", thumb: "../images/epk/neon-belly-one-sheet-thumb-600.webp", href: "../images/epk/neon-belly-one-sheet.pdf" },
    { label: "Black & White", note: "White background, low ink", thumb: "../images/epk/neon-belly-one-sheet-bw-thumb-600.webp", href: "../images/epk/neon-belly-one-sheet-bw.pdf" }
  ],

  // available:true items link to a real file already in the repo.
  // available:false items are NOT linked to a real file; the href is
  // a documented placeholder path for wherever that asset should land
  // once it exists, and the button renders disabled ("Coming Soon")
  // rather than a dead link. Flip available to true once the real
  // file is added at that path.
  downloads: [
    { label: "Band Photo (Horizontal)", note: "Full lineup, live at The Pond", href: "../images/optimized/blog/pond-band-1280.webp", available: true },
    { label: "Band Photo (Vertical)", note: "Not yet available", href: "../images/epk/band-photo-vertical.jpg", available: false },
    { label: "Logo (Transparent PNG)", note: "For dark or light backgrounds", href: "../images/neon-belly-logo-transparent.png", available: true },
    { label: "Logo (Full Color, High-Res)", note: "Black background", href: "../images/neon-belly-logo.jpg", available: true },
    { label: "Stage Plot & Input List", note: "Not yet available (PDF)", href: "../images/epk/neon-belly-stage-plot.pdf", available: false }
  ],

  // Only fields with real, supplied information are shown with a
  // value; everything else says "Contact for details" rather than
  // guessing at requirements nobody has confirmed.
  technical: [
    { label: "Performers", value: "5 (vocals, two guitars, bass, drums)" },
    { label: "Typical Set Length", value: "Up to 3 hours" },
    { label: "Area Served", value: "Franklin &amp; Brentwood, plus Spring Hill, Thompson's Station, Cool Springs, Murfreesboro, and Leiper's Fork" },
    { label: "Stage Footprint", value: "Contact for details" },
    { label: "Backline Notes", value: "Contact for details" },
    { label: "PA Requirements", value: "Contact for details" },
    { label: "Monitoring", value: "Contact for details" }
  ]
};
