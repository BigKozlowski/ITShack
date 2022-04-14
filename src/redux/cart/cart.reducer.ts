import CartActions from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE: { isHidden: boolean; cartItems: cartItem[] } = {
  isHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case CartActions.TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
