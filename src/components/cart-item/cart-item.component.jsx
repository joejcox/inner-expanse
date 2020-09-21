import React from "react";
// import { connect } from "react-redux";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart_preview__item">
      <div className="cart_preview__item_image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cart_preview__item_info">
        <h4>{name}</h4>
        <span>£{price}</span>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
