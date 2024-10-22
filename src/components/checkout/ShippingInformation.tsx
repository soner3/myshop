"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import { useRouter } from "next/navigation";
import ShippingForm from "./ShippingForm";
import { useEffect } from "react";
import CurrentInfo from "./CurrentInfo";

export default function ShippingInformation() {
  const router = useRouter();
  const { information } = useAppSelector((store) => store.checkout);

  useEffect(() => {
    if (!information) {
      router.push("/checkout/information/");
    }
  }, [information, router]);

  return (
    <div className="w-full p-4 md:w-3/4">
      <ul className="my-4 flex flex-col items-center justify-center rounded-xl border p-4 shadow-xl dark:border-rose-600">
        {/**Daten der letzten From anzeigen */}
        <CurrentInfo title="Contact" changeLink="/checkout/information/">
          <p>{information?.emailOrPhone}</p>
        </CurrentInfo>
        <CurrentInfo title="Address" changeLink="/checkout/information/">
          <p>
            {information?.street}, {information?.zipCode} {information?.city}
          </p>
        </CurrentInfo>
      </ul>
      <ShippingForm />
    </div>
  );
}
