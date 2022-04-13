import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.acrions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }: { toggleCartHidden: any, itemCount: number }) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
}

const mapStateToProps = (state: { cart: cart; }) => ({
    itemCount: selectCartItemsCount(state)
  });

const mapDispatchToProps = (dispatch: (action: { type: string; }) => any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);