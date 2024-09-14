import { SidebarState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SidebarState = {
  isOpen: false,
  cartSidebarIsOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleCartSidebar: (state, action: PayloadAction<boolean>) => {
      state.cartSidebarIsOpen = action.payload;
    },
  },
});

export const { toggleSidebar, toggleCartSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
