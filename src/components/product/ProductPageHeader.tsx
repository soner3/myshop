import { Product } from "@/interfaces";
import { Rating } from "@mui/material";
import React from "react";

export default function ProductPageHeader({ product }: { product: Product }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-sky-500">{product.title}</h2>

        <div className="flex items-center justify-center gap-2">
          <p className="font-medium">{product.rating}</p>
          {/**Komponente von Material UI */}
          <Rating
            name="read-only"
            value={product.rating}
            precision={0.2}
            readOnly
            className="mb-1"
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "#faaf00",
              },
            }}
          />
        </div>
      </div>
      <p className="text-lg">{product.description}</p>
      <div className="mt-5 flex items-center justify-center gap-3">
        {product.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="rounded-full bg-gradient-to-br from-sky-500 to-violet-600 px-2 py-1 capitalize text-white dark:from-violet-600 dark:to-rose-600"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </>
  );
}
