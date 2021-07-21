import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = cart;

export const { addToCart } = actions;
export default reducer;
