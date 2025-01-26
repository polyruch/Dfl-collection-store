import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

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

function Banner() {
  return (
    <div className="relative h-[50vh] min-h-[300px] sm:min-h-[400px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=800&width=1600"
        alt="Girly Chic Boutique Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
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
}

function FeaturedProducts() {
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

function CallToAction() {
  return (
    <section className="text-center bg-pink-100 py-6 sm:py-8 md:py-12 rounded-lg px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-4">
        Discover Our Collection
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-pink-600 mb-6">
        Explore our wide range of stylish and comfortable women's clothing.
      </p>
      <Button
        asChild
        className="bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3"
      >
        <Link href="/products">View All Products</Link>
      </Button>
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
