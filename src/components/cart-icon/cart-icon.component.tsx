import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.acrions";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = (props: { toggleCartHidden: any }) => {
    return <div className="cart-icon" onClick={props.toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
}

const mapDispatchToProps = (dispatch: (action: { type: string; }) => any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);