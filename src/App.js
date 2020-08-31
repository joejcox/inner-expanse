import React from "react";
import "./App.css";
import SiteHeader from "./components/site-header/site-header.component";
import Homepage from "./pages/homepage/homepage.component.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <Homepage />
      </div>
    );
  }
}
