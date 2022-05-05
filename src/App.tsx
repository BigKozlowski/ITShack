import React, { MutableRefObject, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import firebase from "firebase/compat";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import NoMatch from "./components/no-match/no-match.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-up/sign-in-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = (props: { currentUser?: any; setCurrentUser?: any }) => {
  const { setCurrentUser } = props;

  let unsubscrubeFromAuth: MutableRefObject<null | firebase.Unsubscribe> = useRef(null);

  useEffect(() => {
    unsubscrubeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
      // addCollectionAndDocuments('collections', props.collectionsArray.map(({title, items}: {title: string, items: item[]}) => ({title, items})));
    });

    return function cleanup() {
      if (unsubscrubeFromAuth.current) {
        unsubscrubeFromAuth.current();
      }
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/signin"
          element={props.currentUser ? <Navigate replace to="/" /> : <SignInPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch: (action: { type: string; payload: user }) => any) => ({
  setCurrentUser: (user: user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
