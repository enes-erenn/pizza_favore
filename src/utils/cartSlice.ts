import { CartProduct } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    add: (state, action) => {
      // Check if the product already exists in the cart
      const productIndex = state.findIndex(
        (p: CartProduct) =>
          p.title === action.payload.title &&
          JSON.stringify(p.options) === JSON.stringify(action.payload.options)
      );

      if (productIndex !== -1) {
        // If the product already exists, increment its quantity
        state[productIndex].quantity!++;
      } else {
        // If the product doesn't exist, add it to the cart with a quantity of 1
        state.push({
          ...action.payload,
        });
      }
    },
    clean: () => {
      return [];
    },
  },
});

export const { add, clean } = cartSlice.actions;

export default cartSlice.reducer;
