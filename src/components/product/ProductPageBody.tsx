import { Product } from "@/interfaces";
import React from "react";
import ImageCarousel from "./ImageCarousel";
import ProductPagePriceContainer from "./ProductPagePriceContainer";
import ImageZoomCarousel from "./ImageZoomCarousel";

export default function ProductPageBody({ product }: { product: Product }) {
  return (
    <div className="mt-8 flex flex-col">
      <ImageCarousel images={product.images} title={product.title} />
      <ImageZoomCarousel images={product.images} title={product.title} />
      <ProductPagePriceContainer product={product} />
    </div>
  );
}
