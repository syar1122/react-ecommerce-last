import { createSlice } from "@reduxjs/toolkit";
let storageCart = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  cartItems: storageCart,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      let newCartItems = state.cartItems.filter((product) => {
        return product._id !== action.payload;
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    incrementQuantity: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (product) => product._id === action.payload
      );
      state.cartItems[itemIndex].count++;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (product) => product._id === action.payload
      );
      state.cartItems[itemIndex].count--;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
