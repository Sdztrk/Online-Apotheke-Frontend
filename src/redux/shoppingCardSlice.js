import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: sessionStorage.getItem("cartItems") ? JSON.parse(sessionStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToShoppingCard(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProducts = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProducts);
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    reduceShoppingCardItem(state, action) {
      const currentCart = state.cartItems.find(item => item._id === action.payload._id);
      currentCart.cartQuantity -= 1;
      let cartWithoutCurrent = state.cartItems.filter(item => item._id !== action.payload._id);
      if (currentCart.cartQuantity === 0) {
        state.cartItems = [...cartWithoutCurrent];
      } else {
        state.cartItems = [...cartWithoutCurrent, currentCart];
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    calculateShoppingCardTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearShoppingCard(state) {
      state.cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeShoppingCardItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToShoppingCard,
  calculateShoppingCardTotals,
  clearShoppingCard,
  removeShoppingCardItem,
  reduceShoppingCardItem,
} = cartSlice.actions;

export default cartSlice.reducer;
