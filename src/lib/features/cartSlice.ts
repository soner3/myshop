import { Cart, CartItem } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: Cart = {
  cartItemList: [],
};

/**
 * Der Cart Slice speichert den Einkaufswagen und beinhaltet die operationen,
 * um Waren hinzuzufügen zu löschen und zu aktualisieren
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      let itemInCart = false;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          itemInCart = true;
          const newQuantity = newItem.quantity + item.quantity;
          if (newQuantity > newItem.product.stock) {
            item.quantity = newItem.product.stock;
            item.totalPrice = newItem.product.stock * newItem.product.price;
            toast.info("You reached the maximum quantity for this product");
          } else {
            item.quantity += newItem.quantity;
            item.totalPrice += newItem.totalPrice;
          }
        }
      });

      if (itemInCart) {
        localStorage.setItem("cart", JSON.stringify(state.cartItemList));
        return;
      } else {
        state.cartItemList.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cartItemList));
      }
    },
    incraseQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          const newQuantity = item.quantity + 1;
          if (newQuantity > newItem.product.stock) {
            toast.info("You reached the maximum quantity for this product");
          } else {
            item.quantity += 1;
            item.totalPrice = item.quantity * item.product.price;
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItemList));
    },
    decraseQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          if (item.quantity <= 1) {
            const newCart = state.cartItemList.filter((oldCartItem) => {
              return oldCartItem.product.id !== newItem.product.id;
            });
            state.cartItemList = newCart;
          } else {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.product.price;
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItemList));
    },
    deleteCartItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          const newCart = state.cartItemList.filter((oldCartItem) => {
            return oldCartItem.product.id !== newItem.product.id;
          });
          state.cartItemList = newCart;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItemList));
    },
    deleteCart: (state) => {
      localStorage.removeItem("cart");
      state.cartItemList = [];
    },
  },
});

export const {
  addToCart,
  incraseQuantity,
  decraseQuantity,
  deleteCart,
  deleteCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
