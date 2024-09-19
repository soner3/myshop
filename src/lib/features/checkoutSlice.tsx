import { CheckoutState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TshippingAddressSchema } from "../schemas/shippingAddressSchema";

const initialState: CheckoutState = {
  information: {
    emailOrPhone: "",
    country: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
  },
};

const checkout = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    addInformation: (state, action: PayloadAction<TshippingAddressSchema>) => {
      state.information = action.payload;
    },
  },
});

export const { addInformation } = checkout.actions;
export default checkout.reducer;
