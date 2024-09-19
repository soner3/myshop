import * as z from "zod";

const emailPhoneRegex = /^[A-Za-z0-9@+-_.]+/;
const streetRegex = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/;
const zipCodeRegex = /^[0-9]+$/;

export const shippingAddressSchema = z.object({
  emailOrPhone: z
    .string()
    .regex(emailPhoneRegex, {
      message:
        "this field can only contain letters (upper- and lowercase) numbers @ _ . + and _",
    })
    .min(2, { message: "this field must be atleast 2 characters long" })
    .max(70, { message: "this field cant be longer than 70 characters" }),
  country: z
    .string()
    .trim()
    .min(4, { message: "your country must be atleast 4 characters long" })
    .max(50, { message: "your country cant be longer than 50 characters" }),
  firstName: z
    .string()
    .trim()
    .min(2, { message: "your first name must be atleast 2 characters long" })
    .max(50, { message: "your first name cant be longer than 50 characters" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "your last name must be atleast 2 characters long" })
    .max(50, { message: "your last name cant be longer than 50 characters" }),
  street: z
    .string()
    .regex(streetRegex, {
      message: "this field must contain your street name and number",
    })
    .min(2, { message: "your street must be atleast 2 characters long" })
    .max(100, { message: "your street cant be longer than 100 characters" }),
  city: z
    .string()
    .trim()
    .min(2, { message: "your city must be atleast 2 characters long" })
    .max(50, { message: "your city cant be longer than 50 characters" }),
  zipCode: z
    .string()
    .regex(zipCodeRegex, { message: "your zip code can only contain numbers" })
    .min(2, { message: "your city must be atleast 2 characters long" })
    .max(50, { message: "your city cant be longer than 50 characters" }),
});

export type TshippingAddressSchema = z.infer<typeof shippingAddressSchema>;
