import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import checkoutReducer from "./features/checkoutSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
      cart: cartReducer,
      search: searchReducer,
      checkout: checkoutReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
