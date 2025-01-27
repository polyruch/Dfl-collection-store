'use client'
import { ProductCard } from "./ProductCard";

export default function FeaturedProducts() {
    




  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const featuredProducts = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Cozy Knit Sweater",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Elegant Evening Gown",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=300&fit=crop",
  },
];
