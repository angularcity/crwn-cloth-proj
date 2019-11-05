import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
