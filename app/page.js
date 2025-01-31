import { Button } from "@/components/ui/button";
import Link from "next/link";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="container mx-auto px-4 py-8 flex-grow max-w-full">
        <FeaturedProducts />
        <CallToAction />
      </div>
    </div>
  );
}
