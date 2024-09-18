"use client";

import { CartItem } from "@/interfaces";
import { addToCart } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/reduxHooks";
import { useEffect } from "react";

export default function LoadCart() {
  const dispatch = useAppDispatch();

  /**
   * !!!ACHTUNG!!!
   *
   * Der useEffect Hook wird in der Entwicklung, weil React im Strict Mode ist, 2 mal am anfang ausgeführt
   * Dadurch werden daten, die im Warenkorb sind beim Neuladen der Seite verdoppelt.
   * Das trifft nur im Development server auf
   */
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
