import { Cart, CartItem } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart = {
  cartItemList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      let itemInCart = false;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          item.quantity += newItem.quantity;
          item.totalPrice += newItem.totalPrice;
          itemInCart = true;
        }
      });

      if (itemInCart) {
        return;
      } else {
        state.cartItemList.push(newItem);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
