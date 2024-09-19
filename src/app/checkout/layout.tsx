import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s / Checkout",
    default: "Checkout",
  },
  description:
    "Complete your purchase securely and quickly with our streamlined checkout process. Review your items, enter payment details, and finalize your order.",
};

export default function layout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
