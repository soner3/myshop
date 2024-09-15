"use client";

import { Product } from "@/interfaces";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";

export default function AddToCartContainer({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const quantityArray = Array.from(
    { length: product.stock },
    (_, index) => index + 1,
  );

  function handleQuantityChange(value: string) {
    setQuantity(Number(value));
  }

  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center gap-5 md:mt-0">
      {product.stock > 0 ? (
        <>
          <select
            name="quantitySelectGroup"
            id="quantitySelect"
            className="w-full cursor-pointer rounded-xl border-2 border-sky-500 bg-white p-2 outline-none duration-300 active:border-none active:ring-4"
            onChange={(event) => handleQuantityChange(event.target.value)}
            value={quantity}
          >
            {quantityArray.map((index) => {
              return (
                <option key={index} value={index}>
                  Quantity: {index}
                </option>
              );
            })}
          </select>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 p-2 capitalize text-white duration-200 hover:scale-105 active:scale-95">
            <BsCartPlus className="size-7" />
            <span className="font-semibold">add to cart</span>
          </button>
        </>
      ) : (
        <p className="text-3xl font-semibold text-red-500">Sold Out</p>
      )}
    </div>
  );
}
