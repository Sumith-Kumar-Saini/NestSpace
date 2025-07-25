import { useState } from "react";
import FilterBar from "@/layout/FilterBar";
import ProductGrid from "@/layout/ProductGrid";
import products from "@/data/products";

const categories = ["All", "Physical", "Digital", "Staff Picks"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    if (filter === "All") return true;
    if (filter === "Staff Picks") return product.featured === true;
    return product.category === filter;
  });

  return (
    <main className=" mt-10 min-h-screen px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <FilterBar
          categories={categories}
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        {filteredProducts.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <p className="text-center text-charcoal font-satoshi text-lg">
            No {filter.toLowerCase()} items yet.
          </p>
        )}
      </div>
    </main>
  );
}
