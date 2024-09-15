import { Product } from "@/interfaces";
import React from "react";
import ImageCarousel from "./ImageCarousel";
import PriceContainer from "./PriceContainer";
import ImageZoomCarousel from "./ImageZoomCarousel";
import Image from "next/image";
import ProductInfoCard from "./ProductInfoCard";

export default function ProductPageBody({ product }: { product: Product }) {
  const imageArray = product.images.map((image, index) => {
    return (
      <Image
        key={index}
        src={image}
        alt={product.title}
        fill
        className="object-contain"
        priority
      />
    );
  });

  return (
    <div className="mt-8 flex flex-col">
      <ImageCarousel images={imageArray} />
      <ImageZoomCarousel images={imageArray} />
      <PriceContainer product={product} />
      <ProductInfoCard product={product} />
    </div>
  );
}
