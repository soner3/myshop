import * as z from "zod";

// Zod Schema für das shipping Formular
export const shippingSchema = z.object({
  shipping: z.string().min(1, { message: "you must select a shipping class" }),
});

export type TshippingSchema = z.infer<typeof shippingSchema>;
