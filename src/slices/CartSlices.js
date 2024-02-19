import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  shippingAddress: [],
  count: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state, action) => {
      const { item, quantity } = action.payload;
    
    // Check if item is already in the cart:
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
    
      // Update quantity or add new item:
      const newCartItems = existingItem
        ? state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [...state.cartItems, { ...item, quantity }];
    
      // Return new state:
      return { ...state, cartItems: newCartItems };
    },
    reduceCart : (state, action) => {
      const { item, quantity } = action.payload;
    
    // Check if item is already in the cart:
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
    
      // Update quantity or add new item:
      const newCartItems = existingItem
        ? state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - quantity }
              : cartItem
          )
        : [...state.cartItems, { ...item, quantity }];
    
      // Return new state:
      return { ...state, cartItems: newCartItems };
    },
    
    

    editCart: (state, action) => {
      const { id, updatedItem } = action.payload;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === id ? updatedItem : cartItem
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
      state.count -= 1; 
    },
    increaseCart: (state) => {
      state.count += 1;
    },
    decreaseCart: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },

    resetCartCount: (state) => {
      state.count = 0;
    },
    // If you intend to use price manipulation, handle it here
    increasePrice: (state, action) => {
      state.price = action.payload;
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart"); // Remove item from local storage
      state.count = 0; // Reset count when clearing cart items
    },
  },
});

export const {
  addToCart,
  editCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
  increasePrice,
  clearCartItems,
  resetCartCount,reduceCart
} = cartSlice.actions;

export default cartSlice.reducer;
