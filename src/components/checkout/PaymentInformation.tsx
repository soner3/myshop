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
      <PaymentForm />
    </div>
  );
}
