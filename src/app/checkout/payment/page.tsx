import PaymentInformation from "@/components/checkout/PaymentInformation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
};

// Payment Information Page
export default function page() {
  return (
    <>
      <PaymentInformation />
    </>
  );
}
