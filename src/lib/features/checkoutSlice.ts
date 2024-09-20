import { CheckoutState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TshippingAddressSchema } from "../schemas/shippingAddressSchema";
import { TshippingSchema } from "../schemas/shippingSchema";

const initialState: CheckoutState = {
  information: null,
  shipping: null,
};

const checkout = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addInformation: (state, action: PayloadAction<TshippingAddressSchema>) => {
      state.information = action.payload;
    },
    addShippingClass: (state, action: PayloadAction<TshippingSchema>) => {
      state.shipping = action.payload;
    },
  },
});

export const { addInformation, addShippingClass } = checkout.actions;
export default checkout.reducer;
