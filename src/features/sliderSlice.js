import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: true,
};

export const sliderSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    checkMenu: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkMenu } = sliderSlice.actions;

export default sliderSlice.reducer;