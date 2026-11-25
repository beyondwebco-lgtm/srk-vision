/**
 * Centralized dataset and content configurations for SRK Visions
 */

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "colour-correction",
    number: "01",
    title: "Professional Colour Correction",
    shortDesc: "Balancing exposure, contrast, white balance, and skin tones with batch consistency.",
    fullDesc:
      "Our colour correction process enhances every image by adjusting exposure, brightness, contrast, white balance, and colour tones. We refine natural skin tones, balance highlights and shadows, and create a consistent visual finish across complete photo collections.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Exposure correction",
      "White balance adjustment",
      "Natural skin tone enhancement",
      "Professional colour grading",
      "Batch colour consistency",
    ],
    deliverables: [
      "Full gallery colour cohesion",
      "Highlight & shadow dynamic balance",
      "High-resolution TIFF and print/web ready JPEGs",
      "Custom tone profiles based on camera sensor"
    ],
    idealFor: "Wedding photographers, event studios, fashion lookbooks, and high-volume commercial shoots requiring absolute colour harmony."
  },
  {
    id: "02",
    slug: "high-end-retouching",
    number: "02",
    title: "High-End Retouching",
    shortDesc: "Flawless skin texture, blemish removal, and realistic portrait perfection.",
    fullDesc:
      "Our high-end retouching process focuses on refining skin texture, removing blemishes, correcting imperfections, and enhancing facial details with precision. We carefully balance skin tones and perfect every detail while preserving natural beauty for a flawless, realistic, and luxurious finish.",
    heroImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Natural skin retouching",
      "Blemish removal",
      "Facial detail enhancement",
      "Background cleanup",
      "Portrait refinement",
    ],
    deliverables: [
      "Frequency separation skin texture preservation",
      "Dodge & Burn micro-contouring",
      "Eye, iris, and hair stray refinement",
      "Garment crease and subtle distraction elimination"
    ],
    idealFor: "Beauty editorials, bridal close-ups, celebrity portraits, magazine covers, and luxury commercial campaigns."
  },
  {
    id: "03",
    slug: "image-culling",
    number: "03",
    title: "Image Culling & Selection",
    shortDesc: "Curating the finest moments, eliminating blur and duplicates from large galleries.",
    fullDesc:
      "Our professional image culling process involves carefully reviewing every photograph to identify the best moments, expressions, compositions, and overall image quality. We eliminate duplicates, blurred shots and unwanted images while selecting the finest photographs to ensure a consistent, well-organized final collection.",
    heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Best-shot selection",
      "Duplicate removal",
      "Blurred image elimination",
      "Expression and composition analysis",
      "Wedding collection organization",
    ],
    deliverables: [
      "Curated 5-star story arc selection",
      "Chronological sequence tagging",
      "Lightroom catalog / Capture One session delivery",
      "Strict reduction of 2,000+ RAW images to cohesive highlight sets"
    ],
    idealFor: "Busy destination wedding photographers, documentary event shooters, and studios handling multi-day celebrations."
  },
  {
    id: "04",
    slug: "instagram-designing",
    number: "04",
    title: "Instagram & Social Media Designing",
    shortDesc: "Seamless carousels, editorial story layouts, and impactful visual branding.",
    fullDesc:
      "We create visually stunning Instagram posts that tell a unique story through creative layouts, elegant designs, and thoughtful storytelling. Every post is carefully crafted to capture emotions, highlight memorable moments, and deliver a premium visual experience.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Instagram carousel designs",
      "Photography portfolio posts",
      "Wedding storytelling layouts",
      "Social media creative designing",
      "Consistent visual branding",
    ],
    deliverables: [
      "Seamless panoramic carousel splits",
      "Editorial typography accents & subtle framing",
      "High-contrast feed optimization for mobile displays",
      "Custom grid planning and aesthetic consistency"
    ],
    idealFor: "Photographers seeking viral reach, wedding creators building an alluring digital brand, and luxury lifestyle creators."
  },
  {
    id: "05",
    slug: "album-designing",
    number: "05",
    title: "Professional Album Designing",
    shortDesc: "Custom luxury wedding albums, distraction removal, and print-ready spreads.",
    fullDesc:
      "We create customized, professionally designed albums in the dimensions required by our clients. Our process includes basic colour correction, shadow adjustments, skin tone refinement, skin texture smoothing, and removal of distracting elements from wedding stage backgrounds.",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Luxury wedding albums",
      "Custom album dimensions",
      "Editorial storytelling layouts",
      "Image enhancement",
      "Background distraction removal",
      "Print-ready album files",
    ],
    deliverables: [
      "Spreads formatted to your print lab specifications",
      "Careful negative-space editorial flow",
      "Full stage distraction & pole/cable removal",
      "CMYK print profile calibration with bleed tolerances"
    ],
    idealFor: "Premium wedding studios, bride & groom heirloom albums, fine art publishers, and luxury coffee-table books."
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  date: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Rahul",
    location: "Hyderabad",
    date: "December 2024",
    rating: 5,
    quote:
      "I am genuinely impressed with the editing quality from SRK Visions. The final photos looked clean, professional, and natural. The skin retouching was smooth without making the face look artificial, and the colours were balanced beautifully. Even the smallest details were handled carefully. The original look of the photo was preserved while making the entire image look much more polished.",
  },
  {
    id: "2",
    name: "Ajun",
    location: "Kerala",
    date: "February 2024",
    rating: 5,
    quote:
      "What stood out to me was the excellent colour grading and overall consistency of the images. The lighting looked balanced, the colours felt rich without being overdone, and the final photos had a professional finish.",
  },
  {
    id: "3",
    name: "Manoj",
    location: "Texas, USA",
    date: "November 2023",
    rating: 5,
    quote:
      "SRK Visions has a strong creative direction, with an emphasis on composition, lighting, colour, and fine details. I particularly like the idea of maintaining a natural look while giving the image a more premium finish.",
  },
  {
    id: "4",
    name: "Shiva",
    location: "Hyderabad",
    date: "January 2024",
    rating: 5,
    quote:
      "The editor understood exactly which images were worth keeping. From candid expressions to the best compositions, every selection felt thoughtful and purposeful. Excellent attention to detail and a very professional approach.",
  },
  {
    id: "5",
    name: "Rohit",
    location: "Vizag",
    date: "March 2024",
    rating: 5,
    quote:
      "Excellent Instagram post editing! Creative designs, stunning colours, and a professional finish. SRK Visions makes every post stand out with quality and attention to detail.",
  },
  {
    id: "6",
    name: "Naveen",
    location: "Vizag",
    date: "October 2024",
    rating: 5,
    quote:
      "As a photographer, I'm really impressed with the album designing by SRK Visions. The layouts are creative, the photo selection is excellent, and every page looks clean and professional.",
  },
];

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const BEFORE_AFTER_ITEMS: BeforeAfterPair[] = [
  {
    id: "ba-1",
    title: "Editorial Skin & Tone Retouching",
    category: "High-End Retouching",
    description: "Preserving natural pore texture while gently refining blemishes and balancing complexion warmth.",
    // Matching pair with authentic warm editorial grading & texture enhancement
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop&sat=-40&con=10",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop&sat=15&con=20",
  },
  {
    id: "ba-2",
    title: "Cinematic Wedding Colour Grading",
    category: "Colour Correction",
    description: "Lifting suppressed shadow detail, balancing highlights and harmonizing golden-hour tones.",
    beforeImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop&sat=-30&bri=-10",
    afterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop&sat=20&bri=5",
  },
  {
    id: "ba-3",
    title: "Bridal Portrait Refinement",
    category: "Portrait Retouching",
    description: "Precision micro-contrast contouring on eyes and jewelry with soft tonal background suppression.",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop&sat=-25",
    afterImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop&sat=15",
  },
  {
    id: "ba-4",
    title: "Stage Background & Lighting Cleanliness",
    category: "Background Cleanup",
    description: "Eliminating background haze, balancing spotlight exposure and restoring subject prominence.",
    beforeImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop&sat=-35&con=-15",
    afterImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop&sat=15&con=15",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Weddings" | "Portraits" | "Colour Correction" | "High-End Retouching" | "Album Designing" | "Social Media";
  clientStudio?: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  description: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "The Royal Nizam Palace Vows",
    category: "Weddings",
    clientStudio: "Weddings by Arun, Hyderabad",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    description: "Complete 1,400 image wedding collection colour graded with timeless champagne and warm gold tones."
  },
  {
    id: "p2",
    title: "High-Fashion Editorial Portrait",
    category: "High-End Retouching",
    clientStudio: "Lumina Studios, Mumbai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    description: "Magazine cover beauty retouching using non-destructive frequency separation and micro Dodge & Burn."
  },
  {
    id: "p3",
    title: "Kashmir Lake Twilight Ceremony",
    category: "Colour Correction",
    clientStudio: "Silverline Photography, Delhi",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    aspect: "wide",
    description: "Shadow retrieval and atmospheric colour grading on low-light mountain reception photographs."
  },
  {
    id: "p4",
    title: "Heritage Heirloom 12x36 Spread",
    category: "Album Designing",
    clientStudio: "Epic Stories, Hyderabad",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    aspect: "wide",
    description: "Luxury flush-mount wedding album with custom typography, clean negative space, and colour balance."
  },
  {
    id: "p5",
    title: "Golden Hour Bride & Groom Session",
    category: "Weddings",
    clientStudio: "Stories by Joseph, Kerala",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
    description: "Subtle sky gradient recovery, fabric detailing, and warm golden tone harmonization."
  },
  {
    id: "p6",
    title: "Modern Studio Fine-Art Beauty",
    category: "Portraits",
    clientStudio: "Pixelcraft, Bangalore",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    description: "Precision skin tone balancing, hair cleanup, and realistic pore texture preservation."
  },
  {
    id: "p7",
    title: "Seamless Instagram Narrative Story",
    category: "Social Media",
    clientStudio: "SRK Visions Signature",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
    description: "10-slide continuous panoramic Instagram carousel with subtle typography highlights."
  },
  {
    id: "p8",
    title: "Sunset Coastal Pre-Wedding",
    category: "Colour Correction",
    clientStudio: "Visual Echoes, Vizag",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
    aspect: "wide",
    description: "Haze reduction and dynamic range expansion across a sequence of 40 beach portrait files."
  },
  {
    id: "p9",
    title: "Traditional South Indian Muhurtham",
    category: "Weddings",
    clientStudio: "Kalyanam Studios, Hyderabad",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    description: "Authentic silk saree colour accuracy, gold jewelry sparkle refinement, and skin tone restoration."
  },
  {
    id: "p10",
    title: "Minimalist Coffee Table Monograph",
    category: "Album Designing",
    clientStudio: "Studio 9, Chennai",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    aspect: "wide",
    description: "Fine art editorial layout with museum-grade alignment and clean sans-serif typography."
  },
  {
    id: "p11",
    title: "Monochrome Studio Contrast Study",
    category: "Portraits",
    clientStudio: "Vogue Lens, Hyderabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    description: "Rich silver-halide black and white tonality conversion with bespoke midtone contrast curves."
  },
  {
    id: "p12",
    title: "Viral Wedding Reel Thumbnail & Carousel",
    category: "Social Media",
    clientStudio: "Momentum Media, Hyderabad",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
    description: "High-engagement social layouts designed to stop thumb scrolling on mobile feeds."
  }
];

