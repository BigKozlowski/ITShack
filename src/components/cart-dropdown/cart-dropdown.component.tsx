import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {useNavigate} from "react-router-dom";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.acrions";

const CartDropdown = ({cartItems, dispatch}: { cartItems: cartItem[]; dispatch: (arg0: { type: string; }) => void; }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(item => <CartItem key={item.id} item={item} />) :
          <span className="empty-message">Cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden());
        navigate("/checkout");
        }}>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
