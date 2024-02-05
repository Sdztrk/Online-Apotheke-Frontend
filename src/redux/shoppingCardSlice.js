import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";


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
      toast.success("zur Karte hinzugefügt");

    },
    reduceShoppingCardItem(state, action) {
      const updatedCartItems = state.cartItems
        .map(item => {
          if (item._id === action.payload._id) {
            const updatedItem = { ...item, cartQuantity: item.cartQuantity - 1 };
            return updatedItem;
          }
          return item;
        })
        .filter(item => item.cartQuantity > 0); // Remove items with cartQuantity 0
    
      state.cartItems = updatedCartItems;
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      toast.success("von der Karte entfernt");

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
      toast.success("alle Produkte entfernt");

    },
    removeShoppingCardItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Produkt entfernt");

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
