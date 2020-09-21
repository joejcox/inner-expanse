import React from "react";
// import { connect } from "react-redux";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  return (
    <div key={item.id} className="cart_preview__item">
      <div className="cart_preview__item_image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="cart_preview__item_info">
        <h4>{item.name}</h4>
        <span>£{item.price}</span>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
