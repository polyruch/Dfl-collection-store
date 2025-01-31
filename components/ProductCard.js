import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden w-full ">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 sm:h-64">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl sm:text-xl font-semibold text-pink-800 font-playfair">
          {product.name}
        </CardTitle>
        <CardDescription className="text-pink-600 flex justify-between">
          <span>{product.price.toFixed(2)} DA</span>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-pink-500 hover:bg-pink-600 text-white"
        >
          <Link href={`/products/${product.documentId}`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
