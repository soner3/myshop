import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative flex h-72 flex-col rounded-lg border-2 from-sky-500 via-violet-600 to-rose-600 shadow-lg transition-all duration-500 hover:border-2 hover:border-rose-600 hover:bg-gradient-to-br"
    >
      <Image
        className="object-contain duration-300 group-hover:scale-110"
        src={product.images[0]}
        alt={product.title}
        fill
      />
      <div className="p-4 text-left font-semibold group-hover:text-white">
        {product.title}
      </div>
    </Link>
  );
}
