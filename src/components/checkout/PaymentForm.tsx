"use client";

import { FormEvent } from "react";
import NoPaymentBanner from "./NoPaymentBanner";
import SubmitButton from "./SubmitButton";
import { useAppDispatch } from "@/lib/reduxHooks";
import { resetCheckout } from "@/lib/features/checkoutSlice";
import { deleteCart } from "@/lib/features/cartSlice";
import { toast } from "react-toastify";

export default function PaymentForm() {
  const dispatch = useAppDispatch();

  function handlePayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(resetCheckout());
    dispatch(deleteCart());
    toast.success(
      "Payment Successfull! You will be redirected to the Product Page",
    );
  }

  return (
    <form noValidate onSubmit={handlePayment} className="my-8">
      <div className="h-full w-full">
        <p className="text-2xl font-semibold text-sky-500">Payment</p>
        <p>All transactions are secure and encrypted</p>
        <NoPaymentBanner />
      </div>
      <SubmitButton>Pay Now</SubmitButton>
    </form>
  );
}
