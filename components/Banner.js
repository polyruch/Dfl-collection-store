"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getBanner } from "@/app/_utils/ProductApis";

const Banner = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanner();
        if (data.data?.Image?.url) {
          setImageUrl(data.data.Image.url);
        } else {
          console.error("Banner image URL not found in response");
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="relative h-[50vh] min-h-[300px] sm:min-h-[400px] w-full overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-pink-50">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      ) : imageUrl ? (
        <Image
          src={imageUrl}
          alt="Girly Chic Boutique Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      ) : null}
      <div className="absolute inset-0 bg-pink-500 bg-opacity-30 flex items-center justify-center">
        <div className="text-center px-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 shadow-text">
            Girly Chic Boutique
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 shadow-text">
            Discover Your Perfect Style
          </p>
          <Button
            asChild
            className="bg-white text-pink-600 hover:bg-pink-100 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
          >
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
