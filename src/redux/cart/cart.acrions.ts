import CartActions from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_IS_HIDDEN,
});

export const addItemToCart = (item: item) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});
