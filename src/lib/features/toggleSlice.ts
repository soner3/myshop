import { ToggleState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ToggleState = {
  isSidebarOpen: false,
  isCartSidebarOpen: false,
  isImageFocus: false,
};

const toggleSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    toggleCartSidebar: (state, action: PayloadAction<boolean>) => {
      state.isCartSidebarOpen = action.payload;
    },
    toggleImageFocus: (state, action: PayloadAction<boolean>) => {
      state.isImageFocus = action.payload;
    },
  },
});

export const { toggleSidebar, toggleCartSidebar, toggleImageFocus } =
  toggleSlice.actions;
export default toggleSlice.reducer;
