import {createSelector} from "reselect";

const selectCart = (state: { cart: cart; }) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((sum: number, item: cartItem) => sum + item.quantity, 0)
);