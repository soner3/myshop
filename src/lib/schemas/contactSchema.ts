import * as z from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, { message: "please enter a valid emial address" }),
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
  message: z
    .string()
    .trim()
    .min(2, { message: "your message must be atleast 2 characters long" }),
});

export type TcontactSchema = z.infer<typeof contactSchema>;
