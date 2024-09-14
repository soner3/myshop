"use client";

import { Product } from "@/interfaces";
import { BsStarFill } from "react-icons/bs";

export default function HotProductRating({ product }: { product: Product }) {
  return (
    <div className="absolute right-0 top-5 flex items-center justify-center gap-2 border-2 border-yellow-300 bg-red-600 p-4 font-bold text-yellow-300">
      {product.rating}
      <BsStarFill />
    </div>
  );
}
