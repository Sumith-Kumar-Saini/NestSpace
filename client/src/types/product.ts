export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | "Free";
  image: string;
  category: "Physical" | "Digital";
  tags?: string[];
  slug: string;
  featured?: boolean;
}

export interface ProductDetail {
  id: string;
  heroImage: string;
  longDescription: string;
  features: string[];
  technicalSpecs: Record<string, string>;
  testimonials: { name: string; quote: string }[];
  relatedProductIds: string[];
  videoDemo?: string;
  preOrder?: boolean;
  stockCount?: number;
  digitalDownloadLink?: string;
}
