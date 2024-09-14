import { Product } from "@/interfaces";
import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function ProductPageBody({ product }: { product: Product }) {
  return (
    <div className="mt-8 flex flex-col">
      <ImageCarousel images={product.images} title={product.title} />
    </div>
  );
}
