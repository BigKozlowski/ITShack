import { createSelector } from "reselect";

const selectCart = (state: { cart: cart }) => state.cart;

export const selectCartIsHidden = createSelector([selectCart], (cart) => cart.isHidden);

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCart], (cart) => cart.cartItems.reduce((sum: number, item) => sum + item.quantity, 0));

export const selectCartTotal = createSelector([selectCart], (cart) => cart.cartItems.reduce((sum: number, item) => sum + item.totalAmount, 0));
