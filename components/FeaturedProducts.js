"use client";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/app/_utils/ProductApis";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.data) {
          setProducts(
            response.data
              .map((product) => ({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.banner.url,
                documentId: product.documentId,
              }))
              .slice(-2)
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  if (isLoading) {
    return (
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-6">
          Featured Products
        </h2>
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            url={product.documentId}
          />
        ))}
      </div>
    </section>
  );
}
