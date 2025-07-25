import type { Product } from "@/types/product";
import {
  ELSImage,
  NMDKImageUpdate,
  DGLImage,
  FFDOImage,
  NDOImage,
  DWGImage,
  PWImage,
} from "@/utils/image";

const products: Product[] = [
  {
    id: "nest-modular-desk",
    name: "NestSpace Modular Desk Kit",
    description:
      "A minimal, reconfigurable desk system designed for remote creatives. Crafted with FSC-certified oak and powder-coated steel.",
    price: 2499,
    image: NMDKImageUpdate,
    category: "Physical",
    tags: ["New", "Staff Pick"],
    slug: "nest-modular-desk-kit",
    featured: true,
  },
  {
    id: "ergolift-stand",
    name: "ErgoLift Laptop Stand",
    description:
      "Adjustable aluminum laptop stand that improves posture and declutters your desk.",
    price: 399,
    image: ELSImage,
    category: "Physical",
    tags: ["Best Seller"],
    slug: "ergolift-laptop-stand",
    featured: false,
  },
  {
    id: "desk-glow-light",
    name: "DeskGlow Mood Lamp",
    description:
      "Soft LED lighting with warm & cool presets — create the perfect ambiance for deep work.",
    price: 189,
    image: DGLImage,
    category: "Physical",
    tags: ["Free Shipping"],
    slug: "desk-glow-mood-lamp",
    featured: true,
  },
  {
    id: "focus-organizer",
    name: "FocusFlow Desk Organizer",
    description:
      "Minimal tray system to organize cables, pens, and post-its. Keeps visual noise out.",
    price: 119,
    image: FFDOImage,
    category: "Physical",
    slug: "focusflow-desk-organizer",
  },
  {
    id: "notion-desk-os",
    name: "Notion Desk OS",
    description:
      "A full Notion dashboard for remote workers. Includes task boards, rituals, daily logs & reflections.",
    price: "Free",
    image: NDOImage,
    category: "Digital",
    tags: ["Free", "Staff Pick"],
    slug: "notion-desk-os",
    featured: true,
  },
  {
    id: "deep-work-guide",
    name: "The Deep Work Rituals Guide",
    description:
      "A downloadable mini ebook to help you reclaim your focus and structure your remote day.",
    price: "Free",
    image: DWGImage,
    category: "Digital",
    tags: ["Free"],
    slug: "deep-work-rituals-guide",
  },
  {
    id: "productivity-wallpapers",
    name: "Productivity Wallpaper Pack",
    description:
      "A calming set of desktop wallpapers designed to promote focus and clarity. 4K & Ultrawide.",
    price: 29,
    image: PWImage,
    category: "Digital",
    slug: "productivity-wallpapers",
    featured: false,
  },
];

export default products;
