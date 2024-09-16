"use client";

import { Product } from "@/interfaces";
import { motion } from "framer-motion";

export default function ProductCardBanner({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      className="absolute bottom-3 left-3 flex items-center justify-center gap-3 rounded-full border bg-white px-2 py-1 text-center text-sm font-semibold"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {product.title}
      </motion.div>

      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="rounded-full bg-gradient-to-br from-sky-500 to-violet-600 px-4 py-2 text-white"
      >
        {product.price}$
      </motion.div>
    </motion.div>
  );
}
