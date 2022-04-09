import CartActions from "./cart.types";

const INITIAL_STATE = {
    isHidden: true
};

const cartReducer = (state = INITIAL_STATE, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case CartActions.TOGGLE_CART_IS_HIDDEN:
            return{
                ...state,
                isHidden: !state.isHidden
            };
        default:
            return state;

    }
};

export default cartReducer;