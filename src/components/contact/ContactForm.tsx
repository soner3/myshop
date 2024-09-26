"use client";

import { contactSchema, TcontactSchema } from "@/lib/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputComponent from "../checkout/InputComponent";
import SubmitButton from "../SubmitButton";
import { sendMessage } from "@/data/contactData";
import { toast } from "react-toastify";

export default function ContactForm() {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<TcontactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    },
  });

  async function handleContactSubmit(data: TcontactSchema) {
    const isSuccessfull = await sendMessage(data);

    if (isSuccessfull) {
      toast.success("Message sended");
    } else {
      toast.error("An error occurred while sending the message");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleContactSubmit)}
      className="m-4 grid w-full grid-cols-1 p-2 md:grid-cols-2"
    >
      <div className="md:col-span-2">
        <InputComponent
          labelValue="Email"
          inputId="contactEmail"
          inputPlaceholder="Email"
          inputType="email"
          register={register}
          registerSchema="email"
          error={errors.email}
          errorMessage={errors.email?.message}
        />
      </div>
      <InputComponent
        labelValue="First Name"
        inputId="contactFirstName"
        inputPlaceholder="First Name"
        inputType="text"
        register={register}
        registerSchema="firstName"
        error={errors.firstName}
        errorMessage={errors.firstName?.message}
      />
      <InputComponent
        labelValue="Last Name"
        inputId="contactLastName"
        inputPlaceholder="Last Name"
        inputType="text"
        register={register}
        registerSchema="lastName"
        error={errors.lastName}
        errorMessage={errors.lastName?.message}
      />
      <div className="flex h-full w-full flex-col p-2 md:col-span-2">
        <label
          htmlFor="contactMessage"
          className={`my-2 font-semibold duration-200 ${errors.message && "text-red-500"}`}
        >
          Message *
        </label>
        <textarea
          required
          id="contactMessage"
          {...register("message")}
          placeholder="Message"
          className={`rounded-xl border-2 border-sky-500 p-4 text-black ring-sky-500 duration-200 focus:outline-none focus:ring-2 dark:border-rose-600 dark:ring-rose-600 ${errors.message && "text-red-500"}`}
        />
        {errors.message && (
          <p className="ml-1 capitalize text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <SubmitButton isLoading={isSubmitting}>Submit</SubmitButton>
      </div>
    </form>
  );
}
