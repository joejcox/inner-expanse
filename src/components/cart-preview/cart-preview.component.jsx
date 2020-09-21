import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import FormButton from "../form-elements/form-button.component";
import "./cart-preview.styles.scss";

const CartPreview = ({ cartItems }) => {
  return (
    <div className="cart_preview">
      <div className="cart_preview__items">
        {cartItems.map((item) => {
          return <CartItem id={item.id} item={item} />;
        })}
      </div>
      <FormButton inverted>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartPreview);
