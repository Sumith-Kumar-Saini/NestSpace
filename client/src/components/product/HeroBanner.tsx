import React from "react";
import { motion } from "framer-motion";
import type { Product, ProductDetail } from "@/types/product";

interface HeroBannerProps {
  product: Product;
  detail: ProductDetail;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ product, detail }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-charcoal text-eggshell py-16 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-grotesk text-4xl sm:text-5xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="font-satoshi text-lg mb-6 text-softGray">
            {product.description}
          </p>
          <p className="font-grotesk text-2xl mb-6">
            {typeof product.price === "string"
              ? product.price
              : `$${product.price}`}
          </p>
          <div className="flex gap-4">
            {detail.digitalDownloadLink ? (
              <a
                href={detail.digitalDownloadLink}
                className="bg-sandBrown text-charcoal font-satoshi px-6 py-3 rounded hover:bg-glowPeach transition"
              >
                Download Now
              </a>
            ) : (
              <button
                className="bg-sandBrown text-charcoal font-satoshi px-6 py-3 rounded hover:bg-glowPeach transition"
                aria-label={detail.preOrder ? "Pre-Order Now" : "Add to Cart"}
              >
                {detail.preOrder ? "Pre-Order Now" : "Add to Cart"}
              </button>
            )}
          </div>
          {detail.preOrder && (
            <span className="inline-block mt-4 bg-glowPeach text-charcoal font-satoshi text-sm px-4 py-1 rounded-full">
              Pre-Order
            </span>
          )}
          {detail.stockCount && detail.stockCount < 50 && (
            <span className="inline-block mt-4 bg-glowPeach text-charcoal font-satoshi text-sm px-4 py-1 rounded-full">
              Only {detail.stockCount} left
            </span>
          )}
        </div>
        <img
          src={detail.heroImage}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default HeroBanner;
