"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import { useRouter } from "next/navigation";
import CurrentInfo from "./CurrentInfo";
import { useEffect } from "react";
import PaymentForm from "./PaymentForm";

export default function PaymentInformation() {
  const router = useRouter();
  const { information, shippingClass } = useAppSelector(
    (store) => store.checkout,
  );
  const { cartItemList } = useAppSelector((store) => store.cart);

  const totalCartPrice = cartItemList.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);
  const shippingPrice = shippingClass?.shipping === "express" ? 7.99 : 5.99;

  const totalPrice = (shippingPrice + totalCartPrice).toFixed(2);

  useEffect(() => {
    if (!information) {
      router.push("/checkout/information/");
    }
    if (!shippingClass) {
      router.push("/checkout/shipping/");
    }
  }, [information, router, shippingClass]);

  return (
    <div className="w-full p-4 md:w-3/4">
      <ul className="my-4 flex flex-col items-center justify-center rounded-xl border p-4 shadow-xl dark:border-rose-600">
        <CurrentInfo title="Contact" changeLink="/checkout/information/">
          <p>{information?.emailOrPhone}</p>
        </CurrentInfo>
        <CurrentInfo title="Address" changeLink="/checkout/information/">
          <p>
            {information?.street}, {information?.zipCode} {information?.city}
          </p>
        </CurrentInfo>
        <CurrentInfo title="Shipping" changeLink="/checkout/shipping/">
          <p className="capitalize">{shippingClass?.shipping}</p>
        </CurrentInfo>
      </ul>
      <div className="my-4 flex flex-col items-center justify-center rounded-xl border p-4 shadow-xl dark:border-rose-600">
        <div className="flex w-full items-center justify-between text-lg">
          <p>Total Cart Price</p>
          <p>{totalCartPrice}$</p>
        </div>
        <div className="flex w-full items-center justify-between text-lg">
          <p>Shipping Price</p>
          <p>{shippingPrice}$</p>
        </div>
        <div className="flex w-full items-center justify-between text-xl text-sky-500">
          <p className="font-semibold">Total Price</p>
          <p className="font-bold">{totalPrice}$</p>
        </div>
      </div>
      <PaymentForm />
    </div>
  );
}
