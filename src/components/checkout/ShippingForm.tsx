"use client";

import { useForm } from "react-hook-form";
import { shippingSchema, TshippingSchema } from "@/lib/schemas/shippingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/reduxHooks";
import { addShippingClass } from "@/lib/features/checkoutSlice";

export default function ShippingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TshippingSchema>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      shipping: "standard",
    },
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleShippingSubmit(shippingData: TshippingSchema) {
    dispatch(addShippingClass(shippingData));
    router.push("/checkout/payment/");
  }

  return (
    <form noValidate onSubmit={handleSubmit(handleShippingSubmit)}>
      <p className="text-xl text-sky-500">Shipping</p>

      <label className="flex w-full cursor-pointer items-center justify-between rounded-t-xl border p-6 hover:border-sky-500 dark:border-rose-600">
        <input type="radio" value="standard" {...register("shipping")} />
        <p className="text-xl font-semibold">Standard Shipping</p>
        <p>5 - 8 Days</p>
        <p className="font-bold">5.99$</p>
      </label>

      <label className="flex w-full cursor-pointer items-center justify-between rounded-b-xl border p-6 hover:border-sky-500 dark:border-rose-600">
        <input type="radio" value="express" {...register("shipping")} />
        <p className="text-xl font-semibold">Express Shipping</p>
        <p>3 - 5 Days</p>
        <p className="font-bold">7.99$</p>
      </label>

      {errors.shipping && (
        <p className="text-red-500">{errors.shipping.message}</p>
      )}

      <SubmitButton>Continue To Payment</SubmitButton>
    </form>
  );
}
