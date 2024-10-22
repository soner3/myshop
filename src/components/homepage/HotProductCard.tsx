"use client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCardBanner from "../ProductCardBanner";
import { motion } from "framer-motion";
import ProductRating from "../ProductRating";

/**
 * Hier wird das Produkt mit einer animation angezeigt, die
 * bei jedem rendern auftritt.
 * Das Image-tag ist von Next.js und führt Bildoptimierungen durch.
 * Dazu gehört, dass die Qualität verbessert wird, es schnell gerendert wird und
 * die Ladezeit der Seite nicht stark beeinflusst.
 * Weil die Bilder für den Content der Hauptseite von hohem Wert sind
 * haben sie das priority Attribut erhalten, sodass das Bild preloaded und gecached wird.
 */

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.li
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
        {/** Produkt Titel und Preis */}
        <ProductCardBanner product={product} />
      </Link>
    </motion.li>
  );
}
