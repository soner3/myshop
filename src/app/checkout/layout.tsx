import CheckoutBreadcrumb from "@/components/checkout/CheckoutBreadcrumb";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Checkout",
    default: "Checkout",
  },
  description:
    "Complete your purchase securely with our easy checkout process. Review your items and finalize your order quickly.",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center">
      <CheckoutBreadcrumb />
      {children}
    </section>
  );
}
