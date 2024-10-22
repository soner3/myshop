import { CheckoutState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TshippingAddressSchema } from "../schemas/shippingAddressSchema";
import { TshippingSchema } from "../schemas/shippingSchema";

const initialState: CheckoutState = {
  information: null,
  shippingClass: null,
};

/**
 * Der Checkout slice speichert die informationen von
 * den checkout Formularen
 */
const checkout = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addInformation: (state, action: PayloadAction<TshippingAddressSchema>) => {
      state.information = action.payload;
    },
    addShippingClass: (state, action: PayloadAction<TshippingSchema>) => {
      state.shippingClass = action.payload;
    },
    resetCheckout: (state) => {
      state.information = null;
      state.shippingClass = null;
    },
  },
});

export const { addInformation, addShippingClass, resetCheckout } =
  checkout.actions;
export default checkout.reducer;
