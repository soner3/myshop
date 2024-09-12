import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col items-center justify-center rounded-lg border-2 shadow-lg hover:border-2 hover:border-rose-600"
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        height={200}
        width={200}
      />
      <div className="p-4 text-center font-semibold">{product.title}</div>
    </Link>
  );
}
