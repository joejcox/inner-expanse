import React from "react";
import "./site-header.styles.scss";
import { Link, withRouter } from "react-router-dom";

const SiteHeader = ({ signout, user }) => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Inner Expanse</Link>
        </h1>
        <nav className="site-header--nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          {user !== null ? (
            <Link to="/" className="button sign-out-button" onClick={signout}>
              Sign Out
            </Link>
          ) : (
            <Link to="/sign-in" className="button sign-up-button">
              Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default withRouter(SiteHeader);
