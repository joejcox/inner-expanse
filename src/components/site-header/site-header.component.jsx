import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //Connect is a HCO which lets us access things related to redux
import { auth } from "../../firebase/firebase.utils";
import "./site-header.styles.scss";

const SiteHeader = ({ currentUser }) => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Inner Expanse</Link>
        </h1>
        <nav className="site-header--nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          {currentUser ? (
            <Link
              to="/"
              className="button sign-out-button"
              onClick={() => auth.signOut()}>
              Sign Out
            </Link>
          ) : (
            <Link to="/sign-in" className="button sign-up-button">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SiteHeader);
