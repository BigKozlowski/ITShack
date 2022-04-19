import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import { selectCartIsHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  HeaderFixer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  SignOutOption,
  UserMenuContainer,
} from "./header.styles";

const Header = ({ currentUser, isHidden }: { currentUser: user | null; isHidden: boolean }) => {
  return (
    <HeaderFixer>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
          {currentUser ? (
            <UserMenuContainer>
              <p style={{ margin: "0" }}>{currentUser.displayName}</p>
              <SignOutOption as="div" onClick={() => auth.signOut()}>
                SIGN OUT
              </SignOutOption>
            </UserMenuContainer>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {!isHidden ? <CartDropdown /> : null}
      </HeaderContainer>
    </HeaderFixer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);
