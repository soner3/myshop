import { Product } from "@/interfaces";
import React from "react";
import ImageCarousel from "./ImageCarousel";
import PriceContainer from "./PriceContainer";
import Image from "next/image";
import ProductInfoCard from "./ProductInfoCard";
import ImageZoom from "./ImageZoom";

export default function ProductPageBody({ product }: { product: Product }) {
  /**
   * Weil mehrere Bilder auf der Seite sind und die Seite von den Bildern Abhängig ist,
   * werden die images in einem Array gespeichert welchen das allererste Bild priorisiert, sodass dieses
   * schnell geladen wird.
   */
  const imageArray = product.images.map((image, index) => {
    return (
      <Image
        key={index}
        src={image}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        loading={index === 0 ? "eager" : "lazy"}
        priority={index === 0}
      />
    );
  });

  return (
    <div className="mt-8 flex flex-col">
      <ImageCarousel images={imageArray} />
      <ImageZoom images={imageArray} />
      <PriceContainer product={product} />
      <ProductInfoCard product={product} />
    </div>
  );
}
