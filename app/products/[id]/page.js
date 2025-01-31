"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProduct } from "@/app/_utils/ProductApis";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductPage(props) {
  const params = use(props.params);
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(params.id);
        setProduct({
          id: response?.id || "",
          name: response?.title || "Untitled Product",
          price: response?.price || 0,
          description:
            response?.description?.[0]?.children?.[0]?.text ||
            "No description available",
          images: [
            response?.banner?.url,
            ...(response?.images?.map((img) => img?.url) || []),
          ].filter(Boolean),
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params?.id) fetchProduct();
  }, [params?.id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (product?.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (product?.images?.length || 1) - 1 : prev - 1
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center text-red-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                  align: "start",
                }}
                setApi={(api) => {
                  api?.on("select", () => {
                    setCurrentImageIndex(api.selectedScrollSnap());
                  });
                }}
              >
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} - Image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {product.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                    <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                  </>
                )}
              </Carousel>
            </CardContent>
          </Card>

          {product.images.length > 1 && (
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
          )}
        </div>

        {/* Product details section remains unchanged */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pink-800 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-pink-600 mb-4">
              {product.price?.toLocaleString("en-US")} DA
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-pink-800 mb-2">
                Select Size
              </h2>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
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
