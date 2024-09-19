"use client";

import {
  shippingAddressSchema,
  TshippingAddressSchema,
} from "@/lib/schemas/shippingAddressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputComponent from "./InputComponent";
import SubmitButton from "./SubmitButton";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { addInformation } from "@/lib/features/checkoutSlice";
import { useRouter } from "next/navigation";

export default function InformationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TshippingAddressSchema>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: {
      emailOrPhone: "",
      firstName: "",
      lastName: "",
      country: "",
      street: "",
      city: "",
      zipCode: "",
    },
  });
  const cart = useAppSelector((store) => store.cart.cartItemList);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleInformationSubmit(informationData: TshippingAddressSchema) {
    if (cart.length < 1) {
      return;
    }
    dispatch(addInformation(informationData));
    router.push("/checkout/shipping/");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleInformationSubmit)}
      className="relative flex w-full flex-col md:w-3/4"
    >
      <InputComponent
        inputType="text"
        labelValue="Email Or Phonenumber"
        inputPlaceholder="Email Or Phonenumber"
        inputId="emailOrPhoneId"
        register={register}
        registerSchema="emailOrPhone"
        error={errors.emailOrPhone}
        errorMessage={errors.emailOrPhone?.message}
      />
      <InputComponent
        inputType="text"
        labelValue="Country"
        inputPlaceholder="Country"
        inputId="countryId"
        register={register}
        registerSchema="country"
        error={errors.country}
        errorMessage={errors.country?.message}
      />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
          <div>
            <InputComponent
              inputType="text"
              labelValue="First Name"
              inputPlaceholder="First Name"
              inputId="firstNameId"
              register={register}
              registerSchema="firstName"
              error={errors.firstName}
              errorMessage={errors.firstName?.message}
            />
          </div>

          <div>
            <InputComponent
              inputType="text"
              labelValue="Last Name"
              inputPlaceholder="Last Name"
              inputId="lastNameId"
              register={register}
              registerSchema="lastName"
              error={errors.lastName}
              errorMessage={errors.lastName?.message}
            />
          </div>
        </div>

        <div className="col-span-3 md:col-span-1">
          <InputComponent
            inputType="text"
            labelValue="Street"
            inputPlaceholder="Street"
            inputId="streetId"
            register={register}
            registerSchema="street"
            error={errors.street}
            errorMessage={errors.street?.message}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <InputComponent
            inputType="text"
            labelValue="City"
            inputPlaceholder="City"
            inputId="cityId"
            register={register}
            registerSchema="city"
            error={errors.city}
            errorMessage={errors.city?.message}
          />
        </div>

        <div className="col-span-3 md:col-span-1">
          <InputComponent
            inputType="text"
            labelValue="ZIP Code"
            inputPlaceholder="ZIP Code"
            inputId="zipCodeId"
            register={register}
            registerSchema="zipCode"
            error={errors.zipCode}
            errorMessage={errors.zipCode?.message}
          />
        </div>
      </div>
      <SubmitButton>Continue To Shipping</SubmitButton>
    </form>
  );
}
