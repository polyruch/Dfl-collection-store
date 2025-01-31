import Link from "next/link";
import { Button } from "./ui/button";

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

export default CallToAction;
