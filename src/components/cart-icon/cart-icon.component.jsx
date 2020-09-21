import React from "react";
import { connect } from "react-redux";

import { setCartDisplay } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import CartPreview from "../cart-preview/cart-preview.component";

const CartIcon = ({ setCartDisplay, hidden, numItemsInCart }) => {
  return (
    <div className="cart" onClick={setCartDisplay}>
      <i className="fas fa-shopping-cart"></i>
      <span className="cart__item_count">{numItemsInCart}</span>
      {hidden ? null : <CartPreview />}
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden, numItemsInCart } }) => ({
  hidden,
  numItemsInCart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartDisplay: () => dispatch(setCartDisplay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
