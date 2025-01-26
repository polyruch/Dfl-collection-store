"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="bg-pink-100 text-pink-800 py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 max-w-full">
        <Link href="/" className="text-2xl font-bold font-lora">
          Dfl-Collection
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="/"
                className="text-lg hover:text-pink-600"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-lg hover:text-pink-600"
                onClick={handleLinkClick}
              >
                All Products
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-pink-600"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-pink-600"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-pink-600">
            All Products
          </Link>
          <Link href="#" className="hover:text-pink-600">
            About
          </Link>
          <Link href="#" className="hover:text-pink-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
