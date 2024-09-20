import PaymentInformation from "@/components/checkout/PaymentInformation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
};

export default function page() {
  return (
    <>
      <PaymentInformation />
    </>
  );
}
