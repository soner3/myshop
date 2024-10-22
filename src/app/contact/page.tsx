import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to us for any questions, suggestions, or support. Our team is ready to assist you quickly and effectively. We look forward to hearing from you!",
};

// Contact Page
export default function page() {
  return (
    <section>
      <h2 className="mt-6 text-center text-2xl font-semibold text-sky-500">
        Contact
      </h2>
      <div className="flex w-full justify-center p-4">
        <ContactForm />
      </div>
    </section>
  );
}
