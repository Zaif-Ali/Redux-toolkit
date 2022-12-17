import { createSlice } from "@reduxjs/toolkit";

// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// create a slice
export const cartslice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    change: (state, action) => {
      state.value = 2;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});
export const CartReducers = cartslice.reducer;
// export the action
export const cartAction = cartslice.actions;
