import { motion } from "framer-motion";

interface FilterBarProps {
  categories: string[];
  currentFilter: string;
  onFilterChange: (newCategory: string) => void;
}

export default function FilterBar({
  categories,
  currentFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onFilterChange(cat)}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            currentFilter === cat
              ? "bg-[var(--color-sandBrown)] text-white border-transparent"
              : "bg-transparent border-[var(--color-softGray)] text-[var(--color-charcoal)] hover:bg-[var(--color-glowPeach)]"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
