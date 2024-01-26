import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const shoppingCardSlice = createSlice({
  name: 'shoppingCard',
  initialState,
  reducers: {
    addToShoppingCard(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProducts = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProducts);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    reduceShoppingCardItem(state, action) {
      const currentCart = state.cartItems.find((item) => item.id === action.payload.id);
      currentCart.cartQuantity -= 1;
      let cartWithoutCurrent = state.cartItems.filter((item) => item.id !== action.payload.id);
      if (currentCart.cartQuantity === 0) {
        state.cartItems = [...cartWithoutCurrent];
      } else {
        state.cartItems = [...cartWithoutCurrent, currentCart];
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    calculateShoppingCardTotals(state, action) {
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

    clearShoppingCard(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeShoppingCardItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToShoppingCard,
  calculateShoppingCardTotals,
  clearShoppingCard,
  removeShoppingCardItem,
  reduceShoppingCardItem,
} = shoppingCardSlice.actions;

export default shoppingCardSlice.reducer;
