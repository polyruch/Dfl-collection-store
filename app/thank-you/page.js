"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderDetails = {
    name: searchParams.get("name") || "",
    total: searchParams.get("total") || "0",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8,
        mass: 0.8,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const thankYouText = "Thank You!".split("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16 text-center max-w-2xl"
    >
      <motion.div
        className="bg-pink-50 rounded-lg p-8 shadow-lg"
        variants={containerVariants}
      >
        {/* Animated Thank You text */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div className="flex text-4xl font-bold text-pink-800">
            {thankYouText.map((char, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="inline-block"
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            variants={checkmarkVariants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </div>

        {/* Content animations */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <p className="text-xl text-pink-600 mb-2">
            Dear {orderDetails.name}, your order has been received successfully!
          </p>
          <p className="text-gray-600">
            We will contact you shortly to confirm your order details.
          </p>
          <motion.p
            className="text-pink-600 font-semibold mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 1 }}
          >
            Order Total: {parseInt(orderDetails.total).toLocaleString("en-US")}{" "}
            DA
          </motion.p>
        </motion.div>

        {/* Button animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <Button
            asChild
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg"
            whilehover={{ scale: 1.05 }}
            whiletap={{ scale: 0.95 }}
          >
            <Link href="/">Return to Home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
