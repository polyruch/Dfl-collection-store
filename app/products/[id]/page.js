"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from an API or database
const product = {
  id: 1,
  name: "Floral Summer Dress",
  price: 59.99,
  description:
    "A beautiful floral summer dress perfect for sunny days and special occasions. Made with lightweight, breathable fabric for maximum comfort.",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
};

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="flex justify-center mt-4 space-x-2">
            {product.images.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-pink-500" : "bg-pink-200"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pink-800 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-pink-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-pink-800 mb-2">
                Select Size
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={`${
                      selectedSize === size
                        ? "bg-pink-500 text-white"
                        : "text-pink-800"
                    } hover:bg-pink-400 hover:text-white`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-6"
            disabled={!selectedSize}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
