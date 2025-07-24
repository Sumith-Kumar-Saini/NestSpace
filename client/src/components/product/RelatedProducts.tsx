import React from "react";
import { motion } from "framer-motion";
import products from "@/data/products.ts";
import type { Product } from "@/types/product";
import { useNavigate } from "react-router";

interface RelatedProductsProps {
  relatedIds: string[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ relatedIds }) => {
  const navigate = useNavigate();

  const relatedProducts = products.filter((p: Product) =>
    relatedIds.includes(p.id)
  );

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="py-12 px-4 sm:px-8 bg-charcoal text-eggshell"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-grotesk text-2xl sm:text-3xl mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              className="bg-eggshell text-charcoal p-4 rounded-lg shadow-md"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={()=>navigate(`/product/${product.slug}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-grotesk text-lg">{product.name}</h3>
              <p className="font-satoshi text-sm text-charcoal">
                {product.description}
              </p>
              <p className="font-grotesk text-lg mt-2">
                {typeof product.price === "string"
                  ? product.price
                  : `$${product.price}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RelatedProducts;
