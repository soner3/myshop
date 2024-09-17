import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import cartReducer from "./features/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
