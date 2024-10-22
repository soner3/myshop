"use client";

import { CartItem } from "@/interfaces";
import { addToCart } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import { useEffect } from "react";

/**
 * Die im localstorage gespeicherten Waren werden in den Warenkorb gelegt
 *
 * !!! ACHTUNG !!!
 *
 * Der useEffect Hook wird in der Entwicklung, weil React im Strict Mode ist, 2 mal am anfang ausgeführt
 * Dadurch werden daten, die im Warenkorb sind beim Neuladen der Seite verdoppelt.
 * Das trifft NUR im Development Server auf
 *
 */
export default function LoadCart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");

    if (cartStorage) {
      const cartItems: CartItem[] = JSON.parse(cartStorage);

      cartItems.forEach((item) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);

  return null;
}
