import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[var(--color-softGray)]"
    >
      <Link to={`/product/${product.slug}`} className="block group">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2 font-[var(--font-satoshi)] text-[var(--color-charcoal)]">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="text-sm font-medium">
              {product.price === "Free" ? "Free" : `$${product.price}`}
            </span>
          </div>

          {/* Tag badges */}
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[var(--color-glowPeach)] text-[var(--color-charcoal)] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            {product.featured && (
              <span className="text-xs bg-[var(--color-glowPeach)] px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>

          <button
            className="mt-3 inline-block text-sm font-medium text-white bg-[var(--color-sandBrown)] px-4 py-2 rounded-lg hover:opacity-90 transition"
            onClick={(e) => e.preventDefault()} // disable for now, since wrapped in <Link>
          >
            {product.price === "Free" ? "View" : "Pre-order"}
          </button>
        </div>
      </Link>
    </motion.article>
  );
}
