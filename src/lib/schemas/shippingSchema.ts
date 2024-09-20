import * as z from "zod";

export const shippingSchema = z.object({
  shipping: z.string().min(1, { message: "you must select a shipping class" }),
});

export type TshippingSchema = z.infer<typeof shippingSchema>;
