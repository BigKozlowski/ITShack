import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, isHidden }: { currentUser: User | null, isHidden: boolean }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="user-menu">
            <p>{currentUser.displayName}</p>
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!isHidden ? <CartDropdown />: null}
    </div>
  );
};

const mapStateToProps = (state: { user: { currentUser: User }, cart: {isHidden: boolean}}) => ({
  currentUser: state.user.currentUser,
  isHidden: state.cart.isHidden
});

export default connect(mapStateToProps)(Header);
