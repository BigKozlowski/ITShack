import React from "react";
import { Route, Routes, useParams, useMatch } from "react-router-dom";

import "./App.css";

import NoMatch from "./components/no-match/no-match.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-up/sign-in-up.component";

const CPUPage1 = () => {
  let match = useMatch("/shop/cpu/:id");
  console.log(match);
  let {id} = useParams();
  return (
    <div>
      <h1>CPUS PAGE {id}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/cpu/:id" element={<CPUPage1 />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
