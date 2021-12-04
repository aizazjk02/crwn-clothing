// we are using this selectors to avoid re-rendering which is nothing but implementing the caching

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// A selector to access the cart items
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// A selector to access the cart status
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// A selector to access the cart item count
export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce(
    (accumalatedValue, cartItem) => accumalatedValue + cartItem.quantity,
    0
  )
);

// A selector to count the total price of the cart items 
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedValue, cartItem) =>
      accumalatedValue + (cartItem.quantity * cartItem.price),0
  )
);
