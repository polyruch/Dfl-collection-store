"use client";
import { ProductCard } from "@/components/ProductCard";
import { useEffect } from "react";
import ProductApis from "../_utils/ProductApis";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-full">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const allProducts = [
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
  {
    id: 4,
    name: "Casual Denim Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Bohemian Maxi Skirt",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Chic Blazer",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Comfy Yoga Pants",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Stylish Sunglasses",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
  },
];
