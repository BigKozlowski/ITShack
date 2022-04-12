import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import firebase from "firebase/compat";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";

import "./App.css";

import NoMatch from "./components/no-match/no-match.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-up/sign-in-up.component";
import { setCurrentUser } from "./redux/user/user.actions";

const CPUPage1 = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>CPUS PAGE {id}</h1>
    </div>
  );
};

const App = (props: { currentUser?: any; setCurrentUser?: any; }) => {
  const {setCurrentUser} = props;

  let unsubscrubeFromAuth: MutableRefObject<null | firebase.Unsubscribe> = useRef(null);

  useEffect(() => {
    unsubscrubeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef){
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        }
      } else {
        setCurrentUser(userAuth);
      }
    });

    return function cleanup() {
      if (unsubscrubeFromAuth.current) {
        unsubscrubeFromAuth.current();
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/cpu/:id" element={<CPUPage1 />} />
        <Route path="/signin" element={props.currentUser ? <Navigate replace to="/" /> : <SignInPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({user}: {user: userState}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch: (action: { type: string; payload: user; }) => any) => ({
  setCurrentUser: (user: user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
