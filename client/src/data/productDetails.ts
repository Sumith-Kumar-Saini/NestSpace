import {
  DGLImage,
  DWGImage,
  ELSImage,
  FFDOImage,
  NDOImage,
  NMDKImageUpdate,
  PWImage,
} from "@/utils/image";

const ProductDetails = {
  "nest-modular-desk-kit": {
    id: "nest-modular-desk",
    heroImage: NMDKImageUpdate,
    longDescription:
      "Transform your workspace into a focused, flexible environment. FSC-certified oak and matte powder-coated steel, designed to adapt as your workflow evolves.",
    features: [
      "Magnetic cable management channels",
      "Adjustable monitor riser",
      "Snap-fit storage tiles",
      "Sustainable packaging",
      "Warm oak & matte black steel finish",
    ],
    technicalSpecs: {
      Dimensions: "140cm x 70cm x 75cm",
      Material: "FSC Oak, Steel",
      Weight: "26 kg",
      Warranty: "2 years",
    },
    testimonials: [
      {
        name: "Aayush, UX Designer",
        quote:
          "I finally feel excited to sit at my desk again. NestSpace transformed how I work.",
      },
    ],
    relatedProductIds: ["ergolift-stand", "desk-glow-light"],
    videoDemo: "/videos/nest-modular-desk-demo.mp4",
    preOrder: true,
    stockCount: 48,
  },
  "ergolift-laptop-stand": {
    id: "ergolift-stand",
    heroImage: ELSImage,
    longDescription:
      "Aluminum laptop stand that raises your screen to eye level, improves posture, and declutters your workspace.",
    features: [
      "Three adjustable angles",
      "Anti-slip silicone base",
      "Supports up to 17” laptops",
    ],
    technicalSpecs: {
      Material: "Aluminum Alloy",
      Weight: "1.2 kg",
      Foldable: "Yes",
    },
    testimonials: [
      {
        name: "Priya, Developer",
        quote: "Game changer for my posture during long coding sessions!",
      },
    ],
    relatedProductIds: ["nest-modular-desk", "focus-organizer"],
    stockCount: 120,
  },
  "desk-glow-mood-lamp": {
    id: "desk-glow-light",
    heroImage: DGLImage,
    longDescription:
      "Soft LED lamp with warm & cool presets, touch control, and minimalist design.",
    features: [
      "Touch sensitive dimming",
      "Two color temperature modes",
      "USB-C powered",
    ],
    technicalSpecs: { Height: "25cm", Power: "5W", Cable: "1.5m USB-C" },
    testimonials: [
      {
        name: "Rahul, Designer",
        quote: "Perfect lighting for late-night work without eye strain.",
      },
    ],
    relatedProductIds: ["nest-modular-desk", "productivity-wallpapers"],
    stockCount: 75,
  },
  "notion-desk-os": {
    id: "notion-desk-os",
    heroImage: NDOImage,
    longDescription:
      "All-in-one Notion dashboard: daily logs, rituals, focus tracker, and reflection journals for remote workers.",
    features: ["Task boards", "Weekly review template", "Deep work tracker"],
    technicalSpecs: { Format: "Notion Template", License: "Personal Use" },
    testimonials: [
      { name: "Meera, Writer", quote: "Made my daily planning effortless!" },
    ],
    relatedProductIds: ["deep-work-guide", "productivity-wallpapers"],
    digitalDownloadLink: "/downloads/notion-desk-os.zip",
  },
  "focusflow-desk-organizer": {
    id: "focus-organizer",
    heroImage: FFDOImage,
    longDescription:
      "Minimalist tray system to declutter your desk and keep essentials within reach.",
    features: [
      "Multi-compartment layout",
      "Anti-slip base",
      "Premium matte finish",
    ],
    technicalSpecs: {
      Dimensions: "30cm x 12cm x 3cm",
      Material: "ABS + Rubber",
      Weight: "350g",
    },
    testimonials: [
      {
        name: "Neha, Freelancer",
        quote: "Feels great to finally have a tidy desk without effort.",
      },
    ],
    relatedProductIds: ["nest-modular-desk", "ergolift-stand"],
    stockCount: 210,
  },
  "deep-work-rituals-guide": {
    id: "deep-work-guide",
    heroImage: DWGImage,
    longDescription:
      "Mini ebook to help structure your day, build rituals, and protect your focus as a remote worker.",
    features: ["PDF format", "Actionable exercises", "Printable templates"],
    technicalSpecs: { Pages: "18", Format: "PDF", License: "Personal Use" },
    testimonials: [
      {
        name: "Arjun, Marketer",
        quote: "Quick read with big impact on my daily routine!",
      },
    ],
    relatedProductIds: ["notion-desk-os", "productivity-wallpapers"],
    digitalDownloadLink: "/downloads/deep-work-guide.pdf",
  },
  "productivity-wallpapers": {
    id: "productivity-wallpapers",
    heroImage: PWImage,
    longDescription:
      "4K and ultrawide wallpaper pack to create a calm, focused digital workspace.",
    features: [
      "High-res 4K quality",
      "Neutral color palettes",
      "Multiple aspect ratios",
    ],
    technicalSpecs: {
      Resolution: "3840x2160+",
      Files: "12 images",
      Format: "JPG",
    },
    testimonials: [
      {
        name: "Simran, Copywriter",
        quote: "My screen feels calmer instantly.",
      },
    ],
    relatedProductIds: ["desk-glow-light", "deep-work-guide"],
    digitalDownloadLink: "/downloads/productivity-wallpapers.zip",
  },
  "dreamdesk-virtual-consult": {
    id: "dreamdesk-consult",
    heroImage: "/products/dreamdesk-consult-hero.jpg",
    longDescription:
      "Mock virtual consult to plan your ideal desk layout, complete with moodboard & curated links.",
    features: ["Personalized moodboard", "Link collection", "Expert tips"],
    technicalSpecs: { Delivery: "PDF + Links", Turnaround: "2 days" },
    testimonials: [
      {
        name: "Ravi, Content Creator",
        quote: "Helped me visualize and plan my perfect desk setup.",
      },
    ],
    relatedProductIds: ["nest-modular-desk", "ergolift-stand"],
  },
};

export default ProductDetails;
