import { Product } from "@/interfaces";
import { Rating } from "@mui/material";
import React from "react";

export default function ProductPageHeader({ product }: { product: Product }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium">{product.rating}</p>
          <Rating
            name="read-only"
            value={product.rating}
            precision={0.2}
            readOnly
            className="mb-1"
          />
        </div>
      </div>
      <p className="text-lg ">{product.description}</p>
    </>
  );
}
