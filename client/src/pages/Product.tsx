import type { JSX } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import products from "@/data/products.ts";
import productDetails from "@/data/productDetails.ts";
import HeroBanner from "@/components/product/HeroBanner";
import LongDescription from "@/components/product/LongDescription";
import FeatureList from "@/components/product/FeatureList";
import SpecsTable from "@/components/product/SpecsTable";
import Testimonial from "@/components/product/Testimonial";
import RelatedProducts from "@/components/product/RelatedProducts";
import type { Product, ProductDetail } from "@/types/product";

const ProductPage: () => JSX.Element = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p: Product) => p.slug === slug);
  const detail = productDetails[
    slug as keyof typeof productDetails
  ] as ProductDetail;

  if (!product || !detail) {
    return (
      <div className="text-center text-charcoal font-grotesk">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-eggshell"
    >
      <HeroBanner product={product} detail={detail} />
      <LongDescription description={detail.longDescription} />
      <FeatureList features={detail.features} />
      <SpecsTable specs={detail.technicalSpecs} />
      <Testimonial testimonial={detail.testimonials[0]} />
      <RelatedProducts relatedIds={detail.relatedProductIds} />
    </motion.div>
  );
};

export default ProductPage;
