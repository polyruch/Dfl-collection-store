"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    size: "",
    image: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setProductData({
      name: searchParams.get("name") || "",
      price: parseFloat(searchParams.get("price")) || 0,
      quantity: parseInt(searchParams.get("quantity")) || 0,
      size: searchParams.get("size") || "",
      image: searchParams.get("image") || "",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate name (letters and spaces only)
    if (!/^[A-Za-z\s]{5,}$/.test(formData.name)) {
      newErrors.name =
        "Name should contain only letters and be at least 5 characters long";
    }

    // Validate phone number (numeric, 10 digits)
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    // Validate address (minimum length)
    if (formData.address.trim().length < 10) {
      newErrors.address = "Address should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the order to your backend
      console.log("Order submitted:", { ...formData, product: productData });
      // You could redirect to a success page or show a success message
      alert("Order submitted successfully!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-pink-800 mb-8 text-center">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pink-800">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={productData.image || "/placeholder.svg"}
                    alt={productData.name || "Product Image"}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-pink-800">
                    {productData.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Size: {productData.size}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {productData.quantity}
                  </p>
                </div>
                <div className="text-pink-600 font-semibold">
                  {(productData.price * productData.quantity).toLocaleString(
                    "en-US"
                  )}{" "}
                  DA
                </div>
              </div>
              <div className="border-t border-pink-100 pt-4">
                <div className="flex justify-between font-semibold text-pink-800">
                  <span>Total</span>
                  <span>
                    {(productData.price * productData.quantity).toLocaleString(
                      "en-US"
                    )}{" "}
                    DA
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-pink-800">
              Shipping Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-pink-800 mb-1"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/50 border-pink-200 focus:ring-pink-500"
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-pink-600" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-pink-800 mb-1"
                >
                  Shipping Address
                </label>
                <Textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="1"
                  className="bg-white/50 border-pink-200 focus:ring-pink-500"
                  aria-describedby="address-error"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-pink-600" id="address-error">
                    {errors.address}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-pink-800 mb-1"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="bg-white/50 border-pink-200 focus:ring-pink-500"
                  aria-describedby="phone-error"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-pink-600" id="phone-error">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 mt-4"
              >
                Confirm Transaction
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
