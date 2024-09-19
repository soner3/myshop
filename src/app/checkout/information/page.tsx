import InformationForm from "@/components/checkout/InformationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information",
};

export default function page() {
  return (
    <div className="flex w-full justify-center p-4">
      <InformationForm />
    </div>
  );
}
