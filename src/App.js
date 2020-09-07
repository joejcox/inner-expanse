import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInAndUp from "./pages/sign-in-up/sign-in-up.component";

import "./App.scss";

// Components
import SiteHeader from "./components/site-header/site-header.component";

//Pages
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shoppage.component.jsx";

const App = () => {
  return (
    <div className="App">
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndUp} />
      </Switch>
    </div>
  );
};

export default App;
