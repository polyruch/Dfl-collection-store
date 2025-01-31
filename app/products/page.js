"use client";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/app/_utils/ProductApis";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
              .reverse()
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-full">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">
          Available Products
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-full">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">
          Available Products
        </h1>
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-full">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">
        Available Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
