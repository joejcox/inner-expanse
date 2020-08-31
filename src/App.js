import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SiteHeader from "./components/site-header/site-header.component";
import Homepage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => {
  return (
    <main className="hats-page">
      <div className="container">
        <h1>Hats Page</h1>
      </div>
    </main>
  );
};

const Product = (props) => {
  return (
    <main className="product">
      <div className="container">
        <h2>{props.match.params.product}</h2>
      </div>
    </main>
  );
};

const App = (props) => {
  return (
    <div className="App">
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/shop/hats/:product" component={Product} />
      </Switch>
    </div>
  );
};

export default App;
