import ShippingInformation from "@/components/checkout/ShippingInformation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping",
};

export default function page() {
  return (
    <>
      <ShippingInformation />
    </>
  );
}
