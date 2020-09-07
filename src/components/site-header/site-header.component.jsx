import React from "react";
import "./site-header.styles.scss";
import { Link, withRouter } from "react-router-dom";

const SiteHeader = ({ history }) => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Inner Expanse</Link>
        </h1>
        <nav className="site-header--nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign In</Link>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(SiteHeader);
