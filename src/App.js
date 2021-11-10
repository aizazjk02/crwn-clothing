import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
function App() {
  return (
    //Needs the Switch wrapper to manage the route
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
