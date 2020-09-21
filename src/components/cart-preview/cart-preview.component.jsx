import React from "react";

import FormButton from "../form-elements/form-button.component";
import "./cart-preview.styles.scss";

const CartPreview = () => {
  return (
    <div className="cart_preview">
      <div className="cart_preview__items"></div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

export default CartPreview;
