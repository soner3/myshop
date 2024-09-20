"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronRight } from "react-icons/bs";

export default function CheckoutBreadcrumb() {
  const path = usePathname();
  const { information, shippingClass } = useAppSelector(
    (store) => store.checkout,
  );

  return (
    <div className="m-4 mt-8 flex items-center gap-2 text-lg">
      <Link
        href={"/checkout/information/"}
        className={`${path.includes("information") && "-z-10 font-semibold"} ${path.includes("information") || path.includes("shipping") || path.includes("payment") ? "text-sky-500" : ""}`}
      >
        Information
      </Link>
      <BsChevronRight />
      <Link
        href={"/checkout/shipping/"}
        className={`${path.includes("shipping") && "-z-10 font-semibold"} ${!information && "-z-10"} ${path.includes("shipping") || path.includes("payment") ? "text-sky-500" : ""}`}
      >
        Shipping
      </Link>
      <BsChevronRight />
      <Link
        href={"/checkout/payment/"}
        className={`${path.includes("payment") && "font-semibold text-sky-500"} ${!information || !shippingClass ? "-z-10" : ""}`}
      >
        Payment
      </Link>
    </div>
  );
}
