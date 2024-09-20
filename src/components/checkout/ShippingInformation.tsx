"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShippingForm from "./ShippingForm";
import { useEffect } from "react";

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
      <div className="my-4 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between rounded-t-xl border p-6 hover:border-sky-500 dark:border-rose-600">
          <p className="text-xl text-sky-500">Contact</p>
          <p>{information?.emailOrPhone}</p>
          <Link
            href={"/checkout/information/"}
            className="text-sky-500 underline dark:text-rose-600"
          >
            Change
          </Link>
        </div>
        <div className="flex w-full items-center justify-between rounded-b-xl border p-6 hover:border-sky-500 dark:border-rose-600">
          <p className="text-xl text-sky-500">Address</p>
          <p>
            {information?.street}, {information?.zipCode} {information?.city}
          </p>
          <Link
            href={"/checkout/information/"}
            className="text-sky-500 underline dark:text-rose-600"
          >
            Change
          </Link>
        </div>
      </div>
      <ShippingForm />
    </div>
  );
}
