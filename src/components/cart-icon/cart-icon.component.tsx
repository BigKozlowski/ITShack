import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.acrions";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }: { toggleCartHidden: any, itemCount: number }) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });

const mapDispatchToProps = (dispatch: (action: { type: string; }) => any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);