export const INSTAGRAM_ITEMS = [
  {
    id: "ig-1",
    caption: "The grace of timeless bridal moments. Colour graded with refined warmth and balanced highlights.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    likes: "1.4k"
  },
  {
    id: "ig-2",
    caption: "Skin texture stays authentic. Never blurred, never artificial. The art of high-end portrait retouching.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    likes: "2.1k"
  },
  {
    id: "ig-3",
    caption: "Golden hour romance perfected. Subtle flare preservation and shadow recovery in full harmony.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    likes: "980"
  },
  {
    id: "ig-4",
    caption: "Turning 3,000 RAW clicks into a breathtaking 400-shot love story. Our culling process in action.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    likes: "1.8k"
  },
  {
    id: "ig-5",
    caption: "Every album spread tells an unforgettable story. Handcrafted layouts with luxury typography.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    likes: "1.2k"
  },
  {
    id: "ig-6",
    caption: "Studio elegance captured in natural black & white. Depth, emotion, and flawless midtones.",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    likes: "3.4k"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Order & Brief Review",
    description: "We organize your requirements, references, deadlines, and project details before editing begins.",
    details: "Upload your test frames, raw selection, or moodboard. We confirm camera profiles, deliverable resolutions, and exact deadline milestones."
  },
  {
    step: "02",
    title: "Professional Editing",
    description: "Our editor transforms your brief into a refined visual result while following your requested style.",
    details: "Specialist editors carry out meticulous colour grading, frequency separation retouching, and narrative pacing according to your studio identity."
  },
  {
    step: "03",
    title: "Detailed Rechecking",
    description: "A separate reviewer checks details, consistency, colours, alignment, and visible editing errors.",
    details: "An independent senior art director audits tone parity across sequences, monitor calibration checks, and zoom audits to ensure zero halos or banding."
  },
  {
    step: "04",
    title: "Final Cross-Check & Delivery",
    description: "We verify the final files against your requirements before preparing them for client delivery.",
    details: "High-resolution master files and web-ready copies are packaged securely and shared via high-speed cloud drive, ready for immediate client handoff."
  }
];

export const STUDIO_INFO = {
  name: "SRK Visions",
  tagline: "You Capture the Moment. We Perfect the Story.",
  establishedYear: 2015,
  phone: "+91 70324 24878",
  phoneFormatted: "+91 70324 24878",
  phoneRaw: "917032424878",
  email: "srkvisions05@gmail.com",
  address: "Mathaji Nagar, Brahman Wadi, Begumpet, Hyderabad, Telangana, India – 500016",
  addressShort: "Begumpet, Hyderabad – 500016",
  instagramHandle: "@srk.visions",
  instagramUrl: "https://www.instagram.com/srk.visions/",
  whatsappUrl: "https://wa.me/917032424878",
  googleMapsUrl: "https://maps.google.com/?q=Mathaji+Nagar+Begumpet+Hyderabad+500016",
  stats: [
    { label: "Company Collaborations", value: "25+", note: "Leading wedding & studio partners" },
    { label: "Customer Satisfaction", value: "99.9%", note: "Verified client feedback" },
    { label: "Projects Delivered", value: "1,000+", note: "Across India & internationally" },
    { label: "Established Year", value: "2015", note: "A decade of post-production mastery" },
  ]
};
