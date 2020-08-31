import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// Components
import SiteHeader from "./components/site-header/site-header.component";

//Pages
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shoppage.component.jsx";

const App = (props) => {
  return (
    <div className="App">
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
