"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCardBanner from "../ProductCardBanner";
import { motion } from "framer-motion";
import ProductRating from "../ProductRating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="relative flex flex-col"
    >
      <Link
        href={`/products/${product.id}`}
        className="group relative flex h-72 flex-col rounded-lg border-2 from-sky-500 via-violet-600 to-rose-600 shadow-lg hover:border-2 hover:border-rose-600 hover:bg-gradient-to-br dark:border-rose-600"
      >
        <Image
          className="object-contain duration-300 group-hover:scale-105"
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <ProductRating product={product} />
        <ProductCardBanner product={product} />
      </Link>
    </motion.div>
  );
}
