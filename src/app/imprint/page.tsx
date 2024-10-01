import Imprint from "@/components/imprint/Imprint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Learn more about the legal information and responsibilities of our website in the imprint section.",
};

export default function page() {
  return (
    <section className="p-8">
      <Imprint />
    </section>
  );
}
