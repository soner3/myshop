import ShippingInformation from "@/components/checkout/ShippingInformation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping",
};

// Shipping Information Page
export default function page() {
  return (
    <>
      <ShippingInformation />
    </>
  );
}
